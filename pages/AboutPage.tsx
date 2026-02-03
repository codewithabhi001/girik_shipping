// ============================================
// GIRIK CLASS - ABOUT PAGE
// Complete Maritime Classification Society
// ============================================

import React from 'react';
import {
    ShieldCheck,
    Target,
    Eye,
    Award,
    Users,
    Globe,
    CheckCircle,
    ArrowRight,
    Anchor,
    Ship,
    Flag,
    Building2,
    MapPin,
    Phone,
    Mail,
    Calendar,
    Star,
    Briefcase,
    GraduationCap,
    Heart
} from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { PageType } from '../types';

interface AboutPageProps {
    onNavigate: (page: PageType) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
    // Company Timeline
    const timeline = [
        {
            year: '2024',
            title: 'Foundation',
            description: 'GIRIK Class established in Mumbai with a vision to provide world-class maritime classification services with modern digital infrastructure.'
        },
        {
            year: '2024',
            title: 'First Flag Authorization',
            description: 'Received Recognized Organization status from our first flag administration, enabling statutory survey and certification services.'
        },
        {
            year: '2025',
            title: 'Digital Platform Launch',
            description: 'Launched industry-leading digital certificate platform with QR verification, enabling instant authenticity checks worldwide.'
        },
        {
            year: '2025',
            title: 'Global Expansion',
            description: 'Established survey stations in Singapore, Dubai, and Athens. Expanded surveyor network to 120+ professionals globally.'
        },
        {
            year: '2026',
            title: '40+ Flag Authorizations',
            description: 'Achieved RO status with over 40 flag administrations including Panama, Liberia, Marshall Islands, and Malta.'
        }
    ];

    // Core Values
    const values = [
        {
            icon: ShieldCheck,
            title: 'Safety First',
            description: 'Maritime safety is our primary focus. Every survey, every certificate, every decision is guided by the imperative to protect life at sea.'
        },
        {
            icon: Award,
            title: 'Technical Excellence',
            description: 'Our surveyors maintain the highest technical standards, with continuous training and certification in the latest maritime technologies.'
        },
        {
            icon: Globe,
            title: 'Global Reach',
            description: 'With surveyors in over 50 countries, we provide prompt survey services wherever your vessel operates worldwide.'
        },
        {
            icon: Heart,
            title: 'Client Partnership',
            description: 'We view every client as a partner. Our success is measured by your operational excellence and regulatory compliance.'
        }
    ];

    // Leadership Team
    const leadership = [
        {
            name: 'Capt. Rajesh Kumar',
            position: 'Managing Director & CEO',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
            bio: '30+ years in maritime industry. Former Chief Surveyor at a major classification society. Master Mariner with FG certification.'
        },
        {
            name: 'Dr. Anita Sharma',
            position: 'Chief Technical Officer',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
            bio: 'PhD in Naval Architecture. 25 years experience in ship design and classification. Former IMO delegate.'
        },
        {
            name: 'Capt. Michael Chen',
            position: 'Director - Statutory Services',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
            bio: 'Master Mariner with 20+ years at sea. Expert in ISM/ISPS auditing. Led PSC inspections in multiple port states.'
        },
        {
            name: 'Sarah Johnson',
            position: 'Director - Global Operations',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
            bio: '18 years in maritime operations. Previously managed surveyor network for Europe & Middle East at a leading class society.'
        }
    ];

    // Accreditations
    const accreditations = [
        'ISO 9001:2015 Quality Management',
        'ISO 14001:2015 Environmental Management',
        'ISO 45001:2018 Occupational Health & Safety',
        'IACS Quality System Certification Scheme',
        'IMO Recognized Organization',
        'EU MRV Accredited Verifier'
    ];

    // Stats
    const stats = [
        { value: '40+', label: 'Flag Authorizations' },
        { value: '2,500+', label: 'Vessels Classed' },
        { value: '120+', label: 'Surveyors' },
        { value: '50+', label: 'Countries' }
    ];

    return (
        <div>
            {/* HERO SECTION */}
            <section className="relative py-32 pt-40" style={{ background: '#0B2545' }}>
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1559825481-12a05cc00344?q=80&w=2070&auto=format&fit=crop")' }}
                />
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-2 text-sm font-semibold uppercase tracking-wider mb-6" style={{ background: '#00A896', color: 'white' }}>
                            About GIRIK Class
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
                            Committed to Maritime Excellence
                        </h1>
                        <p className="text-xl text-white/70 leading-relaxed">
                            An independent ship classification society providing world-class maritime
                            classification, statutory certification, and technical services to the
                            global shipping industry.
                        </p>
                    </div>
                </div>
            </section>

            {/* STATS BAR */}
            <section style={{ background: '#00A896' }} className="py-10">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                        {stats.map((stat, index) => (
                            <div key={index}>
                                <div className="text-4xl font-heading font-bold mb-1">{stat.value}</div>
                                <div className="text-white/80 text-sm uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* INTRODUCTION */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#00A896' }}>
                                Who We Are
                            </span>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-6" style={{ color: '#0B2545' }}>
                                Your Trusted Classification Partner
                            </h2>
                            <p className="mb-6 leading-relaxed" style={{ color: '#6b7c93', fontSize: '1.0625rem' }}>
                                GIRIK Class was founded with a singular mission: to provide ship owners and operators
                                with a classification society that combines technical excellence with modern digital
                                capabilities and responsive customer service.
                            </p>
                            <p className="mb-6 leading-relaxed" style={{ color: '#6b7c93', fontSize: '1.0625rem' }}>
                                As a Recognized Organization (RO) authorized by over 40 flag administrations, we
                                conduct surveys and issue certificates that are accepted by port state control
                                authorities worldwide. Our commitment to quality ensures our classed fleet
                                maintains an excellent PSC performance record.
                            </p>
                            <p className="mb-8 leading-relaxed" style={{ color: '#6b7c93', fontSize: '1.0625rem' }}>
                                Headquartered in Mumbai, India, with offices in Singapore, Dubai, and Athens,
                                GIRIK Class provides global coverage through a network of 120+ qualified surveyors
                                operating in over 50 countries.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={() => onNavigate('services')}
                                    className="px-8 py-4 font-semibold flex items-center gap-3"
                                    style={{ background: '#0B2545', color: 'white' }}
                                >
                                    Our Services <ArrowRight size={18} />
                                </button>
                                <button
                                    onClick={() => onNavigate('contact')}
                                    className="px-8 py-4 font-semibold flex items-center gap-3"
                                    style={{ border: '2px solid #0B2545', color: '#0B2545' }}
                                >
                                    Contact Us
                                </button>
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=1200&auto=format&fit=crop"
                                alt="GIRIK Class maritime operations"
                                className="w-full shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -left-6 p-6 shadow-xl hidden lg:block" style={{ background: 'white', border: '4px solid #00A896' }}>
                                <div className="flex items-center gap-4">
                                    <Anchor size={40} style={{ color: '#00A896' }} />
                                    <div>
                                        <div className="font-heading font-bold text-lg" style={{ color: '#0B2545' }}>Established</div>
                                        <div className="text-2xl font-heading font-bold" style={{ color: '#00A896' }}>2024</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MISSION & VISION */}
            <section className="py-20" style={{ background: '#f8fafc' }}>
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Mission */}
                        <div className="p-10" style={{ background: 'white', borderTop: '4px solid #0B2545' }}>
                            <div className="w-16 h-16 mb-6 flex items-center justify-center" style={{ background: '#0B2545' }}>
                                <Target size={32} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-heading font-bold mb-4" style={{ color: '#0B2545' }}>
                                Our Mission
                            </h3>
                            <p className="leading-relaxed" style={{ color: '#6b7c93', fontSize: '1.0625rem' }}>
                                To provide independent ship classification and statutory certification services
                                that protect life, property, and the marine environment through rigorous
                                technical standards, professional surveys, and digital innovation that enables
                                transparency and efficiency in maritime operations.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="p-10" style={{ background: 'white', borderTop: '4px solid #00A896' }}>
                            <div className="w-16 h-16 mb-6 flex items-center justify-center" style={{ background: '#00A896' }}>
                                <Eye size={32} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-heading font-bold mb-4" style={{ color: '#0B2545' }}>
                                Our Vision
                            </h3>
                            <p className="leading-relaxed" style={{ color: '#6b7c93', fontSize: '1.0625rem' }}>
                                To become a globally recognized classification society known for technical
                                excellence, digital innovation, and commitment to maritime safety. We envision
                                a future where every GIRIK Class certificate is a mark of quality, instantly
                                verifiable and universally trusted.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE VALUES */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-14">
                        <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#00A896' }}>
                            What Drives Us
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4" style={{ color: '#0B2545' }}>
                            Our Core Values
                        </h2>
                        <p className="max-w-2xl mx-auto" style={{ color: '#6b7c93' }}>
                            These principles guide every decision we make and every service we provide.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="text-center p-8" style={{ background: '#f8fafc' }}>
                                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center" style={{ background: '#0B2545' }}>
                                    <value.icon size={28} className="text-white" />
                                </div>
                                <h3 className="font-heading font-bold text-lg mb-3" style={{ color: '#0B2545' }}>
                                    {value.title}
                                </h3>
                                <p className="text-sm leading-relaxed" style={{ color: '#6b7c93' }}>
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TIMELINE */}
            <section className="py-20" style={{ background: '#0B2545' }}>
                <div className="container-custom">
                    <div className="text-center mb-14">
                        <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#00A896' }}>
                            Our Journey
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-3 mb-4">
                            Key Milestones
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        {timeline.map((item, index) => (
                            <div key={index} className="flex gap-8 mb-8 last:mb-0">
                                <div className="flex-shrink-0 w-24 text-right">
                                    <span className="text-2xl font-heading font-bold" style={{ color: '#00A896' }}>{item.year}</span>
                                </div>
                                <div className="flex-shrink-0 flex flex-col items-center">
                                    <div className="w-4 h-4 rounded-full" style={{ background: '#00A896' }} />
                                    {index < timeline.length - 1 && (
                                        <div className="w-0.5 flex-grow" style={{ background: 'rgba(255,255,255,0.2)' }} />
                                    )}
                                </div>
                                <div className="pb-8">
                                    <h3 className="text-xl font-heading font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-white/70 leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LEADERSHIP */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-14">
                        <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#00A896' }}>
                            Our Team
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4" style={{ color: '#0B2545' }}>
                            Leadership Team
                        </h2>
                        <p className="max-w-2xl mx-auto" style={{ color: '#6b7c93' }}>
                            Experienced maritime professionals leading GIRIK Class to excellence.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {leadership.map((person, index) => (
                            <div key={index} className="group">
                                <div className="mb-5 overflow-hidden">
                                    <img
                                        src={person.image}
                                        alt={person.name}
                                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <h3 className="font-heading font-bold text-lg mb-1" style={{ color: '#0B2545' }}>
                                    {person.name}
                                </h3>
                                <p className="text-sm font-medium mb-3" style={{ color: '#00A896' }}>
                                    {person.position}
                                </p>
                                <p className="text-sm leading-relaxed" style={{ color: '#6b7c93' }}>
                                    {person.bio}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ACCREDITATIONS */}
            <section className="py-20" style={{ background: '#f8fafc' }}>
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#00A896' }}>
                                Quality Assurance
                            </span>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-6" style={{ color: '#0B2545' }}>
                                Accreditations & Certifications
                            </h2>
                            <p className="mb-8 leading-relaxed" style={{ color: '#6b7c93', fontSize: '1.0625rem' }}>
                                GIRIK Class maintains internationally recognized quality management systems
                                and is accredited by leading certification bodies to ensure our services
                                meet the highest standards.
                            </p>

                            <div className="grid grid-cols-1 gap-3">
                                {accreditations.map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 p-4" style={{ background: 'white' }}>
                                        <Award size={20} style={{ color: '#00A896' }} />
                                        <span className="font-medium" style={{ color: '#0B2545' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"
                                alt="Quality management certification"
                                className="w-full shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* GLOBAL PRESENCE */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-14">
                        <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#00A896' }}>
                            Worldwide Coverage
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4" style={{ color: '#0B2545' }}>
                            Global Presence
                        </h2>
                        <p className="max-w-2xl mx-auto" style={{ color: '#6b7c93' }}>
                            With offices in key maritime hubs and surveyors in 50+ countries,
                            we provide prompt service wherever your vessel operates.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { city: 'Mumbai', country: 'India', type: 'Headquarters', phone: '+91 22 4000 5000' },
                            { city: 'Singapore', country: 'Singapore', type: 'Regional Office', phone: '+65 6789 0000' },
                            { city: 'Dubai', country: 'UAE', type: 'Regional Office', phone: '+971 4 567 0000' },
                            { city: 'Athens', country: 'Greece', type: 'Regional Office', phone: '+30 210 456 0000' }
                        ].map((office, index) => (
                            <div key={index} className="p-6" style={{ background: '#f8fafc', borderBottom: '3px solid #00A896' }}>
                                <MapPin size={24} style={{ color: '#00A896' }} className="mb-4" />
                                <h3 className="font-heading font-bold text-xl mb-1" style={{ color: '#0B2545' }}>
                                    {office.city}
                                </h3>
                                <p className="text-sm mb-1" style={{ color: '#6b7c93' }}>{office.country}</p>
                                <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#00A896' }}>
                                    {office.type}
                                </p>
                                <p className="text-sm" style={{ color: '#6b7c93' }}>
                                    <Phone size={12} className="inline mr-1" /> {office.phone}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20" style={{ background: '#00A896' }}>
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                        Partner With GIRIK Class
                    </h2>
                    <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
                        Whether you're looking for new classification, transfer of class, or statutory
                        certification services, our team is ready to assist.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={() => onNavigate('contact')}
                            className="px-10 py-4 font-semibold flex items-center gap-3"
                            style={{ background: 'white', color: '#0B2545' }}
                        >
                            Contact Us <ArrowRight size={18} />
                        </button>
                        <button
                            onClick={() => onNavigate('services')}
                            className="px-10 py-4 font-semibold flex items-center gap-3 border-2 border-white text-white hover:bg-white hover:text-[#0B2545] transition-all"
                        >
                            Our Services
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
