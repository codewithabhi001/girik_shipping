// ============================================
// GIRIK CLASS - DASHBOARD PAGE
// Client Portal Dashboard
// ============================================

import React, { useState } from 'react';
import {
    Ship,
    FileCheck,
    Calendar,
    AlertTriangle,
    CheckCircle,
    Clock,
    ArrowRight,
    Download,
    Eye,
    Plus,
    Filter,
    Search,
    Bell,
    Settings,
    LogOut,
    ChevronRight,
    QrCode,
    Anchor,
    Flag,
    MapPin,
    FileText,
    Shield,
    Activity,
    TrendingUp
} from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { PageType } from '../types';

interface DashboardPageProps {
    onNavigate: (page: PageType) => void;
    onLogout: () => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ onNavigate, onLogout }) => {
    const [activeTab, setActiveTab] = useState('overview');

    // Demo user
    const user = {
        name: 'John Smith',
        company: 'Pacific Shipping Ltd.',
        email: 'john@pacificshipping.com'
    };

    // Demo vessels
    const vessels = [
        {
            id: 1,
            name: 'M/V Pacific Explorer',
            imo: '9876543',
            flag: 'Panama',
            type: 'Bulk Carrier',
            gross: '32,500 GT',
            status: 'In Class',
            nextSurvey: '15 Mar 2026',
            location: 'Singapore'
        },
        {
            id: 2,
            name: 'M/V Atlantic Spirit',
            imo: '9876544',
            flag: 'Liberia',
            type: 'Container Ship',
            gross: '45,200 GT',
            status: 'In Class',
            nextSurvey: '28 Apr 2026',
            location: 'Rotterdam'
        },
        {
            id: 3,
            name: 'M/V Indian Ocean',
            imo: '9876545',
            flag: 'Marshall Islands',
            type: 'Tanker',
            gross: '58,000 GT',
            status: 'Survey Due',
            nextSurvey: '02 Feb 2026',
            location: 'Mumbai'
        }
    ];

    // Demo certificates
    const certificates = [
        { id: 1, type: 'Safety Construction Certificate', vessel: 'M/V Pacific Explorer', issued: '15 Jan 2024', expires: '14 Jan 2029', status: 'Valid' },
        { id: 2, type: 'Safety Equipment Certificate', vessel: 'M/V Pacific Explorer', issued: '15 Jan 2024', expires: '14 Jan 2029', status: 'Valid' },
        { id: 3, type: 'IOPP Certificate', vessel: 'M/V Atlantic Spirit', issued: '10 Mar 2024', expires: '09 Mar 2029', status: 'Valid' },
        { id: 4, type: 'Load Line Certificate', vessel: 'M/V Indian Ocean', issued: '20 Jun 2023', expires: '19 Jun 2028', status: 'Valid' },
        { id: 5, type: 'ISM DOC', vessel: 'Pacific Shipping Ltd.', issued: '01 Jan 2024', expires: '31 Dec 2028', status: 'Valid' },
        { id: 6, type: 'Annual Survey', vessel: 'M/V Indian Ocean', issued: '-', expires: '02 Feb 2026', status: 'Due Soon' }
    ];

    // Stats
    const stats = [
        { label: 'Total Vessels', value: '3', icon: Ship, color: '#0B2545' },
        { label: 'Valid Certificates', value: '12', icon: FileCheck, color: '#00A896' },
        { label: 'Surveys Due', value: '1', icon: Calendar, color: '#f59e0b' },
        { label: 'Alerts', value: '2', icon: Bell, color: '#ef4444' }
    ];

    // Notifications
    const notifications = [
        { type: 'warning', message: 'Annual Survey due for M/V Indian Ocean on 02 Feb 2026', time: '2 days ago' },
        { type: 'info', message: 'New technical circular published: CII Rating 2026 Requirements', time: '3 days ago' },
        { type: 'success', message: 'Safety Equipment Certificate issued for M/V Pacific Explorer', time: '1 week ago' }
    ];

    return (
        <div className="min-h-screen" style={{ background: '#f8fafc' }}>
            {/* Top Navigation */}
            <header className="bg-white shadow-sm">
                <div className="container-custom">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-8">
                            <button
                                onClick={() => onNavigate('home')}
                                className="flex items-center gap-2"
                            >
                                <Shield size={24} style={{ color: '#0B2545' }} />
                                <span className="font-heading font-bold text-lg" style={{ color: '#0B2545' }}>
                                    GIRIK Class
                                </span>
                            </button>

                            <nav className="hidden md:flex items-center gap-1">
                                {['overview', 'vessels', 'certificates', 'surveys'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 text-sm font-medium capitalize transition-colors ${activeTab === tab
                                                ? 'text-white'
                                                : 'text-slate-600 hover:text-slate-900'
                                            }`}
                                        style={activeTab === tab ? { background: '#0B2545' } : {}}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </nav>
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-slate-700 relative">
                                <Bell size={20} />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                            </button>
                            <div className="flex items-center gap-3">
                                <div className="text-right hidden sm:block">
                                    <div className="text-sm font-medium" style={{ color: '#0B2545' }}>{user.name}</div>
                                    <div className="text-xs" style={{ color: '#6b7c93' }}>{user.company}</div>
                                </div>
                                <div className="w-10 h-10 flex items-center justify-center text-white text-sm font-semibold" style={{ background: '#00A896' }}>
                                    JS
                                </div>
                            </div>
                            <button
                                onClick={onLogout}
                                className="text-slate-500 hover:text-red-500"
                            >
                                <LogOut size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container-custom py-8">
                {/* Welcome Banner */}
                <div className="mb-8 p-6" style={{ background: '#0B2545' }}>
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-heading font-bold text-white mb-2">
                                Welcome back, {user.name}!
                            </h1>
                            <p className="text-white/70">
                                {user.company} • 3 vessels under GIRIK Class
                            </p>
                        </div>
                        <button
                            onClick={() => onNavigate('contact')}
                            className="hidden md:flex items-center gap-2 px-6 py-3 font-semibold"
                            style={{ background: '#00A896', color: 'white' }}
                        >
                            <Plus size={18} /> Request Survey
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-6 shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-12 h-12 flex items-center justify-center" style={{ background: `${stat.color}10` }}>
                                    <stat.icon size={24} style={{ color: stat.color }} />
                                </div>
                                <span className="text-3xl font-heading font-bold" style={{ color: stat.color }}>
                                    {stat.value}
                                </span>
                            </div>
                            <div className="text-sm font-medium" style={{ color: '#6b7c93' }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content Area */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Vessels */}
                        <div className="bg-white shadow-sm">
                            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                                <h2 className="text-xl font-heading font-bold" style={{ color: '#0B2545' }}>
                                    Your Vessels
                                </h2>
                                <button className="text-sm font-medium flex items-center gap-1" style={{ color: '#00A896' }}>
                                    View All <ChevronRight size={16} />
                                </button>
                            </div>
                            <div className="divide-y divide-slate-100">
                                {vessels.map((vessel) => (
                                    <div key={vessel.id} className="p-6 hover:bg-slate-50 transition-colors cursor-pointer">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h3 className="font-heading font-bold text-lg" style={{ color: '#0B2545' }}>
                                                    {vessel.name}
                                                </h3>
                                                <p className="text-sm" style={{ color: '#6b7c93' }}>
                                                    IMO {vessel.imo} • {vessel.type} • {vessel.gross}
                                                </p>
                                            </div>
                                            <span
                                                className={`px-3 py-1 text-xs font-semibold ${vessel.status === 'In Class' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                                                    }`}
                                            >
                                                {vessel.status}
                                            </span>
                                        </div>
                                        <div className="flex flex-wrap gap-4 text-sm" style={{ color: '#6b7c93' }}>
                                            <span className="flex items-center gap-1">
                                                <Flag size={14} /> {vessel.flag}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Calendar size={14} /> Next Survey: {vessel.nextSurvey}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin size={14} /> {vessel.location}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recent Certificates */}
                        <div className="bg-white shadow-sm">
                            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                                <h2 className="text-xl font-heading font-bold" style={{ color: '#0B2545' }}>
                                    Recent Certificates
                                </h2>
                                <button className="text-sm font-medium flex items-center gap-1" style={{ color: '#00A896' }}>
                                    View All <ChevronRight size={16} />
                                </button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr style={{ background: '#f8fafc' }}>
                                            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: '#6b7c93' }}>
                                                Certificate
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: '#6b7c93' }}>
                                                Vessel
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: '#6b7c93' }}>
                                                Expires
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: '#6b7c93' }}>
                                                Status
                                            </th>
                                            <th className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wider" style={{ color: '#6b7c93' }}>
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {certificates.map((cert) => (
                                            <tr key={cert.id} className="hover:bg-slate-50">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <FileText size={18} style={{ color: '#00A896' }} />
                                                        <span className="font-medium" style={{ color: '#0B2545' }}>{cert.type}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm" style={{ color: '#6b7c93' }}>
                                                    {cert.vessel}
                                                </td>
                                                <td className="px-6 py-4 text-sm" style={{ color: '#6b7c93' }}>
                                                    {cert.expires}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`px-2 py-1 text-xs font-medium ${cert.status === 'Valid' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                                                        }`}>
                                                        {cert.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <button className="text-slate-400 hover:text-slate-600">
                                                        <Download size={18} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Notifications */}
                        <div className="bg-white shadow-sm p-6">
                            <h3 className="font-heading font-bold mb-4" style={{ color: '#0B2545' }}>
                                Notifications
                            </h3>
                            <div className="space-y-4">
                                {notifications.map((notif, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className={`w-2 h-2 rounded-full mt-2 ${notif.type === 'warning' ? 'bg-amber-500' :
                                                notif.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
                                            }`} />
                                        <div>
                                            <p className="text-sm" style={{ color: '#0B2545' }}>{notif.message}</p>
                                            <p className="text-xs mt-1" style={{ color: '#6b7c93' }}>{notif.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-white shadow-sm p-6">
                            <h3 className="font-heading font-bold mb-4" style={{ color: '#0B2545' }}>
                                Quick Actions
                            </h3>
                            <div className="space-y-2">
                                {[
                                    { icon: Plus, label: 'Request Survey', action: () => onNavigate('contact') },
                                    { icon: QrCode, label: 'Verify Certificate', action: () => onNavigate('verify') },
                                    { icon: Download, label: 'Download All Certs', action: () => { } },
                                    { icon: FileText, label: 'View Circulars', action: () => { } }
                                ].map((item, index) => (
                                    <button
                                        key={index}
                                        onClick={item.action}
                                        className="w-full flex items-center gap-3 p-3 text-left hover:bg-slate-50 transition-colors"
                                    >
                                        <item.icon size={18} style={{ color: '#00A896' }} />
                                        <span className="text-sm font-medium" style={{ color: '#0B2545' }}>{item.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Support */}
                        <div className="p-6" style={{ background: '#0B2545' }}>
                            <h3 className="font-heading font-bold text-white mb-3">
                                Need Assistance?
                            </h3>
                            <p className="text-sm text-white/70 mb-4">
                                Our support team is available 24/7 to help with any questions.
                            </p>
                            <button
                                onClick={() => onNavigate('contact')}
                                className="w-full py-3 font-semibold text-center"
                                style={{ background: '#00A896', color: 'white' }}
                            >
                                Contact Support
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DashboardPage;
