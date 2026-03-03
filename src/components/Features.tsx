'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { BookOpen, CheckCircle, Clock } from 'lucide-react'

const features = [
    {
        title: 'Comprehensive UPSC Courses',
        description: 'Expert-curated content covering Prelims, Mains, and Interview preparation.',
        image: '/assets/course-thumbnail.png',
        icon: <BookOpen className="w-6 h-6 text-primary" />,
    },
    {
        title: 'Adaptive Mock Tests',
        description: 'Weekly tests with real-time feedback and performance analytics.',
        image: '/assets/mock-test.png',
        icon: <Clock className="w-6 h-6 text-accent" />,
    },
    {
        title: 'Premium Study Material',
        description: 'High-quality PDFs and video lectures accessible anytime, anywhere.',
        image: '/assets/study-material.png',
        icon: <CheckCircle className="w-6 h-6 text-primary" />,
    },
]

const Features = () => {
    return (
        <section id="features" className="py-24 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        Why Choose <span className="text-primary">Ascendia</span>?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-foreground/60 max-w-2xl mx-auto"
                    >
                        We combine traditional excellence with modern technology to provide the most effective preparation experience.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group"
                        >
                            <div className="relative h-64 mb-8 rounded-2xl overflow-hidden premium-card group-hover:border-primary/50 transition-all duration-500">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 to-transparent" />
                                <div className="absolute bottom-4 left-4 p-2 bg-[#020617]/80 rounded-lg border border-white/5">
                                    {feature.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>
                            <p className="text-foreground/60 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
