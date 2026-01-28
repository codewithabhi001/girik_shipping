// ============================================
// GIRIK SHIPPING - CLIENT LAYOUT
// Header and Sidebar Components
// ============================================

import React, { useState } from 'react';
import {
    LayoutDashboard,
    Ship,
    ClipboardList,
    Award,
    Bell,
    Building2,
    LogOut,
    Menu,
    X,
    ChevronDown,
    Search,
    User
} from 'lucide-react';
import { ClientPageType } from './types';
import { DEMO_CLIENT, CLIENT_NOTIFICATIONS } from './constants';

interface ClientLayoutProps {
    currentPage: ClientPageType;
    onNavigate: (page: ClientPageType, id?: string) => void;
    onLogout: () => void;
    children: React.ReactNode;
}

// Menu Items with icons
const menuItems = [
    { id: 'dashboard' as ClientPageType, label: 'Dashboard', Icon: LayoutDashboard },
    { id: 'vessels' as ClientPageType, label: 'My Vessels', Icon: Ship },
    { id: 'jobs' as ClientPageType, label: 'Job Requests', Icon: ClipboardList },
    { id: 'certificates' as ClientPageType, label: 'Certificates', Icon: Award },
    { id: 'notifications' as ClientPageType, label: 'Notifications', Icon: Bell },
    { id: 'profile' as ClientPageType, label: 'Profile', Icon: Building2 }
];

const ClientLayout: React.FC<ClientLayoutProps> = ({
    currentPage,
    onNavigate,
    onLogout,
    children
}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    const unreadNotifications = CLIENT_NOTIFICATIONS.filter(n => !n.isRead).length;

    return (
        <div className="min-h-screen bg-slate-100">
            {/* ============================================
                HEADER
            ============================================ */}
            <header className="fixed top-0 left-0 right-0 h-16 bg-navy-600 z-50 shadow-lg">
                <div className="flex items-center justify-between h-full px-4 lg:px-6">
                    {/* Left - Logo & Mobile Menu Toggle */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="lg:hidden text-white p-2 hover:bg-white/10"
                        >
                            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-teal-500 flex items-center justify-center">
                                <span className="text-white font-heading font-bold text-lg">G</span>
                            </div>
                            <div className="hidden sm:block">
                                <div className="text-white font-heading font-bold text-lg leading-tight">GIRIK</div>
                                <div className="text-teal-400 text-xs font-medium">Client Portal</div>
                            </div>
                        </div>
                    </div>

                    {/* Center - Search (Hidden on mobile) */}
                    <div className="hidden md:flex flex-1 max-w-md mx-8">
                        <div className="relative w-full">
                            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search vessels, jobs, certificates..."
                                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:bg-white/20"
                            />
                        </div>
                    </div>

                    {/* Right - User Menu */}
                    <div className="flex items-center gap-4">
                        {/* Notifications */}
                        <button
                            onClick={() => onNavigate('notifications')}
                            className="relative text-white p-2 hover:bg-white/10"
                        >
                            <Bell size={22} />
                            {unreadNotifications > 0 && (
                                <span className="absolute top-1 right-1 w-4 h-4 bg-signal-500 text-white text-xs flex items-center justify-center font-bold">
                                    {unreadNotifications}
                                </span>
                            )}
                        </button>

                        {/* User Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setUserMenuOpen(!userMenuOpen)}
                                className="flex items-center gap-2 text-white hover:bg-white/10 p-2"
                            >
                                {DEMO_CLIENT.avatar ? (
                                    <img
                                        src={DEMO_CLIENT.avatar}
                                        alt={DEMO_CLIENT.name}
                                        className="w-8 h-8 object-cover"
                                    />
                                ) : (
                                    <div className="w-8 h-8 bg-teal-500 flex items-center justify-center">
                                        <User size={18} />
                                    </div>
                                )}
                                <div className="hidden sm:block text-left">
                                    <div className="text-sm font-medium">{DEMO_CLIENT.name}</div>
                                    <div className="text-xs text-slate-400">{DEMO_CLIENT.companyName}</div>
                                </div>
                                <ChevronDown size={16} className={`transition-transform ${userMenuOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Dropdown Menu */}
                            {userMenuOpen && (
                                <div className="absolute right-0 top-full mt-1 w-56 bg-white shadow-xl border border-slate-200 py-2 z-50">
                                    <div className="px-4 py-2 border-b border-slate-100">
                                        <div className="font-medium text-navy-600">{DEMO_CLIENT.name}</div>
                                        <div className="text-xs text-slate-500">{DEMO_CLIENT.email}</div>
                                    </div>
                                    <button
                                        onClick={() => { onNavigate('profile'); setUserMenuOpen(false); }}
                                        className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-2"
                                    >
                                        <Building2 size={16} />
                                        Company Profile
                                    </button>
                                    <hr className="my-2" />
                                    <button
                                        onClick={() => { onLogout(); setUserMenuOpen(false); }}
                                        className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                                    >
                                        <LogOut size={16} />
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            {/* ============================================
                SIDEBAR
            ============================================ */}
            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed top-16 left-0 bottom-0 w-64 bg-white border-r border-slate-200 z-40
                transform transition-transform duration-300 ease-in-out
                ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
                <nav className="p-4">
                    <ul className="space-y-1">
                        {menuItems.map((item) => {
                            const isActive = currentPage === item.id ||
                                (item.id === 'vessels' && currentPage === 'vessel-details') ||
                                (item.id === 'jobs' && (currentPage === 'job-details' || currentPage === 'create-job'));

                            return (
                                <li key={item.id}>
                                    <button
                                        onClick={() => { onNavigate(item.id); setSidebarOpen(false); }}
                                        className={`
                                            w-full flex items-center gap-3 px-4 py-3 text-left transition-colors
                                            ${isActive
                                                ? 'bg-teal-50 text-teal-600 border-l-4 border-teal-500'
                                                : 'text-slate-600 hover:bg-slate-50 border-l-4 border-transparent'
                                            }
                                        `}
                                    >
                                        <item.Icon size={20} />
                                        <span className="font-medium">{item.label}</span>
                                        {item.id === 'notifications' && unreadNotifications > 0 && (
                                            <span className="ml-auto bg-signal-500 text-white text-xs px-2 py-0.5 font-bold">
                                                {unreadNotifications}
                                            </span>
                                        )}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Sidebar Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200 bg-slate-50">
                    <div className="text-xs text-slate-500">
                        <div className="font-medium text-slate-600 mb-1">{DEMO_CLIENT.companyName}</div>
                        <div>Company Code: OML-2019</div>
                    </div>
                </div>
            </aside>

            {/* ============================================
                MAIN CONTENT
            ============================================ */}
            <main className="lg:ml-64 pt-16 min-h-screen">
                <div className="p-4 lg:p-6">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default ClientLayout;
