'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Play, Award, Users, BookOpen } from 'lucide-react'

const TeacherSection = () => {
    return (
        <section className="py-24 bg-[#0f172a] relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-[120px]" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-[150px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6 uppercase tracking-wider">
                            Learn from the Best
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            Expert Guidance from <br />
                            <span className="text-accent ring-accent/50 text-glow">Top Educators</span>
                        </h2>
                        <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
                            Ascendia brings you the finest minds in UPSC preparation. Our educators aren't just teachers; they are mentors who have guided thousands to success. Experience learning that is deep, clear, and result-oriented.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mb-10">
                            {[
                                { icon: <Award className="w-5 h-5 text-accent" />, text: "Ex-IAS Officers" },
                                { icon: <Users className="w-5 h-5 text-primary" />, text: "10k+ Success Stories" },
                                { icon: <BookOpen className="w-5 h-5 text-accent" />, text: "Curated Materials" },
                                { icon: <Play className="w-5 h-5 text-primary" />, text: "2000+ Video Hrs" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                                        {item.icon}
                                    </div>
                                    <span className="font-medium text-foreground/90">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full bg-primary text-white font-bold shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all duration-300"
                        >
                            View Our Faculty
                        </motion.button>
                    </motion.div>

                    {/* Right: Realistic Teacher Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="relative rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl">
                            <Image
                                src="/teacher-hero.png"
                                alt="Lead Educator at Ascendia"
                                width={600}
                                height={600}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000"
                            />
                            {/* Overlay Info Card */}
                            <div className="absolute bottom-8 left-8 right-8 p-6 bg-[#020617]/95 border border-white/10 rounded-3xl shadow-2xl">
                                <h4 className="text-xl font-bold mb-1">Dr. Sarah Chen</h4>
                                <p className="text-primary text-sm font-semibold mb-3 uppercase tracking-wider">Lead Mentor • Ex-UPSC Faculty</p>
                                <p className="text-foreground/60 text-sm italic">
                                    "Our goal is to make the toughest journey accessible to every dreamer."
                                </p>
                            </div>

                            {/* Play Button Overlay */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="w-20 h-20 rounded-full bg-primary/20 border border-white/20 flex items-center justify-center backdrop-blur-sm cursor-pointer"
                                >
                                    <Play className="w-10 h-10 text-white fill-white ml-1" />
                                </motion.div>
                            </div>
                        </div>

                        {/* Decorative floating dots/lines */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default TeacherSection
