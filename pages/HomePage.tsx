// ============================================
// GIRIK SHIPPING - HOME PAGE
// Complete Conversion-Focused Landing Page
// ============================================

import React from 'react';
import {
    ArrowRight,
    CheckCircle,
    ShieldCheck,
    QrCode,
    FileCheck,
    Bell,
    Lock,
    Globe,
    Award,
    Clock,
    Zap,
    Rocket,
    ChevronRight,
    Ship,
    Building,
    Flag,
    AlertTriangle,
    FileX,
    Timer,
    Eye,
    XCircle,
    CheckCircle2,
    History,
    Play,
    ExternalLink,
    Send,
    UserCheck,
    Camera,
    FileSearch,
    CreditCard,
    Settings,
    ArrowLeftRight,
    Compass,
    ClipboardCheck,
    Star,
    Quote,
    Users,
    Anchor,
    Target,
    TrendingUp,
    Mail,
    Phone
} from 'lucide-react';
import {
    SERVICES,
    FEATURES,
    STATISTICS,
    WORKFLOW_STEPS,
    COMPLIANCE_BADGES,
    PROBLEM_SOLUTION,
    USER_TYPES,
    NEWS,
    TESTIMONIALS,
    COMPANY_INFO
} from '../constants';
import { PageType } from '../types';

interface HomePageProps {
    onNavigate: (page: PageType) => void;
}

// Icon mapping for dynamic icon rendering
const iconMap: { [key: string]: React.ComponentType<{ size?: number; className?: string }> } = {
    ShieldCheck, QrCode, FileCheck, Bell, Lock, Globe, Award, Clock, Zap, Rocket,
    Ship, Building, Flag, AlertTriangle, FileX, Timer, Eye, XCircle,
    CheckCircle2, History, Send, UserCheck, Camera, FileSearch, CreditCard,
    CheckCircle, ArrowRight, Settings, ArrowLeftRight, Compass, ClipboardCheck,
    Anchor, Target, TrendingUp
};

const getIcon = (iconName: string, size = 24, className = '') => {
    const Icon = iconMap[iconName] || ShieldCheck;
    return <Icon size={size} className={className} />;
};

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
    return (
        <div>
            {/* ============================================
                HERO SECTION
            ============================================ */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop")'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-600/85 via-navy-600/75 to-navy-600/65"></div>
                    {/* Decorative Elements */}
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-20 right-20 w-72 h-72 bg-teal-500/20 blur-3xl"></div>
                        <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-500/10 blur-3xl"></div>
                    </div>
                </div>

                {/* Content */}
                <div className="relative container-custom py-32 pt-40">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div className="animate-fadeInUp">
                            {/* Trust Badge */}
                            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 mb-8">
                                <span className="w-2 h-2 bg-teal-500 animate-pulse-slow"></span>
                                <span className="text-white/90 text-sm font-medium">Redefining Maritime Trust Since 2024</span>
                            </div>

                            {/* Main Headline */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-[1.1] mb-6">
                                Digital Maritime
                                <span className="block mt-2">Certification.</span>
                                <span className="block text-gradient-teal mt-3">
                                    Trusted. Transparent.
                                </span>
                            </h1>

                            {/* Subheadline */}
                            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-xl">
                                End-to-end vessel certification and compliance system designed for
                                regulatory trust and operational efficiency. <strong className="text-white">100% digital, globally verified.</strong>
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4 mb-12">
                                <button
                                    onClick={() => onNavigate('contact')}
                                    className="btn-primary text-base px-8 py-4 flex items-center gap-3"
                                >
                                    Request Demo
                                    <ArrowRight size={20} />
                                </button>
                                <button
                                    onClick={() => onNavigate('verify')}
                                    className="btn-secondary text-base px-8 py-4 flex items-center gap-3"
                                >
                                    <QrCode size={20} />
                                    Verify Certificate
                                </button>
                            </div>

                            {/* Stats Row */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
                                {STATISTICS.slice(0, 4).map((stat, index) => (
                                    <div key={index} className="text-center md:text-left">
                                        <div className="text-3xl md:text-4xl font-heading font-extrabold text-white">
                                            {stat.value}<span className="text-teal-400">{stat.suffix}</span>
                                        </div>
                                        <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Content - Floating Card */}
                        <div className="hidden lg:block relative animate-fadeIn" style={{ animationDelay: '300ms' }}>
                            <div className="relative">
                                {/* Main Image */}
                                <div className="relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=1200&auto=format&fit=crop"
                                        alt="Container Ship at Port"
                                        className="w-full h-[500px] object-cover shadow-2xl"
                                    />
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-600/50 to-transparent"></div>
                                </div>

                                {/* Floating Verification Card */}
                                <div className="absolute -bottom-8 -left-8 bg-white p-6 shadow-2xl max-w-xs animate-float">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-14 h-14 bg-green-100 flex items-center justify-center">
                                            <CheckCircle className="text-green-600" size={28} />
                                        </div>
                                        <div>
                                            <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Certificate Status</div>
                                            <div className="text-xl font-heading font-bold text-green-600">VERIFIED</div>
                                        </div>
                                    </div>
                                    <div className="border-t border-slate-100 pt-4">
                                        <div className="text-sm font-semibold text-navy-600">MV Ocean Star</div>
                                        <div className="text-xs text-slate-500">IMO 9876543 • Panama Flag</div>
                                        <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                                            <Clock size={12} />
                                            <span>Verified 2 seconds ago</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Stats Card */}
                                <div className="absolute -top-6 -right-6 bg-navy-700 text-white p-5 shadow-xl">
                                    <div className="text-xs text-teal-400 uppercase tracking-wider mb-2">Today's Activity</div>
                                    <div className="text-3xl font-heading font-bold">247</div>
                                    <div className="text-sm text-slate-400">Certificates Issued</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-8 h-12 border-2 border-white/30 flex items-start justify-center pt-2">
                        <div className="w-1 h-3 bg-white/50 animate-pulse-slow"></div>
                    </div>
                </div>
            </section>

            {/* ============================================
                TRUST BAR
            ============================================ */}
            <section className="bg-navy-700 py-6 border-t border-white/10">
                <div className="container-custom">
                    <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
                        {COMPLIANCE_BADGES.map((badge, index) => (
                            <div key={index} className="flex items-center gap-3 text-white/80">
                                {getIcon(badge.iconName, 20, 'text-teal-400')}
                                <span className="text-sm font-medium">{badge.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================
                PROBLEM VS SOLUTION
            ============================================ */}
            <section className="section-padding-lg bg-slate-50">
                <div className="container-custom">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="badge-teal mb-4 inline-block">Why GIRIK?</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy-600 mt-4 mb-6">
                            Transform Your Certification Process
                        </h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            See how GIRIK eliminates traditional pain points and delivers digital excellence for maritime compliance.
                        </p>
                    </div>

                    {/* Comparison Cards */}
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Traditional Problems */}
                        <div className="bg-white border-2 border-slate-200 p-8 md:p-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 -translate-y-16 translate-x-16"></div>
                            <div className="relative">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-14 h-14 bg-red-100 flex items-center justify-center">
                                        <AlertTriangle className="text-red-500" size={28} />
                                    </div>
                                    <h3 className="text-2xl font-heading font-bold text-slate-700">
                                        {PROBLEM_SOLUTION.traditional.title}
                                    </h3>
                                </div>
                                <ul className="space-y-5">
                                    {PROBLEM_SOLUTION.traditional.problems.map((item, index) => (
                                        <li key={index} className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                {getIcon(item.icon, 18, 'text-red-400')}
                                            </div>
                                            <span className="text-slate-600 leading-relaxed">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* GIRIK Solution */}
                        <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-8 md:p-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 -translate-y-16 translate-x-16"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 translate-y-24 -translate-x-24"></div>
                            <div className="relative">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-14 h-14 bg-white/20 flex items-center justify-center">
                                        <ShieldCheck className="text-white" size={28} />
                                    </div>
                                    <h3 className="text-2xl font-heading font-bold text-white">
                                        {PROBLEM_SOLUTION.girik.title}
                                    </h3>
                                </div>
                                <ul className="space-y-5">
                                    {PROBLEM_SOLUTION.girik.solutions.map((item, index) => (
                                        <li key={index} className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                {getIcon(item.icon, 18, 'text-white')}
                                            </div>
                                            <span className="text-white/90 leading-relaxed">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================
                HOW IT WORKS
            ============================================ */}
            <section className="section-padding-lg bg-white">
                <div className="container-custom">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="badge-navy mb-4 inline-block">Our Process</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy-600 mt-4 mb-6">
                            How It Works
                        </h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            From survey request to global verification — a seamless digital journey in 7 steps.
                        </p>
                    </div>

                    {/* Workflow Steps - Timeline Layout */}
                    <div className="relative">
                        {/* Connection Line */}
                        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                            {WORKFLOW_STEPS.slice(0, 4).map((step, index) => (
                                <div key={index} className="bg-white border border-slate-200 p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                                    <div className="flex items-center gap-4 mb-5">
                                        <div className="w-12 h-12 bg-navy-600 text-white font-heading font-bold text-lg flex items-center justify-center">
                                            {step.step}
                                        </div>
                                        <div className="w-12 h-12 bg-teal-50 flex items-center justify-center">
                                            {getIcon(step.iconName, 22, 'text-teal-500')}
                                        </div>
                                    </div>
                                    <h3 className="font-heading font-bold text-navy-600 text-lg mb-3">{step.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{step.description}</p>
                                    {step.duration && (
                                        <div className="flex items-center gap-2 text-xs text-slate-400">
                                            <Clock size={12} />
                                            <span>{step.duration}</span>
                                            {step.actor && <span className="ml-2">• {step.actor}</span>}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Second Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                            {WORKFLOW_STEPS.slice(4, 7).map((step, index) => (
                                <div key={index} className="bg-white border border-slate-200 p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                                    <div className="flex items-center gap-4 mb-5">
                                        <div className="w-12 h-12 bg-navy-600 text-white font-heading font-bold text-lg flex items-center justify-center">
                                            {step.step}
                                        </div>
                                        <div className="w-12 h-12 bg-teal-50 flex items-center justify-center">
                                            {getIcon(step.iconName, 22, 'text-teal-500')}
                                        </div>
                                    </div>
                                    <h3 className="font-heading font-bold text-navy-600 text-lg mb-3">{step.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{step.description}</p>
                                    {step.duration && (
                                        <div className="flex items-center gap-2 text-xs text-slate-400">
                                            <Clock size={12} />
                                            <span>{step.duration}</span>
                                            {step.actor && <span className="ml-2">• {step.actor}</span>}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-14">
                        <button
                            onClick={() => onNavigate('how-it-works')}
                            className="btn-primary"
                        >
                            Learn More About Our Process
                        </button>
                    </div>
                </div>
            </section>

            {/* ============================================
                SERVICES GRID
            ============================================ */}
            <section className="section-padding-lg bg-slate-50">
                <div className="container-custom">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="badge-teal mb-4 inline-block">Our Expertise</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy-600 mt-4 mb-6">
                            Comprehensive Maritime Services
                        </h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            From statutory certification to specialized yacht services — we cover every aspect of maritime compliance.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SERVICES.map((service) => (
                            <div key={service.id} className="bg-white group overflow-hidden border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                                {/* Image */}
                                <div className="h-56 overflow-hidden relative">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-600/60 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4">
                                        <div className="w-12 h-12 bg-teal-500 flex items-center justify-center">
                                            {getIcon(service.iconName, 24, 'text-white')}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="font-heading font-bold text-navy-600 text-xl mb-3 group-hover:text-teal-500 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-5">
                                        {service.description}
                                    </p>

                                    {/* Features Preview */}
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {service.features.slice(0, 3).map((feature, index) => (
                                            <span key={index} className="text-xs bg-slate-100 text-slate-600 px-2 py-1">
                                                {feature}
                                            </span>
                                        ))}
                                        {service.features.length > 3 && (
                                            <span className="text-xs bg-teal-50 text-teal-600 px-2 py-1">
                                                +{service.features.length - 3} more
                                            </span>
                                        )}
                                    </div>

                                    <button
                                        onClick={() => onNavigate('services')}
                                        className="text-sm font-semibold text-teal-500 flex items-center gap-2 group-hover:gap-3 transition-all"
                                    >
                                        Learn More <ChevronRight size={16} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-14">
                        <button
                            onClick={() => onNavigate('services')}
                            className="btn-secondary border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white"
                        >
                            View All Services
                        </button>
                    </div>
                </div>
            </section>

            {/* ============================================
                FEATURES GRID
            ============================================ */}
            <section className="section-padding-lg bg-navy-600 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                    }}></div>
                </div>

                <div className="container-custom relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="bg-white/10 text-teal-400 border border-teal-400/30 px-4 py-1 text-xs font-bold uppercase tracking-wider inline-block mb-4">
                            Platform Capabilities
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mt-4 mb-6">
                            Built for Modern Maritime
                        </h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            Enterprise-grade platform features designed to streamline every aspect of maritime compliance.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {FEATURES.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 hover:border-teal-500/50 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/30 transition-colors">
                                    {getIcon(feature.iconName, 26, 'text-teal-400')}
                                </div>
                                <h3 className="font-heading font-bold text-white text-lg mb-3">{feature.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-4">{feature.description}</p>
                                {feature.benefit && (
                                    <div className="flex items-center gap-2 text-teal-400 text-sm font-medium">
                                        <CheckCircle size={14} />
                                        {feature.benefit}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================
                WHO IS IT FOR - USER TYPES
            ============================================ */}
            <section className="section-padding-lg bg-white">
                <div className="container-custom">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="badge-navy mb-4 inline-block">Target Users</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy-600 mt-4 mb-6">
                            Who Uses GIRIK?
                        </h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            Our platform serves every stakeholder in the maritime certification ecosystem.
                        </p>
                    </div>

                    {/* User Types Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {USER_TYPES.slice(0, 6).map((user, index) => (
                            <div key={index} className="border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                                {/* Image */}
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={user.image}
                                        alt={user.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-600/80 to-transparent"></div>
                                </div>

                                {/* Content */}
                                <div className="p-6 bg-white">
                                    {/* Icon */}
                                    <div className="w-14 h-14 bg-teal-50 flex items-center justify-center -mt-14 relative z-10 border-4 border-white shadow-lg mb-4">
                                        {getIcon(user.iconName, 26, 'text-teal-500')}
                                    </div>

                                    <h3 className="font-heading font-bold text-navy-600 text-xl mb-3">
                                        {user.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-5">
                                        {user.description}
                                    </p>

                                    {/* Benefits */}
                                    <ul className="space-y-2 mb-5">
                                        {user.benefits.slice(0, 4).map((benefit, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm">
                                                <CheckCircle size={16} className="text-teal-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-slate-600">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {user.cta && (
                                        <button
                                            onClick={() => onNavigate('contact')}
                                            className="text-sm font-semibold text-teal-500 flex items-center gap-2 hover:gap-3 transition-all"
                                        >
                                            {user.cta} <ArrowRight size={16} />
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================
                CERTIFICATE VERIFICATION HIGHLIGHT
            ============================================ */}
            <section className="section-padding-lg bg-gradient-to-br from-teal-500 via-teal-500 to-teal-600 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5"></div>

                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div>
                            <span className="bg-white/20 text-white px-4 py-1 text-xs font-bold uppercase tracking-wider inline-block mb-6">
                                Instant Verification
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                                Verify Any Certificate<br />in Seconds
                            </h2>
                            <p className="text-teal-100 text-lg mb-8 leading-relaxed">
                                Scan the QR code or enter the Unique Tracking Number (UTN) to verify any GIRIK certificate's authenticity instantly.
                                <strong className="text-white"> No account required.</strong>
                            </p>

                            {/* Features */}
                            <div className="grid grid-cols-3 gap-6 mb-10">
                                <div className="text-center">
                                    <div className="w-14 h-14 bg-white/20 flex items-center justify-center mx-auto mb-3">
                                        <QrCode size={26} className="text-white" />
                                    </div>
                                    <div className="text-white font-medium">QR Scan</div>
                                </div>
                                <div className="text-center">
                                    <div className="w-14 h-14 bg-white/20 flex items-center justify-center mx-auto mb-3">
                                        <FileSearch size={26} className="text-white" />
                                    </div>
                                    <div className="text-white font-medium">UTN Lookup</div>
                                </div>
                                <div className="text-center">
                                    <div className="w-14 h-14 bg-white/20 flex items-center justify-center mx-auto mb-3">
                                        <Globe size={26} className="text-white" />
                                    </div>
                                    <div className="text-white font-medium">Public Access</div>
                                </div>
                            </div>

                            <button
                                onClick={() => onNavigate('verify')}
                                className="bg-white text-teal-600 px-8 py-4 font-semibold text-sm uppercase tracking-wider hover:bg-navy-600 hover:text-white transition-all flex items-center gap-3"
                            >
                                Verify Now
                                <ArrowRight size={18} />
                            </button>
                        </div>

                        {/* Right - Demo Card */}
                        <div className="bg-white p-8 md:p-10 shadow-2xl">
                            <div className="text-center mb-8">
                                <div className="w-48 h-48 bg-slate-100 mx-auto mb-5 flex items-center justify-center relative">
                                    {/* QR Pattern */}
                                    <div className="absolute inset-4 grid grid-cols-5 gap-1">
                                        {Array(25).fill(0).map((_, i) => (
                                            <div key={i} className={`${Math.random() > 0.5 ? 'bg-navy-600' : 'bg-transparent'}`}></div>
                                        ))}
                                    </div>
                                    <QrCode size={100} className="text-navy-600 relative z-10" />
                                </div>
                                <p className="text-sm text-slate-500">Scan QR or enter UTN below</p>
                            </div>

                            {/* Input */}
                            <div className="flex gap-3 mb-6">
                                <input
                                    type="text"
                                    placeholder="e.g., GIRIK-2026-X88"
                                    className="flex-1 px-4 py-3 border-2 border-slate-200 focus:border-teal-500 outline-none text-center font-mono text-lg"
                                />
                                <button className="px-6 py-3 bg-teal-500 text-white font-semibold hover:bg-teal-600 transition-colors">
                                    Verify
                                </button>
                            </div>

                            {/* Sample Result */}
                            <div className="p-5 bg-green-50 border-2 border-green-200">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-100 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="text-green-600" size={28} />
                                    </div>
                                    <div>
                                        <div className="font-heading font-bold text-green-700 text-lg">VALID CERTIFICATE</div>
                                        <div className="text-sm text-green-600">MV Ocean Star • Valid until Jan 2031</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================
                TESTIMONIALS
            ============================================ */}
            {TESTIMONIALS && TESTIMONIALS.length > 0 && (
                <section className="section-padding-lg bg-slate-50">
                    <div className="container-custom">
                        {/* Section Header */}
                        <div className="text-center mb-16">
                            <span className="badge-navy mb-4 inline-block">Client Success</span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy-600 mt-4 mb-6">
                                Trusted by Maritime Leaders
                            </h2>
                            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                                Hear from industry professionals who have transformed their operations with GIRIK.
                            </p>
                        </div>

                        {/* Testimonials Grid */}
                        <div className="grid md:grid-cols-3 gap-8">
                            {TESTIMONIALS.map((testimonial, index) => (
                                <div key={index} className="bg-white p-8 border border-slate-200 relative">
                                    {/* Quote Icon */}
                                    <div className="absolute top-6 right-6 text-teal-100">
                                        <Quote size={48} />
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <p className="text-slate-600 leading-relaxed mb-6 italic">
                                            "{testimonial.quote}"
                                        </p>

                                        {/* Author */}
                                        <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                                            {testimonial.image && (
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.author}
                                                    className="w-14 h-14 object-cover"
                                                />
                                            )}
                                            <div>
                                                <div className="font-heading font-bold text-navy-600">{testimonial.author}</div>
                                                <div className="text-sm text-slate-500">{testimonial.position}</div>
                                                <div className="text-sm text-teal-500">{testimonial.company}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ============================================
                NEWS SECTION
            ============================================ */}
            <section className="section-padding-lg bg-white">
                <div className="container-custom">
                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                        <div>
                            <span className="badge-teal mb-4 inline-block">Knowledge Center</span>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-600 mt-4">
                                Latest News & Insights
                            </h2>
                        </div>
                        <button className="btn-secondary border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white flex items-center gap-2">
                            View All Articles
                            <ExternalLink size={16} />
                        </button>
                    </div>

                    {/* News Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {NEWS.map((item) => (
                            <article key={item.id} className="bg-white border border-slate-200 hover:shadow-lg transition-all duration-300 group">
                                {/* Image */}
                                {item.image && (
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                )}

                                {/* Content */}
                                <div className="p-5">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-xs text-slate-500">{item.date}</span>
                                        <span className="w-1 h-1 bg-slate-300"></span>
                                        <span className="text-xs font-semibold text-teal-500 uppercase">{item.category}</span>
                                    </div>
                                    <h3 className="font-heading font-bold text-navy-600 leading-snug mb-3 group-hover:text-teal-500 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 mb-4 line-clamp-2">{item.excerpt}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-slate-400">{item.readTime}</span>
                                        <button className="text-sm font-semibold text-navy-600 flex items-center gap-1 hover:text-teal-500 transition-colors">
                                            Read <ArrowRight size={14} />
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================
                SECURITY SECTION
            ============================================ */}
            <section className="section-padding-lg bg-slate-50 border-t border-slate-100">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div>
                            <span className="badge-navy mb-4 inline-block">Security & Compliance</span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy-600 mt-4 mb-6">
                                Enterprise-Grade Security
                            </h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                GIRIK is engineered with security at its core. We understand the critical nature of maritime
                                documentation and employ the highest standards of data protection and compliance.
                            </p>

                            {/* Security Features Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: 'Lock', text: 'AES-256 Encryption', desc: 'Military-grade encryption' },
                                    { icon: 'ShieldCheck', text: 'Role-Based Access', desc: 'Granular permissions' },
                                    { icon: 'History', text: 'Immutable Audit Trail', desc: 'Complete logging' },
                                    { icon: 'Globe', text: 'IMO Aligned', desc: 'Regulatory compliant' },
                                    { icon: 'Award', text: 'ISO 27001 Ready', desc: 'Security certified' },
                                    { icon: 'FileCheck', text: 'Tamper-Proof Certs', desc: 'Digital signatures' },
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-4 p-4 bg-white border border-slate-200">
                                        <div className="w-10 h-10 bg-teal-50 flex items-center justify-center flex-shrink-0">
                                            {getIcon(item.icon, 20, 'text-teal-500')}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-navy-600">{item.text}</div>
                                            <div className="text-xs text-slate-500">{item.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right - Image */}
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1560732488-6b0df240254a?q=80&w=1200&auto=format&fit=crop"
                                alt="Secure Infrastructure"
                                className="w-full shadow-xl"
                            />
                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -left-6 bg-navy-600 text-white p-6 shadow-xl">
                                <div className="text-4xl font-heading font-bold text-teal-400">99.9%</div>
                                <div className="text-sm text-slate-300">Platform Uptime</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================
                FINAL CTA SECTION
            ============================================ */}
            <section className="section-padding-xl bg-navy-600 relative overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-teal-500/5 blur-3xl"></div>

                <div className="container-custom relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                            Ready to Digitize Your<br />Maritime Certification?
                        </h2>
                        <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                            Join the leading shipping companies and flag administrations who have already
                            modernized their compliance operations with GIRIK.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            <button
                                onClick={() => onNavigate('contact')}
                                className="btn-primary text-base px-10 py-5"
                            >
                                Schedule a Demo
                            </button>
                            <button
                                onClick={() => onNavigate('contact')}
                                className="btn-secondary text-base px-10 py-5"
                            >
                                Contact Sales
                            </button>
                        </div>

                        {/* Quick Contact */}
                        <div className="flex flex-wrap justify-center gap-8 text-slate-400">
                            <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-2 hover:text-teal-400 transition-colors">
                                <Phone size={18} />
                                {COMPANY_INFO.phone}
                            </a>
                            <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-2 hover:text-teal-400 transition-colors">
                                <Mail size={18} />
                                {COMPANY_INFO.email}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
