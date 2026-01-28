// ============================================
// GIRIK SHIPPING - CLIENT VERIFY CERTIFICATE PAGE
// Public Certificate Verification
// ============================================

import React, { useState } from 'react';
import {
    Search,
    QrCode,
    CheckCircle,
    XCircle,
    Ship,
    Calendar,
    Award,
    Building2,
    AlertCircle
} from 'lucide-react';
import { ClientPageType } from '../types';
import { CLIENT_CERTIFICATES } from '../constants';

interface ClientVerifyProps {
    onNavigate: (page: ClientPageType, id?: string) => void;
}

const ClientVerify: React.FC<ClientVerifyProps> = ({ onNavigate }) => {
    const [certificateNumber, setCertificateNumber] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [result, setResult] = useState<'found' | 'not_found' | null>(null);
    const [foundCert, setFoundCert] = useState<typeof CLIENT_CERTIFICATES[0] | null>(null);

    const handleVerify = (e: React.FormEvent) => {
        e.preventDefault();
        if (!certificateNumber.trim()) return;

        setIsSearching(true);
        setResult(null);

        // Simulate search
        setTimeout(() => {
            const cert = CLIENT_CERTIFICATES.find(c =>
                c.utn.toLowerCase() === certificateNumber.toLowerCase().trim()
            );

            if (cert) {
                setFoundCert(cert);
                setResult('found');
            } else {
                setFoundCert(null);
                setResult('not_found');
            }
            setIsSearching(false);
        }, 1500);
    };

    const getCertStatusDisplay = (status: string) => {
        switch (status) {
            case 'valid':
                return (
                    <div className="flex items-center gap-2 text-teal-600">
                        <CheckCircle size={24} />
                        <span className="text-lg font-bold">VALID</span>
                    </div>
                );
            case 'expiring_soon':
                return (
                    <div className="flex items-center gap-2 text-amber-600">
                        <AlertCircle size={24} />
                        <span className="text-lg font-bold">VALID (Expiring Soon)</span>
                    </div>
                );
            case 'expired':
                return (
                    <div className="flex items-center gap-2 text-red-600">
                        <XCircle size={24} />
                        <span className="text-lg font-bold">EXPIRED</span>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="text-center max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-teal-100 mx-auto mb-4 flex items-center justify-center">
                    <QrCode className="text-teal-500" size={32} />
                </div>
                <h1 className="text-2xl font-heading font-bold text-navy-600">Verify Certificate</h1>
                <p className="text-slate-600 mt-2">
                    Enter the certificate number (UTN) to verify its authenticity
                </p>
            </div>

            {/* Search Form */}
            <div className="max-w-xl mx-auto">
                <form onSubmit={handleVerify} className="bg-white border border-slate-200 p-6">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                        Certificate Number (UTN)
                    </label>
                    <div className="flex gap-3">
                        <input
                            type="text"
                            value={certificateNumber}
                            onChange={(e) => setCertificateNumber(e.target.value)}
                            placeholder="e.g., GIRIK-SMC-2025-001234"
                            className="flex-1 border border-slate-300 px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500 font-mono"
                        />
                        <button
                            type="submit"
                            disabled={isSearching || !certificateNumber.trim()}
                            className={`
                                px-6 py-3 font-semibold text-white flex items-center gap-2
                                ${isSearching || !certificateNumber.trim()
                                    ? 'bg-slate-400 cursor-not-allowed'
                                    : 'bg-teal-500 hover:bg-teal-600'}
                            `}
                        >
                            {isSearching ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Verifying...
                                </>
                            ) : (
                                <>
                                    <Search size={18} />
                                    Verify
                                </>
                            )}
                        </button>
                    </div>

                    {/* Sample UTN */}
                    <p className="text-xs text-slate-500 mt-3">
                        <strong>Try:</strong> GIRIK-SMC-2025-001234
                    </p>
                </form>
            </div>

            {/* Result */}
            {result === 'found' && foundCert && (
                <div className="max-w-xl mx-auto">
                    <div className="bg-white border-2 border-teal-500">
                        {/* Success Header */}
                        <div className="bg-teal-50 p-6 border-b border-teal-200">
                            <div className="flex items-center justify-between">
                                {getCertStatusDisplay(foundCert.status)}
                                <CheckCircle size={48} className="text-teal-500" />
                            </div>
                            <p className="text-teal-700 mt-2">This certificate is authentic and issued by GIRIK Shipping.</p>
                        </div>

                        {/* Certificate Details */}
                        <div className="p-6 space-y-4">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex items-start gap-3">
                                    <Award size={18} className="text-teal-500 mt-0.5" />
                                    <div>
                                        <div className="text-xs text-slate-500 uppercase tracking-wider">Certificate</div>
                                        <div className="text-navy-600 font-medium">{foundCert.certificateName}</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Ship size={18} className="text-teal-500 mt-0.5" />
                                    <div>
                                        <div className="text-xs text-slate-500 uppercase tracking-wider">Vessel</div>
                                        <div className="text-navy-600 font-medium">{foundCert.vesselName}</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Calendar size={18} className="text-teal-500 mt-0.5" />
                                    <div>
                                        <div className="text-xs text-slate-500 uppercase tracking-wider">Issue Date</div>
                                        <div className="text-navy-600 font-medium">{foundCert.issueDate}</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Calendar size={18} className="text-teal-500 mt-0.5" />
                                    <div>
                                        <div className="text-xs text-slate-500 uppercase tracking-wider">Expiry Date</div>
                                        <div className="text-navy-600 font-medium">{foundCert.expiryDate}</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 md:col-span-2">
                                    <Building2 size={18} className="text-teal-500 mt-0.5" />
                                    <div>
                                        <div className="text-xs text-slate-500 uppercase tracking-wider">Issuing Authority</div>
                                        <div className="text-navy-600 font-medium">{foundCert.issuingAuthority}</div>
                                    </div>
                                </div>
                            </div>

                            {/* UTN */}
                            <div className="bg-slate-50 p-4 mt-4">
                                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Unique Tracking Number (UTN)</div>
                                <div className="text-navy-600 font-mono font-medium">{foundCert.utn}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {result === 'not_found' && (
                <div className="max-w-xl mx-auto">
                    <div className="bg-white border-2 border-red-500 p-6 text-center">
                        <XCircle size={48} className="text-red-500 mx-auto mb-4" />
                        <h3 className="text-lg font-heading font-bold text-red-600 mb-2">
                            Certificate Not Found
                        </h3>
                        <p className="text-slate-600 mb-4">
                            The certificate number you entered could not be verified. Please check the number and try again.
                        </p>
                        <div className="bg-red-50 p-4 text-left">
                            <p className="text-sm text-red-700">
                                <strong>Possible reasons:</strong>
                            </p>
                            <ul className="text-sm text-red-600 list-disc list-inside mt-2">
                                <li>Incorrect certificate number</li>
                                <li>Certificate was not issued by GIRIK Shipping</li>
                                <li>Certificate number contains typos</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {/* Info */}
            <div className="max-w-xl mx-auto">
                <div className="bg-blue-50 border border-blue-200 p-4 flex items-start gap-3">
                    <AlertCircle size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-blue-800">
                        <p className="font-medium mb-1">About Certificate Verification</p>
                        <p className="text-blue-700">
                            All GIRIK Shipping certificates contain a unique tracking number (UTN) that can be verified here. The UTN is printed on the certificate and encoded in the QR code.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientVerify;
