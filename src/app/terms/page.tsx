'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function TermsOfService() {
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
                        Terms of Service
                    </h1>

                    <div className="space-y-6 text-foreground/80 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
                            <p>
                                By accessing or using Ascendia, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, then you may not access the website or use any services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Intellectual Property</h2>
                            <p>
                                All content included on the platform, such as text, graphics, logos, images, video clips, and software, is the property of Ascendia or its content suppliers and protected by international copyright laws. You may not reproduce, distribute, or create derivative works from this content without express written permission.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Accounts</h2>
                            <p>
                                When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Course Access and Conduct</h2>
                            <p>
                                As a student, you are granted a non-exclusive, non-transferable, revocable license to access and watch the course content for which you have paid. You agree not to:
                            </p>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>Share your account credentials with others.</li>
                                <li>Record or screen-capture course content.</li>
                                <li>Use the platform for any illegal or unauthorized purpose.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Termination</h2>
                            <p>
                                We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
                            <p>
                                In no event shall Ascendia be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </main>
    )
}
