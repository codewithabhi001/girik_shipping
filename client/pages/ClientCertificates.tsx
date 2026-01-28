// ============================================
// GIRIK SHIPPING - CLIENT CERTIFICATES PAGE
// Certificate List and Management
// ============================================

import React, { useState } from 'react';
import {
    Award,
    Search,
    Filter,
    Download,
    QrCode,
    Calendar,
    Ship,
    CheckCircle,
    Clock,
    XCircle,
    ExternalLink
} from 'lucide-react';
import { ClientPageType } from '../types';
import { CLIENT_CERTIFICATES, CLIENT_VESSELS } from '../constants';

interface ClientCertificatesProps {
    onNavigate: (page: ClientPageType, id?: string) => void;
}

const ClientCertificates: React.FC<ClientCertificatesProps> = ({ onNavigate }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterStatus, setFilterStatus] = useState<string>('all');
    const [filterVessel, setFilterVessel] = useState<string>('all');

    // Filter certificates
    const filteredCerts = CLIENT_CERTIFICATES.filter(cert => {
        const matchesSearch =
            cert.certificateName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            cert.utn.toLowerCase().includes(searchQuery.toLowerCase()) ||
            cert.vesselName.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = filterStatus === 'all' || cert.status === filterStatus;
        const matchesVessel = filterVessel === 'all' || cert.vesselId === filterVessel;
        return matchesSearch && matchesStatus && matchesVessel;
    });

    const getCertStatus = (status: string) => {
        switch (status) {
            case 'valid':
                return (
                    <span className="inline-flex items-center gap-1 text-xs bg-teal-100 text-teal-700 px-2 py-1 font-medium">
                        <CheckCircle size={12} /> Valid
                    </span>
                );
            case 'expiring_soon':
                return (
                    <span className="inline-flex items-center gap-1 text-xs bg-amber-100 text-amber-700 px-2 py-1 font-medium">
                        <Clock size={12} /> Expiring Soon
                    </span>
                );
            case 'expired':
                return (
                    <span className="inline-flex items-center gap-1 text-xs bg-red-100 text-red-700 px-2 py-1 font-medium">
                        <XCircle size={12} /> Expired
                    </span>
                );
            default:
                return (
                    <span className="inline-flex items-center gap-1 text-xs bg-slate-100 text-slate-700 px-2 py-1 font-medium">
                        Pending
                    </span>
                );
        }
    };

    // Stats
    const totalCerts = CLIENT_CERTIFICATES.length;
    const validCerts = CLIENT_CERTIFICATES.filter(c => c.status === 'valid').length;
    const expiringCerts = CLIENT_CERTIFICATES.filter(c => c.status === 'expiring_soon').length;
    const expiredCerts = CLIENT_CERTIFICATES.filter(c => c.status === 'expired').length;

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-heading font-bold text-navy-600">Certificates</h1>
                    <p className="text-slate-600">View, download, and verify your vessel certificates</p>
                </div>
                <button
                    onClick={() => onNavigate('verify')}
                    className="bg-navy-600 text-white px-5 py-2.5 font-semibold text-sm flex items-center gap-2 hover:bg-navy-700"
                >
                    <QrCode size={18} />
                    Verify Certificate
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white border border-slate-200 p-4">
                    <div className="text-2xl font-heading font-bold text-navy-600">{totalCerts}</div>
                    <div className="text-sm text-slate-500">Total Certificates</div>
                </div>
                <div className="bg-teal-50 border border-teal-200 p-4">
                    <div className="text-2xl font-heading font-bold text-teal-600">{validCerts}</div>
                    <div className="text-sm text-teal-700">Valid</div>
                </div>
                <div className="bg-amber-50 border border-amber-200 p-4">
                    <div className="text-2xl font-heading font-bold text-amber-600">{expiringCerts}</div>
                    <div className="text-sm text-amber-700">Expiring Soon</div>
                </div>
                <div className="bg-red-50 border border-red-200 p-4">
                    <div className="text-2xl font-heading font-bold text-red-600">{expiredCerts}</div>
                    <div className="text-sm text-red-700">Expired</div>
                </div>
            </div>

            {/* Filters */}
            <div className="bg-white border border-slate-200 p-4">
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Search */}
                    <div className="flex-1 relative">
                        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search by certificate name, UTN, or vessel..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 border border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500"
                        />
                    </div>

                    {/* Vessel Filter */}
                    <select
                        value={filterVessel}
                        onChange={(e) => setFilterVessel(e.target.value)}
                        className="border border-slate-300 px-4 py-2.5 text-slate-700 focus:outline-none focus:border-teal-500"
                    >
                        <option value="all">All Vessels</option>
                        {CLIENT_VESSELS.map(vessel => (
                            <option key={vessel.id} value={vessel.id}>{vessel.name}</option>
                        ))}
                    </select>

                    {/* Status Filter */}
                    <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="border border-slate-300 px-4 py-2.5 text-slate-700 focus:outline-none focus:border-teal-500"
                    >
                        <option value="all">All Status</option>
                        <option value="valid">Valid</option>
                        <option value="expiring_soon">Expiring Soon</option>
                        <option value="expired">Expired</option>
                    </select>
                </div>
            </div>

            {/* Certificates Table */}
            {filteredCerts.length > 0 ? (
                <div className="bg-white border border-slate-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Certificate</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Vessel</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">UTN</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Issue Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Expiry Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-right text-xs font-semibold text-slate-600 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {filteredCerts.map((cert) => (
                                    <tr key={cert.id} className="hover:bg-slate-50">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <Award size={18} className="text-teal-500" />
                                                <div>
                                                    <div className="font-medium text-navy-600">{cert.certificateName}</div>
                                                    <div className="text-xs text-slate-500">{cert.issuingAuthority}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <Ship size={14} className="text-slate-400" />
                                                <span className="text-sm text-slate-700">{cert.vesselName}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-600 font-mono">{cert.utn}</td>
                                        <td className="px-6 py-4 text-sm text-slate-600">{cert.issueDate}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                                <Calendar size={14} className="text-slate-400" />
                                                {cert.expiryDate}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">{getCertStatus(cert.status)}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    className="p-2 text-slate-500 hover:text-teal-600 hover:bg-teal-50 transition-colors"
                                                    title="Download PDF"
                                                >
                                                    <Download size={16} />
                                                </button>
                                                <button
                                                    onClick={() => onNavigate('verify')}
                                                    className="p-2 text-slate-500 hover:text-teal-600 hover:bg-teal-50 transition-colors"
                                                    title="Verify Certificate"
                                                >
                                                    <QrCode size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                /* Empty State */
                <div className="bg-white border border-slate-200 p-12 text-center">
                    <div className="w-20 h-20 bg-slate-100 mx-auto mb-4 flex items-center justify-center">
                        <Award size={40} className="text-slate-400" />
                    </div>
                    <h3 className="font-heading font-bold text-navy-600 text-lg mb-2">No Certificates Found</h3>
                    <p className="text-slate-600 max-w-md mx-auto">
                        {searchQuery || filterStatus !== 'all' || filterVessel !== 'all'
                            ? 'No certificates match your search criteria.'
                            : 'No certificates have been issued yet.'}
                    </p>
                </div>
            )}
        </div>
    );
};

export default ClientCertificates;
