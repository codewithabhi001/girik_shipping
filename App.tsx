// GIRIK Shipping - Main Application Component

import React, { useState, useEffect } from 'react';
import { PageType } from './types';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import VerifyPage from './pages/VerifyPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import LoginPage from './pages/LoginPage';

// Client Portal
import ClientApp from './client/ClientApp';

// Extended page type to include client portal
type ExtendedPageType = PageType | 'client-portal';

// Page mapping for hash-based routing (works perfectly with GitHub Pages)
const pageMap: { [key: string]: ExtendedPageType } = {
  '': 'home',
  '#': 'home',
  '#home': 'home',
  '#about': 'about',
  '#services': 'services',
  '#how-it-works': 'how-it-works',
  '#verify': 'verify',
  '#contact': 'contact',
  '#privacy': 'privacy',
  '#terms': 'terms',
  '#login': 'login',
  '#client': 'client-portal',
  '#client-portal': 'client-portal',
};

const hashMap: { [key in ExtendedPageType]: string } = {
  'home': '',
  'about': '#about',
  'services': '#services',
  'how-it-works': '#how-it-works',
  'verify': '#verify',
  'contact': '#contact',
  'privacy': '#privacy',
  'terms': '#terms',
  'login': '#login',
  'client-portal': '#client',
};

const App: React.FC = () => {
  // Get initial page from URL hash
  const getPageFromHash = (): ExtendedPageType => {
    const hash = window.location.hash;
    return pageMap[hash] || 'home';
  };

  const [currentPage, setCurrentPage] = useState<ExtendedPageType>(getPageFromHash);

  // Handle navigation
  const handleNavigate = (page: ExtendedPageType) => {
    setCurrentPage(page);
    window.location.hash = hashMap[page];
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle browser back/forward buttons and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash();
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);

    // Also handle initial load
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Render current page
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case 'how-it-works':
        return <HowItWorksPage onNavigate={handleNavigate} />;
      case 'verify':
        return <VerifyPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case 'privacy':
        return <PrivacyPage onNavigate={handleNavigate} />;
      case 'terms':
        return <TermsPage onNavigate={handleNavigate} />;
      case 'login':
        return <LoginPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  // Client Portal has its own layout
  if (currentPage === 'client-portal') {
    return <ClientApp onBackToSite={() => handleNavigate('home')} />;
  }

  // Login page has its own layout
  if (currentPage === 'login') {
    return <LoginPage onNavigate={handleNavigate} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage as PageType} onNavigate={handleNavigate} />

      <main className="flex-1">
        {renderPage()}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
