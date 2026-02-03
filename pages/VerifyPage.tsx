// ============================================
// GIRIK CLASS - VERIFY PAGE
// Certificate Verification Portal
// ============================================

import React, { useState } from 'react';
import {
    QrCode,
    Search,
    CheckCircle,
    XCircle,
    FileCheck,
    Ship,
    Calendar,
    Flag,
    Shield,
    ArrowRight,
    Clock,
    AlertCircle,
    Scan,
    Download,
    Printer,
    ExternalLink,
    Info,
    Anchor
} from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { PageType } from '../types';

interface VerifyPageProps {
    onNavigate: (page: PageType) => void;
}

const VerifyPage: React.FC<VerifyPageProps> = ({ onNavigate }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchType, setSearchType] = useState<'utn' | 'imo'>('utn');
    const [isSearching, setIsSearching] = useState(false);
    const [searchResult, setSearchResult] = useState<'valid' | 'invalid' | 'expired' | null>(null);

    // Mock certificate data
    const mockCertificate = {
        utn: 'GIRIK-2026-SC-001234',
        type: 'Safety Construction Certificate',
        vessel: 'M/V Pacific Explorer',
        imo: '9876543',
        flag: 'Panama',
        issueDate: '15 January 2026',
        expiryDate: '14 January 2031',
        status: 'Valid',
        issuingOffice: 'GIRIK Class, Mumbai',
        surveyor: 'Capt. R. Kumar'
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;

        setIsSearching(true);
        setTimeout(() => {
            setIsSearching(false);
            // Demo: Show valid result if query matches, otherwise show invalid
            if (searchQuery.toLowerCase().includes('girik') || searchQuery.includes('9876543')) {
                setSearchResult('valid');
            } else {
                setSearchResult('invalid');
            }
        }, 1500);
    };

    // Verification features
    const features = [
        {
            icon: Scan,
            title: 'QR Code Scan',
            description: 'Scan the QR code on any GIRIK Class certificate using your mobile device for instant verification.'
        },
        {
            icon: Search,
            title: 'UTN Search',
            description: 'Enter the Unique Transaction Number (UTN) printed on the certificate to verify authenticity.'
        },
        {
            icon: Ship,
            title: 'IMO Number Search',
            description: 'Search by vessel IMO number to view all valid certificates issued for that vessel.'
        },
        {
            icon: Clock,
            title: 'Real-Time Status',
            description: 'Get real-time certificate status including validity, conditions, and any endorsements.'
        }
    ];

    // Certificate types
    const certificateTypes = [
        'Classification Certificate',
        'Safety Construction Certificate',
        'Safety Equipment Certificate',
        'Safety Radio Certificate',
        'Load Line Certificate',
        'IOPP Certificate',
        'IAPP Certificate',
        'Document of Compliance (ISM)',
        'Safety Management Certificate',
        'ISPS Certificate',
        'MLC Certificate',
        'Tonnage Certificate'
    ];

    return (
        <div>
            {/* HERO SECTION */}
            <section className="relative py-32 pt-40" style={{ background: '#0B2545' }}>
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1562078809-b5e5c4a1ab16?q=80&w=2070&auto=format&fit=crop")' }}
                />
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-2 text-sm font-semibold uppercase tracking-wider mb-6" style={{ background: '#00A896', color: 'white' }}>
                            Certificate Verification
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
                            Verify Certificates
                        </h1>
                        <p className="text-xl text-white/70 leading-relaxed">
                            Instantly verify the authenticity of any certificate issued by GIRIK Class.
                            No login required - verification is free and publicly accessible.
                        </p>
                    </div>
                </div>
            </section>

            {/* VERIFICATION FORM */}
            <section className="py-16 bg-white">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto">
                        <div className="p-8 shadow-xl" style={{ background: '#f8fafc' }}>
                            <div className="text-center mb-8">
                                <QrCode size={48} style={{ color: '#00A896' }} className="mx-auto mb-4" />
                                <h2 className="text-2xl font-heading font-bold mb-2" style={{ color: '#0B2545' }}>
                                    Certificate Verification Portal
                                </h2>
                                <p style={{ color: '#6b7c93' }}>
                                    Enter the certificate UTN or vessel IMO number to verify
                                </p>
                            </div>

                            {/* Search Type Toggle */}
                            <div className="flex gap-2 mb-6">
                                <button
                                    onClick={() => setSearchType('utn')}
                                    className={`flex-1 py-3 font-medium transition-all ${searchType === 'utn'
                                            ? 'text-white'
                                            : 'text-slate-600 bg-white'
                                        }`}
                                    style={searchType === 'utn' ? { background: '#0B2545' } : {}}
                                >
                                    Search by UTN
                                </button>
                                <button
                                    onClick={() => setSearchType('imo')}
                                    className={`flex-1 py-3 font-medium transition-all ${searchType === 'imo'
                                            ? 'text-white'
                                            : 'text-slate-600 bg-white'
                                        }`}
                                    style={searchType === 'imo' ? { background: '#0B2545' } : {}}
                                >
                                    Search by IMO Number
                                </button>
                            </div>

                            {/* Search Form */}
                            <form onSubmit={handleSearch} className="mb-6">
                                <div className="flex gap-3">
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder={searchType === 'utn' ? 'Enter UTN (e.g., GIRIK-2026-SC-001234)' : 'Enter IMO Number (e.g., 9876543)'}
                                        className="flex-1 px-4 py-4 border-2 border-slate-200 focus:border-[#00A896] focus:outline-none transition-colors text-lg"
                                    />
                                    <button
                                        type="submit"
                                        disabled={isSearching}
                                        className="px-8 py-4 font-semibold flex items-center gap-3 transition-all disabled:opacity-70"
                                        style={{ background: '#00A896', color: 'white' }}
                                    >
                                        {isSearching ? (
                                            <>Searching...</>
                                        ) : (
                                            <>
                                                <Search size={20} /> Verify
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>

                            {/* Demo Note */}
                            <div className="p-4 flex items-start gap-3" style={{ background: 'rgba(0, 168, 150, 0.1)' }}>
                                <Info size={18} style={{ color: '#00A896' }} className="mt-0.5 flex-shrink-0" />
                                <div className="text-sm" style={{ color: '#0B2545' }}>
                                    <strong>Demo:</strong> Try searching for "GIRIK-2026-SC-001234" or IMO "9876543" to see a sample valid certificate.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEARCH RESULTS */}
            {searchResult && (
                <section className="py-16" style={{ background: searchResult === 'valid' ? '#f0fdf4' : '#fef2f2' }}>
                    <div className="container-custom">
                        <div className="max-w-3xl mx-auto">
                            {searchResult === 'valid' ? (
                                <div className="bg-white shadow-xl overflow-hidden">
                                    {/* Valid Header */}
                                    <div className="p-6 flex items-center gap-4" style={{ background: '#00A896' }}>
                                        <CheckCircle size={40} className="text-white" />
                                        <div>
                                            <h3 className="text-xl font-heading font-bold text-white">
                                                Certificate Verified - VALID
                                            </h3>
                                            <p className="text-white/80">
                                                This certificate is authentic and currently valid
                                            </p>
                                        </div>
                                    </div>

                                    {/* Certificate Details */}
                                    <div className="p-8">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="text-xs uppercase tracking-wider" style={{ color: '#6b7c93' }}>
                                                    Certificate Type
                                                </label>
                                                <p className="font-semibold text-lg" style={{ color: '#0B2545' }}>
                                                    {mockCertificate.type}
                                                </p>
                                            </div>
                                            <div>
                                                <label className="text-xs uppercase tracking-wider" style={{ color: '#6b7c93' }}>
                                                    UTN
                                                </label>
                                                <p className="font-semibold text-lg" style={{ color: '#0B2545' }}>
                                                    {mockCertificate.utn}
                                                </p>
                                            </div>
                                            <div>
                                                <label className="text-xs uppercase tracking-wider" style={{ color: '#6b7c93' }}>
                                                    Vessel Name
                                                </label>
                                                <p className="font-semibold text-lg" style={{ color: '#0B2545' }}>
                                                    {mockCertificate.vessel}
                                                </p>
                                            </div>
                                            <div>
                                                <label className="text-xs uppercase tracking-wider" style={{ color: '#6b7c93' }}>
                                                    IMO Number
                                                </label>
                                                <p className="font-semibold text-lg" style={{ color: '#0B2545' }}>
                                                    {mockCertificate.imo}
                                                </p>
                                            </div>
                                            <div>
                                                <label className="text-xs uppercase tracking-wider" style={{ color: '#6b7c93' }}>
                                                    Flag State
                                                </label>
                                                <p className="font-semibold text-lg flex items-center gap-2" style={{ color: '#0B2545' }}>
                                                    <Flag size={16} style={{ color: '#00A896' }} />
                                                    {mockCertificate.flag}
                                                </p>
                                            </div>
                                            <div>
                                                <label className="text-xs uppercase tracking-wider" style={{ color: '#6b7c93' }}>
                                                    Status
                                                </label>
                                                <p className="font-semibold text-lg flex items-center gap-2" style={{ color: '#00A896' }}>
                                                    <CheckCircle size={16} />
                                                    {mockCertificate.status}
                                                </p>
                                            </div>
                                            <div>
                                                <label className="text-xs uppercase tracking-wider" style={{ color: '#6b7c93' }}>
                                                    Issue Date
                                                </label>
                                                <p className="font-semibold text-lg" style={{ color: '#0B2545' }}>
                                                    {mockCertificate.issueDate}
                                                </p>
                                            </div>
                                            <div>
                                                <label className="text-xs uppercase tracking-wider" style={{ color: '#6b7c93' }}>
                                                    Expiry Date
                                                </label>
                                                <p className="font-semibold text-lg" style={{ color: '#0B2545' }}>
                                                    {mockCertificate.expiryDate}
                                                </p>
                                            </div>
                                            <div>
                                                <label className="text-xs uppercase tracking-wider" style={{ color: '#6b7c93' }}>
                                                    Issuing Office
                                                </label>
                                                <p className="font-semibold" style={{ color: '#0B2545' }}>
                                                    {mockCertificate.issuingOffice}
                                                </p>
                                            </div>
                                            <div>
                                                <label className="text-xs uppercase tracking-wider" style={{ color: '#6b7c93' }}>
                                                    Attending Surveyor
                                                </label>
                                                <p className="font-semibold" style={{ color: '#0B2545' }}>
                                                    {mockCertificate.surveyor}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-slate-200">
                                            <button className="px-6 py-3 font-medium flex items-center gap-2 transition-all" style={{ background: '#0B2545', color: 'white' }}>
                                                <Download size={16} /> Download PDF
                                            </button>
                                            <button className="px-6 py-3 font-medium flex items-center gap-2 transition-all" style={{ border: '2px solid #0B2545', color: '#0B2545' }}>
                                                <Printer size={16} /> Print
                                            </button>
                                            <button
                                                onClick={() => { setSearchResult(null); setSearchQuery(''); }}
                                                className="px-6 py-3 font-medium flex items-center gap-2 text-slate-600 hover:text-slate-800"
                                            >
                                                New Search
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-white shadow-xl overflow-hidden">
                                    <div className="p-6 flex items-center gap-4" style={{ background: '#ef4444' }}>
                                        <XCircle size={40} className="text-white" />
                                        <div>
                                            <h3 className="text-xl font-heading font-bold text-white">
                                                Certificate Not Found
                                            </h3>
                                            <p className="text-white/80">
                                                No valid certificate matches your search query
                                            </p>
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <p className="mb-6" style={{ color: '#6b7c93' }}>
                                            The certificate number or IMO you entered could not be verified. This could mean:
                                        </p>
                                        <ul className="space-y-2 mb-6">
                                            {[
                                                'The certificate number was entered incorrectly',
                                                'The certificate was not issued by GIRIK Class',
                                                'The certificate has been withdrawn or cancelled'
                                            ].map((item, index) => (
                                                <li key={index} className="flex items-center gap-3 text-sm" style={{ color: '#0B2545' }}>
                                                    <AlertCircle size={14} style={{ color: '#ef4444' }} />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <button
                                            onClick={() => { setSearchResult(null); setSearchQuery(''); }}
                                            className="px-6 py-3 font-medium flex items-center gap-2"
                                            style={{ background: '#0B2545', color: 'white' }}
                                        >
                                            Try Again
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* FEATURES */}
            <section className="py-20" style={{ background: '#f8fafc' }}>
                <div className="container-custom">
                    <div className="text-center mb-14">
                        <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#00A896' }}>
                            How It Works
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4" style={{ color: '#0B2545' }}>
                            Verification Methods
                        </h2>
                        <p className="max-w-2xl mx-auto" style={{ color: '#6b7c93' }}>
                            Multiple ways to verify the authenticity of GIRIK Class certificates.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
                                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center" style={{ background: '#0B2545' }}>
                                    <feature.icon size={28} className="text-white" />
                                </div>
                                <h3 className="font-heading font-bold text-lg mb-3" style={{ color: '#0B2545' }}>
                                    {feature.title}
                                </h3>
                                <p className="text-sm" style={{ color: '#6b7c93' }}>
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CERTIFICATE TYPES */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#00A896' }}>
                                Verifiable Certificates
                            </span>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-6" style={{ color: '#0B2545' }}>
                                What Can You Verify?
                            </h2>
                            <p className="mb-8" style={{ color: '#6b7c93', fontSize: '1.0625rem' }}>
                                All certificates issued by GIRIK Class are available for verification
                                through this portal. This includes both classification and statutory certificates.
                            </p>

                            <div className="grid grid-cols-2 gap-3">
                                {certificateTypes.map((cert, index) => (
                                    <div key={index} className="flex items-center gap-3 p-3" style={{ background: '#f8fafc' }}>
                                        <FileCheck size={16} style={{ color: '#00A896' }} />
                                        <span className="text-sm font-medium" style={{ color: '#0B2545' }}>{cert}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="text-center p-10" style={{ background: '#f8fafc' }}>
                            <div className="mb-6">
                                <Shield size={80} style={{ color: '#0B2545' }} className="mx-auto" />
                            </div>
                            <h3 className="text-2xl font-heading font-bold mb-4" style={{ color: '#0B2545' }}>
                                Authentic & Secure
                            </h3>
                            <p className="text-sm mb-6" style={{ color: '#6b7c93' }}>
                                All GIRIK Class certificates are digitally signed and secured
                                with blockchain technology to prevent tampering or forgery.
                            </p>
                            <div className="flex justify-center gap-3">
                                <span className="px-4 py-2 text-xs font-semibold uppercase tracking-wider" style={{ background: '#0B2545', color: 'white' }}>
                                    IMO Compliant
                                </span>
                                <span className="px-4 py-2 text-xs font-semibold uppercase tracking-wider" style={{ background: '#00A896', color: 'white' }}>
                                    GISIS Registered
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20" style={{ background: '#0B2545' }}>
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                        Questions About Verification?
                    </h2>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
                        If you have any questions about certificate verification or encounter
                        issues with the portal, our team is here to help.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={() => onNavigate('contact')}
                            className="px-10 py-4 font-semibold flex items-center gap-3"
                            style={{ background: '#00A896', color: 'white' }}
                        >
                            Contact Support <ArrowRight size={18} />
                        </button>
                        <button
                            onClick={() => onNavigate('howItWorks')}
                            className="px-10 py-4 font-semibold flex items-center gap-3 border-2 border-white text-white hover:bg-white hover:text-[#0B2545] transition-all"
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VerifyPage;
