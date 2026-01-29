// ============================================
// GIRIK SHIPPING - SERVICES PAGE
// Complete Service Portfolio
// ============================================

import React, { useState } from 'react';
import {
    ArrowRight,
    CheckCircle,
    ShieldCheck,
    ChevronRight,
    ChevronDown,
    FileCheck,
    Award,
    Globe,
    Zap,
    Clock,
    Users,
    Ship,
    Settings,
    ArrowLeftRight,
    Flag,
    Compass,
    ClipboardCheck,
    Anchor,
    Grid,
    List,
    Phone,
    Mail
} from 'lucide-react';
import { SERVICES, MODULES, COMPANY_INFO } from '../constants';
import { PageType } from '../types';

interface ServicesPageProps {
    onNavigate: (page: PageType) => void;
}

// Icon mapping
const iconMap: { [key: string]: React.ComponentType<{ size?: number; className?: string }> } = {
    ShieldCheck, FileCheck, Award, Globe, Zap, Clock, Users, Ship, Settings,
    ArrowLeftRight, Flag, Compass, ClipboardCheck, Anchor, CheckCircle
};

const getIcon = (iconName: string, size = 24, className = '') => {
    const Icon = iconMap[iconName] || ShieldCheck;
    return <Icon size={size} className={className} />;
};

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
    const [expandedService, setExpandedService] = useState<string | null>(null);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    // Service Benefits
    const globalBenefits = [
        { icon: Clock, title: '48h Turnaround', description: 'Average time from survey to certificate' },
        { icon: Globe, title: '120+ Ports', description: 'Global surveyor network coverage' },
        { icon: Award, title: '40+ Flag States', description: 'Authorized delegations worldwide' },
        { icon: Zap, title: 'Instant Verification', description: 'QR-based certificate authentication' }
    ];

    return (
        <div>
            {/* ============================================
                HERO SECTION
            ============================================ */}
            <section className="relative py-32 pt-48 overflow-hidden">
                {/* Background */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop")'
                    }}
                >
                    <div className="absolute inset-0 bg-navy-600/70"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="max-w-4xl">
                        <span className="bg-teal-500 text-white px-4 py-1 text-xs font-bold uppercase tracking-wider inline-block mb-6">
                            Our Services
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight mb-6">
                            Comprehensive Maritime Certification Services
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mb-10">
                            From statutory certification to specialized yacht services — we deliver end-to-end
                            compliance solutions backed by digital innovation and global expertise.
                        </p>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {globalBenefits.map((benefit, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 p-5">
                                    <benefit.icon className="text-teal-400 mb-3" size={28} />
                                    <div className="text-white font-heading font-bold">{benefit.title}</div>
                                    <div className="text-slate-400 text-sm">{benefit.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================
                SERVICES NAVIGATION
            ============================================ */}
            <section className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
                <div className="container-custom py-4">
                    <div className="flex items-center justify-between">
                        {/* View Toggle */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`w-10 h-10 flex items-center justify-center transition-colors ${viewMode === 'grid' ? 'bg-teal-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                            >
                                <Grid size={18} />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`w-10 h-10 flex items-center justify-center transition-colors ${viewMode === 'list' ? 'bg-teal-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                            >
                                <List size={18} />
                            </button>
                        </div>

                        {/* Quick Links */}
                        <div className="hidden md:flex items-center gap-6 text-sm">
                            {SERVICES.slice(0, 4).map((service) => (
                                <a
                                    key={service.id}
                                    href={`#${service.id}`}
                                    className="text-slate-600 hover:text-teal-500 transition-colors font-medium"
                                >
                                    {service.title.split(' ')[0]}
                                </a>
                            ))}
                            <span className="text-slate-300">|</span>
                            <button
                                onClick={() => onNavigate('contact')}
                                className="text-teal-500 hover:text-teal-600 font-semibold"
                            >
                                Get Quote
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================
                SERVICES GRID/LIST
            ============================================ */}
            <section className="section-padding-lg bg-slate-50">
                <div className="container-custom">
                    {viewMode === 'grid' ? (
                        /* Grid View */
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {SERVICES.map((service) => (
                                <div
                                    key={service.id}
                                    id={service.id}
                                    className="bg-white border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
                                >
                                    {/* Image */}
                                    <div className="h-56 overflow-hidden relative">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-navy-600/80 to-transparent"></div>
                                        <div className="absolute bottom-4 left-4">
                                            <div className="w-12 h-12 bg-teal-500 flex items-center justify-center">
                                                {getIcon(service.iconName, 24, 'text-white')}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-heading font-bold text-navy-600 mb-3 group-hover:text-teal-500 transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-5">
                                            {service.description}
                                        </p>

                                        {/* Features Preview */}
                                        <div className="mb-5">
                                            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Includes:</div>
                                            <div className="flex flex-wrap gap-2">
                                                {service.features.slice(0, 4).map((feature, index) => (
                                                    <span key={index} className="text-xs bg-slate-100 text-slate-600 px-2 py-1">
                                                        {feature}
                                                    </span>
                                                ))}
                                                {service.features.length > 4 && (
                                                    <span className="text-xs bg-teal-50 text-teal-600 px-2 py-1 font-medium">
                                                        +{service.features.length - 4} more
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Expand Button */}
                                        <button
                                            onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                                            className="text-sm font-semibold text-teal-500 flex items-center gap-2 hover:gap-3 transition-all"
                                        >
                                            {expandedService === service.id ? 'Show Less' : 'Learn More'}
                                            <ChevronDown size={16} className={`transition-transform ${expandedService === service.id ? 'rotate-180' : ''}`} />
                                        </button>

                                        {/* Expanded Content */}
                                        {expandedService === service.id && (
                                            <div className="mt-6 pt-6 border-t border-slate-200 animate-fadeIn">
                                                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                                    {service.longDescription.slice(0, 500)}...
                                                </p>

                                                {/* All Features */}
                                                <div className="mb-6">
                                                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">All Features:</div>
                                                    <ul className="grid grid-cols-1 gap-2">
                                                        {service.features.map((feature, index) => (
                                                            <li key={index} className="flex items-center gap-2 text-sm text-slate-600">
                                                                <CheckCircle size={14} className="text-teal-500 flex-shrink-0" />
                                                                {feature}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Benefits */}
                                                <div className="mb-6">
                                                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Key Benefits:</div>
                                                    <ul className="space-y-2">
                                                        {service.benefits.map((benefit, index) => (
                                                            <li key={index} className="flex items-center gap-2 text-sm text-slate-600">
                                                                <Zap size={14} className="text-teal-500 flex-shrink-0" />
                                                                {benefit}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Pricing */}
                                                <div className="p-4 bg-slate-50 mb-4">
                                                    <div className="text-xs font-semibold text-slate-400 uppercase mb-1">Pricing</div>
                                                    <div className="text-sm text-navy-600 font-medium">{service.pricing}</div>
                                                </div>

                                                <button
                                                    onClick={() => onNavigate('contact')}
                                                    className="w-full btn-primary"
                                                >
                                                    Request Quote
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        /* List View */
                        <div className="space-y-6">
                            {SERVICES.map((service) => (
                                <div
                                    key={service.id}
                                    id={service.id}
                                    className="bg-white border border-slate-200 p-6 md:p-8 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="grid lg:grid-cols-3 gap-8">
                                        {/* Left - Basic Info */}
                                        <div className="lg:col-span-2">
                                            <div className="flex items-start gap-4 mb-4">
                                                <div className="w-14 h-14 bg-teal-50 flex items-center justify-center flex-shrink-0">
                                                    {getIcon(service.iconName, 28, 'text-teal-500')}
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-heading font-bold text-navy-600 mb-2">
                                                        {service.title}
                                                    </h3>
                                                    <p className="text-slate-600 leading-relaxed">
                                                        {service.description}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Features */}
                                            <div className="flex flex-wrap gap-2 mt-4">
                                                {service.features.map((feature, index) => (
                                                    <span key={index} className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5">
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Right - CTA */}
                                        <div className="flex flex-col justify-center items-start lg:items-end gap-4">
                                            <div className="text-sm text-slate-500 mb-2">
                                                <span className="font-semibold text-navy-600">Pricing:</span> {service.pricing}
                                            </div>
                                            <button
                                                onClick={() => onNavigate('contact')}
                                                className="btn-primary"
                                            >
                                                Get Quote
                                            </button>
                                            <button
                                                onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                                                className="text-sm font-semibold text-teal-500 flex items-center gap-2"
                                            >
                                                {expandedService === service.id ? 'Hide Details' : 'View Details'}
                                                <ChevronDown size={16} className={`transition-transform ${expandedService === service.id ? 'rotate-180' : ''}`} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Expanded Content */}
                                    {expandedService === service.id && (
                                        <div className="mt-8 pt-8 border-t border-slate-200 animate-fadeIn">
                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div>
                                                    <h4 className="font-heading font-bold text-navy-600 mb-4">Service Details</h4>
                                                    <p className="text-slate-600 text-sm leading-relaxed">
                                                        {service.longDescription}
                                                    </p>
                                                </div>
                                                <div>
                                                    <h4 className="font-heading font-bold text-navy-600 mb-4">Key Benefits</h4>
                                                    <ul className="space-y-3">
                                                        {service.benefits.map((benefit, index) => (
                                                            <li key={index} className="flex items-start gap-3 text-sm text-slate-600">
                                                                <CheckCircle size={16} className="text-teal-500 flex-shrink-0 mt-0.5" />
                                                                {benefit}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* ============================================
                PLATFORM MODULES
            ============================================ */}
            <section className="section-padding-lg bg-navy-600">
                <div className="container-custom">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="bg-white/10 text-teal-400 border border-teal-400/30 px-4 py-1 text-xs font-bold uppercase tracking-wider inline-block mb-4">
                            Digital Platform
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-4 mb-6">
                            Powered by the GIRIK Platform
                        </h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            All our services are delivered through a unified digital platform that streamlines every step of the certification process.
                        </p>
                    </div>

                    {/* Modules Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {MODULES.map((module) => (
                            <div key={module.id} className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors">
                                <h3 className="text-xl font-heading font-bold text-white mb-3">
                                    {module.title}
                                </h3>
                                <p className="text-slate-400 text-sm mb-5">
                                    {module.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {module.features.map((feature, index) => (
                                        <span key={index} className="text-xs bg-white/10 text-teal-400 px-2 py-1">
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================
                HOW TO GET STARTED
            ============================================ */}
            <section className="section-padding-lg bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left - Steps */}
                        <div>
                            <span className="badge-teal mb-4 inline-block">Getting Started</span>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-600 mt-4 mb-8">
                                How to Engage Our Services
                            </h2>

                            <div className="space-y-6">
                                {[
                                    { step: 1, title: 'Initial Consultation', description: 'Contact our sales team to discuss your certification requirements and receive a tailored proposal.' },
                                    { step: 2, title: 'Onboarding', description: 'Our team sets up your account, registers your vessels, and configures platform access for your shore staff.' },
                                    { step: 3, title: 'Schedule Surveys', description: 'Submit survey requests through the portal. We assign the right surveyor based on location and expertise.' },
                                    { step: 4, title: 'Digital Certification', description: 'Upon successful survey, receive instant digital certificates with QR verification capability.' }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-5">
                                        <div className="w-12 h-12 bg-navy-600 text-white font-heading font-bold flex items-center justify-center flex-shrink-0">
                                            {item.step}
                                        </div>
                                        <div>
                                            <h3 className="font-heading font-bold text-navy-600 text-lg mb-1">{item.title}</h3>
                                            <p className="text-slate-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right - Contact Card */}
                        <div className="bg-slate-50 p-10 border border-slate-200">
                            <h3 className="text-2xl font-heading font-bold text-navy-600 mb-4">
                                Request a Consultation
                            </h3>
                            <p className="text-slate-600 mb-8">
                                Our maritime experts are ready to discuss your specific certification needs and provide a customized quote.
                            </p>

                            <div className="space-y-4 mb-8">
                                <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-3 text-navy-600 hover:text-teal-500 transition-colors">
                                    <div className="w-10 h-10 bg-teal-50 flex items-center justify-center">
                                        <Phone size={18} className="text-teal-500" />
                                    </div>
                                    <span className="font-medium">{COMPANY_INFO.phone}</span>
                                </a>
                                <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-3 text-navy-600 hover:text-teal-500 transition-colors">
                                    <div className="w-10 h-10 bg-teal-50 flex items-center justify-center">
                                        <Mail size={18} className="text-teal-500" />
                                    </div>
                                    <span className="font-medium">{COMPANY_INFO.email}</span>
                                </a>
                            </div>

                            <button
                                onClick={() => onNavigate('contact')}
                                className="w-full btn-primary flex items-center justify-center gap-2"
                            >
                                Schedule Consultation
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================
                CTA SECTION
            ============================================ */}
            <section className="section-padding-lg bg-teal-500">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                        Ready to Streamline Your Maritime Certification?
                    </h2>
                    <p className="text-teal-100 text-lg max-w-2xl mx-auto mb-10">
                        Join the growing number of ship owners and operators who trust GIRIK for their compliance needs.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={() => onNavigate('contact')}
                            className="bg-white text-teal-600 px-8 py-4 font-semibold text-sm uppercase tracking-wider hover:bg-navy-600 hover:text-white transition-all flex items-center gap-2"
                        >
                            Request Demo
                            <ArrowRight size={18} />
                        </button>
                        <button
                            onClick={() => onNavigate('how-it-works')}
                            className="bg-transparent text-white border-2 border-white px-8 py-4 font-semibold text-sm uppercase tracking-wider hover:bg-white hover:text-teal-600 transition-all"
                        >
                            See How It Works
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
