// ============================================
// GIRIK CLASS - SERVICES PAGE
// Complete Maritime Classification Services
// ============================================

import React, { useState } from 'react';
import {
    Ship,
    FileCheck,
    Flag,
    Leaf,
    Anchor,
    Shield,
    Wrench,
    QrCode,
    ArrowRight,
    CheckCircle,
    ChevronDown,
    Phone,
    Mail,
    Globe,
    Award,
    Settings,
    Gauge,
    FileText,
    Compass,
    Container,
    Radio,
    Thermometer,
    Cpu,
    Users
} from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { PageType } from '../types';

interface ServicesPageProps {
    onNavigate: (page: PageType) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
    const [activeTab, setActiveTab] = useState('classification');

    // Main Service Categories
    const serviceCategories = [
        { id: 'classification', label: 'Classification', icon: Ship },
        { id: 'statutory', label: 'Statutory', icon: FileCheck },
        { id: 'flag', label: 'Flag State', icon: Flag },
        { id: 'environmental', label: 'Environmental', icon: Leaf }
    ];

    // Classification Services
    const classificationServices = {
        title: 'Ship Classification',
        description: 'GIRIK Class provides hull and machinery classification services for all types of vessels. Our classification Rules ensure structural integrity, safe operation, and regulatory compliance throughout the vessel lifecycle.',
        image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop',
        services: [
            {
                title: 'Hull Classification',
                description: 'Structural classification covering hull construction, materials, scantlings, and integrity according to GIRIK Class Rules.',
                items: ['New Construction Surveys', 'Annual Hull Surveys', 'Intermediate Surveys', 'Special Surveys (Class Renewal)', 'Hull Damage Surveys', 'Thickness Measurements']
            },
            {
                title: 'Machinery Classification',
                description: 'Classification of main propulsion machinery, auxiliary systems, and essential equipment.',
                items: ['Main Engine Surveys', 'Auxiliary Machinery', 'Propeller & Shafting', 'Boilers & Pressure Vessels', 'Refrigeration Systems', 'Tailshaft Surveys']
            },
            {
                title: 'Electrical Systems',
                description: 'Classification of electrical installations, power generation, and distribution systems.',
                items: ['High Voltage Systems', 'Power Management', 'Emergency Systems', 'Navigation Equipment', 'Communication Systems', 'Automation & Control']
            }
        ]
    };

    // Statutory Services
    const statutoryServices = {
        title: 'Statutory Certification',
        description: 'As a Recognized Organization authorized by 40+ flag administrations, GIRIK Class conducts surveys and issues statutory certificates required under international maritime conventions.',
        image: 'https://images.unsplash.com/photo-1562078809-b5e5c4a1ab16?q=80&w=1200&auto=format&fit=crop',
        certificates: [
            { name: 'Safety Construction Certificate', convention: 'SOLAS' },
            { name: 'Safety Equipment Certificate', convention: 'SOLAS' },
            { name: 'Safety Radio Certificate', convention: 'SOLAS' },
            { name: 'International Load Line Certificate', convention: 'LL 1966' },
            { name: 'International Tonnage Certificate', convention: 'TM 1969' },
            { name: 'IOPP Certificate', convention: 'MARPOL Annex I' },
            { name: 'IAPP Certificate', convention: 'MARPOL Annex VI' },
            { name: 'ISPP Certificate', convention: 'MARPOL Annex IV' },
            { name: 'Document of Compliance (ISM)', convention: 'ISM Code' },
            { name: 'Safety Management Certificate', convention: 'ISM Code' },
            { name: 'International Ship Security Certificate', convention: 'ISPS Code' },
            { name: 'Maritime Labour Certificate', convention: 'MLC 2006' }
        ]
    };

    // Flag State Services
    const flagServices = {
        title: 'Flag State Authorization',
        description: 'GIRIK Class is authorized as a Recognized Organization by over 40 flag state administrations to perform statutory surveys and issue certificates on their behalf.',
        image: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?q=80&w=1200&auto=format&fit=crop',
        flags: [
            { name: 'Panama', region: 'Americas' },
            { name: 'Liberia', region: 'Africa' },
            { name: 'Marshall Islands', region: 'Pacific' },
            { name: 'Bahamas', region: 'Americas' },
            { name: 'Malta', region: 'Europe' },
            { name: 'Singapore', region: 'Asia' },
            { name: 'Tuvalu', region: 'Pacific' },
            { name: 'Palau', region: 'Pacific' },
            { name: 'Comoros', region: 'Africa' },
            { name: 'Saint Kitts & Nevis', region: 'Americas' },
            { name: 'Belize', region: 'Americas' },
            { name: 'Sierra Leone', region: 'Africa' },
            { name: 'Tanzania', region: 'Africa' },
            { name: 'Togo', region: 'Africa' },
            { name: 'Moldova', region: 'Europe' },
            { name: 'Mongolia', region: 'Asia' }
        ]
    };

    // Environmental Services
    const environmentalServices = {
        title: 'Environmental Services',
        description: 'GIRIK Class provides comprehensive environmental compliance services to help ship owners and operators meet increasingly stringent environmental regulations.',
        image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=1200&auto=format&fit=crop',
        services: [
            {
                title: 'EU MRV Verification',
                description: 'Verification of CO2 emissions data and fuel consumption reporting under EU MRV Regulation.',
                icon: Gauge
            },
            {
                title: 'IMO DCS',
                description: 'Data collection and reporting of fuel oil consumption under IMO Data Collection System.',
                icon: FileText
            },
            {
                title: 'CII Rating',
                description: 'Carbon Intensity Indicator calculation, rating assessment, and improvement planning.',
                icon: Thermometer
            },
            {
                title: 'EEXI Compliance',
                description: 'Energy Efficiency Existing Ship Index verification and technical file preparation.',
                icon: Settings
            },
            {
                title: 'EU ETS',
                description: 'EU Emissions Trading System compliance support and verification services.',
                icon: Globe
            },
            {
                title: 'Ballast Water',
                description: 'Ballast Water Management Plan approval and system commissioning surveys.',
                icon: Container
            }
        ]
    };

    // Survey Types
    const surveyTypes = [
        {
            title: 'Initial Survey',
            description: 'Complete survey of new vessel before entry into class or first statutory certification.',
            icon: Anchor
        },
        {
            title: 'Annual Survey',
            description: 'Yearly examination to confirm vessel maintains class and statutory compliance.',
            icon: Shield
        },
        {
            title: 'Intermediate Survey',
            description: 'Mid-period survey between special surveys, typically at 2.5 years.',
            icon: Compass
        },
        {
            title: 'Special Survey',
            description: 'Comprehensive 5-year class renewal survey including detailed structural examination.',
            icon: Wrench
        },
        {
            title: 'Bottom Survey',
            description: 'Underwater hull examination in drydock or by divers/ROV afloat.',
            icon: Ship
        },
        {
            title: 'Occasional/Damage',
            description: 'Unscheduled surveys for damage assessment, repairs, or modifications.',
            icon: Settings
        }
    ];

    return (
        <div>
            {/* HERO SECTION */}
            <section className="relative py-32 pt-40" style={{ background: '#0B2545' }}>
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=2070&auto=format&fit=crop")' }}
                />
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-2 text-sm font-semibold uppercase tracking-wider mb-6" style={{ background: '#00A896', color: 'white' }}>
                            Our Services
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
                            Classification & Certification Services
                        </h1>
                        <p className="text-xl text-white/70 leading-relaxed">
                            Comprehensive maritime classification, statutory certification, and
                            technical services ensuring vessel safety and regulatory compliance.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE TABS */}
            <section className="py-4" style={{ background: 'white', borderBottom: '1px solid #e5e7eb' }}>
                <div className="container-custom">
                    <div className="flex flex-wrap gap-2">
                        {serviceCategories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={`flex items-center gap-2 px-6 py-4 font-medium transition-all ${activeTab === cat.id
                                        ? 'text-white'
                                        : 'text-slate-600 hover:bg-slate-100'
                                    }`}
                                style={activeTab === cat.id ? { background: '#0B2545' } : {}}
                            >
                                <cat.icon size={18} />
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* CLASSIFICATION TAB */}
            {activeTab === 'classification' && (
                <section className="py-20 bg-white">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
                            <div>
                                <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#00A896' }}>
                                    Core Service
                                </span>
                                <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-6" style={{ color: '#0B2545' }}>
                                    {classificationServices.title}
                                </h2>
                                <p className="leading-relaxed mb-8" style={{ color: '#6b7c93', fontSize: '1.0625rem' }}>
                                    {classificationServices.description}
                                </p>
                                <button
                                    onClick={() => onNavigate('contact')}
                                    className="px-8 py-4 font-semibold flex items-center gap-3"
                                    style={{ background: '#0B2545', color: 'white' }}
                                >
                                    Request Classification <ArrowRight size={18} />
                                </button>
                            </div>
                            <div>
                                <img
                                    src={classificationServices.image}
                                    alt="Ship classification"
                                    className="w-full shadow-2xl"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {classificationServices.services.map((service, index) => (
                                <div key={index} className="p-8" style={{ background: '#f8fafc' }}>
                                    <h3 className="text-xl font-heading font-bold mb-3" style={{ color: '#0B2545' }}>
                                        {service.title}
                                    </h3>
                                    <p className="text-sm mb-6" style={{ color: '#6b7c93' }}>
                                        {service.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {service.items.map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm">
                                                <CheckCircle size={14} style={{ color: '#00A896' }} />
                                                <span style={{ color: '#0B2545' }}>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* STATUTORY TAB */}
            {activeTab === 'statutory' && (
                <section className="py-20 bg-white">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
                            <div>
                                <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#00A896' }}>
                                    Recognized Organization
                                </span>
                                <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-6" style={{ color: '#0B2545' }}>
                                    {statutoryServices.title}
                                </h2>
                                <p className="leading-relaxed mb-8" style={{ color: '#6b7c93', fontSize: '1.0625rem' }}>
                                    {statutoryServices.description}
                                </p>
                                <button
                                    onClick={() => onNavigate('contact')}
                                    className="px-8 py-4 font-semibold flex items-center gap-3"
                                    style={{ background: '#0B2545', color: 'white' }}
                                >
                                    Request Statutory Survey <ArrowRight size={18} />
                                </button>
                            </div>
                            <div>
                                <img
                                    src={statutoryServices.image}
                                    alt="Statutory certification"
                                    className="w-full shadow-2xl"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {statutoryServices.certificates.map((cert, index) => (
                                <div key={index} className="flex items-center gap-4 p-4" style={{ background: '#f8fafc' }}>
                                    <FileCheck size={20} style={{ color: '#00A896' }} />
                                    <div>
                                        <div className="font-medium" style={{ color: '#0B2545' }}>{cert.name}</div>
                                        <div className="text-xs" style={{ color: '#6b7c93' }}>{cert.convention}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* FLAG STATE TAB */}
            {activeTab === 'flag' && (
                <section className="py-20 bg-white">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
                            <div>
                                <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#00A896' }}>
                                    Global Recognition
                                </span>
                                <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-6" style={{ color: '#0B2545' }}>
                                    {flagServices.title}
                                </h2>
                                <p className="leading-relaxed mb-8" style={{ color: '#6b7c93', fontSize: '1.0625rem' }}>
                                    {flagServices.description}
                                </p>
                                <div className="p-6 mb-8" style={{ background: '#f8fafc' }}>
                                    <div className="text-4xl font-heading font-bold mb-2" style={{ color: '#00A896' }}>40+</div>
                                    <div className="text-sm" style={{ color: '#6b7c93' }}>Flag State Authorizations</div>
                                </div>
                                <button
                                    onClick={() => onNavigate('contact')}
                                    className="px-8 py-4 font-semibold flex items-center gap-3"
                                    style={{ background: '#0B2545', color: 'white' }}
                                >
                                    Contact for Flag Services <ArrowRight size={18} />
                                </button>
                            </div>
                            <div>
                                <img
                                    src={flagServices.image}
                                    alt="Flag state services"
                                    className="w-full shadow-2xl"
                                />
                            </div>
                        </div>

                        <h3 className="text-xl font-heading font-bold mb-6" style={{ color: '#0B2545' }}>
                            Authorized Flag States (Partial List)
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
                            {flagServices.flags.map((flag, index) => (
                                <div key={index} className="p-4 text-center" style={{ background: '#f8fafc' }}>
                                    <Flag size={20} style={{ color: '#00A896' }} className="mx-auto mb-2" />
                                    <div className="text-sm font-medium" style={{ color: '#0B2545' }}>{flag.name}</div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-6">
                            <span className="px-6 py-3 inline-block font-semibold" style={{ background: '#00A896', color: 'white' }}>
                                + 24 More Flag Administrations
                            </span>
                        </div>
                    </div>
                </section>
            )}

            {/* ENVIRONMENTAL TAB */}
            {activeTab === 'environmental' && (
                <section className="py-20 bg-white">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
                            <div>
                                <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#00A896' }}>
                                    Sustainability
                                </span>
                                <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-6" style={{ color: '#0B2545' }}>
                                    {environmentalServices.title}
                                </h2>
                                <p className="leading-relaxed mb-8" style={{ color: '#6b7c93', fontSize: '1.0625rem' }}>
                                    {environmentalServices.description}
                                </p>
                                <button
                                    onClick={() => onNavigate('contact')}
                                    className="px-8 py-4 font-semibold flex items-center gap-3"
                                    style={{ background: '#0B2545', color: 'white' }}
                                >
                                    Request Environmental Services <ArrowRight size={18} />
                                </button>
                            </div>
                            <div>
                                <img
                                    src={environmentalServices.image}
                                    alt="Environmental services"
                                    className="w-full shadow-2xl"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {environmentalServices.services.map((service, index) => (
                                <div key={index} className="p-8" style={{ background: '#f8fafc', borderLeft: '4px solid #00A896' }}>
                                    <service.icon size={28} style={{ color: '#00A896' }} className="mb-4" />
                                    <h3 className="text-xl font-heading font-bold mb-3" style={{ color: '#0B2545' }}>
                                        {service.title}
                                    </h3>
                                    <p className="text-sm" style={{ color: '#6b7c93' }}>
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* SURVEY TYPES */}
            <section className="py-20" style={{ background: '#0B2545' }}>
                <div className="container-custom">
                    <div className="text-center mb-14">
                        <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#00A896' }}>
                            Survey Regime
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-3 mb-4">
                            Types of Surveys
                        </h2>
                        <p className="max-w-2xl mx-auto text-white/70">
                            Our surveyors conduct various types of surveys to maintain vessel class
                            and statutory certification throughout the operational lifecycle.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {surveyTypes.map((type, index) => (
                            <div key={index} className="p-6" style={{ background: 'rgba(255,255,255,0.05)' }}>
                                <type.icon size={28} style={{ color: '#00A896' }} className="mb-4" />
                                <h3 className="text-lg font-heading font-bold text-white mb-2">
                                    {type.title}
                                </h3>
                                <p className="text-sm text-white/70">
                                    {type.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* E-CERTIFICATES */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#00A896' }}>
                                Digital Innovation
                            </span>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-6" style={{ color: '#0B2545' }}>
                                Digital e-Certificates
                            </h2>
                            <p className="mb-6 leading-relaxed" style={{ color: '#6b7c93', fontSize: '1.0625rem' }}>
                                All GIRIK Class certificates are issued in digital format with unique
                                QR codes enabling instant verification by port state control, charterers,
                                underwriters, and other stakeholders worldwide.
                            </p>
                            <div className="space-y-3 mb-8">
                                {[
                                    'IMO GISIS compliant electronic certificates',
                                    'Instant QR code verification - no login required',
                                    'Real-time status updates available 24/7',
                                    'Secure blockchain-backed authenticity'
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle size={18} style={{ color: '#00A896' }} />
                                        <span style={{ color: '#0B2545' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={() => onNavigate('verify')}
                                className="px-8 py-4 font-semibold flex items-center gap-3"
                                style={{ background: '#00A896', color: 'white' }}
                            >
                                <QrCode size={20} /> Verify Certificate
                            </button>
                        </div>

                        <div className="text-center p-10" style={{ background: '#f8fafc' }}>
                            <QrCode size={200} style={{ color: '#0B2545' }} className="mx-auto mb-6" />
                            <p className="text-sm" style={{ color: '#6b7c93' }}>
                                Scan any GIRIK Class certificate QR code to instantly verify authenticity
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20" style={{ background: '#00A896' }}>
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
                        Contact our team for classification inquiries, survey requests, transfer of class,
                        or any maritime certification requirements.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={() => onNavigate('contact')}
                            className="px-10 py-4 font-semibold flex items-center gap-3"
                            style={{ background: 'white', color: '#0B2545' }}
                        >
                            Contact Us <ArrowRight size={18} />
                        </button>
                        <a
                            href={`tel:${COMPANY_INFO.phone}`}
                            className="px-10 py-4 font-semibold flex items-center gap-3 border-2 border-white text-white hover:bg-white hover:text-[#0B2545] transition-all"
                        >
                            <Phone size={18} /> {COMPANY_INFO.phone}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
