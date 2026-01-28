// ============================================
// GIRIK SHIPPING - CLIENT JOBS PAGE
// Job Requests List
// ============================================

import React, { useState } from 'react';
import {
    ClipboardList,
    Search,
    Filter,
    Plus,
    Eye,
    Calendar,
    Ship,
    ChevronRight
} from 'lucide-react';
import { ClientPageType, JobStatus } from '../types';
import { CLIENT_JOBS, JOB_STATUS_CONFIG } from '../constants';

interface ClientJobsProps {
    onNavigate: (page: ClientPageType, id?: string) => void;
}

const ClientJobs: React.FC<ClientJobsProps> = ({ onNavigate }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterStatus, setFilterStatus] = useState<string>('all');

    // Filter jobs
    const filteredJobs = CLIENT_JOBS.filter(job => {
        const matchesSearch =
            job.jobId.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.vesselName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.certificateType.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = filterStatus === 'all' || job.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    const statusOptions = [
        { value: 'all', label: 'All Status' },
        { value: 'created', label: 'Created' },
        { value: 'gm_approved', label: 'GM Approved' },
        { value: 'tm_approved', label: 'TM Approved' },
        { value: 'assigned', label: 'Assigned' },
        { value: 'survey_done', label: 'Survey Done' },
        { value: 'certified', label: 'Certified' },
        { value: 'rejected', label: 'Rejected' }
    ];

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-heading font-bold text-navy-600">Job Requests</h1>
                    <p className="text-slate-600">Track and manage your survey and certification requests</p>
                </div>
                <button
                    onClick={() => onNavigate('create-job')}
                    className="bg-teal-500 text-white px-5 py-2.5 font-semibold text-sm flex items-center gap-2 hover:bg-teal-600"
                >
                    <Plus size={18} />
                    New Job Request
                </button>
            </div>

            {/* Filters */}
            <div className="bg-white border border-slate-200 p-4">
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Search */}
                    <div className="flex-1 relative">
                        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search by Job ID, vessel, or certificate type..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 border border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500"
                        />
                    </div>

                    {/* Status Filter */}
                    <div className="flex items-center gap-2">
                        <Filter size={18} className="text-slate-400" />
                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="border border-slate-300 px-4 py-2.5 text-slate-700 focus:outline-none focus:border-teal-500"
                        >
                            {statusOptions.map(opt => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Status Pills */}
            <div className="flex flex-wrap gap-2">
                {statusOptions.map(opt => {
                    const count = opt.value === 'all'
                        ? CLIENT_JOBS.length
                        : CLIENT_JOBS.filter(j => j.status === opt.value).length;
                    if (count === 0 && opt.value !== 'all') return null;
                    return (
                        <button
                            key={opt.value}
                            onClick={() => setFilterStatus(opt.value)}
                            className={`
                                px-3 py-1.5 text-sm font-medium transition-colors
                                ${filterStatus === opt.value
                                    ? 'bg-teal-500 text-white'
                                    : 'bg-white border border-slate-200 text-slate-600 hover:border-teal-500'}
                            `}
                        >
                            {opt.label} ({count})
                        </button>
                    );
                })}
            </div>

            {/* Jobs Table */}
            {filteredJobs.length > 0 ? (
                <div className="bg-white border border-slate-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Job ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Vessel</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Certificate Type</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Target Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-right text-xs font-semibold text-slate-600 uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {filteredJobs.map((job) => {
                                    const statusConfig = JOB_STATUS_CONFIG[job.status];
                                    return (
                                        <tr
                                            key={job.id}
                                            className="hover:bg-slate-50 cursor-pointer"
                                            onClick={() => onNavigate('job-details', job.id)}
                                        >
                                            <td className="px-6 py-4">
                                                <div className="font-medium text-navy-600">{job.jobId}</div>
                                                <div className="text-xs text-slate-500">Created: {job.createdAt}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <Ship size={16} className="text-slate-400" />
                                                    <span className="text-slate-700">{job.vesselName}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-slate-600">{job.certificateType}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                                    <Calendar size={14} className="text-slate-400" />
                                                    {job.targetDate}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`text-xs px-2.5 py-1 font-medium text-white ${statusConfig.color}`}>
                                                    {statusConfig.label}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-teal-600 hover:text-teal-700 p-2">
                                                    <ChevronRight size={18} />
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                /* Empty State */
                <div className="bg-white border border-slate-200 p-12 text-center">
                    <div className="w-20 h-20 bg-slate-100 mx-auto mb-4 flex items-center justify-center">
                        <ClipboardList size={40} className="text-slate-400" />
                    </div>
                    <h3 className="font-heading font-bold text-navy-600 text-lg mb-2">No Jobs Found</h3>
                    <p className="text-slate-600 max-w-md mx-auto mb-6">
                        {searchQuery || filterStatus !== 'all'
                            ? 'No jobs match your search criteria.'
                            : 'You haven\'t created any job requests yet.'}
                    </p>
                    <button
                        onClick={() => onNavigate('create-job')}
                        className="bg-teal-500 text-white px-5 py-2.5 font-semibold text-sm inline-flex items-center gap-2 hover:bg-teal-600"
                    >
                        <Plus size={18} />
                        Create Your First Job
                    </button>
                </div>
            )}
        </div>
    );
};

export default ClientJobs;
