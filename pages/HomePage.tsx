// ============================================
// GIRIK CLASS - HOME PAGE
// Complete Maritime Classification Society
// ============================================

import React, { useState, useEffect } from 'react';
import {
    ShieldCheck,
    FileCheck,
    Ship,
    Anchor,
    Globe,
    Award,
    CheckCircle,
    ArrowRight,
    ChevronRight,
    ChevronLeft,
    Phone,
    Mail,
    Clock,
    QrCode,
    Flag,
    Users,
    MapPin,
    Calendar,
    Shield,
    Wrench,
    Leaf,
    FileText,
    Building2,
    ExternalLink
} from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { PageType } from '../types';

interface HomePageProps {
    onNavigate: (page: PageType) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
    // Hero Slides - Large cargo vessels, container ships, tankers
    const heroSlides = [
        {
            image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop',
            title: 'Protecting Lives at Sea',
            subtitle: 'GIRIK Class - Independent Ship Classification Society delivering world-class maritime certification services globally',
            badge: 'Classification Excellence'
        },
        {
            image: 'https://images.unsplash.com/photo-1524522173746-f628baad3644?q=80&w=2070&auto=format&fit=crop',
            title: 'EU MRV Compliance 2026',
            subtitle: 'Complete emission monitoring, reporting and verification services for vessels calling at European Union ports',
            badge: 'Environmental Update'
        },
        {
            image: 'https://images.unsplash.com/photo-1586864387789-4ef46a5ab17b?q=80&w=2070&auto=format&fit=crop',
            title: 'Digital e-Certificates',
            subtitle: 'All statutory certificates issued digitally with QR verification codes - instant verification by port state control worldwide',
            badge: 'Digital Innovation'
        },
        {
            image: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=2070&auto=format&fit=crop',
            title: 'Global Surveyor Network',
            subtitle: '120+ qualified surveyors across 50+ countries providing prompt survey attendance in all major ports',
            badge: 'Global Coverage'
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 7000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

    // Core Services
    const coreServices = [
        {
            icon: Ship,
            title: 'Ship Classification',
            desc: 'Hull, machinery and electrical classification according to GIRIK Class Rules. Initial, annual, intermediate and special surveys for all vessel types.',
            link: 'services'
        },
        {
            icon: FileCheck,
            title: 'Statutory Certification',
            desc: 'SOLAS, MARPOL, Load Line, Tonnage certification. ISM/ISPS audits, MLC inspections on behalf of 40+ flag administrations.',
            link: 'services'
        },
        {
            icon: Flag,
            title: 'Flag State Services',
            desc: 'Authorized Recognized Organization for Panama, Liberia, Marshall Islands, Bahamas, Malta and 35+ other flag states.',
            link: 'services'
        },
        {
            icon: Leaf,
            title: 'Environmental Services',
            desc: 'EU MRV verification, IMO DCS, CII/EEXI compliance, ballast water management certification and carbon emission reporting.',
            link: 'services'
        }
    ];

    // Stats
    const stats = [
        { value: '40+', label: 'Flag Authorizations' },
        { value: '2,500+', label: 'Vessels Classed' },
        { value: '120+', label: 'Surveyors Worldwide' },
        { value: '24/7', label: 'Global Support' }
    ];

    // News
    const newsItems = [
        {
            date: '28 Jan 2026',
            title: 'CII Rating Requirements for 2026 - Complete Implementation Guide',
            category: 'Technical Circular',
            image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600&auto=format&fit=crop'
        },
        {
            date: '25 Jan 2026',
            title: 'EU ETS Maritime Shipping - New Compliance Guidelines Published',
            category: 'Environmental',
            image: 'https://images.unsplash.com/photo-1524522173746-f628baad3644?q=80&w=600&auto=format&fit=crop'
        },
        {
            date: '20 Jan 2026',
            title: 'ISM Code Audit Procedures Updated - What Operators Need to Know',
            category: 'Safety Management',
            image: 'https://images.unsplash.com/photo-1586864387789-4ef46a5ab17b?q=80&w=600&auto=format&fit=crop'
        }
    ];

    // Flag States
    const flagStates = ['Panama', 'Liberia', 'Marshall Islands', 'Bahamas', 'Malta', 'Singapore', 'Tuvalu', 'Palau'];

    // Certifications offered
    const certifications = [
        'Safety Construction Certificate',
        'Safety Equipment Certificate',
        'Safety Radio Certificate',
        'Load Line Certificate',
        'IOPP Certificate',
        'ISM DOC & SMC',
        'ISPS Certificate',
        'MLC Certificate'
    ];

    return (
        <div>
            {/* HERO SECTION */}
            <section className="relative h-screen">
                {heroSlides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url("${slide.image}")` }}
                        />
                        {/* Dark overlay for better text visibility */}
                        <div className="absolute inset-0" style={{
                            background: 'linear-gradient(to bottom, rgba(11,37,69,0.7) 0%, rgba(11,37,69,0.4) 40%, rgba(11,37,69,0.85) 100%)'
                        }} />
                    </div>
                ))}

                {/* Navigation Arrows */}
                <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all">
                    <ChevronLeft size={40} />
                </button>
                <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all">
                    <ChevronRight size={40} />
                </button>

                {/* Hero Content - Centered */}
                <div className="absolute inset-0 z-10 flex items-center">
                    <div className="container-custom">
                        <div className="max-w-4xl">
                            <span className="inline-block px-4 py-2 text-sm font-semibold uppercase tracking-wider mb-6" style={{ background: '#00A896', color: 'white' }}>
                                {heroSlides[currentSlide].badge}
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
                                {heroSlides[currentSlide].title}
                            </h1>
                            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-10 max-w-3xl">
                                {heroSlides[currentSlide].subtitle}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={() => onNavigate('services')}
                                    className="px-8 py-4 font-semibold flex items-center gap-3 transition-all"
                                    style={{ background: '#00A896', color: 'white' }}
                                >
                                    Our Services <ArrowRight size={18} />
                                </button>
                                <button
                                    onClick={() => onNavigate('contact')}
                                    className="px-8 py-4 font-semibold flex items-center gap-3 border-2 border-white text-white hover:bg-white hover:text-[#0B2545] transition-all"
                                >
                                    Request Survey
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-24 left-0 right-0 z-20">
                    <div className="container-custom">
                        <div className="flex items-center gap-3">
                            {heroSlides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`h-1 transition-all ${currentSlide === index ? 'bg-white w-12' : 'bg-white/40 w-8 hover:bg-white/60'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Stats Bar */}
                <div className="absolute bottom-0 left-0 right-0 z-20">
                    <div style={{ background: 'rgba(11, 37, 69, 0.95)', backdropFilter: 'blur(10px)' }}>
                        <div className="container-custom py-6">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
                                {stats.map((stat, index) => (
                                    <div key={index}>
                                        <div className="text-2xl md:text-3xl font-heading font-bold" style={{ color: '#00A896' }}>
                                            {stat.value}
                                        </div>
                                        <div className="text-white/70 text-sm uppercase tracking-wider">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* QUICK LINKS BAR */}
            <section style={{ background: '#00A896' }} className="py-4">
                <div className="container-custom">
                    <div className="flex flex-wrap items-center justify-center gap-6 text-white text-sm">
                        <button onClick={() => onNavigate('verify')} className="flex items-center gap-2 hover:text-white/80 transition-colors font-medium">
                            <QrCode size={16} /> Verify Certificate
                        </button>
                        <span className="hidden md:inline text-white/30">|</span>
                        <button onClick={() => onNavigate('login')} className="flex items-center gap-2 hover:text-white/80 transition-colors font-medium">
                            <Users size={16} /> Client Portal
                        </button>
                        <span className="hidden md:inline text-white/30">|</span>
                        <button onClick={() => onNavigate('contact')} className="flex items-center gap-2 hover:text-white/80 transition-colors font-medium">
                            <Phone size={16} /> Request Survey
                        </button>
                        <span className="hidden md:inline text-white/30">|</span>
                        <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-2 hover:text-white/80 transition-colors font-medium">
                            <Clock size={16} /> 24/7 Support: {COMPANY_INFO.phone}
                        </a>
                    </div>
                </div>
            </section>

            {/* SERVICES SECTION */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-14">
                        <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#00A896' }}>
                            What We Do
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4" style={{ color: '#0B2545' }}>
                            Our Core Services
                        </h2>
                        <p className="max-w-2xl mx-auto" style={{ color: '#6b7c93' }}>
                            Comprehensive maritime classification and statutory certification services
                            ensuring vessel safety, environmental compliance, and regulatory adherence worldwide.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {coreServices.map((service, index) => (
                            <div
                                key={index}
                                onClick={() => onNavigate(service.link as PageType)}
                                className="group p-8 cursor-pointer transition-all hover:shadow-xl bg-slate-50 border-b-4 border-transparent hover:border-[#00A896]"
                            >
                                <div className="w-16 h-16 mb-6 flex items-center justify-center transition-all group-hover:scale-110" style={{ background: '#0B2545' }}>
                                    <service.icon size={28} className="text-white" />
                                </div>
                                <h3 className="font-heading font-bold text-lg mb-3" style={{ color: '#0B2545' }}>
                                    {service.title}
                                </h3>
                                <p className="text-sm leading-relaxed" style={{ color: '#6b7c93' }}>
                                    {service.desc}
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#00A896' }}>
                                    Learn More <ArrowRight size={14} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="py-20" style={{ background: '#f8fafc' }}>
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop"
                                alt="GIRIK Class vessel survey"
                                className="w-full shadow-2xl"
                            />
                            <div className="absolute -bottom-8 -right-8 p-6 shadow-xl hidden lg:block" style={{ background: '#0B2545' }}>
                                <div className="text-white text-center">
                                    <div className="text-4xl font-heading font-bold">Since</div>
                                    <div className="text-5xl font-heading font-bold" style={{ color: '#00A896' }}>2024</div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#00A896' }}>
                                About Us
                            </span>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-6" style={{ color: '#0B2545' }}>
                                About GIRIK Class
                            </h2>
                            <p className="mb-6 leading-relaxed" style={{ color: '#6b7c93', fontSize: '1.0625rem' }}>
                                GIRIK Class is an independent ship classification society established with a mission
                                to provide world-class maritime classification, statutory certification, and technical
                                services to the global shipping industry. Our commitment to safety and quality is unwavering.
                            </p>
                            <p className="mb-8 leading-relaxed" style={{ color: '#6b7c93', fontSize: '1.0625rem' }}>
                                As a Recognized Organization (RO) authorized by over 40 maritime administrations worldwide,
                                we survey and certify vessels to ensure compliance with international conventions
                                including SOLAS, MARPOL, Load Line, ISM/ISPS Codes, and Maritime Labour Convention.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {[
                                    '40+ Flag State Authorizations',
                                    'Digital e-Certificates',
                                    '24/7 Global Surveyor Network',
                                    'Zero PSC Detentions Track Record'
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle size={18} style={{ color: '#00A896' }} />
                                        <span className="text-sm font-medium" style={{ color: '#0B2545' }}>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => onNavigate('about')}
                                className="px-8 py-4 font-semibold flex items-center gap-3 transition-all hover:gap-4"
                                style={{ background: '#0B2545', color: 'white' }}
                            >
                                Learn More About Us <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FLAG AUTHORIZATIONS */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-14">
                        <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#00A896' }}>
                            Global Recognition
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4" style={{ color: '#0B2545' }}>
                            Flag State Authorizations
                        </h2>
                        <p className="max-w-2xl mx-auto" style={{ color: '#6b7c93' }}>
                            GIRIK Class is authorized to perform statutory surveys and issue certificates
                            on behalf of the following flag administrations worldwide.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 mb-10">
                        {flagStates.map((flag, index) => (
                            <div
                                key={index}
                                className="px-6 py-3 font-medium transition-all hover:shadow-md"
                                style={{ background: '#f8fafc', color: '#0B2545' }}
                            >
                                <Flag size={14} className="inline mr-2" style={{ color: '#00A896' }} />
                                {flag}
                            </div>
                        ))}
                        <div
                            className="px-6 py-3 font-semibold"
                            style={{ background: '#00A896', color: 'white' }}
                        >
                            +32 More Countries
                        </div>
                    </div>

                    <div className="text-center">
                        <button
                            onClick={() => onNavigate('services')}
                            className="inline-flex items-center gap-2 font-semibold transition-colors"
                            style={{ color: '#00A896' }}
                        >
                            View All Flag Authorizations <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            </section>

            {/* STATUTORY CERTIFICATIONS */}
            <section className="py-20" style={{ background: '#f8fafc' }}>
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#00A896' }}>
                                Statutory Services
                            </span>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-6" style={{ color: '#0B2545' }}>
                                Statutory Certifications
                            </h2>
                            <p className="mb-8 leading-relaxed" style={{ color: '#6b7c93', fontSize: '1.0625rem' }}>
                                As a Recognized Organization, GIRIK Class is authorized to conduct surveys and issue
                                statutory certificates required under international maritime conventions on behalf
                                of flag state administrations. All certificates are issued digitally with QR verification.
                            </p>

                            <div className="grid grid-cols-2 gap-3 mb-8">
                                {certifications.map((cert, index) => (
                                    <div key={index} className="flex items-center gap-3 p-3" style={{ background: 'white' }}>
                                        <FileCheck size={16} style={{ color: '#00A896' }} />
                                        <span className="text-sm font-medium" style={{ color: '#0B2545' }}>{cert}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => onNavigate('services')}
                                className="px-8 py-4 font-semibold flex items-center gap-3 transition-all"
                                style={{ background: '#0B2545', color: 'white' }}
                            >
                                View All Certifications <ArrowRight size={18} />
                            </button>
                        </div>

                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1524522173746-f628baad3644?q=80&w=1200&auto=format&fit=crop"
                                alt="Large container vessel at sea"
                                className="w-full shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* E-CERTIFICATES */}
            <section className="py-20" style={{ background: '#0B2545' }}>
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="text-center order-2 lg:order-1">
                            <div className="inline-block p-8" style={{ background: 'rgba(255,255,255,0.05)', border: '2px solid rgba(255,255,255,0.1)' }}>
                                <QrCode size={200} className="text-white/30" />
                                <div className="mt-4 text-white/50 text-sm">Scan to verify certificate</div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#00A896' }}>
                                Digital Innovation
                            </span>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-3 mb-6">
                                e-Certificates & Verification
                            </h2>
                            <p className="text-white/70 text-lg leading-relaxed mb-8">
                                All GIRIK Class certificates are issued in digital format with unique QR codes
                                enabling instant verification by port state control, charterers, underwriters,
                                and other stakeholders worldwide. No login required - completely free public access.
                            </p>

                            <div className="space-y-4 mb-8">
                                {[
                                    'QR code on every certificate for instant verification',
                                    'No login required - publicly accessible verification portal',
                                    'IMO GISIS compliant electronic certificates',
                                    'Real-time status updates and expiry notifications'
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle size={18} style={{ color: '#00A896' }} />
                                        <span className="text-white/80">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => onNavigate('verify')}
                                className="px-8 py-4 font-semibold flex items-center gap-3 transition-all"
                                style={{ background: '#00A896', color: 'white' }}
                            >
                                <QrCode size={20} /> Verify Certificate Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEWS SECTION */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="flex items-center justify-between mb-14">
                        <div>
                            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#00A896' }}>
                                Stay Updated
                            </span>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3" style={{ color: '#0B2545' }}>
                                Latest News & Circulars
                            </h2>
                        </div>
                        <button
                            className="hidden md:flex items-center gap-2 font-semibold"
                            style={{ color: '#00A896' }}
                        >
                            View All <ArrowRight size={16} />
                        </button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {newsItems.map((item, index) => (
                            <div key={index} className="group cursor-pointer bg-slate-50 hover:shadow-xl transition-all">
                                <div className="overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider" style={{ background: '#0B2545', color: 'white' }}>
                                            {item.category}
                                        </span>
                                        <span className="text-sm" style={{ color: '#6b7c93' }}>{item.date}</span>
                                    </div>
                                    <h3 className="font-heading font-bold text-lg leading-tight group-hover:text-[#00A896] transition-colors" style={{ color: '#0B2545' }}>
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-20 relative">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop")' }}
                />
                <div className="absolute inset-0" style={{ background: 'rgba(11, 37, 69, 0.9)' }} />
                <div className="container-custom relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                        Ready to Get Your Vessel Certified?
                    </h2>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
                        Contact our team to discuss your classification and certification requirements.
                        Our surveyors are available 24/7 in all major ports worldwide.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={() => onNavigate('contact')}
                            className="px-10 py-4 font-semibold flex items-center gap-3"
                            style={{ background: '#00A896', color: 'white' }}
                        >
                            Request Survey <ArrowRight size={18} />
                        </button>
                        <button
                            onClick={() => onNavigate('howItWorks')}
                            className="px-10 py-4 font-semibold flex items-center gap-3 border-2 border-white text-white hover:bg-white hover:text-[#0B2545] transition-all"
                        >
                            How It Works
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
