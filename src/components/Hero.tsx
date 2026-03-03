'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import BackgroundScene from './Scene'

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
            <BackgroundScene />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center"
                >
                    <span className="inline-block px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-8 uppercase tracking-widest">
                        Ascend Your UPSC Journey
                    </span>
                    <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight">
                        Evolving Excellence.<br />
                        <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x text-glow">
                            Lead the Future.
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto mb-12 leading-relaxed">
                        The definitive platform for elite civil service preparation. Join 100k+ students mastering their ambition with Ascendia.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 rounded-2xl bg-primary text-white text-xl font-bold shadow-2xl shadow-primary/30 hover:bg-primary/90 transition-all duration-300 w-full sm:w-auto"
                        >
                            Enroll Now
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 rounded-2xl border-2 border-white/5 bg-[#1e293b]/50 text-white text-xl font-bold hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
                        >
                            Explore Courses
                        </motion.button>
                    </div>
                </motion.div>

            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center p-2 text-primary">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-1.5 bg-current rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    )
}

export default Hero
