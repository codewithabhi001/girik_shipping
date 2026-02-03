// ============================================
// GIRIK CLASS - HEADER COMPONENT
// Fixed Navbar with Proper Visibility
// ============================================

import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Phone,
  QrCode,
  Shield
} from 'lucide-react';
import { PageType } from '../types';
import { COMPANY_INFO } from '../constants';

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    {
      id: 'services',
      label: 'Services',
      hasDropdown: true,
      dropdownItems: [
        { id: 'services', label: 'All Services' },
        { id: 'services', label: 'Ship Classification', anchor: '#classification' },
        { id: 'services', label: 'Statutory Certification', anchor: '#statutory' },
        { id: 'services', label: 'Flag State Services', anchor: '#flag' },
        { id: 'services', label: 'Environmental Services', anchor: '#environmental' }
      ]
    },
    { id: 'howItWorks', label: 'How It Works' },
    { id: 'contact', label: 'Contact' }
  ];

  // Always show solid background on non-home pages
  const isHomePage = currentPage === 'home';
  // On home page: transparent at top, solid on scroll
  // On other pages: always solid
  const showSolidBg = !isHomePage || isScrolled;

  const handleNavClick = (page: PageType | string) => {
    onNavigate(page as PageType);
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: showSolidBg ? 'rgba(11, 37, 69, 0.98)' : 'rgba(11, 37, 69, 0.3)',
        backdropFilter: 'blur(10px)',
        boxShadow: showSolidBg ? '0 4px 20px rgba(0,0,0,0.15)' : 'none'
      }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3"
          >
            <div
              className="w-10 h-10 flex items-center justify-center"
              style={{ background: '#00A896' }}
            >
              <Shield size={22} className="text-white" />
            </div>
            <div>
              <div className="text-xl font-heading font-bold tracking-tight text-white">
                GIRIK
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] -mt-1 text-white/60">
                Classification Society
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.id} className="relative" ref={item.hasDropdown ? dropdownRef : undefined}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className={`px-4 py-2 text-sm font-medium uppercase tracking-wider flex items-center gap-1 transition-colors text-white/90 hover:text-white ${currentPage === item.id ? 'text-white' : ''
                        }`}
                    >
                      {item.label}
                      <ChevronDown size={14} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown Menu */}
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl py-2 z-50">
                        {item.dropdownItems?.map((dropItem, index) => (
                          <button
                            key={index}
                            onClick={() => handleNavClick(dropItem.id as PageType)}
                            className="w-full px-4 py-3 text-left text-sm hover:bg-slate-50 transition-colors"
                            style={{ color: '#0B2545' }}
                          >
                            {dropItem.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.id as PageType)}
                    className={`px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors text-white/90 hover:text-white ${currentPage === item.id ? 'text-white' : ''
                      }`}
                    style={currentPage === item.id ? { color: '#00A896' } : {}}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('verify')}
              className="px-4 py-2 text-sm font-semibold flex items-center gap-2 transition-all"
              style={{ background: '#00A896', color: 'white' }}
            >
              <QrCode size={16} /> Verify
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors"
            >
              <Search size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10" style={{ background: 'rgba(11, 37, 69, 0.98)' }}>
          <nav className="container-custom py-4">
            {navItems.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id as PageType)}
                  className={`w-full px-4 py-3 text-left font-medium transition-colors text-white/80 hover:text-white ${currentPage === item.id ? 'text-[#00A896]' : ''
                    }`}
                >
                  {item.label}
                </button>
                {item.hasDropdown && (
                  <div className="pl-8 pb-2">
                    {item.dropdownItems?.slice(1).map((dropItem, index) => (
                      <button
                        key={index}
                        onClick={() => handleNavClick(dropItem.id as PageType)}
                        className="w-full px-4 py-2 text-left text-sm text-white/60 hover:text-white"
                      >
                        {dropItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-white/10 mt-4">
              <button
                onClick={() => handleNavClick('verify')}
                className="w-full px-4 py-3 text-center font-semibold text-white"
                style={{ background: '#00A896' }}
              >
                <QrCode size={16} className="inline mr-2" /> Verify Certificate
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
