// ============================================
// GIRIK SHIPPING - ABOUT PAGE
// Complete Company Profile & Story
// ============================================

import React from 'react';
import {
    ShieldCheck,
    Target,
    Eye,
    Heart,
    Users,
    Globe,
    Award,
    CheckCircle,
    ArrowRight,
    Building,
    Anchor,
    Ship,
    Clock,
    Zap,
    Star,
    MapPin,
    Linkedin,
    TrendingUp,
    Lightbulb,
    Handshake,
    Scale,
    Lock
} from 'lucide-react';
import { COMPANY_INFO, TEAM_MEMBERS, STATISTICS } from '../constants';
import { PageType } from '../types';

interface AboutPageProps {
    onNavigate: (page: PageType) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
    // Company Milestones
    const milestones = [
        { year: '2024', title: 'Foundation', description: 'GIRIK Shipping founded in Mumbai with a vision to digitize maritime certification globally.' },
        { year: '2024', title: 'First Authorization', description: 'Received statutory certification authorization from first flag administration.' },
        { year: '2025', title: 'Platform Launch', description: 'Full digital platform launched with QR verification and mobile surveyor app.' },
        { year: '2025', title: 'Global Expansion', description: 'Opened regional hubs in Singapore and Dubai to serve Asia-Pacific and Middle East.' },
        { year: '2026', title: '40+ Flag States', description: 'Achieved authorization from over 40 flag administrations worldwide.' },
        { year: '2026', title: '2,500+ Vessels', description: 'Surpassed 2,500 active vessels under certification with zero PSC documentation detentions.' },
    ];

    // Core Values
    const coreValues = [
        {
            icon: ShieldCheck,
            title: 'Trust & Integrity',
            description: 'We maintain the highest standards of professional integrity. Every certificate we issue is backed by thorough verification and uncompromising quality.'
        },
        {
            icon: Lightbulb,
            title: 'Innovation',
            description: 'We continuously push the boundaries of maritime technology, transforming traditional processes into efficient digital workflows.'
        },
        {
            icon: Globe,
            title: 'Global Mindset',
            description: 'Maritime is a global industry, and we operate with a worldwide perspective, understanding diverse regulatory environments and local requirements.'
        },
        {
            icon: Handshake,
            title: 'Partnership',
            description: 'We work collaboratively with ship owners, flag states, and surveyors, building long-term relationships based on mutual success.'
        },
        {
            icon: Lock,
            title: 'Security First',
            description: 'Protecting sensitive maritime data is paramount. We employ enterprise-grade security measures and maintain strict confidentiality.'
        },
        {
            icon: Scale,
            title: 'Compliance Excellence',
            description: 'We stay ahead of regulatory developments, ensuring our services and platform always meet the latest international standards.'
        }
    ];

    // Accreditations
    const accreditations = [
        { name: 'IMO Guidelines', description: 'Aligned with International Maritime Organization standards' },
        { name: 'IACS Standards', description: 'Meeting IACS quality and safety benchmarks' },
        { name: 'ISO 27001 Ready', description: 'Information security management aligned' },
        { name: 'ISO 9001 Ready', description: 'Quality management system certified' },
        { name: 'GDPR Compliant', description: 'Full EU data protection compliance' },
        { name: 'SOC 2 Aligned', description: 'Service organization controls met' }
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
                        backgroundImage: 'url("https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop")'
                    }}
                >
                    <div className="absolute inset-0 bg-navy-600/70"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="max-w-4xl">
                        <span className="bg-teal-500 text-white px-4 py-1 text-xs font-bold uppercase tracking-wider inline-block mb-6">
                            About GIRIK
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight mb-6">
                            Pioneering Digital Trust in Maritime Certification
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed max-w-3xl">
                            {COMPANY_INFO.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* ============================================
                MISSION & VISION
            ============================================ */}
            <section className="section-padding-lg bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Mission */}
                        <div className="bg-slate-50 p-10 border-l-4 border-teal-500">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-teal-100 flex items-center justify-center">
                                    <Target className="text-teal-600" size={28} />
                                </div>
                                <h2 className="text-2xl font-heading font-bold text-navy-600">Our Mission</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                {COMPANY_INFO.mission}
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-navy-600 p-10 text-white">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-white/20 flex items-center justify-center">
                                    <Eye className="text-teal-400" size={28} />
                                </div>
                                <h2 className="text-2xl font-heading font-bold">Our Vision</h2>
                            </div>
                            <p className="text-slate-300 leading-relaxed text-lg">
                                {COMPANY_INFO.vision}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================
                OUR STORY
            ============================================ */}
            <section className="section-padding-lg bg-slate-50">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Story Content */}
                        <div>
                            <span className="badge-teal mb-4 inline-block">Our Story</span>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-600 mt-4 mb-6">
                                From Industry Frustration to Digital Innovation
                            </h2>
                            <div className="space-y-6 text-slate-600 leading-relaxed">
                                <p>
                                    GIRIK Shipping was born from a simple observation: despite the maritime industry's global
                                    sophistication in logistics and operations, its certification and compliance processes
                                    remained stuck in the paper era. Our founders, seasoned marine professionals with decades
                                    of experience at sea and ashore, witnessed firsthand the inefficiencies, delays, and risks
                                    associated with traditional maritime documentation.
                                </p>
                                <p>
                                    In 2024, we set out to build something different — a digital-native certification bureau
                                    that would combine deep maritime expertise with cutting-edge technology. Our goal was not
                                    just to digitize existing processes, but to reimagine how maritime compliance should work
                                    in the 21st century.
                                </p>
                                <p>
                                    Today, GIRIK serves as the digital backbone for maritime certification across 40+ flag
                                    states, connecting ship owners, surveyors, flag administrations, and port authorities
                                    through a single, trusted platform. Every certificate we issue is instantly verifiable,
                                    every survey is digitally documented, and every stakeholder has real-time visibility
                                    into compliance status.
                                </p>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1577993157145-53d66ad47ad3?q=80&w=1200&auto=format&fit=crop"
                                alt="Maritime Operations"
                                className="w-full shadow-xl"
                            />
                            {/* Floating Stats */}
                            <div className="absolute -bottom-8 -left-8 bg-teal-500 text-white p-6 shadow-xl">
                                <div className="text-5xl font-heading font-bold">40+</div>
                                <div className="text-teal-100">Flag State Authorizations</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================
                CORE VALUES
            ============================================ */}
            <section className="section-padding-lg bg-white">
                <div className="container-custom">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="badge-navy mb-4 inline-block">Our Foundation</span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-600 mt-4 mb-6">
                            Core Values That Guide Us
                        </h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            These principles underpin everything we do, from product development to client service.
                        </p>
                    </div>

                    {/* Values Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {coreValues.map((value, index) => (
                            <div key={index} className="border border-slate-200 p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className="w-14 h-14 bg-teal-50 flex items-center justify-center mb-6">
                                    <value.icon className="text-teal-500" size={28} />
                                </div>
                                <h3 className="text-xl font-heading font-bold text-navy-600 mb-4">
                                    {value.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================
                COMPANY MILESTONES / TIMELINE
            ============================================ */}
            <section className="section-padding-lg bg-navy-600">
                <div className="container-custom">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="bg-white/10 text-teal-400 border border-teal-400/30 px-4 py-1 text-xs font-bold uppercase tracking-wider inline-block mb-4">
                            Our Journey
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-4 mb-6">
                            Key Milestones
                        </h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            From startup to global maritime technology leader in just two years.
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/20 -translate-x-1/2 hidden lg:block"></div>

                        <div className="space-y-8">
                            {milestones.map((milestone, index) => (
                                <div key={index} className={`lg:flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                    {/* Content */}
                                    <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:pl-12'}`}>
                                        <div className="bg-white/5 border border-white/10 p-6 inline-block">
                                            <div className="text-teal-400 font-heading font-bold text-xl mb-2">{milestone.year}</div>
                                            <h3 className="text-white font-heading font-bold text-lg mb-2">{milestone.title}</h3>
                                            <p className="text-slate-400">{milestone.description}</p>
                                        </div>
                                    </div>

                                    {/* Center Dot */}
                                    <div className="hidden lg:flex items-center justify-center relative z-10">
                                        <div className="w-5 h-5 bg-teal-500 border-4 border-navy-600"></div>
                                    </div>

                                    {/* Spacer */}
                                    <div className="lg:w-1/2"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================
                LEADERSHIP TEAM
            ============================================ */}
            <section className="section-padding-lg bg-slate-50">
                <div className="container-custom">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="badge-teal mb-4 inline-block">Leadership</span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-600 mt-4 mb-6">
                            Meet Our Team
                        </h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            Led by maritime industry veterans and technology experts with a shared vision for digital excellence.
                        </p>
                    </div>

                    {/* Team Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {TEAM_MEMBERS.map((member, index) => (
                            <div key={index} className="bg-white border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                                {/* Image */}
                                <div className="h-64 overflow-hidden relative">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-600/80 to-transparent"></div>
                                </div>

                                {/* Content */}
                                <div className="p-6 relative">
                                    {/* Social Link */}
                                    {member.linkedin && (
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute -top-6 right-6 w-12 h-12 bg-teal-500 flex items-center justify-center text-white hover:bg-teal-600 transition-colors shadow-lg"
                                        >
                                            <Linkedin size={20} />
                                        </a>
                                    )}

                                    <h3 className="text-lg font-heading font-bold text-navy-600 mb-1">
                                        {member.name}
                                    </h3>
                                    <div className="text-sm text-teal-500 font-semibold mb-3">
                                        {member.position}
                                    </div>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================
                STATISTICS
            ============================================ */}
            <section className="section-padding-lg bg-white border-t border-slate-100">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {STATISTICS.slice(0, 8).map((stat, index) => (
                            <div key={index} className="text-center p-6">
                                <div className="text-4xl md:text-5xl font-heading font-extrabold text-teal-500 mb-2">
                                    {stat.value}<span className="text-navy-600">{stat.suffix}</span>
                                </div>
                                <div className="text-lg font-semibold text-navy-600 mb-1">{stat.label}</div>
                                {stat.description && (
                                    <div className="text-sm text-slate-500">{stat.description}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================
                ACCREDITATIONS
            ============================================ */}
            <section className="section-padding-lg bg-slate-50">
                <div className="container-custom">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="badge-navy mb-4 inline-block">Accreditations</span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-600 mt-4 mb-6">
                            Standards & Compliance
                        </h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            We maintain alignment with the highest international standards for quality, security, and maritime compliance.
                        </p>
                    </div>

                    {/* Accreditations Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {accreditations.map((item, index) => (
                            <div key={index} className="bg-white p-6 border border-slate-200 flex items-start gap-4">
                                <div className="w-12 h-12 bg-teal-50 flex items-center justify-center flex-shrink-0">
                                    <Award className="text-teal-500" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-navy-600 mb-1">{item.name}</h3>
                                    <p className="text-sm text-slate-600">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================
                GLOBAL PRESENCE
            ============================================ */}
            <section className="section-padding-lg bg-navy-600">
                <div className="container-custom">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="bg-white/10 text-teal-400 border border-teal-400/30 px-4 py-1 text-xs font-bold uppercase tracking-wider inline-block mb-4">
                            Global Reach
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-4 mb-6">
                            Our Global Presence
                        </h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            With regional hubs and a network of authorized surveyors, we deliver seamless service across major maritime centers worldwide.
                        </p>
                    </div>

                    {/* Locations */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { city: 'Mumbai', country: 'India', role: 'Global Headquarters', flag: '🇮🇳' },
                            { city: 'Singapore', country: 'Singapore', role: 'Asia-Pacific Hub', flag: '🇸🇬' },
                            { city: 'Dubai', country: 'UAE', role: 'Middle East Hub', flag: '🇦🇪' },
                            { city: 'Rotterdam', country: 'Netherlands', role: 'European Operations', flag: '🇳🇱' }
                        ].map((location, index) => (
                            <div key={index} className="bg-white/5 border border-white/10 p-6 text-center hover:bg-white/10 transition-colors">
                                <div className="text-4xl mb-4">{location.flag}</div>
                                <h3 className="text-xl font-heading font-bold text-white mb-1">{location.city}</h3>
                                <div className="text-teal-400 font-medium mb-2">{location.country}</div>
                                <div className="text-sm text-slate-400">{location.role}</div>
                            </div>
                        ))}
                    </div>

                    {/* Global Stats */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-heading font-bold text-white">120+</div>
                            <div className="text-slate-400">Ports Covered</div>
                        </div>
                        <div>
                            <div className="text-4xl font-heading font-bold text-white">150+</div>
                            <div className="text-slate-400">Expert Surveyors</div>
                        </div>
                        <div>
                            <div className="text-4xl font-heading font-bold text-white">40+</div>
                            <div className="text-slate-400">Flag Authorizations</div>
                        </div>
                        <div>
                            <div className="text-4xl font-heading font-bold text-white">24/7</div>
                            <div className="text-slate-400">Global Support</div>
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
                        Ready to Partner with GIRIK?
                    </h2>
                    <p className="text-teal-100 text-lg max-w-2xl mx-auto mb-10">
                        Whether you're a ship owner, flag administration, or surveyor, we're here to support your maritime certification needs.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={() => onNavigate('contact')}
                            className="bg-white text-teal-600 px-8 py-4 font-semibold text-sm uppercase tracking-wider hover:bg-navy-600 hover:text-white transition-all flex items-center gap-2"
                        >
                            Contact Us
                            <ArrowRight size={18} />
                        </button>
                        <button
                            onClick={() => onNavigate('services')}
                            className="bg-transparent text-white border-2 border-white px-8 py-4 font-semibold text-sm uppercase tracking-wider hover:bg-white hover:text-teal-600 transition-all"
                        >
                            View Our Services
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
