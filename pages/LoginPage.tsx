// ============================================
// GIRIK CLASS - LOGIN PAGE
// Client Portal Access
// ============================================

import React, { useState } from 'react';
import {
    Mail,
    Lock,
    Eye,
    EyeOff,
    ArrowRight,
    Shield,
    Ship,
    CheckCircle,
    AlertCircle,
    Phone,
    HelpCircle
} from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { PageType } from '../types';

interface LoginPageProps {
    onNavigate: (page: PageType) => void;
    onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onNavigate, onLogin }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Please enter your email and password');
            return;
        }
        // Demo login
        onLogin();
    };

    // Portal features
    const portalFeatures = [
        'Access all vessel certificates in one place',
        'Schedule surveys and inspections online',
        'Track survey findings and compliance status',
        'Receive automated expiry notifications',
        'Download and share certificates instantly',
        'Manage multiple vessels and fleets'
    ];

    return (
        <div className="min-h-screen" style={{ background: '#0B2545' }}>
            <div className="grid lg:grid-cols-2 min-h-screen">
                {/* Left Side - Info */}
                <div className="hidden lg:flex flex-col justify-center p-16 relative">
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-10"
                        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop")' }}
                    />
                    <div className="relative z-10">
                        <button
                            onClick={() => onNavigate('home')}
                            className="flex items-center gap-3 mb-16"
                        >
                            <div className="w-12 h-12 flex items-center justify-center" style={{ background: '#00A896' }}>
                                <Shield size={26} className="text-white" />
                            </div>
                            <div>
                                <div className="text-2xl font-heading font-bold text-white">GIRIK Class</div>
                                <div className="text-xs text-white/60 uppercase tracking-wider">Classification Society</div>
                            </div>
                        </button>

                        <h1 className="text-4xl font-heading font-bold text-white mb-6">
                            Welcome to the Client Portal
                        </h1>
                        <p className="text-white/70 text-lg mb-10 leading-relaxed">
                            Access your vessel certificates, schedule surveys, and manage compliance
                            all in one secure platform.
                        </p>

                        <div className="space-y-4">
                            {portalFeatures.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle size={18} style={{ color: '#00A896' }} />
                                    <span className="text-white/80">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 pt-8 border-t border-white/10">
                            <p className="text-white/50 text-sm">
                                Need help? Contact support at{' '}
                                <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: '#00A896' }}>
                                    {COMPANY_INFO.email}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="flex items-center justify-center p-8 lg:p-16" style={{ background: 'white' }}>
                    <div className="w-full max-w-md">
                        {/* Mobile Logo */}
                        <button
                            onClick={() => onNavigate('home')}
                            className="flex items-center gap-3 mb-10 lg:hidden"
                        >
                            <div className="w-10 h-10 flex items-center justify-center" style={{ background: '#0B2545' }}>
                                <Shield size={22} className="text-white" />
                            </div>
                            <div>
                                <div className="text-xl font-heading font-bold" style={{ color: '#0B2545' }}>GIRIK Class</div>
                            </div>
                        </button>

                        <h2 className="text-3xl font-heading font-bold mb-2" style={{ color: '#0B2545' }}>
                            {isLogin ? 'Sign In' : 'Create Account'}
                        </h2>
                        <p className="mb-8" style={{ color: '#6b7c93' }}>
                            {isLogin
                                ? 'Enter your credentials to access the client portal'
                                : 'Register for access to the GIRIK Class client portal'}
                        </p>

                        {/* Toggle */}
                        <div className="flex gap-2 mb-8 p-1" style={{ background: '#f8fafc' }}>
                            <button
                                onClick={() => setIsLogin(true)}
                                className={`flex-1 py-3 text-sm font-medium transition-all ${isLogin
                                        ? 'text-white shadow'
                                        : 'text-slate-600'
                                    }`}
                                style={isLogin ? { background: '#0B2545' } : {}}
                            >
                                Sign In
                            </button>
                            <button
                                onClick={() => setIsLogin(false)}
                                className={`flex-1 py-3 text-sm font-medium transition-all ${!isLogin
                                        ? 'text-white shadow'
                                        : 'text-slate-600'
                                    }`}
                                style={!isLogin ? { background: '#0B2545' } : {}}
                            >
                                Register
                            </button>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="p-4 mb-6 flex items-center gap-3" style={{ background: '#fef2f2' }}>
                                <AlertCircle size={18} style={{ color: '#ef4444' }} />
                                <span className="text-sm" style={{ color: '#ef4444' }}>{error}</span>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {!isLogin && (
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2" style={{ color: '#0B2545' }}>
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 border-2 border-slate-200 focus:border-[#00A896] focus:outline-none transition-colors"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2" style={{ color: '#0B2545' }}>
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 border-2 border-slate-200 focus:border-[#00A896] focus:outline-none transition-colors"
                                            placeholder="Smith"
                                        />
                                    </div>
                                </div>
                            )}

                            <div>
                                <label className="block text-sm font-medium mb-2" style={{ color: '#0B2545' }}>
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 focus:border-[#00A896] focus:outline-none transition-colors"
                                        placeholder="you@company.com"
                                    />
                                </div>
                            </div>

                            {!isLogin && (
                                <div>
                                    <label className="block text-sm font-medium mb-2" style={{ color: '#0B2545' }}>
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border-2 border-slate-200 focus:border-[#00A896] focus:outline-none transition-colors"
                                        placeholder="Your Shipping Company"
                                    />
                                </div>
                            )}

                            <div>
                                <label className="block text-sm font-medium mb-2" style={{ color: '#0B2545' }}>
                                    Password
                                </label>
                                <div className="relative">
                                    <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full pl-12 pr-12 py-3 border-2 border-slate-200 focus:border-[#00A896] focus:outline-none transition-colors"
                                        placeholder="Enter your password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            {isLogin && (
                                <div className="flex items-center justify-between text-sm">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" className="w-4 h-4" />
                                        <span style={{ color: '#6b7c93' }}>Remember me</span>
                                    </label>
                                    <button type="button" className="font-medium" style={{ color: '#00A896' }}>
                                        Forgot password?
                                    </button>
                                </div>
                            )}

                            {!isLogin && (
                                <div>
                                    <label className="flex items-start gap-3 cursor-pointer">
                                        <input type="checkbox" className="w-4 h-4 mt-1" />
                                        <span className="text-sm" style={{ color: '#6b7c93' }}>
                                            I agree to the{' '}
                                            <button type="button" onClick={() => onNavigate('terms')} style={{ color: '#00A896' }}>
                                                Terms of Service
                                            </button>
                                            {' '}and{' '}
                                            <button type="button" onClick={() => onNavigate('privacy')} style={{ color: '#00A896' }}>
                                                Privacy Policy
                                            </button>
                                        </span>
                                    </label>
                                </div>
                            )}

                            <button
                                type="submit"
                                className="w-full py-4 font-semibold flex items-center justify-center gap-3 transition-all"
                                style={{ background: '#0B2545', color: 'white' }}
                            >
                                {isLogin ? 'Sign In' : 'Create Account'} <ArrowRight size={18} />
                            </button>
                        </form>

                        {/* Demo Notice */}
                        <div className="mt-6 p-4" style={{ background: '#f0fdf4', borderLeft: '4px solid #00A896' }}>
                            <p className="text-sm" style={{ color: '#0B2545' }}>
                                <strong>Demo Mode:</strong> Enter any email and password to access the demo dashboard.
                            </p>
                        </div>

                        {/* Help */}
                        <div className="mt-8 pt-6 border-t border-slate-200 text-center">
                            <p className="text-sm" style={{ color: '#6b7c93' }}>
                                Need help? <a href={`tel:${COMPANY_INFO.phone}`} className="font-medium" style={{ color: '#0B2545' }}>{COMPANY_INFO.phone}</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
