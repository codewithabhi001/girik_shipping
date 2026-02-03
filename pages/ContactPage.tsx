// ============================================
// GIRIK CLASS - CONTACT PAGE
// Complete Contact & Inquiry Form
// ============================================

import React, { useState } from 'react';
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    CheckCircle,
    Globe,
    Users,
    Ship,
    FileCheck,
    ArrowRight,
    Building2,
    MessageSquare,
    Calendar
} from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { PageType } from '../types';

interface ContactPageProps {
    onNavigate: (page: PageType) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        inquiryType: '',
        vesselName: '',
        vesselIMO: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Inquiry Types
    const inquiryTypes = [
        'New Classification Inquiry',
        'Transfer of Class',
        'Statutory Survey Request',
        'Flag State Services',
        'Environmental Services (EU MRV, CII)',
        'Certificate Verification',
        'Technical Consultation',
        'General Inquiry'
    ];

    // Office Locations
    const offices = [
        {
            city: 'Mumbai',
            country: 'India',
            type: 'Headquarters',
            address: 'Maritime Business Centre, Ballard Estate, Mumbai 400001',
            phone: '+91 22 4000 5000',
            email: 'hq@girikclass.com',
            hours: 'Mon-Fri: 9:00 AM - 6:00 PM IST'
        },
        {
            city: 'Singapore',
            country: 'Singapore',
            type: 'Regional Office - Asia Pacific',
            address: '50 Raffles Place, Singapore 048623',
            phone: '+65 6789 0000',
            email: 'singapore@girikclass.com',
            hours: 'Mon-Fri: 9:00 AM - 6:00 PM SGT'
        },
        {
            city: 'Dubai',
            country: 'UAE',
            type: 'Regional Office - Middle East',
            address: 'Dubai Maritime City, Dubai, UAE',
            phone: '+971 4 567 0000',
            email: 'dubai@girikclass.com',
            hours: 'Sun-Thu: 9:00 AM - 6:00 PM GST'
        },
        {
            city: 'Athens',
            country: 'Greece',
            type: 'Regional Office - Europe',
            address: 'Akti Miaouli 85, Piraeus 18538',
            phone: '+30 210 456 0000',
            email: 'athens@girikclass.com',
            hours: 'Mon-Fri: 9:00 AM - 6:00 PM EET'
        }
    ];

    // Quick Contact Options
    const quickContacts = [
        {
            title: '24/7 Emergency Line',
            description: 'For urgent survey requests and emergency assistance',
            icon: Phone,
            value: '+91 22 4000 5555',
            action: 'tel:+912240005555'
        },
        {
            title: 'Survey Requests',
            description: 'Schedule surveys and inspections',
            icon: Calendar,
            value: 'surveys@girikclass.com',
            action: 'mailto:surveys@girikclass.com'
        },
        {
            title: 'Technical Support',
            description: 'Technical queries and Rule interpretations',
            icon: MessageSquare,
            value: 'technical@girikclass.com',
            action: 'mailto:technical@girikclass.com'
        }
    ];

    return (
        <div>
            {/* HERO SECTION */}
            <section className="relative py-32 pt-40" style={{ background: '#0B2545' }}>
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=2070&auto=format&fit=crop")' }}
                />
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-2 text-sm font-semibold uppercase tracking-wider mb-6" style={{ background: '#00A896', color: 'white' }}>
                            Contact Us
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
                            Get In Touch
                        </h1>
                        <p className="text-xl text-white/70 leading-relaxed">
                            Contact our team for classification inquiries, survey requests,
                            transfer of class, or any maritime certification requirements.
                        </p>
                    </div>
                </div>
            </section>

            {/* QUICK CONTACT BAR */}
            <section style={{ background: '#00A896' }} className="py-4">
                <div className="container-custom">
                    <div className="flex flex-wrap items-center justify-center gap-8 text-white text-sm">
                        <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-2 font-medium">
                            <Phone size={16} /> 24/7 Support: {COMPANY_INFO.phone}
                        </a>
                        <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-2 font-medium">
                            <Mail size={16} /> {COMPANY_INFO.email}
                        </a>
                    </div>
                </div>
            </section>

            {/* CONTACT FORM & INFO */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-heading font-bold mb-6" style={{ color: '#0B2545' }}>
                                Send Us a Message
                            </h2>
                            <p className="mb-8" style={{ color: '#6b7c93' }}>
                                Fill out the form below and our team will respond within 24 hours.
                            </p>

                            {submitted ? (
                                <div className="p-8 text-center" style={{ background: '#f0fdf4' }}>
                                    <CheckCircle size={48} className="mx-auto mb-4" style={{ color: '#00A896' }} />
                                    <h3 className="text-xl font-heading font-bold mb-2" style={{ color: '#0B2545' }}>
                                        Thank You!
                                    </h3>
                                    <p style={{ color: '#6b7c93' }}>
                                        Your inquiry has been submitted. Our team will contact you shortly.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium mb-2" style={{ color: '#0B2545' }}>
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border-2 border-slate-200 focus:border-[#00A896] focus:outline-none transition-colors"
                                                placeholder="John Smith"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2" style={{ color: '#0B2545' }}>
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border-2 border-slate-200 focus:border-[#00A896] focus:outline-none transition-colors"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium mb-2" style={{ color: '#0B2545' }}>
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border-2 border-slate-200 focus:border-[#00A896] focus:outline-none transition-colors"
                                                placeholder="+1 234 567 8900"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2" style={{ color: '#0B2545' }}>
                                                Company Name
                                            </label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border-2 border-slate-200 focus:border-[#00A896] focus:outline-none transition-colors"
                                                placeholder="Your Company Ltd."
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2" style={{ color: '#0B2545' }}>
                                            Inquiry Type *
                                        </label>
                                        <select
                                            name="inquiryType"
                                            value={formData.inquiryType}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border-2 border-slate-200 focus:border-[#00A896] focus:outline-none transition-colors"
                                        >
                                            <option value="">Select inquiry type...</option>
                                            {inquiryTypes.map((type, index) => (
                                                <option key={index} value={type}>{type}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium mb-2" style={{ color: '#0B2545' }}>
                                                Vessel Name (if applicable)
                                            </label>
                                            <input
                                                type="text"
                                                name="vesselName"
                                                value={formData.vesselName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border-2 border-slate-200 focus:border-[#00A896] focus:outline-none transition-colors"
                                                placeholder="M/V Example"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2" style={{ color: '#0B2545' }}>
                                                IMO Number (if applicable)
                                            </label>
                                            <input
                                                type="text"
                                                name="vesselIMO"
                                                value={formData.vesselIMO}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border-2 border-slate-200 focus:border-[#00A896] focus:outline-none transition-colors"
                                                placeholder="9876543"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2" style={{ color: '#0B2545' }}>
                                            Message *
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 border-2 border-slate-200 focus:border-[#00A896] focus:outline-none transition-colors resize-none"
                                            placeholder="Please describe your inquiry in detail..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="px-10 py-4 font-semibold flex items-center gap-3 transition-all"
                                        style={{ background: '#0B2545', color: 'white' }}
                                    >
                                        <Send size={18} /> Submit Inquiry
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div>
                            <h3 className="text-xl font-heading font-bold mb-6" style={{ color: '#0B2545' }}>
                                Quick Contact
                            </h3>

                            <div className="space-y-4 mb-10">
                                {quickContacts.map((contact, index) => (
                                    <a
                                        key={index}
                                        href={contact.action}
                                        className="block p-5 transition-all hover:shadow-md"
                                        style={{ background: '#f8fafc' }}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ background: '#0B2545' }}>
                                                <contact.icon size={18} className="text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-1" style={{ color: '#0B2545' }}>
                                                    {contact.title}
                                                </h4>
                                                <p className="text-xs mb-2" style={{ color: '#6b7c93' }}>
                                                    {contact.description}
                                                </p>
                                                <p className="text-sm font-medium" style={{ color: '#00A896' }}>
                                                    {contact.value}
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <div className="p-6" style={{ background: '#0B2545' }}>
                                <h4 className="font-heading font-bold text-white mb-4">
                                    Why Choose GIRIK Class?
                                </h4>
                                <ul className="space-y-3">
                                    {[
                                        '40+ Flag State Authorizations',
                                        '24/7 Global Survey Network',
                                        'Digital e-Certificates',
                                        'Competitive Pricing',
                                        'Expert Technical Support'
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-3 text-sm text-white/80">
                                            <CheckCircle size={14} style={{ color: '#00A896' }} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* OFFICE LOCATIONS */}
            <section className="py-20" style={{ background: '#f8fafc' }}>
                <div className="container-custom">
                    <div className="text-center mb-14">
                        <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#00A896' }}>
                            Global Presence
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4" style={{ color: '#0B2545' }}>
                            Our Offices
                        </h2>
                        <p className="max-w-2xl mx-auto" style={{ color: '#6b7c93' }}>
                            With offices in key maritime hubs and surveyors in 50+ countries,
                            we provide prompt service wherever your vessel operates.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {offices.map((office, index) => (
                            <div key={index} className="bg-white p-6 shadow-sm hover:shadow-lg transition-shadow">
                                <div className="flex items-center gap-3 mb-4">
                                    <Building2 size={24} style={{ color: '#00A896' }} />
                                    <div>
                                        <h3 className="font-heading font-bold text-lg" style={{ color: '#0B2545' }}>
                                            {office.city}
                                        </h3>
                                        <p className="text-xs" style={{ color: '#6b7c93' }}>{office.country}</p>
                                    </div>
                                </div>
                                <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#00A896' }}>
                                    {office.type}
                                </p>
                                <div className="space-y-2 text-sm" style={{ color: '#6b7c93' }}>
                                    <p className="flex items-start gap-2">
                                        <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: '#00A896' }} />
                                        {office.address}
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <Phone size={14} style={{ color: '#00A896' }} />
                                        <a href={`tel:${office.phone}`} className="hover:text-[#00A896]">{office.phone}</a>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <Mail size={14} style={{ color: '#00A896' }} />
                                        <a href={`mailto:${office.email}`} className="hover:text-[#00A896]">{office.email}</a>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <Clock size={14} style={{ color: '#00A896' }} />
                                        {office.hours}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MAP PLACEHOLDER */}
            <section className="h-96 relative" style={{ background: '#e5e7eb' }}>
                <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop"
                    alt="Global office locations"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(11, 37, 69, 0.7)' }}>
                    <div className="text-center text-white">
                        <Globe size={48} className="mx-auto mb-4" />
                        <h3 className="text-2xl font-heading font-bold mb-2">Global Survey Network</h3>
                        <p className="text-white/70">120+ Surveyors in 50+ Countries</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20" style={{ background: '#00A896' }}>
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                        Need Immediate Assistance?
                    </h2>
                    <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
                        Our 24/7 emergency line is available for urgent survey requests
                        and time-critical certification requirements.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="tel:+912240005555"
                            className="px-10 py-4 font-semibold flex items-center gap-3"
                            style={{ background: 'white', color: '#0B2545' }}
                        >
                            <Phone size={18} /> Call Emergency Line
                        </a>
                        <a
                            href={`mailto:${COMPANY_INFO.email}`}
                            className="px-10 py-4 font-semibold flex items-center gap-3 border-2 border-white text-white hover:bg-white hover:text-[#0B2545] transition-all"
                        >
                            <Mail size={18} /> Send Email
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
