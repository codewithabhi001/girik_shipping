// ============================================
// GIRIK SHIPPING - CLIENT PROFILE PAGE
// Company Profile (Read Only)
// ============================================

import React from 'react';
import {
    Building2,
    MapPin,
    User,
    Mail,
    Phone,
    Calendar,
    Shield,
    Globe
} from 'lucide-react';
import { ClientPageType } from '../types';
import { CLIENT_COMPANY, DEMO_CLIENT } from '../constants';

interface ClientProfileProps {
    onNavigate: (page: ClientPageType, id?: string) => void;
}

const ClientProfile: React.FC<ClientProfileProps> = ({ onNavigate }) => {
    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div>
                <h1 className="text-2xl font-heading font-bold text-navy-600">Company Profile</h1>
                <p className="text-slate-600">Your registered company information</p>
            </div>

            {/* Profile Card */}
            <div className="bg-white border border-slate-200">
                <div className="p-6 border-b border-slate-200">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-navy-100 flex items-center justify-center">
                            <Building2 className="text-navy-600" size={32} />
                        </div>
                        <div>
                            <h2 className="text-xl font-heading font-bold text-navy-600">
                                {CLIENT_COMPANY.companyName}
                            </h2>
                            <p className="text-slate-600">Company Code: {CLIENT_COMPANY.companyCode}</p>
                        </div>
                    </div>
                </div>

                <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Company Details */}
                        <div className="space-y-5">
                            <h3 className="font-heading font-bold text-navy-600 border-b border-slate-200 pb-2">
                                Company Details
                            </h3>

                            <div className="flex items-start gap-3">
                                <Building2 size={18} className="text-teal-500 mt-0.5" />
                                <div>
                                    <div className="text-xs text-slate-500 uppercase tracking-wider">Company Name</div>
                                    <div className="text-navy-600 font-medium">{CLIENT_COMPANY.companyName}</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Shield size={18} className="text-teal-500 mt-0.5" />
                                <div>
                                    <div className="text-xs text-slate-500 uppercase tracking-wider">Company Code</div>
                                    <div className="text-navy-600 font-medium font-mono">{CLIENT_COMPANY.companyCode}</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <MapPin size={18} className="text-teal-500 mt-0.5" />
                                <div>
                                    <div className="text-xs text-slate-500 uppercase tracking-wider">Address</div>
                                    <div className="text-navy-600">{CLIENT_COMPANY.address}</div>
                                    <div className="text-slate-600">{CLIENT_COMPANY.city}, {CLIENT_COMPANY.country}</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Calendar size={18} className="text-teal-500 mt-0.5" />
                                <div>
                                    <div className="text-xs text-slate-500 uppercase tracking-wider">Registered Since</div>
                                    <div className="text-navy-600 font-medium">{CLIENT_COMPANY.registrationDate}</div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-5">
                            <h3 className="font-heading font-bold text-navy-600 border-b border-slate-200 pb-2">
                                Contact Information
                            </h3>

                            <div className="flex items-start gap-3">
                                <User size={18} className="text-teal-500 mt-0.5" />
                                <div>
                                    <div className="text-xs text-slate-500 uppercase tracking-wider">Contact Person</div>
                                    <div className="text-navy-600 font-medium">{CLIENT_COMPANY.contactPerson}</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Mail size={18} className="text-teal-500 mt-0.5" />
                                <div>
                                    <div className="text-xs text-slate-500 uppercase tracking-wider">Email</div>
                                    <div className="text-navy-600">{CLIENT_COMPANY.contactEmail}</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Phone size={18} className="text-teal-500 mt-0.5" />
                                <div>
                                    <div className="text-xs text-slate-500 uppercase tracking-wider">Phone</div>
                                    <div className="text-navy-600 font-medium">{CLIENT_COMPANY.phone}</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Globe size={18} className="text-teal-500 mt-0.5" />
                                <div>
                                    <div className="text-xs text-slate-500 uppercase tracking-wider">Country</div>
                                    <div className="text-navy-600 font-medium">{CLIENT_COMPANY.country}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* User Info */}
            <div className="bg-white border border-slate-200">
                <div className="px-6 py-4 border-b border-slate-200">
                    <h3 className="font-heading font-bold text-navy-600">Your Account</h3>
                </div>
                <div className="p-6">
                    <div className="flex items-center gap-4">
                        {DEMO_CLIENT.avatar ? (
                            <img
                                src={DEMO_CLIENT.avatar}
                                alt={DEMO_CLIENT.name}
                                className="w-16 h-16 object-cover"
                            />
                        ) : (
                            <div className="w-16 h-16 bg-teal-100 flex items-center justify-center">
                                <User className="text-teal-600" size={32} />
                            </div>
                        )}
                        <div>
                            <h4 className="font-heading font-bold text-navy-600">{DEMO_CLIENT.name}</h4>
                            <p className="text-slate-600">{DEMO_CLIENT.email}</p>
                            <span className="inline-block text-xs bg-teal-100 text-teal-700 px-2 py-0.5 mt-2 font-medium">
                                {DEMO_CLIENT.role === 'client_admin' ? 'Admin' : 'User'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Info Notice */}
            <div className="bg-blue-50 border border-blue-200 p-4 flex items-start gap-3">
                <Shield size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-800">
                    <p className="font-medium mb-1">Need to update your information?</p>
                    <p className="text-blue-700">
                        Company profile information is managed by GIRIK Shipping. Please contact our support team to request any changes to your company details.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ClientProfile;
