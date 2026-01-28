// ============================================
// GIRIK SHIPPING - CLIENT VESSELS PAGE
// Vessel List and Management
// ============================================

import React, { useState } from 'react';
import {
    Ship,
    Search,
    Filter,
    Plus,
    Eye,
    MoreVertical,
    Anchor,
    Flag,
    Calendar,
    CheckCircle,
    AlertCircle,
    XCircle
} from 'lucide-react';
import { ClientPageType } from '../types';
import { CLIENT_VESSELS } from '../constants';

interface ClientVesselsProps {
    onNavigate: (page: ClientPageType, id?: string) => void;
}

const ClientVessels: React.FC<ClientVesselsProps> = ({ onNavigate }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterStatus, setFilterStatus] = useState<string>('all');

    // Filter vessels
    const filteredVessels = CLIENT_VESSELS.filter(vessel => {
        const matchesSearch =
            vessel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            vessel.imoNumber.includes(searchQuery);
        const matchesStatus = filterStatus === 'all' || vessel.classStatus === filterStatus;
        return matchesSearch && matchesStatus;
    });

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'active':
                return (
                    <span className="inline-flex items-center gap-1 text-xs bg-teal-100 text-teal-700 px-2 py-1 font-medium">
                        <CheckCircle size={12} /> Active
                    </span>
                );
            case 'suspended':
                return (
                    <span className="inline-flex items-center gap-1 text-xs bg-amber-100 text-amber-700 px-2 py-1 font-medium">
                        <AlertCircle size={12} /> Suspended
                    </span>
                );
            case 'withdrawn':
                return (
                    <span className="inline-flex items-center gap-1 text-xs bg-red-100 text-red-700 px-2 py-1 font-medium">
                        <XCircle size={12} /> Withdrawn
                    </span>
                );
            default:
                return null;
        }
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-heading font-bold text-navy-600">My Vessels</h1>
                    <p className="text-slate-600">Manage your fleet and view vessel details</p>
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
                            placeholder="Search by vessel name or IMO number..."
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
                            <option value="all">All Status</option>
                            <option value="active">Active</option>
                            <option value="suspended">Suspended</option>
                            <option value="withdrawn">Withdrawn</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Vessels Grid */}
            {filteredVessels.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-4">
                    {filteredVessels.map((vessel) => (
                        <div
                            key={vessel.id}
                            className="bg-white border border-slate-200 hover:shadow-lg transition-shadow"
                        >
                            {/* Card Header */}
                            <div className="p-5 border-b border-slate-100">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-navy-50 flex items-center justify-center">
                                            <Ship className="text-navy-600" size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-heading font-bold text-navy-600 text-lg">
                                                {vessel.name}
                                            </h3>
                                            <p className="text-slate-500 text-sm">IMO: {vessel.imoNumber}</p>
                                        </div>
                                    </div>
                                    {getStatusBadge(vessel.classStatus)}
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-5">
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div className="flex items-center gap-2">
                                        <Flag size={16} className="text-slate-400" />
                                        <div>
                                            <div className="text-slate-500 text-xs">Flag State</div>
                                            <div className="text-navy-600 font-medium">{vessel.flagState}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Anchor size={16} className="text-slate-400" />
                                        <div>
                                            <div className="text-slate-500 text-xs">Ship Type</div>
                                            <div className="text-navy-600 font-medium">{vessel.shipType}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} className="text-slate-400" />
                                        <div>
                                            <div className="text-slate-500 text-xs">Year Built</div>
                                            <div className="text-navy-600 font-medium">{vessel.yearBuilt}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Ship size={16} className="text-slate-400" />
                                        <div>
                                            <div className="text-slate-500 text-xs">Gross Tonnage</div>
                                            <div className="text-navy-600 font-medium">{vessel.grossTonnage.toLocaleString()} GT</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card Footer */}
                            <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                                <button
                                    onClick={() => onNavigate('vessel-details', vessel.id)}
                                    className="text-sm text-teal-600 font-medium flex items-center gap-1 hover:text-teal-700"
                                >
                                    <Eye size={16} />
                                    View Details
                                </button>
                                <button
                                    onClick={() => onNavigate('create-job')}
                                    className="text-sm bg-teal-500 text-white px-3 py-1.5 font-medium flex items-center gap-1 hover:bg-teal-600"
                                >
                                    <Plus size={14} />
                                    Create Job
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                /* Empty State */
                <div className="bg-white border border-slate-200 p-12 text-center">
                    <div className="w-20 h-20 bg-slate-100 mx-auto mb-4 flex items-center justify-center">
                        <Ship size={40} className="text-slate-400" />
                    </div>
                    <h3 className="font-heading font-bold text-navy-600 text-lg mb-2">No Vessels Found</h3>
                    <p className="text-slate-600 max-w-md mx-auto">
                        {searchQuery || filterStatus !== 'all'
                            ? 'No vessels match your search criteria. Try adjusting your filters.'
                            : 'No vessels have been assigned to your account yet. Please contact support for assistance.'}
                    </p>
                </div>
            )}

            {/* Summary Stats */}
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-teal-50 border border-teal-200 p-4 text-center">
                    <div className="text-2xl font-heading font-bold text-teal-600">
                        {CLIENT_VESSELS.filter(v => v.classStatus === 'active').length}
                    </div>
                    <div className="text-sm text-teal-700">Active Vessels</div>
                </div>
                <div className="bg-amber-50 border border-amber-200 p-4 text-center">
                    <div className="text-2xl font-heading font-bold text-amber-600">
                        {CLIENT_VESSELS.filter(v => v.classStatus === 'suspended').length}
                    </div>
                    <div className="text-sm text-amber-700">Suspended</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-4 text-center">
                    <div className="text-2xl font-heading font-bold text-slate-600">
                        {CLIENT_VESSELS.length}
                    </div>
                    <div className="text-sm text-slate-600">Total Fleet</div>
                </div>
            </div>
        </div>
    );
};

export default ClientVessels;
