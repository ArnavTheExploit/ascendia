'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const reviews = [
    {
        name: 'Aarav Sharma',
        role: 'IAS aspirant',
        text: 'The adaptive mock tests focused my preparation on where I was weakest. Ascendia truly understands the UPSC journey.',
        rating: 5,
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav'
    },
    {
        name: 'Priya Patel',
        role: 'Topper Batch 2025',
        text: 'Mentorship at Ascendia is unparalleled. The 1-on-1 calls cleared my doubts that thousands of lectures could not.',
        rating: 5,
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya'
    },
    {
        name: 'Vikram Singh',
        role: 'State PCS Qualified',
        text: 'High-quality study materials and concise video lectures. Perfect for someone balancing work and preparation.',
        rating: 5,
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram'
    }
]

const Reviews = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-[#020617]">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        Success Stories from <span className="text-primary">Our Students</span>
                    </motion.h2>
                    <p className="text-foreground/60 max-w-2xl mx-auto">
                        Join thousands of successful candidates who transformed their preparation journey with Ascendia.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="premium-card p-8 rounded-3xl border-white/5 relative group hover:border-primary/20 transition-all duration-500 bg-[#0f172a]"
                        >
                            <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />

                            <div className="flex gap-1 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                                ))}
                            </div>

                            <p className="text-foreground/80 mb-8 italic leading-relaxed">
                                "{review.text}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 bg-[#020617]">
                                    <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold">{review.name}</h4>
                                    <p className="text-xs text-primary font-medium">{review.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Reviews
