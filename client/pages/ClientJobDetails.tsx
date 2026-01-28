// ============================================
// GIRIK SHIPPING - CLIENT JOB DETAILS PAGE
// Complete Job Information with Timeline
// ============================================

import React from 'react';
import {
    ArrowLeft,
    Ship,
    Calendar,
    MapPin,
    FileText,
    CheckCircle,
    Clock,
    XCircle,
    CreditCard,
    Download,
    AlertTriangle,
    User
} from 'lucide-react';
import { ClientPageType } from '../types';
import { CLIENT_JOBS, JOB_STATUS_CONFIG, JOB_REASONS } from '../constants';

interface ClientJobDetailsProps {
    jobId: string;
    onNavigate: (page: ClientPageType, id?: string) => void;
}

const ClientJobDetails: React.FC<ClientJobDetailsProps> = ({ jobId, onNavigate }) => {
    const job = CLIENT_JOBS.find(j => j.id === jobId);

    if (!job) {
        return (
            <div className="bg-white border border-slate-200 p-12 text-center">
                <h3 className="font-heading font-bold text-navy-600 text-lg mb-2">Job Not Found</h3>
                <p className="text-slate-600 mb-4">The job you are looking for does not exist.</p>
                <button
                    onClick={() => onNavigate('jobs')}
                    className="text-teal-600 font-medium"
                >
                    ← Back to Jobs
                </button>
            </div>
        );
    }

    const statusConfig = JOB_STATUS_CONFIG[job.status];
    const reasonLabel = JOB_REASONS.find(r => r.value === job.reason)?.label || job.reason;

    // Timeline steps
    const timelineSteps = [
        'Created',
        'GM Approved',
        'TM Approved',
        'Survey Assigned',
        'Survey Completed',
        'Payment Done',
        'Certificate Issued'
    ];

    const getTimelineStatus = (step: string) => {
        const completed = job.timeline.find(t => t.status === step);
        if (completed) return 'completed';

        // Check if rejected
        if (job.status === 'rejected') {
            const rejectedIndex = job.timeline.findIndex(t => t.status === 'Rejected');
            if (rejectedIndex !== -1) return 'rejected';
        }

        return 'pending';
    };

    return (
        <div className="space-y-6">
            {/* Back Button */}
            <button
                onClick={() => onNavigate('jobs')}
                className="text-slate-600 hover:text-teal-600 flex items-center gap-2 text-sm font-medium"
            >
                <ArrowLeft size={18} />
                Back to Jobs
            </button>

            {/* Header */}
            <div className="bg-white border border-slate-200 p-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <h1 className="text-2xl font-heading font-bold text-navy-600">{job.jobId}</h1>
                            <span className={`text-sm px-3 py-1 font-medium text-white ${statusConfig.color}`}>
                                {statusConfig.label}
                            </span>
                        </div>
                        <p className="text-slate-600">{job.certificateType}</p>
                    </div>
                </div>
            </div>

            {/* Summary Cards */}
            <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white border border-slate-200 p-4">
                    <div className="flex items-center gap-3">
                        <Ship className="text-teal-500" size={20} />
                        <div>
                            <div className="text-xs text-slate-500">Vessel</div>
                            <div className="font-medium text-navy-600">{job.vesselName}</div>
                        </div>
                    </div>
                </div>
                <div className="bg-white border border-slate-200 p-4">
                    <div className="flex items-center gap-3">
                        <FileText className="text-teal-500" size={20} />
                        <div>
                            <div className="text-xs text-slate-500">Reason</div>
                            <div className="font-medium text-navy-600">{reasonLabel}</div>
                        </div>
                    </div>
                </div>
                <div className="bg-white border border-slate-200 p-4">
                    <div className="flex items-center gap-3">
                        <MapPin className="text-teal-500" size={20} />
                        <div>
                            <div className="text-xs text-slate-500">Target Port</div>
                            <div className="font-medium text-navy-600">{job.targetPort}</div>
                        </div>
                    </div>
                </div>
                <div className="bg-white border border-slate-200 p-4">
                    <div className="flex items-center gap-3">
                        <Calendar className="text-teal-500" size={20} />
                        <div>
                            <div className="text-xs text-slate-500">Target Date</div>
                            <div className="font-medium text-navy-600">{job.targetDate}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Timeline */}
            <div className="bg-white border border-slate-200">
                <div className="px-6 py-4 border-b border-slate-200">
                    <h2 className="font-heading font-bold text-navy-600">Job Timeline</h2>
                </div>
                <div className="p-6">
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200" />

                        {/* Timeline Items */}
                        <div className="space-y-6">
                            {job.timeline.map((item, index) => (
                                <div key={index} className="relative flex items-start gap-4 pl-12">
                                    {/* Icon */}
                                    <div className={`
                                        absolute left-0 w-8 h-8 flex items-center justify-center
                                        ${item.status === 'Rejected'
                                            ? 'bg-red-500'
                                            : 'bg-teal-500'}
                                    `}>
                                        {item.status === 'Rejected'
                                            ? <XCircle size={16} className="text-white" />
                                            : <CheckCircle size={16} className="text-white" />
                                        }
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0 pb-4">
                                        <div className="flex items-center justify-between">
                                            <h3 className={`font-medium ${item.status === 'Rejected' ? 'text-red-600' : 'text-navy-600'}`}>
                                                {item.status}
                                            </h3>
                                            <span className="text-xs text-slate-500">{item.date}</span>
                                        </div>
                                        {item.user && (
                                            <div className="text-sm text-slate-600 flex items-center gap-1 mt-1">
                                                <User size={12} />
                                                {item.user}
                                            </div>
                                        )}
                                        {item.remarks && (
                                            <div className="text-sm text-slate-600 mt-1 bg-slate-50 p-2 border-l-2 border-slate-300">
                                                {item.remarks}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}

                            {/* Pending Steps */}
                            {job.status !== 'rejected' && job.status !== 'certified' && (
                                <div className="relative flex items-start gap-4 pl-12">
                                    <div className="absolute left-0 w-8 h-8 bg-slate-200 flex items-center justify-center">
                                        <Clock size={16} className="text-slate-500" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-medium text-slate-400">Next Step Pending...</h3>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Survey Output (if available) */}
            {job.surveyOutput && (
                <div className="bg-white border border-slate-200">
                    <div className="px-6 py-4 border-b border-slate-200">
                        <h2 className="font-heading font-bold text-navy-600">Survey Output</h2>
                    </div>
                    <div className="p-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Survey Date</div>
                                <div className="text-navy-600 font-medium">{job.surveyOutput.surveyDate}</div>
                            </div>
                            {job.surveyOutput.surveyReportPdf && (
                                <div>
                                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Survey Report</div>
                                    <button className="text-teal-600 font-medium text-sm flex items-center gap-1">
                                        <Download size={14} />
                                        Download PDF
                                    </button>
                                </div>
                            )}
                        </div>

                        {job.surveyOutput.nonConformities && job.surveyOutput.nonConformities.length > 0 && (
                            <div className="mt-6">
                                <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Non-Conformities</div>
                                <ul className="space-y-2">
                                    {job.surveyOutput.nonConformities.map((nc, index) => (
                                        <li key={index} className="flex items-start gap-2 text-sm text-amber-700 bg-amber-50 p-3">
                                            <AlertTriangle size={16} className="flex-shrink-0 mt-0.5" />
                                            {nc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Payment Info (if available) */}
            {job.paymentInfo && (
                <div className="bg-white border border-slate-200">
                    <div className="px-6 py-4 border-b border-slate-200">
                        <h2 className="font-heading font-bold text-navy-600 flex items-center gap-2">
                            <CreditCard size={20} className="text-teal-500" />
                            Payment Information
                        </h2>
                    </div>
                    <div className="p-6">
                        <div className="grid md:grid-cols-4 gap-6">
                            <div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Invoice Number</div>
                                <div className="text-navy-600 font-medium">{job.paymentInfo.invoiceNumber}</div>
                            </div>
                            <div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Amount</div>
                                <div className="text-navy-600 font-medium text-lg">
                                    {job.paymentInfo.currency} {job.paymentInfo.amount.toLocaleString()}
                                </div>
                            </div>
                            <div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Status</div>
                                <span className={`
                                    inline-block text-xs px-2 py-1 font-medium
                                    ${job.paymentInfo.paymentStatus === 'paid'
                                        ? 'bg-teal-100 text-teal-700'
                                        : job.paymentInfo.paymentStatus === 'overdue'
                                            ? 'bg-red-100 text-red-700'
                                            : 'bg-amber-100 text-amber-700'}
                                `}>
                                    {job.paymentInfo.paymentStatus.toUpperCase()}
                                </span>
                            </div>
                            {job.paymentInfo.receiptUrl && (
                                <div>
                                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Receipt</div>
                                    <button className="text-teal-600 font-medium text-sm flex items-center gap-1">
                                        <Download size={14} />
                                        Download
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Remarks */}
            {job.remarks && (
                <div className="bg-white border border-slate-200 p-6">
                    <h3 className="font-heading font-bold text-navy-600 mb-2">Remarks</h3>
                    <p className="text-slate-600">{job.remarks}</p>
                </div>
            )}
        </div>
    );
};

export default ClientJobDetails;
