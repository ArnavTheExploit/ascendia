'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import {
    LayoutDashboard,
    BookOpen,
    PenTool,
    BarChart3,
    CreditCard,
    LogOut,
    ChevronRight
} from 'lucide-react'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Study Materials', href: '/dashboard/study-materials', icon: BookOpen },
    { name: 'Mock Tests', href: '/dashboard/mock-tests', icon: PenTool },
    { name: 'Results', href: '/dashboard/results', icon: BarChart3 },
    { name: 'Subscription', href: '/dashboard/subscription', icon: CreditCard },
]

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-card border-r border-border z-40 hidden lg:flex flex-col">
            <div className="p-8">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        ASCENDIA
                    </span>
                </Link>
            </div>

            <nav className="flex-grow px-4 pb-4">
                <ul className="space-y-2">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 group",
                                        isActive
                                            ? "bg-primary text-white shadow-lg shadow-primary/20"
                                            : "text-foreground/60 hover:bg-white/5 hover:text-foreground"
                                    )}
                                >
                                    <div className="flex items-center gap-3">
                                        <item.icon className={cn("w-5 h-5", isActive ? "text-white" : "group-hover:text-primary transition-colors")} />
                                        <span className="font-medium">{item.name}</span>
                                    </div>
                                    {isActive && (
                                        <motion.div
                                            layoutId="sidebar-active-indicator"
                                            className="w-1 h-4 bg-white rounded-full"
                                        />
                                    )}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>

            <div className="p-4 border-t border-border mt-auto">
                <button className="flex items-center gap-3 w-full px-4 py-3 text-foreground/60 hover:text-destructive hover:bg-destructive/10 rounded-xl transition-all duration-300 group">
                    <LogOut className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    <span className="font-medium">Logout</span>
                </button>
            </div>
        </aside>
    )
}
