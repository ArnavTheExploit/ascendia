'use client'

import { motion, AnimatePresence } from 'framer-motion'
import {
    X,
    LayoutDashboard,
    BookOpen,
    PenTool,
    Users,
    Settings,
    LogOut,
    Award
} from 'lucide-react'
import Link from 'next/link'

interface DashboardSidebarProps {
    isOpen: boolean
    onClose: () => void
}

const DashboardSidebar = ({ isOpen, onClose }: DashboardSidebarProps) => {
    const menuItems = [
        { icon: LayoutDashboard, label: 'Overview', href: '/dashboard' },
        { icon: BookOpen, label: 'My Courses', href: '/dashboard/courses' },
        { icon: Award, label: 'Mock Tests', href: '/dashboard/tests' },
        { icon: PenTool, label: 'Practice', href: '/dashboard/practice' },
        { icon: Users, label: 'Study Groups', href: '/dashboard/groups' },
        { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
    ]

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-80 bg-[#0f172a] z-[70] shadow-2xl border-l border-white/5 flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                                    <Award className="text-white w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white">Student Portal</h3>
                                    <p className="text-[10px] text-primary font-black uppercase tracking-widest">Premium Access</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-white/5 rounded-lg transition-colors text-white/50 hover:text-white"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Navigation */}
                        <nav className="flex-1 p-4 flex flex-col gap-2">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/5 text-white/60 hover:text-white transition-all group"
                                >
                                    <item.icon size={20} className="group-hover:text-primary transition-colors" />
                                    <span className="font-semibold">{item.label}</span>
                                </Link>
                            ))}
                        </nav>

                        {/* Footer */}
                        <div className="p-4 border-t border-white/5">
                            <button className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-red-500/10 text-red-500 transition-all w-full">
                                <LogOut size={20} />
                                <span className="font-bold">Logout</span>
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default DashboardSidebar
