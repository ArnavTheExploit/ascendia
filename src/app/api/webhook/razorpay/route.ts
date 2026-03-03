import { NextResponse } from 'next/server'
import crypto from 'crypto'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: Request) {
    try {
        const body = await request.text()
        const signature = request.headers.get('x-razorpay-signature')
        const secret = process.env.RAZORPAY_WEBHOOK_SECRET!

        const expectedSignature = crypto
            .createHmac('sha256', secret)
            .update(body)
            .digest('hex')

        if (expectedSignature !== signature) {
            return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
        }

        const event = JSON.parse(body)

        if (event.event === 'payment.captured') {
            const payment = event.payload.payment.entity
            const email = payment.email
            const planId = payment.notes.planId

            // Update user subscription in Supabase
            const supabase = await createClient()

            let expiryDate = new Date()
            if (planId === 'monthly') expiryDate.setMonth(expiryDate.getMonth() + 1)
            else if (planId === 'quarterly') expiryDate.setMonth(expiryDate.getMonth() + 3)
            else if (planId === 'yearly') expiryDate.setFullYear(expiryDate.getFullYear() + 1)

            const { error } = await supabase
                .from('users')
                .update({
                    subscription_status: 'active',
                    subscription_expiry: expiryDate.toISOString()
                })
                .eq('email', email)

            if (error) throw error
        }

        return NextResponse.json({ status: 'ok' })
    } catch (error) {
        console.error('Webhook Error:', error)
        return NextResponse.json({ error: 'Webhook failed' }, { status: 500 })
    }
}
