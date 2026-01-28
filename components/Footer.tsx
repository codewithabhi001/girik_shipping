// ============================================
// GIRIK SHIPPING - FOOTER COMPONENT
// Professional Footer with Complete Navigation
// ============================================

import React from 'react';
import {
    ShieldCheck,
    Phone,
    Mail,
    MapPin,
    Linkedin,
    Twitter,
    Facebook,
    Youtube,
    ArrowUp,
    Globe,
    Award,
    Lock,
    ArrowRight,
    ChevronRight
} from 'lucide-react';
import { FOOTER_LINKS, COMPANY_INFO, COMPLIANCE_BADGES } from '../constants';
import { PageType } from '../types';

interface FooterProps {
    onNavigate: (page: PageType) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-navy-600">
            {/* Newsletter Section */}
            <div className="border-b border-white/10">
                <div className="container-custom py-12">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-heading font-bold text-white mb-2">
                                Stay Updated
                            </h3>
                            <p className="text-slate-400">
                                Subscribe to receive regulatory updates, industry news, and product announcements.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-4 py-3 bg-white/10 border-2 border-white/20 text-white placeholder-slate-400 focus:border-teal-500 focus:outline-none transition-colors"
                            />
                            <button className="px-6 py-3 bg-teal-500 text-white font-semibold hover:bg-teal-600 transition-colors flex items-center gap-2">
                                Subscribe
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        {/* Logo */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-teal-500 flex items-center justify-center">
                                <ShieldCheck className="text-white" size={28} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-heading font-extrabold tracking-tight text-white">
                                    GIRIK
                                </span>
                                <span className="text-[10px] tracking-[0.12em] font-semibold uppercase text-teal-400 -mt-0.5">
                                    Digital Maritime Bureau
                                </span>
                            </div>
                        </div>

                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            {COMPANY_INFO.description.slice(0, 200)}...
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-3 text-slate-300 hover:text-teal-400 transition-colors">
                                <Phone size={16} className="text-teal-500" />
                                <span className="text-sm">{COMPANY_INFO.phone}</span>
                            </a>
                            <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-3 text-slate-300 hover:text-teal-400 transition-colors">
                                <Mail size={16} className="text-teal-500" />
                                <span className="text-sm">{COMPANY_INFO.email}</span>
                            </a>
                            <div className="flex items-start gap-3 text-slate-400">
                                <MapPin size={16} className="text-teal-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">
                                    {COMPANY_INFO.address.street},<br />
                                    {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}<br />
                                    {COMPANY_INFO.address.country} - {COMPANY_INFO.address.postalCode}
                                </span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3 mt-6">
                            <a
                                href={COMPANY_INFO.socialMedia.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 flex items-center justify-center text-slate-400 hover:bg-teal-500 hover:text-white transition-all"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                href={COMPANY_INFO.socialMedia.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 flex items-center justify-center text-slate-400 hover:bg-teal-500 hover:text-white transition-all"
                                aria-label="Twitter"
                            >
                                <Twitter size={18} />
                            </a>
                            <a
                                href={COMPANY_INFO.socialMedia.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 flex items-center justify-center text-slate-400 hover:bg-teal-500 hover:text-white transition-all"
                                aria-label="Facebook"
                            >
                                <Facebook size={18} />
                            </a>
                            <a
                                href={COMPANY_INFO.socialMedia.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 flex items-center justify-center text-slate-400 hover:bg-teal-500 hover:text-white transition-all"
                                aria-label="YouTube"
                            >
                                <Youtube size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    {FOOTER_LINKS.map((section) => (
                        <div key={section.title}>
                            <h4 className="font-heading font-bold text-white mb-5 text-sm uppercase tracking-wider">
                                {section.title}
                            </h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <button
                                            onClick={() => link.page && onNavigate(link.page)}
                                            className="text-slate-400 text-sm hover:text-teal-400 transition-colors flex items-center gap-1 group"
                                        >
                                            <ChevronRight size={12} className="opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                            {link.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Compliance Badges */}
            <div className="border-t border-white/10">
                <div className="container-custom py-8">
                    <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
                        {COMPLIANCE_BADGES.map((badge, index) => (
                            <div key={index} className="flex items-center gap-2 text-slate-500">
                                {badge.iconName === 'ShieldCheck' && <ShieldCheck size={16} />}
                                {badge.iconName === 'Award' && <Award size={16} />}
                                {badge.iconName === 'Lock' && <Lock size={16} />}
                                {badge.iconName === 'Globe' && <Globe size={16} />}
                                <span className="text-xs font-medium uppercase tracking-wider">{badge.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 bg-navy-700">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Copyright */}
                        <div className="text-slate-500 text-sm text-center md:text-left">
                            © {currentYear} {COMPANY_INFO.name}. All Rights Reserved.
                            <span className="hidden md:inline mx-2">|</span>
                            <span className="block md:inline">Registered in India</span>
                        </div>

                        {/* Legal Links */}
                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            <button
                                onClick={() => onNavigate('privacy')}
                                className="text-slate-500 hover:text-teal-400 transition-colors"
                            >
                                Privacy Policy
                            </button>
                            <button
                                onClick={() => onNavigate('terms')}
                                className="text-slate-500 hover:text-teal-400 transition-colors"
                            >
                                Terms of Service
                            </button>
                            <button
                                onClick={() => onNavigate('privacy')}
                                className="text-slate-500 hover:text-teal-400 transition-colors"
                            >
                                Cookie Policy
                            </button>
                        </div>

                        {/* Scroll to Top */}
                        <button
                            onClick={scrollToTop}
                            className="w-10 h-10 bg-white/10 flex items-center justify-center text-slate-400 hover:bg-teal-500 hover:text-white transition-all"
                            aria-label="Scroll to top"
                        >
                            <ArrowUp size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
