// GIRIK Shipping - Login Page Component

import React, { useState } from 'react';
import {
    ShieldCheck,
    Mail,
    Lock,
    Eye,
    EyeOff,
    ArrowRight,
    Smartphone,
    Building,
    AlertCircle,
    CheckCircle
} from 'lucide-react';
import { PageType } from '../types';

interface LoginPageProps {
    onNavigate: (page: PageType) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Simulate login
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Demo error for demonstration
        setError('This is a demo. Login functionality is not available.');
        setIsLoading(false);
    };

    const userTypes = [
        { icon: Building, label: 'Ship Owner', description: 'Fleet management & compliance' },
        { icon: ShieldCheck, label: 'Surveyor', description: 'Inspections & reporting' },
        { icon: Smartphone, label: 'Admin', description: 'System administration' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Left Panel - Branding */}
            <div className="hidden lg:flex lg:w-1/2 bg-navy-600 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 hero-pattern"></div>

                <div className="relative z-10 flex flex-col justify-between p-12 w-full">
                    {/* Logo */}
                    <button
                        onClick={() => onNavigate('home')}
                        className="flex items-center gap-3"
                    >
                        <div className="w-12 h-12 bg-teal-500 flex items-center justify-center">
                            <ShieldCheck className="text-white" size={28} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-heading font-extrabold tracking-tight text-white">GIRIK</span>
                            <span className="text-[10px] tracking-[0.15em] font-semibold uppercase text-teal-400">Digital Maritime Bureau</span>
                        </div>
                    </button>

                    {/* Content */}
                    <div className="max-w-md">
                        <h1 className="text-4xl font-heading font-bold text-white mb-6">
                            Welcome to the GIRIK Client Portal
                        </h1>
                        <p className="text-slate-300 text-lg leading-relaxed mb-8">
                            Access your fleet dashboard, manage certificates, track surveys, and stay compliant – all from one secure platform.
                        </p>

                        <div className="space-y-4">
                            {userTypes.map((type, index) => (
                                <div key={index} className="flex items-center gap-4 bg-white/10 p-4">
                                    <type.icon className="text-teal-400" size={24} />
                                    <div>
                                        <div className="text-white font-semibold">{type.label}</div>
                                        <div className="text-slate-400 text-sm">{type.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} GIRIK Shipping. All rights reserved.
                    </div>
                </div>
            </div>

            {/* Right Panel - Login Form */}
            <div className="flex-1 flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    {/* Mobile Logo */}
                    <div className="lg:hidden text-center mb-8">
                        <button
                            onClick={() => onNavigate('home')}
                            className="inline-flex items-center gap-3"
                        >
                            <div className="w-12 h-12 bg-teal-500 flex items-center justify-center">
                                <ShieldCheck className="text-white" size={28} />
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="text-2xl font-heading font-extrabold tracking-tight text-navy-600">GIRIK</span>
                                <span className="text-[10px] tracking-[0.15em] font-semibold uppercase text-teal-500">Digital Maritime Bureau</span>
                            </div>
                        </button>
                    </div>

                    <div className="card bg-white p-8">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-heading font-bold text-navy-600 mb-2">
                                Sign In to Your Account
                            </h2>
                            <p className="text-slate-600">
                                Enter your credentials to access the portal
                            </p>
                        </div>

                        {error && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 flex items-start gap-3">
                                <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
                                <div className="text-sm text-red-700">{error}</div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-navy-600 mb-2">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="form-input pl-12"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-navy-600 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="form-input pl-12 pr-12"
                                        placeholder="Enter your password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                        className="w-4 h-4 text-teal-500 border-slate-300 focus:ring-teal-500"
                                    />
                                    <span className="text-sm text-slate-600">Remember me</span>
                                </label>
                                <button type="button" className="text-sm text-teal-500 hover:underline">
                                    Forgot password?
                                </button>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="btn-primary w-full justify-center"
                            >
                                {isLoading ? (
                                    'Signing in...'
                                ) : (
                                    <>
                                        Sign In
                                        <ArrowRight size={18} className="ml-2" />
                                    </>
                                )}
                            </button>
                        </form>

                        <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                            <p className="text-slate-600 text-sm mb-4">
                                Don't have an account?
                            </p>
                            <button
                                onClick={() => onNavigate('contact')}
                                className="text-teal-500 font-semibold hover:underline"
                            >
                                Contact us to get started
                            </button>
                        </div>
                    </div>

                    {/* Security Note */}
                    <div className="mt-6 text-center">
                        <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                            <Lock size={14} />
                            Secured with 256-bit SSL encryption
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="mt-8 flex justify-center gap-6 text-sm">
                        <button
                            onClick={() => onNavigate('verify')}
                            className="text-slate-600 hover:text-teal-500"
                        >
                            Verify Certificate
                        </button>
                        <button
                            onClick={() => onNavigate('contact')}
                            className="text-slate-600 hover:text-teal-500"
                        >
                            Contact Support
                        </button>
                        <button
                            onClick={() => onNavigate('home')}
                            className="text-slate-600 hover:text-teal-500"
                        >
                            Back to Home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
