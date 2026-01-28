// ============================================
// GIRIK SHIPPING - CLIENT PORTAL APP
// Main Client Application Component
// ============================================

import React, { useState, useEffect } from 'react';
import { ClientPageType } from './types';
import { DEMO_CLIENT } from './constants';

// Layout
import ClientLayout from './ClientLayout';

// Pages
import ClientLogin from './pages/ClientLogin';
import ClientDashboard from './pages/ClientDashboard';
import ClientVessels from './pages/ClientVessels';
import ClientVesselDetails from './pages/ClientVesselDetails';
import ClientJobs from './pages/ClientJobs';
import ClientJobDetails from './pages/ClientJobDetails';
import ClientCreateJob from './pages/ClientCreateJob';
import ClientCertificates from './pages/ClientCertificates';
import ClientNotifications from './pages/ClientNotifications';
import ClientProfile from './pages/ClientProfile';
import ClientVerify from './pages/ClientVerify';

interface ClientAppProps {
    onBackToSite: () => void;
}

const ClientApp: React.FC<ClientAppProps> = ({ onBackToSite }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentPage, setCurrentPage] = useState<ClientPageType>('dashboard');
    const [selectedId, setSelectedId] = useState<string | null>(null);

    // Check for existing session on mount
    useEffect(() => {
        const session = localStorage.getItem('girik_client_session');
        if (session) {
            setIsAuthenticated(true);
        }
    }, []);

    // Handle Login
    const handleLogin = (email: string, password: string): boolean => {
        // Demo credentials: demo@oceanic.com / demo123
        if (email === 'demo@oceanic.com' && password === 'demo123') {
            localStorage.setItem('girik_client_session', JSON.stringify({
                user: DEMO_CLIENT,
                timestamp: Date.now()
            }));
            setIsAuthenticated(true);
            setCurrentPage('dashboard');
            return true;
        }
        return false;
    };

    // Handle Logout
    const handleLogout = () => {
        localStorage.removeItem('girik_client_session');
        setIsAuthenticated(false);
        setCurrentPage('dashboard');
    };

    // Handle Navigation
    const handleNavigate = (page: ClientPageType, id?: string) => {
        setCurrentPage(page);
        setSelectedId(id || null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Handle Forgot Password
    const handleForgotPassword = () => {
        alert('Please contact support at support@girikshipping.com to reset your password.');
    };

    // Show Login if not authenticated
    if (!isAuthenticated) {
        return (
            <ClientLogin
                onLogin={handleLogin}
                onForgotPassword={handleForgotPassword}
                onBackToSite={onBackToSite}
            />
        );
    }

    // Render current page
    const renderPage = () => {
        switch (currentPage) {
            case 'dashboard':
                return <ClientDashboard onNavigate={handleNavigate} />;
            case 'vessels':
                return <ClientVessels onNavigate={handleNavigate} />;
            case 'vessel-details':
                return <ClientVesselDetails vesselId={selectedId || ''} onNavigate={handleNavigate} />;
            case 'jobs':
                return <ClientJobs onNavigate={handleNavigate} />;
            case 'job-details':
                return <ClientJobDetails jobId={selectedId || ''} onNavigate={handleNavigate} />;
            case 'create-job':
                return <ClientCreateJob onNavigate={handleNavigate} />;
            case 'certificates':
                return <ClientCertificates onNavigate={handleNavigate} />;
            case 'notifications':
                return <ClientNotifications onNavigate={handleNavigate} />;
            case 'profile':
                return <ClientProfile onNavigate={handleNavigate} />;
            case 'verify':
                return <ClientVerify onNavigate={handleNavigate} />;
            default:
                return <ClientDashboard onNavigate={handleNavigate} />;
        }
    };

    return (
        <ClientLayout
            currentPage={currentPage}
            onNavigate={handleNavigate}
            onLogout={handleLogout}
        >
            {renderPage()}
        </ClientLayout>
    );
};

export default ClientApp;
