'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, CreditCard, ShieldCheck, Zap, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const plans = [
    {
        id: 'monthly',
        name: 'Monthly Pro',
        price: 1499,
        savings: null,
        features: ['All Mock Tests', 'PDF Downloads', 'Email Support']
    },
    {
        id: 'quarterly',
        name: 'Quarterly Elite',
        price: 3999,
        savings: '11% OFF',
        popular: true,
        features: ['Universal Access', 'Video Lectures', 'Priority Support']
    },
    {
        id: 'yearly',
        name: 'Annual Legend',
        price: 12499,
        savings: '30% OFF',
        features: ['Personal Mentor', 'Interview Prep', 'Physical Books']
    }
]

export default function SubscriptionPage() {
    const [loading, setLoading] = useState<string | null>(null)

    const handlePayment = async (plan: typeof plans[0]) => {
        setLoading(plan.id)
        try {
            const resp = await fetch('/api/razorpay/order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: plan.price, planId: plan.id })
            })
            const order = await resp.json()

            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: order.amount,
                currency: "INR",
                name: "Ascendia EdTech",
                description: `Subscription for ${plan.name}`,
                order_id: order.id,
                handler: function (response: any) {
                    alert("Payment Successful! Signature: " + response.razorpay_signature)
                    // In real app, we'd verify the signature here or wait for webhook
                    window.location.reload()
                },
                prefill: {
                    name: "Aarav Sharma",
                    email: "aarav@example.com",
                },
                theme: {
                    color: "#2563eb",
                },
            }

            const rzp = new (window as any).Razorpay(options)
            rzp.open()
        } catch (error) {
            console.error("Payment Init Error:", error)
        } finally {
            setLoading(null)
        }
    }

    return (
        <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">Choose Your Path to Success</h1>
                <p className="text-foreground/60">Unlock the full power of Ascendia and accelerate your preparation journey with our premium plans.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan) => (
                    <motion.div
                        key={plan.id}
                        whileHover={{ y: -8 }}
                        className={cn(
                            "glass p-8 rounded-3xl border flex flex-col relative overflow-hidden",
                            plan.popular ? "border-primary shadow-2xl shadow-primary/10" : "border-white/5"
                        )}
                    >
                        {plan.popular && (
                            <div className="absolute top-0 right-0 px-4 py-1 bg-primary text-white text-[10px] font-bold rounded-bl-xl uppercase tracking-widest">
                                Most Popular
                            </div>
                        )}

                        <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-4xl font-bold">₹{plan.price}</span>
                            <span className="text-foreground/40 text-sm">/period</span>
                            {plan.savings && (
                                <span className="ml-2 text-xs font-bold text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full">{plan.savings}</span>
                            )}
                        </div>

                        <div className="space-y-4 mb-10 flex-grow">
                            {plan.features.map((feat, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                                    <Check className="w-4 h-4 text-primary" /> {feat}
                                </div>
                            ))}
                        </div>

                        <Button
                            onClick={() => handlePayment(plan)}
                            disabled={loading !== null}
                            variant={plan.popular ? 'default' : 'outline'}
                            className="w-full h-12"
                        >
                            {loading === plan.id ? <Loader2 className="w-5 h-5 animate-spin" /> : "Subscribe Now"}
                        </Button>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-white/5">
                <div className="flex items-center gap-4 p-6 glass rounded-2xl border border-white/5">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                    <div>
                        <p className="font-bold">Secure Payment</p>
                        <p className="text-xs text-foreground/40">100% encrypted & secure.</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-6 glass rounded-2xl border border-white/5">
                    <Zap className="w-8 h-8 text-accent" />
                    <div>
                        <p className="font-bold">Instant Activation</p>
                        <p className="text-xs text-foreground/40">Unlock features immediately.</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-6 glass rounded-2xl border border-white/5">
                    <CreditCard className="w-8 h-8 text-primary" />
                    <div>
                        <p className="font-bold">Flexible Plans</p>
                        <p className="text-xs text-foreground/40">Cancel or upgrade anytime.</p>
                    </div>
                </div>
            </div>

            {/* Razorpay Script */}
            <script src="https://checkout.razorpay.com/v1/checkout.js" async />
        </div>
    )
}

