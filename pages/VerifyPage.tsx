// GIRIK Shipping - Verify Certificate Page Component

import React, { useState } from 'react';
import {
    QrCode,
    Search,
    CheckCircle,
    XCircle,
    AlertTriangle,
    Ship,
    Calendar,
    User,
    FileText,
    Download,
    Globe,
    Shield,
    Clock
} from 'lucide-react';
import { SAMPLE_CERTIFICATE } from '../constants';
import { PageType } from '../types';

interface VerifyPageProps {
    onNavigate: (page: PageType) => void;
}

const VerifyPage: React.FC<VerifyPageProps> = ({ onNavigate }) => {
    const [utn, setUtn] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [result, setResult] = useState<typeof SAMPLE_CERTIFICATE | null>(null);
    const [error, setError] = useState('');

    const handleVerify = async () => {
        if (!utn.trim()) {
            setError('Please enter a UTN or scan QR code');
            return;
        }

        setIsSearching(true);
        setError('');
        setResult(null);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Demo: Show sample certificate for specific UTN
        if (utn.toUpperCase().includes('GIRIK') || utn.includes('2026')) {
            setResult(SAMPLE_CERTIFICATE);
        } else {
            setError('Certificate not found. Please check the UTN and try again.');
        }

        setIsSearching(false);
    };

    const handleDemoVerify = () => {
        setUtn('GIRIK-2026-X88');
        setTimeout(() => {
            setResult(SAMPLE_CERTIFICATE);
        }, 500);
    };

    return (
        <div>
            {/* Hero Section */}
            <section className="relative py-24 bg-navy-600 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300A896' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                </div>
                <div className="container-custom relative z-10 text-center">
                    <div className="max-w-2xl mx-auto">
                        <div className="w-20 h-20 bg-teal-500 flex items-center justify-center mx-auto mb-6">
                            <QrCode className="text-white" size={40} />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                            Certificate Verification
                        </h1>
                        <p className="text-xl text-slate-300">
                            Verify any GIRIK certificate instantly by scanning the QR code or entering the Unique Tracking Number (UTN).
                        </p>
                    </div>
                </div>
            </section>

            {/* Verification Form */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto">
                        {/* Features */}
                        <div className="grid grid-cols-3 gap-4 mb-12">
                            <div className="text-center p-4">
                                <Globe className="text-teal-500 mx-auto mb-2" size={32} />
                                <div className="text-sm font-semibold text-navy-600">Public Access</div>
                                <div className="text-xs text-slate-500">No login required</div>
                            </div>
                            <div className="text-center p-4">
                                <Clock className="text-teal-500 mx-auto mb-2" size={32} />
                                <div className="text-sm font-semibold text-navy-600">Real-Time</div>
                                <div className="text-xs text-slate-500">Instant results</div>
                            </div>
                            <div className="text-center p-4">
                                <Shield className="text-teal-500 mx-auto mb-2" size={32} />
                                <div className="text-sm font-semibold text-navy-600">Authentic</div>
                                <div className="text-xs text-slate-500">Tamper-proof</div>
                            </div>
                        </div>

                        {/* Search Box */}
                        <div className="card bg-slate-50 p-8 mb-8">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-heading font-bold text-navy-600 mb-2">
                                    Enter Certificate UTN
                                </h2>
                                <p className="text-slate-600">
                                    Find the UTN on the certificate or scan the QR code
                                </p>
                            </div>

                            <div className="flex flex-col md:flex-row gap-4 mb-6">
                                <div className="flex-1 relative">
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                                    <input
                                        type="text"
                                        value={utn}
                                        onChange={(e) => setUtn(e.target.value)}
                                        placeholder="e.g., GIRIK-2026-X88"
                                        className="form-input pl-12 text-lg h-14"
                                        onKeyDown={(e) => e.key === 'Enter' && handleVerify()}
                                    />
                                </div>
                                <button
                                    onClick={handleVerify}
                                    disabled={isSearching}
                                    className="btn-primary h-14 px-10 text-base"
                                >
                                    {isSearching ? 'Searching...' : 'Verify'}
                                </button>
                            </div>

                            <div className="text-center">
                                <button
                                    onClick={handleDemoVerify}
                                    className="text-sm text-teal-500 hover:underline"
                                >
                                    Try demo: GIRIK-2026-X88
                                </button>
                            </div>

                            {error && (
                                <div className="mt-6 p-4 bg-red-50 border border-red-200 flex items-center gap-3">
                                    <XCircle className="text-red-500 flex-shrink-0" size={24} />
                                    <div>
                                        <div className="font-semibold text-red-700">Verification Failed</div>
                                        <div className="text-sm text-red-600">{error}</div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* QR Scanner Placeholder */}
                        <div className="card bg-white p-8 mb-8 text-center border-2 border-dashed border-slate-200">
                            <QrCode className="text-slate-300 mx-auto mb-4" size={64} />
                            <h3 className="font-heading font-bold text-navy-600 mb-2">QR Code Scanner</h3>
                            <p className="text-slate-600 text-sm mb-4">
                                Position the certificate QR code within the frame to scan
                            </p>
                            <button className="btn-secondary border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white text-sm">
                                Enable Camera
                            </button>
                        </div>

                        {/* Result Display */}
                        {result && (
                            <div className="card bg-white p-0 overflow-hidden animate-fadeInUp">
                                {/* Status Header */}
                                <div className="bg-green-500 p-6 flex items-center gap-4">
                                    <div className="w-16 h-16 bg-white/20 flex items-center justify-center">
                                        <CheckCircle className="text-white" size={40} />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-heading font-bold text-white">VALID CERTIFICATE</div>
                                        <div className="text-green-100">This certificate is authentic and currently valid</div>
                                    </div>
                                </div>

                                {/* Certificate Details */}
                                <div className="p-8">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        {/* Vessel Info */}
                                        <div>
                                            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                                                <Ship size={16} />
                                                Vessel Information
                                            </h3>
                                            <div className="space-y-3">
                                                <div className="flex justify-between py-2 border-b border-slate-100">
                                                    <span className="text-slate-600">Vessel Name</span>
                                                    <span className="font-semibold text-navy-600">{result.vessel.name}</span>
                                                </div>
                                                <div className="flex justify-between py-2 border-b border-slate-100">
                                                    <span className="text-slate-600">IMO Number</span>
                                                    <span className="font-semibold text-navy-600">{result.vessel.imo}</span>
                                                </div>
                                                <div className="flex justify-between py-2 border-b border-slate-100">
                                                    <span className="text-slate-600">Flag State</span>
                                                    <span className="font-semibold text-navy-600">{result.vessel.flag}</span>
                                                </div>
                                                <div className="flex justify-between py-2 border-b border-slate-100">
                                                    <span className="text-slate-600">Vessel Type</span>
                                                    <span className="font-semibold text-navy-600">{result.vessel.type}</span>
                                                </div>
                                                <div className="flex justify-between py-2">
                                                    <span className="text-slate-600">Tonnage</span>
                                                    <span className="font-semibold text-navy-600">{result.vessel.tonnage}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Certificate Info */}
                                        <div>
                                            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                                                <FileText size={16} />
                                                Certificate Details
                                            </h3>
                                            <div className="space-y-3">
                                                <div className="flex justify-between py-2 border-b border-slate-100">
                                                    <span className="text-slate-600">UTN</span>
                                                    <span className="font-semibold text-navy-600">{result.utn}</span>
                                                </div>
                                                <div className="flex justify-between py-2 border-b border-slate-100">
                                                    <span className="text-slate-600">Certificate Type</span>
                                                    <span className="font-semibold text-navy-600">{result.certificate.type}</span>
                                                </div>
                                                <div className="flex justify-between py-2 border-b border-slate-100">
                                                    <span className="text-slate-600">Issued By</span>
                                                    <span className="font-semibold text-navy-600">{result.certificate.issuedBy}</span>
                                                </div>
                                                <div className="flex justify-between py-2 border-b border-slate-100">
                                                    <span className="text-slate-600">Issue Date</span>
                                                    <span className="font-semibold text-navy-600">
                                                        {new Date(result.certificate.issuedAt).toLocaleDateString('en-GB', {
                                                            day: '2-digit',
                                                            month: 'short',
                                                            year: 'numeric'
                                                        })}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between py-2">
                                                    <span className="text-slate-600">Expiry Date</span>
                                                    <span className="font-semibold text-green-600">
                                                        {new Date(result.certificate.expiresAt).toLocaleDateString('en-GB', {
                                                            day: '2-digit',
                                                            month: 'short',
                                                            year: 'numeric'
                                                        })}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Surveyor Info */}
                                    {result.surveyor && (
                                        <div className="mt-8 pt-8 border-t border-slate-100">
                                            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                                                <User size={16} />
                                                Survey Information
                                            </h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="flex justify-between py-2 bg-slate-50 px-4">
                                                    <span className="text-slate-600">Surveyor</span>
                                                    <span className="font-semibold text-navy-600">{result.surveyor.name}</span>
                                                </div>
                                                <div className="flex justify-between py-2 bg-slate-50 px-4">
                                                    <span className="text-slate-600">Surveyor ID</span>
                                                    <span className="font-semibold text-navy-600">{result.surveyor.id}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Actions */}
                                    <div className="mt-8 flex flex-wrap gap-4">
                                        <button className="btn-primary flex items-center gap-2">
                                            <Download size={18} />
                                            Download Certificate
                                        </button>
                                        <button
                                            onClick={() => setResult(null)}
                                            className="btn-secondary border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white"
                                        >
                                            New Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section className="section-padding bg-slate-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-heading font-bold text-navy-600 mb-8 text-center">
                            About Certificate Verification
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="card bg-white p-6">
                                <h3 className="font-heading font-bold text-navy-600 mb-3">What is a UTN?</h3>
                                <p className="text-slate-600 text-sm">
                                    The Unique Tracking Number (UTN) is a unique identifier assigned to every GIRIK certificate. It follows the format: GIRIK-YYYY-XXXX, where YYYY is the year and XXXX is a unique code.
                                </p>
                            </div>

                            <div className="card bg-white p-6">
                                <h3 className="font-heading font-bold text-navy-600 mb-3">Why Verify?</h3>
                                <p className="text-slate-600 text-sm">
                                    Certificate verification helps prevent fraud, ensures compliance, and provides peace of mind to port authorities, charterers, and other stakeholders who need to confirm vessel documentation.
                                </p>
                            </div>

                            <div className="card bg-white p-6">
                                <h3 className="font-heading font-bold text-navy-600 mb-3">Real-Time Status</h3>
                                <p className="text-slate-600 text-sm">
                                    Our verification system shows the real-time status of certificates. Even if a physical or PDF copy exists, the online verification is the definitive source of truth.
                                </p>
                            </div>

                            <div className="card bg-white p-6">
                                <h3 className="font-heading font-bold text-navy-600 mb-3">Need Help?</h3>
                                <p className="text-slate-600 text-sm mb-3">
                                    If you're having trouble verifying a certificate or have concerns about its authenticity, please contact our support team.
                                </p>
                                <button
                                    onClick={() => onNavigate('contact')}
                                    className="text-teal-500 font-semibold text-sm"
                                >
                                    Contact Support →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VerifyPage;
