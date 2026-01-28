// ============================================
// GIRIK SHIPPING - HEADER COMPONENT
// Professional Navigation with Mega Menu
// ============================================

import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  QrCode,
  User,
  Globe,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import { NAV_LINKS, COMPANY_INFO } from '../constants';
import { PageType } from '../types';

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on navigation
  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  // Toggle dropdown on hover (desktop) or click (mobile)
  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? 'bg-white shadow-lg'
      : 'bg-transparent'
      }`}>
      {/* Top Bar - Hidden on scroll */}
      <div className={`bg-navy-600 text-white transition-all duration-300 overflow-hidden ${isScrolled ? 'h-0 py-0' : 'h-auto py-2'
        }`}>
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Left - Contact Info */}
            <div className="hidden md:flex items-center gap-6 text-sm">
              <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-2 text-slate-300 hover:text-teal-400 transition-colors">
                <Phone size={14} />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-2 text-slate-300 hover:text-teal-400 transition-colors">
                <Mail size={14} />
                <span>{COMPANY_INFO.email}</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <Clock size={14} />
                <span>24/7 Global Support</span>
              </div>
            </div>

            {/* Right - CTA Links */}
            <div className="flex items-center gap-4 text-sm">
              <button
                onClick={() => handleNavClick('verify')}
                className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors font-medium"
              >
                <QrCode size={14} />
                <span>Verify Certificate</span>
              </button>
              <div className="w-px h-4 bg-white/20"></div>
              <button
                onClick={() => { window.location.hash = '#client'; }}
                className="flex items-center gap-2 text-white hover:text-teal-400 transition-colors font-medium"
              >
                <User size={14} />
                <span>Client Portal</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`transition-all duration-300 ${isScrolled
        ? 'py-3 bg-white'
        : 'py-4 bg-white/95 backdrop-blur-sm'
        }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 group"
            >
              <div className="w-12 h-12 bg-navy-600 flex items-center justify-center transition-colors group-hover:bg-teal-500">
                <ShieldCheck className="text-white" size={28} />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-heading font-extrabold tracking-tight text-navy-600">
                  GIRIK
                </span>
                <span className="text-[10px] tracking-[0.12em] font-semibold uppercase text-teal-500 -mt-0.5">
                  Digital Maritime Bureau
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => !link.children && handleNavClick(link.page)}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors relative ${currentPage === link.page
                      ? 'text-teal-500'
                      : 'text-slate-700 hover:text-teal-500'
                      }`}
                  >
                    {link.label}
                    {link.children && <ChevronDown size={14} className={`transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />}

                    {/* Active indicator */}
                    {currentPage === link.page && (
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-teal-500"></span>
                    )}
                  </button>

                  {/* Dropdown */}
                  {link.children && activeDropdown === link.label && (
                    <div className="absolute top-full left-0 pt-2 w-64 animate-fadeIn">
                      <div className="bg-white shadow-xl border border-slate-100 py-2">
                        {link.children.map((child) => (
                          <button
                            key={child.label}
                            onClick={() => handleNavClick(child.page)}
                            className="w-full text-left px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-teal-500 transition-colors flex items-center justify-between group"
                          >
                            {child.label}
                            <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => handleNavClick('verify')}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-navy-600 border-2 border-navy-600 hover:bg-navy-600 hover:text-white transition-all"
              >
                <QrCode size={16} />
                Verify
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="px-5 py-2 text-sm font-medium text-white bg-teal-500 hover:bg-teal-600 transition-all"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-navy-600 hover:text-teal-500 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-x-0 top-[72px] bg-white shadow-xl transition-all duration-300 transform ${isMobileMenuOpen
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
        <div className="max-h-[calc(100vh-72px)] overflow-y-auto">
          <div className="container-custom py-6">
            {/* Mobile Nav Links */}
            <nav className="space-y-1 mb-6">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  <button
                    onClick={() => link.children ? handleDropdownToggle(link.label) : handleNavClick(link.page)}
                    className={`w-full flex items-center justify-between px-4 py-3 text-base font-medium transition-colors ${currentPage === link.page
                      ? 'text-teal-500 bg-teal-50'
                      : 'text-slate-700 hover:bg-slate-50'
                      }`}
                  >
                    {link.label}
                    {link.children && (
                      <ChevronDown size={18} className={`transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                    )}
                  </button>

                  {/* Mobile Dropdown */}
                  {link.children && activeDropdown === link.label && (
                    <div className="bg-slate-50 py-2">
                      {link.children.map((child) => (
                        <button
                          key={child.label}
                          onClick={() => handleNavClick(child.page)}
                          className="w-full text-left px-8 py-2 text-sm text-slate-600 hover:text-teal-500"
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile CTA Buttons */}
            <div className="space-y-3 pt-4 border-t border-slate-200">
              <button
                onClick={() => handleNavClick('verify')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-base font-medium text-navy-600 border-2 border-navy-600 hover:bg-navy-600 hover:text-white transition-all"
              >
                <QrCode size={18} />
                Verify Certificate
              </button>
              <button
                onClick={() => handleNavClick('login')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-base font-medium text-white bg-teal-500 hover:bg-teal-600 transition-all"
              >
                <User size={18} />
                Client Portal Login
              </button>
            </div>

            {/* Mobile Contact Info */}
            <div className="mt-6 pt-4 border-t border-slate-200 space-y-3">
              <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-3 text-slate-600">
                <Phone size={16} className="text-teal-500" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-3 text-slate-600">
                <Mail size={16} className="text-teal-500" />
                <span>{COMPANY_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
