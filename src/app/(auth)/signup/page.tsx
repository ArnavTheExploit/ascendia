'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, Lock, User, ArrowRight, Loader2 } from 'lucide-react'

export default function SignupPage() {
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        // Signup logic will go here
        setTimeout(() => setLoading(false), 2000)
    }

    return (
        <div className="space-y-6">
            <div className="text-center">
                <h2 className="text-2xl font-bold">Create Account</h2>
                <p className="text-foreground/60 text-sm mt-1">Start your UPSC preparation today</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium ml-1">Full Name</label>
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
                        <Input
                            type="text"
                            placeholder="Aarav Sharma"
                            className="pl-11"
                            required
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium ml-1">Email</label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
                        <Input
                            type="email"
                            placeholder="name@example.com"
                            className="pl-11"
                            required
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium ml-1">Password</label>
                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
                        <Input
                            type="password"
                            placeholder="••••••••"
                            className="pl-11"
                            required
                        />
                    </div>
                </div>

                <Button
                    type="submit"
                    className="w-full h-12 text-base"
                    variant="accent"
                    disabled={loading}
                >
                    {loading ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                        <>
                            Sign Up <ArrowRight className="ml-2 w-4 h-4" />
                        </>
                    )}
                </Button>
            </form>

            <div className="text-center text-sm">
                <span className="text-foreground/60">Already have an account? </span>
                <Link href="/login" className="text-primary font-semibold hover:underline">
                    Login
                </Link>
            </div>

            <p className="text-[10px] text-center text-foreground/40 leading-tight">
                By signing up, you agree to our Terms of Service and Privacy Policy.
            </p>
        </div>
    )
}
