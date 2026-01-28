// ============================================
// GIRIK SHIPPING - CLIENT CREATE JOB PAGE
// New Job Request Form
// ============================================

import React, { useState } from 'react';
import {
    ArrowLeft,
    Ship,
    FileText,
    MapPin,
    Calendar,
    Upload,
    X,
    CheckCircle,
    AlertCircle
} from 'lucide-react';
import { ClientPageType, JobReason } from '../types';
import { CLIENT_VESSELS, CERTIFICATE_TYPES, JOB_REASONS } from '../constants';

interface ClientCreateJobProps {
    onNavigate: (page: ClientPageType, id?: string) => void;
}

const ClientCreateJob: React.FC<ClientCreateJobProps> = ({ onNavigate }) => {
    const [formData, setFormData] = useState({
        vesselId: '',
        certificateType: '',
        reason: '' as JobReason | '',
        targetPort: '',
        targetDate: '',
        remarks: ''
    });
    const [documents, setDocuments] = useState<string[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const activeVessels = CLIENT_VESSELS.filter(v => v.classStatus === 'active');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setShowSuccess(true);
        }, 1500);
    };

    const handleFileUpload = () => {
        // Simulate file upload
        const mockFiles = ['document_' + Date.now() + '.pdf'];
        setDocuments([...documents, ...mockFiles]);
    };

    const removeDocument = (index: number) => {
        setDocuments(documents.filter((_, i) => i !== index));
    };

    if (showSuccess) {
        return (
            <div className="max-w-2xl mx-auto">
                <div className="bg-white border border-slate-200 p-12 text-center">
                    <div className="w-20 h-20 bg-teal-100 mx-auto mb-6 flex items-center justify-center">
                        <CheckCircle size={40} className="text-teal-500" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-navy-600 mb-4">
                        Job Request Submitted!
                    </h2>
                    <p className="text-slate-600 mb-8">
                        Your job request has been submitted successfully. You will receive updates as it progresses through the approval process.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={() => onNavigate('jobs')}
                            className="bg-teal-500 text-white px-6 py-3 font-semibold hover:bg-teal-600"
                        >
                            View All Jobs
                        </button>
                        <button
                            onClick={() => {
                                setShowSuccess(false);
                                setFormData({
                                    vesselId: '',
                                    certificateType: '',
                                    reason: '',
                                    targetPort: '',
                                    targetDate: '',
                                    remarks: ''
                                });
                                setDocuments([]);
                            }}
                            className="border border-slate-300 text-slate-700 px-6 py-3 font-semibold hover:bg-slate-50"
                        >
                            Create Another
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto space-y-6">
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
                <h1 className="text-2xl font-heading font-bold text-navy-600">Create Job Request</h1>
                <p className="text-slate-600 mt-1">Submit a new survey or certification request</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Vessel Selection */}
                <div className="bg-white border border-slate-200">
                    <div className="px-6 py-4 border-b border-slate-200 flex items-center gap-2">
                        <Ship className="text-teal-500" size={20} />
                        <h2 className="font-heading font-bold text-navy-600">Select Vessel</h2>
                    </div>
                    <div className="p-6">
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Vessel <span className="text-red-500">*</span>
                        </label>
                        <select
                            value={formData.vesselId}
                            onChange={(e) => setFormData({ ...formData, vesselId: e.target.value })}
                            className="w-full border border-slate-300 px-4 py-3 text-slate-700 focus:outline-none focus:border-teal-500"
                            required
                        >
                            <option value="">Select a vessel...</option>
                            {activeVessels.map(vessel => (
                                <option key={vessel.id} value={vessel.id}>
                                    {vessel.name} (IMO: {vessel.imoNumber})
                                </option>
                            ))}
                        </select>
                        {CLIENT_VESSELS.some(v => v.classStatus !== 'active') && (
                            <p className="text-xs text-amber-600 mt-2 flex items-center gap-1">
                                <AlertCircle size={12} />
                                Vessels with suspended class are not available for new job requests
                            </p>
                        )}
                    </div>
                </div>

                {/* Certificate Details */}
                <div className="bg-white border border-slate-200">
                    <div className="px-6 py-4 border-b border-slate-200 flex items-center gap-2">
                        <FileText className="text-teal-500" size={20} />
                        <h2 className="font-heading font-bold text-navy-600">Certificate Details</h2>
                    </div>
                    <div className="p-6 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Certificate Type <span className="text-red-500">*</span>
                            </label>
                            <select
                                value={formData.certificateType}
                                onChange={(e) => setFormData({ ...formData, certificateType: e.target.value })}
                                className="w-full border border-slate-300 px-4 py-3 text-slate-700 focus:outline-none focus:border-teal-500"
                                required
                            >
                                <option value="">Select certificate type...</option>
                                {CERTIFICATE_TYPES.map(cert => (
                                    <option key={cert.value} value={cert.value}>{cert.label}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Reason <span className="text-red-500">*</span>
                            </label>
                            <select
                                value={formData.reason}
                                onChange={(e) => setFormData({ ...formData, reason: e.target.value as JobReason })}
                                className="w-full border border-slate-300 px-4 py-3 text-slate-700 focus:outline-none focus:border-teal-500"
                                required
                            >
                                <option value="">Select reason...</option>
                                {JOB_REASONS.map(reason => (
                                    <option key={reason.value} value={reason.value}>{reason.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Planning */}
                <div className="bg-white border border-slate-200">
                    <div className="px-6 py-4 border-b border-slate-200 flex items-center gap-2">
                        <MapPin className="text-teal-500" size={20} />
                        <h2 className="font-heading font-bold text-navy-600">Survey Planning</h2>
                    </div>
                    <div className="p-6 space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Target Port <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.targetPort}
                                    onChange={(e) => setFormData({ ...formData, targetPort: e.target.value })}
                                    placeholder="e.g., Mumbai, Singapore"
                                    className="w-full border border-slate-300 px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-teal-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Target Date <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="date"
                                    value={formData.targetDate}
                                    onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
                                    className="w-full border border-slate-300 px-4 py-3 text-slate-700 focus:outline-none focus:border-teal-500"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Remarks (Optional)
                            </label>
                            <textarea
                                value={formData.remarks}
                                onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
                                placeholder="Any special instructions or notes..."
                                rows={4}
                                className="w-full border border-slate-300 px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-teal-500 resize-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Document Upload */}
                <div className="bg-white border border-slate-200">
                    <div className="px-6 py-4 border-b border-slate-200 flex items-center gap-2">
                        <Upload className="text-teal-500" size={20} />
                        <h2 className="font-heading font-bold text-navy-600">Documents (Optional)</h2>
                    </div>
                    <div className="p-6">
                        {/* Upload Area */}
                        <div
                            onClick={handleFileUpload}
                            className="border-2 border-dashed border-slate-300 p-8 text-center cursor-pointer hover:border-teal-500 hover:bg-teal-50/50 transition-colors"
                        >
                            <Upload size={32} className="text-slate-400 mx-auto mb-3" />
                            <p className="text-slate-600 font-medium">Click to upload documents</p>
                            <p className="text-sm text-slate-500 mt-1">Previous certificates, vessel details, etc.</p>
                        </div>

                        {/* Uploaded Files */}
                        {documents.length > 0 && (
                            <div className="mt-4 space-y-2">
                                {documents.map((doc, index) => (
                                    <div key={index} className="flex items-center justify-between bg-slate-50 p-3">
                                        <div className="flex items-center gap-2">
                                            <FileText size={16} className="text-slate-500" />
                                            <span className="text-sm text-slate-700">{doc}</span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => removeDocument(index)}
                                            className="text-red-500 hover:text-red-700 p-1"
                                        >
                                            <X size={16} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`
                            flex-1 py-3 font-semibold text-white flex items-center justify-center gap-2 transition-all
                            ${isSubmitting
                                ? 'bg-slate-400 cursor-not-allowed'
                                : 'bg-teal-500 hover:bg-teal-600'}
                        `}
                    >
                        {isSubmitting ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Submitting...
                            </>
                        ) : (
                            <>
                                <CheckCircle size={18} />
                                Submit Job Request
                            </>
                        )}
                    </button>
                    <button
                        type="button"
                        onClick={() => onNavigate('jobs')}
                        className="sm:w-auto px-8 py-3 border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ClientCreateJob;
