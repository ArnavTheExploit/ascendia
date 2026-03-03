'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
    {
        name: 'Monthly',
        price: '₹1,499',
        description: 'Perfect for quick revision.',
        features: ['All Courses', 'Weekly Mock Tests', 'PDF Downloads', 'Email Support'],
        accent: 'border-border',
    },
    {
        name: 'Quarterly',
        price: '₹3,999',
        description: 'Most popular for focused prep.',
        features: ['All Courses', 'All Mock Tests', 'PDF & Video Access', 'Priority Support', 'Personal Mentorship'],
        popular: true,
        accent: 'border-primary shadow-lg shadow-primary/20',
    },
    {
        name: 'Yearly',
        price: '₹12,499',
        description: 'Complete preparation journey.',
        features: ['Universal Access', 'Offline Resources', '1-on-1 Strategy Calls', 'Interview Guidance', 'Lifetime Updates'],
        accent: 'border-accent shadow-lg shadow-accent/20',
    },
]

const Pricing = () => {
    return (
        <section id="pricing" className="py-24 bg-background relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        Invest in Your <span className="text-accent ring-accent/50 text-glow">Future</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-foreground/60 max-w-2xl mx-auto"
                    >
                        Choose a plan that fits your preparation pace. Unlock premium resources today.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`p-8 rounded-3xl premium-card border ${plan.accent} flex flex-col bg-[#0f172a]`}
                        >
                            {plan.popular && (
                                <span className="self-start px-4 py-1 rounded-full bg-primary text-white text-xs font-bold mb-4">
                                    MOST POPULAR
                                </span>
                            )}
                            {plan.name === 'Yearly' && (
                                <span className="self-start px-4 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold mb-4">
                                    BEST VALUE
                                </span>
                            )}
                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <div className="flex items-baseline gap-1 mb-4">
                                <span className="text-4xl font-bold">{plan.price}</span>
                                <span className="text-foreground/50">/period</span>
                            </div>
                            <p className="text-foreground/60 mb-8">{plan.description}</p>

                            <div className="space-y-4 mb-10 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-primary" />
                                        <span className="text-foreground/80">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${plan.popular
                                    ? 'bg-primary text-white hover:bg-primary/90'
                                    : plan.name === 'Yearly'
                                        ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                                        : 'bg-white/10 text-white hover:bg-white/20'
                                    }`}
                            >
                                Get Started
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing
