import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, Clock, Star, Trophy, PenTool } from 'lucide-react'
import Link from 'next/link'

export default function DashboardHome() {
    return (
        <div className="space-y-8">
            {/* Welcome Banner */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/20 p-8">
                <div className="relative z-10">
                    <h1 className="text-3xl font-bold mb-2">Welcome Back, Aarav!</h1>
                    <p className="text-foreground/60 max-w-xl mb-6">
                        You&apos;re doing great! You completed 85% of your weekly goal. Keep it up to stay ahead in your UPSC preparation.
                    </p>
                    <div className="flex gap-4">
                        <Button size="sm">Continue Study</Button>
                        <Button variant="outline" size="sm">View Schedule</Button>
                    </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-[-20%] right-[-5%] w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute bottom-[-20%] left-[50%] w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: 'Overall Rank', value: '#142', icon: Trophy, color: 'text-accent' },
                    { label: 'Tests Attempted', value: '12', icon: Clock, color: 'text-primary' },
                    { label: 'Success Rate', value: '78%', icon: Star, color: 'text-yellow-500' },
                    { label: 'Study Hours', value: '142h', icon: BookOpen, color: 'text-blue-500' },
                ].map((stat, i) => (
                    <div key={i} className="glass p-6 rounded-2xl border border-white/5">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-foreground/60 text-sm">{stat.label}</span>
                            <stat.icon className={`w-5 h-5 ${stat.color}`} />
                        </div>
                        <div className="text-2xl font-bold">{stat.value}</div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Upcoming Tests */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold">Upcoming Mock Tests</h2>
                        <Link href="/dashboard/mock-tests" className="text-primary text-sm hover:underline flex items-center gap-1">
                            View All <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="space-y-4">
                        {[1, 2].map((i) => (
                            <div key={i} className="flex items-center justify-between p-6 glass rounded-2xl border border-white/5 hover:border-primary/20 transition-all duration-300">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                        <PenTool className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold">UPSC Prelims Mock Test #{i + 12}</h3>
                                        <p className="text-sm text-foreground/40">General Studies - March 15, 2026</p>
                                    </div>
                                </div>
                                <Button size="sm" variant="outline">Set Reminder</Button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Subscription Status Card */}
                <div className="space-y-6">
                    <h2 className="text-xl font-bold">Subscription</h2>
                    <div className="glass-gold p-6 rounded-3xl border border-accent/20 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-6">
                            <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-[10px] font-bold">PREMIUM</span>
                            <span className="text-xs text-foreground/60">Expires in 24 days</span>
                        </div>
                        <h3 className="text-lg font-bold mb-2">Quarterly Pro Plan</h3>
                        <p className="text-sm text-foreground/70 mb-8">Access all premium courses, mock tests, and mentorship calls until April 2026.</p>
                        <Button variant="accent" className="w-full mt-auto">Extend Plan</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
