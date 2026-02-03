// ============================================
// GIRIK CLASS - FOOTER COMPONENT
// Complete Maritime Classification Footer
// ============================================

import React from 'react';
import {
    Phone,
    Mail,
    MapPin,
    Shield,
    ChevronRight,
    Globe,
    Linkedin,
    Twitter,
    Facebook,
    Youtube,
    ExternalLink,
    Anchor
} from 'lucide-react';
import { PageType } from '../types';
import { COMPANY_INFO } from '../constants';

interface FooterProps {
    onNavigate: (page: PageType) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        services: [
            { label: 'Ship Classification', page: 'services' },
            { label: 'Statutory Certification', page: 'services' },
            { label: 'Flag State Services', page: 'services' },
            { label: 'Environmental Services', page: 'services' },
            { label: 'EU MRV Verification', page: 'services' },
            { label: 'ISM/ISPS Audits', page: 'services' }
        ],
        resources: [
            { label: 'Rules & Guidelines', page: 'services' },
            { label: 'Technical Circulars', page: 'services' },
            { label: 'Survey Schedule', page: 'contact' },
            { label: 'Fee Schedule', page: 'contact' },
            { label: 'Forms & Checklists', page: 'services' },
            { label: 'Class Notations', page: 'services' }
        ],
        company: [
            { label: 'About GIRIK Class', page: 'about' },
            { label: 'Our Team', page: 'about' },
            { label: 'Global Offices', page: 'contact' },
            { label: 'Careers', page: 'contact' },
            { label: 'News & Updates', page: 'home' },
            { label: 'Contact Us', page: 'contact' }
        ],
        quickLinks: [
            { label: 'Verify Certificate', page: 'verify' },
            { label: 'Client Portal', page: 'login' },
            { label: 'Request Survey', page: 'contact' },
            { label: 'Transfer of Class', page: 'contact' }
        ]
    };

    const offices = [
        { city: 'Mumbai', country: 'HQ' },
        { city: 'Singapore', country: 'Asia' },
        { city: 'Dubai', country: 'ME' },
        { city: 'Athens', country: 'EU' }
    ];

    return (
        <footer style={{ background: '#0B2545' }}>
            {/* Main Footer */}
            <div className="container-custom py-16">
                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 flex items-center justify-center" style={{ background: '#00A896' }}>
                                <Shield size={26} className="text-white" />
                            </div>
                            <div>
                                <div className="text-2xl font-heading font-bold text-white">GIRIK Class</div>
                                <div className="text-xs text-white/60 uppercase tracking-wider">Classification Society</div>
                            </div>
                        </div>
                        <p className="text-white/70 mb-6 leading-relaxed max-w-sm">
                            An independent ship classification society providing maritime
                            classification, statutory certification, and technical services
                            to the global shipping industry.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                                <Phone size={16} style={{ color: '#00A896' }} />
                                <span>{COMPANY_INFO.phone}</span>
                            </a>
                            <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                                <Mail size={16} style={{ color: '#00A896' }} />
                                <span>{COMPANY_INFO.email}</span>
                            </a>
                            <div className="flex items-start gap-3 text-white/70">
                                <MapPin size={16} style={{ color: '#00A896' }} className="mt-1 flex-shrink-0" />
                                <span>
                                    {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.country}
                                </span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3 mt-6">
                            {[
                                { icon: Linkedin, href: '#' },
                                { icon: Twitter, href: '#' },
                                { icon: Facebook, href: '#' },
                                { icon: Youtube, href: '#' }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                                    style={{ background: 'rgba(255,255,255,0.05)' }}
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">
                            Services
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => onNavigate(link.page as PageType)}
                                        className="text-white/70 hover:text-white text-sm flex items-center gap-2 transition-colors"
                                    >
                                        <ChevronRight size={12} style={{ color: '#00A896' }} />
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => onNavigate(link.page as PageType)}
                                        className="text-white/70 hover:text-white text-sm flex items-center gap-2 transition-colors"
                                    >
                                        <ChevronRight size={12} style={{ color: '#00A896' }} />
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links & Offices */}
                    <div>
                        <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">
                            Quick Links
                        </h4>
                        <ul className="space-y-3 mb-8">
                            {footerLinks.quickLinks.map((link, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => onNavigate(link.page as PageType)}
                                        className="text-white/70 hover:text-white text-sm flex items-center gap-2 transition-colors"
                                    >
                                        <ChevronRight size={12} style={{ color: '#00A896' }} />
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <h4 className="font-heading font-bold text-white mb-4 uppercase tracking-wider text-sm">
                            Global Offices
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {offices.map((office, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 text-xs text-white/70"
                                    style={{ background: 'rgba(255,255,255,0.05)' }}
                                >
                                    {office.city}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div style={{ background: 'rgba(0,0,0,0.2)' }} className="py-6">
                <div className="container-custom">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="text-white/50 text-sm">
                            © {currentYear} GIRIK Class. All rights reserved.
                        </div>
                        <div className="flex flex-wrap items-center gap-6 text-sm">
                            <button
                                onClick={() => onNavigate('privacy')}
                                className="text-white/50 hover:text-white transition-colors"
                            >
                                Privacy Policy
                            </button>
                            <button
                                onClick={() => onNavigate('terms')}
                                className="text-white/50 hover:text-white transition-colors"
                            >
                                Terms of Service
                            </button>
                            <button
                                onClick={() => onNavigate('contact')}
                                className="text-white/50 hover:text-white transition-colors"
                            >
                                Cookie Policy
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Accreditation Bar */}
            <div style={{ background: '#00A896' }} className="py-3">
                <div className="container-custom">
                    <div className="flex flex-wrap items-center justify-center gap-6 text-white/90 text-xs">
                        <span className="flex items-center gap-2">
                            <Anchor size={14} /> IMO Recognized Organization
                        </span>
                        <span className="hidden md:inline">|</span>
                        <span>40+ Flag State Authorizations</span>
                        <span className="hidden md:inline">|</span>
                        <span>ISO 9001 Certified</span>
                        <span className="hidden md:inline">|</span>
                        <span>EU MRV Accredited Verifier</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
