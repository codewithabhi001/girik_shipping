// ============================================
// GIRIK SHIPPING - CLIENT DASHBOARD
// Main Dashboard with Stats, Alerts, Quick Actions
// ============================================

import React from 'react';
import {
    Ship,
    ClipboardList,
    Award,
    AlertTriangle,
    Clock,
    CreditCard,
    XCircle,
    Plus,
    ArrowRight,
    TrendingUp,
    Calendar,
    CheckCircle
} from 'lucide-react';
import { ClientPageType } from '../types';
import {
    CLIENT_DASHBOARD_STATS,
    CLIENT_ALERTS,
    CLIENT_JOBS,
    CLIENT_CERTIFICATES,
    JOB_STATUS_CONFIG
} from '../constants';

interface ClientDashboardProps {
    onNavigate: (page: ClientPageType, id?: string) => void;
}

const ClientDashboard: React.FC<ClientDashboardProps> = ({ onNavigate }) => {
    // Recent jobs (last 5)
    const recentJobs = CLIENT_JOBS.slice(0, 5);

    // Expiring certificates
    const expiringCerts = CLIENT_CERTIFICATES.filter(c =>
        c.status === 'expiring_soon' || c.status === 'expired'
    );

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-heading font-bold text-navy-600">Dashboard</h1>
                    <p className="text-slate-600">Welcome back! Here's your fleet overview.</p>
                </div>
                <button
                    onClick={() => onNavigate('create-job')}
                    className="bg-teal-500 text-white px-5 py-2.5 font-semibold text-sm flex items-center gap-2 hover:bg-teal-600 transition-colors"
                >
                    <Plus size={18} />
                    New Job Request
                </button>
            </div>

            {/* ============================================
                STATS CARDS
            ============================================ */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Total Vessels */}
                <div className="bg-white p-5 border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm text-slate-500 mb-1">Total Vessels</p>
                            <p className="text-3xl font-heading font-bold text-navy-600">
                                {CLIENT_DASHBOARD_STATS.totalVessels}
                            </p>
                        </div>
                        <div className="w-12 h-12 bg-blue-50 flex items-center justify-center">
                            <Ship className="text-blue-500" size={24} />
                        </div>
                    </div>
                    <button
                        onClick={() => onNavigate('vessels')}
                        className="mt-4 text-sm text-teal-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                    >
                        View All <ArrowRight size={14} />
                    </button>
                </div>

                {/* Active Jobs */}
                <div className="bg-white p-5 border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm text-slate-500 mb-1">Active Jobs</p>
                            <p className="text-3xl font-heading font-bold text-navy-600">
                                {CLIENT_DASHBOARD_STATS.activeJobs}
                            </p>
                        </div>
                        <div className="w-12 h-12 bg-purple-50 flex items-center justify-center">
                            <ClipboardList className="text-purple-500" size={24} />
                        </div>
                    </div>
                    <button
                        onClick={() => onNavigate('jobs')}
                        className="mt-4 text-sm text-teal-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                    >
                        View All <ArrowRight size={14} />
                    </button>
                </div>

                {/* Certificates Expiring */}
                <div className="bg-white p-5 border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm text-slate-500 mb-1">Expiring Soon</p>
                            <p className="text-3xl font-heading font-bold text-amber-500">
                                {CLIENT_DASHBOARD_STATS.certificatesExpiringSoon}
                            </p>
                        </div>
                        <div className="w-12 h-12 bg-amber-50 flex items-center justify-center">
                            <Clock className="text-amber-500" size={24} />
                        </div>
                    </div>
                    <button
                        onClick={() => onNavigate('certificates')}
                        className="mt-4 text-sm text-teal-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                    >
                        View All <ArrowRight size={14} />
                    </button>
                </div>

                {/* Pending Payments */}
                <div className="bg-white p-5 border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm text-slate-500 mb-1">Pending Payments</p>
                            <p className="text-3xl font-heading font-bold text-navy-600">
                                {CLIENT_DASHBOARD_STATS.pendingPayments}
                            </p>
                        </div>
                        <div className="w-12 h-12 bg-green-50 flex items-center justify-center">
                            <CreditCard className="text-green-500" size={24} />
                        </div>
                    </div>
                    <button
                        onClick={() => onNavigate('jobs')}
                        className="mt-4 text-sm text-teal-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                    >
                        View All <ArrowRight size={14} />
                    </button>
                </div>
            </div>

            {/* ============================================
                ALERTS SECTION
            ============================================ */}
            {CLIENT_ALERTS.length > 0 && (
                <div className="bg-white border border-slate-200">
                    <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
                        <h2 className="font-heading font-bold text-navy-600 flex items-center gap-2">
                            <AlertTriangle size={20} className="text-amber-500" />
                            Alerts & Notifications
                        </h2>
                        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 font-medium">
                            {CLIENT_ALERTS.length} Active
                        </span>
                    </div>
                    <div className="divide-y divide-slate-100">
                        {CLIENT_ALERTS.map((alert) => (
                            <div key={alert.id} className="px-5 py-4 flex items-start gap-4 hover:bg-slate-50">
                                <div className={`
                                    w-10 h-10 flex items-center justify-center flex-shrink-0
                                    ${alert.severity === 'error' ? 'bg-red-100' :
                                        alert.severity === 'warning' ? 'bg-amber-100' : 'bg-blue-100'}
                                `}>
                                    {alert.type === 'expiry' && <Clock size={20} className={alert.severity === 'error' ? 'text-red-500' : 'text-amber-500'} />}
                                    {alert.type === 'payment' && <CreditCard size={20} className="text-blue-500" />}
                                    {alert.type === 'rejected' && <XCircle size={20} className="text-red-500" />}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-medium text-navy-600 text-sm">{alert.title}</h3>
                                    <p className="text-slate-600 text-sm mt-0.5">{alert.message}</p>
                                    <p className="text-xs text-slate-400 mt-1">{alert.date}</p>
                                </div>
                                {alert.actionUrl && (
                                    <button className="text-sm text-teal-600 font-medium hover:text-teal-700">
                                        View
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* ============================================
                TWO COLUMN LAYOUT
            ============================================ */}
            <div className="grid lg:grid-cols-2 gap-6">
                {/* Recent Jobs */}
                <div className="bg-white border border-slate-200">
                    <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
                        <h2 className="font-heading font-bold text-navy-600">Recent Job Requests</h2>
                        <button
                            onClick={() => onNavigate('jobs')}
                            className="text-sm text-teal-600 font-medium"
                        >
                            View All
                        </button>
                    </div>
                    <div className="divide-y divide-slate-100">
                        {recentJobs.map((job) => {
                            const statusConfig = JOB_STATUS_CONFIG[job.status];
                            return (
                                <div
                                    key={job.id}
                                    className="px-5 py-4 hover:bg-slate-50 cursor-pointer"
                                    onClick={() => onNavigate('job-details', job.id)}
                                >
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <div className="font-medium text-navy-600 text-sm">{job.jobId}</div>
                                            <div className="text-slate-600 text-sm mt-0.5">{job.vesselName}</div>
                                            <div className="text-xs text-slate-400 mt-1">{job.certificateType}</div>
                                        </div>
                                        <span className={`text-xs px-2 py-1 font-medium text-white ${statusConfig.color}`}>
                                            {statusConfig.label}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Expiring Certificates */}
                <div className="bg-white border border-slate-200">
                    <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
                        <h2 className="font-heading font-bold text-navy-600">Certificate Expiry Watch</h2>
                        <button
                            onClick={() => onNavigate('certificates')}
                            className="text-sm text-teal-600 font-medium"
                        >
                            View All
                        </button>
                    </div>
                    {expiringCerts.length > 0 ? (
                        <div className="divide-y divide-slate-100">
                            {expiringCerts.map((cert) => (
                                <div key={cert.id} className="px-5 py-4 hover:bg-slate-50">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <div className="font-medium text-navy-600 text-sm">{cert.certificateName}</div>
                                            <div className="text-slate-600 text-sm mt-0.5">{cert.vesselName}</div>
                                            <div className="flex items-center gap-2 mt-2 text-xs">
                                                <Calendar size={12} className="text-slate-400" />
                                                <span className="text-slate-500">Expires: {cert.expiryDate}</span>
                                            </div>
                                        </div>
                                        <span className={`
                                            text-xs px-2 py-1 font-medium
                                            ${cert.status === 'expired'
                                                ? 'bg-red-100 text-red-700'
                                                : 'bg-amber-100 text-amber-700'}
                                        `}>
                                            {cert.status === 'expired' ? 'Expired' : 'Expiring Soon'}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="px-5 py-8 text-center">
                            <CheckCircle size={40} className="text-teal-500 mx-auto mb-3" />
                            <p className="text-slate-600">All certificates are up to date!</p>
                        </div>
                    )}
                </div>
            </div>

            {/* ============================================
                QUICK ACTIONS
            ============================================ */}
            <div className="bg-gradient-to-r from-navy-600 to-navy-700 p-6">
                <h2 className="font-heading font-bold text-white mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <button
                        onClick={() => onNavigate('create-job')}
                        className="bg-white/10 hover:bg-white/20 p-4 text-left transition-colors"
                    >
                        <Plus size={24} className="text-teal-400 mb-2" />
                        <div className="text-white font-medium text-sm">Create Job Request</div>
                        <div className="text-slate-400 text-xs mt-1">Submit new survey</div>
                    </button>
                    <button
                        onClick={() => onNavigate('vessels')}
                        className="bg-white/10 hover:bg-white/20 p-4 text-left transition-colors"
                    >
                        <Ship size={24} className="text-teal-400 mb-2" />
                        <div className="text-white font-medium text-sm">View Vessels</div>
                        <div className="text-slate-400 text-xs mt-1">Manage your fleet</div>
                    </button>
                    <button
                        onClick={() => onNavigate('certificates')}
                        className="bg-white/10 hover:bg-white/20 p-4 text-left transition-colors"
                    >
                        <Award size={24} className="text-teal-400 mb-2" />
                        <div className="text-white font-medium text-sm">View Certificates</div>
                        <div className="text-slate-400 text-xs mt-1">Download & verify</div>
                    </button>
                    <button
                        onClick={() => onNavigate('verify')}
                        className="bg-white/10 hover:bg-white/20 p-4 text-left transition-colors"
                    >
                        <TrendingUp size={24} className="text-teal-400 mb-2" />
                        <div className="text-white font-medium text-sm">Verify Certificate</div>
                        <div className="text-slate-400 text-xs mt-1">Check authenticity</div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ClientDashboard;
