import { NextResponse } from 'next/server'
import Razorpay from 'razorpay'

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
})

export async function POST(request: Request) {
    try {
        const { amount, planId } = await request.json()

        const options = {
            amount: amount * 100, // amount in the smallest currency unit
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
            notes: {
                planId: planId
            }
        }

        const order = await razorpay.orders.create(options)
        return NextResponse.json(order)
    } catch (error) {
        console.error('Razorpay Order Error:', error)
        return NextResponse.json({ error: 'Failed to create order' }, { status: 500 })
    }
}
