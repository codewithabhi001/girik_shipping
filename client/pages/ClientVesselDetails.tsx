// ============================================
// GIRIK SHIPPING - CLIENT VESSEL DETAILS PAGE
// Complete Vessel Information
// ============================================

import React from 'react';
import {
    ArrowLeft,
    Ship,
    Flag,
    Anchor,
    Calendar,
    Settings,
    Building2,
    Award,
    Eye,
    QrCode,
    Download,
    Plus,
    CheckCircle,
    AlertCircle,
    Clock
} from 'lucide-react';
import { ClientPageType } from '../types';
import { CLIENT_VESSELS, CLIENT_CERTIFICATES } from '../constants';

interface ClientVesselDetailsProps {
    vesselId: string;
    onNavigate: (page: ClientPageType, id?: string) => void;
}

const ClientVesselDetails: React.FC<ClientVesselDetailsProps> = ({ vesselId, onNavigate }) => {
    const vessel = CLIENT_VESSELS.find(v => v.id === vesselId);
    const vesselCertificates = CLIENT_CERTIFICATES.filter(c => c.vesselId === vesselId);

    if (!vessel) {
        return (
            <div className="bg-white border border-slate-200 p-12 text-center">
                <h3 className="font-heading font-bold text-navy-600 text-lg mb-2">Vessel Not Found</h3>
                <p className="text-slate-600 mb-4">The vessel you are looking for does not exist.</p>
                <button
                    onClick={() => onNavigate('vessels')}
                    className="text-teal-600 font-medium"
                >
                    ← Back to Vessels
                </button>
            </div>
        );
    }

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'active':
                return (
                    <span className="inline-flex items-center gap-1.5 bg-teal-100 text-teal-700 px-3 py-1.5 font-medium">
                        <CheckCircle size={16} /> Active Class
                    </span>
                );
            case 'suspended':
                return (
                    <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-700 px-3 py-1.5 font-medium">
                        <AlertCircle size={16} /> Class Suspended
                    </span>
                );
            default:
                return null;
        }
    };

    const getCertStatus = (status: string) => {
        switch (status) {
            case 'valid':
                return <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 font-medium">Valid</span>;
            case 'expiring_soon':
                return <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 font-medium">Expiring Soon</span>;
            case 'expired':
                return <span className="text-xs bg-red-100 text-red-700 px-2 py-1 font-medium">Expired</span>;
            default:
                return <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 font-medium">Pending</span>;
        }
    };

    return (
        <div className="space-y-6">
            {/* Back Button */}
            <button
                onClick={() => onNavigate('vessels')}
                className="text-slate-600 hover:text-teal-600 flex items-center gap-2 text-sm font-medium"
            >
                <ArrowLeft size={18} />
                Back to Vessels
            </button>

            {/* Header */}
            <div className="bg-white border border-slate-200 p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-navy-100 flex items-center justify-center">
                            <Ship className="text-navy-600" size={32} />
                        </div>
                        <div>
                            <h1 className="text-2xl font-heading font-bold text-navy-600">{vessel.name}</h1>
                            <p className="text-slate-600">IMO: {vessel.imoNumber} | Call Sign: {vessel.callSign}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        {getStatusBadge(vessel.classStatus)}
                        <button
                            onClick={() => onNavigate('create-job')}
                            className="bg-teal-500 text-white px-5 py-2.5 font-semibold text-sm flex items-center gap-2 hover:bg-teal-600"
                        >
                            <Plus size={18} />
                            Create Job Request
                        </button>
                    </div>
                </div>
            </div>

            {/* Basic Info & Technical Info */}
            <div className="grid lg:grid-cols-2 gap-6">
                {/* Basic Info */}
                <div className="bg-white border border-slate-200">
                    <div className="px-6 py-4 border-b border-slate-200">
                        <h2 className="font-heading font-bold text-navy-600">Basic Information</h2>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Vessel Name</div>
                                <div className="text-navy-600 font-medium">{vessel.name}</div>
                            </div>
                            <div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">IMO Number</div>
                                <div className="text-navy-600 font-medium">{vessel.imoNumber}</div>
                            </div>
                            <div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Call Sign</div>
                                <div className="text-navy-600 font-medium">{vessel.callSign}</div>
                            </div>
                            <div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">MMSI</div>
                                <div className="text-navy-600 font-medium">{vessel.mmsi}</div>
                            </div>
                            <div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Flag State</div>
                                <div className="flex items-center gap-2">
                                    <Flag size={14} className="text-slate-400" />
                                    <span className="text-navy-600 font-medium">{vessel.flagState}</span>
                                </div>
                            </div>
                            <div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Port of Registry</div>
                                <div className="flex items-center gap-2">
                                    <Anchor size={14} className="text-slate-400" />
                                    <span className="text-navy-600 font-medium">{vessel.portOfRegistry}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technical Info */}
                <div className="bg-white border border-slate-200">
                    <div className="px-6 py-4 border-b border-slate-200">
                        <h2 className="font-heading font-bold text-navy-600">Technical Information</h2>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Year Built</div>
                                <div className="flex items-center gap-2">
                                    <Calendar size={14} className="text-slate-400" />
                                    <span className="text-navy-600 font-medium">{vessel.yearBuilt}</span>
                                </div>
                            </div>
                            <div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Ship Type</div>
                                <div className="text-navy-600 font-medium">{vessel.shipType}</div>
                            </div>
                            <div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Gross Tonnage</div>
                                <div className="text-navy-600 font-medium">{vessel.grossTonnage.toLocaleString()} GT</div>
                            </div>
                            <div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Net Tonnage</div>
                                <div className="text-navy-600 font-medium">{vessel.netTonnage.toLocaleString()} NT</div>
                            </div>
                            <div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Deadweight</div>
                                <div className="text-navy-600 font-medium">{vessel.deadweight.toLocaleString()} DWT</div>
                            </div>
                            <div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Engine Type</div>
                                <div className="flex items-center gap-2">
                                    <Settings size={14} className="text-slate-400" />
                                    <span className="text-navy-600 font-medium text-sm">{vessel.engineType}</span>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Builder</div>
                                <div className="flex items-center gap-2">
                                    <Building2 size={14} className="text-slate-400" />
                                    <span className="text-navy-600 font-medium">{vessel.builderName}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Certificates */}
            <div className="bg-white border border-slate-200">
                <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
                    <h2 className="font-heading font-bold text-navy-600 flex items-center gap-2">
                        <Award size={20} className="text-teal-500" />
                        Certificates
                    </h2>
                    <span className="text-sm text-slate-500">{vesselCertificates.length} certificates</span>
                </div>

                {vesselCertificates.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Certificate</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">UTN</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Issue Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Expiry Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-right text-xs font-semibold text-slate-600 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {vesselCertificates.map((cert) => (
                                    <tr key={cert.id} className="hover:bg-slate-50">
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-navy-600">{cert.certificateName}</div>
                                            <div className="text-xs text-slate-500">{cert.issuingAuthority}</div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-600 font-mono">{cert.utn}</td>
                                        <td className="px-6 py-4 text-sm text-slate-600">{cert.issueDate}</td>
                                        <td className="px-6 py-4 text-sm text-slate-600">{cert.expiryDate}</td>
                                        <td className="px-6 py-4">{getCertStatus(cert.status)}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-end gap-2">
                                                <button className="p-2 text-slate-500 hover:text-teal-600 hover:bg-teal-50">
                                                    <Download size={16} />
                                                </button>
                                                <button className="p-2 text-slate-500 hover:text-teal-600 hover:bg-teal-50">
                                                    <QrCode size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="p-12 text-center">
                        <Award size={40} className="text-slate-300 mx-auto mb-3" />
                        <p className="text-slate-600">No certificates found for this vessel.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ClientVesselDetails;
