'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function RefundPolicy() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 pt-32 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Refund Policy
                    </h1>

                    <div className="space-y-6 text-foreground/80 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Eligibility for Refunds</h2>
                            <p>
                                We want you to be satisfied with your learning experience. You may be eligible for a refund under the following conditions:
                            </p>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>The refund request is made within <strong>7 days</strong> of the course purchase.</li>
                                <li>You have consumed less than <strong>20%</strong> of the course content.</li>
                                <li>Proof of purchase is provided.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Non-Refundable Items</h2>
                            <p>
                                Certain services are non-refundable:
                            </p>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>Mock Test series once started or accessed.</li>
                                <li>Downloaded study materials and PDF notes.</li>
                                <li>One-on-one mentorship sessions already conducted.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Refund Process</h2>
                            <p>
                                To request a refund, please email us at <strong>support@ascendia.com</strong> with your order details and reason for the request. Once approved, the refund will be processed to your original payment method (via Razorpay) within 5-7 working days.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Changes to This Policy</h2>
                            <p>
                                We reserve the right to modify this refund policy at any time. Any changes will be effective immediately upon posting on the website.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </main>
    )
}
