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

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  // Handle navigation
  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const pageMap: { [key: string]: PageType } = {
        '/': 'home',
        '/about': 'about',
        '/services': 'services',
        '/how-it-works': 'how-it-works',
        '/verify': 'verify',
        '/contact': 'contact',
        '/privacy': 'privacy',
        '/terms': 'terms',
        '/login': 'login',
      };
      setCurrentPage(pageMap[path] || 'home');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update URL when page changes
  useEffect(() => {
    const pathMap: { [key in PageType]: string } = {
      'home': '/',
      'about': '/about',
      'services': '/services',
      'how-it-works': '/how-it-works',
      'verify': '/verify',
      'contact': '/contact',
      'privacy': '/privacy',
      'terms': '/terms',
      'login': '/login',
    };
    const newPath = pathMap[currentPage];
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath);
    }
  }, [currentPage]);

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

  // Login page has its own layout
  if (currentPage === 'login') {
    return <LoginPage onNavigate={handleNavigate} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-1">
        {renderPage()}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
