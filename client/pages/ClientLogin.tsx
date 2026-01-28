// ============================================
// GIRIK SHIPPING - CLIENT LOGIN PAGE
// Authentication Page
// ============================================

import React, { useState } from 'react';
import {
    Mail,
    Lock,
    Eye,
    EyeOff,
    ArrowRight,
    Ship,
    Shield,
    CheckCircle
} from 'lucide-react';

interface ClientLoginProps {
    onLogin: (email: string, password: string) => boolean;
    onForgotPassword: () => void;
    onBackToSite: () => void;
}

const ClientLogin: React.FC<ClientLoginProps> = ({
    onLogin,
    onForgotPassword,
    onBackToSite
}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            const success = onLogin(email, password);
            if (!success) {
                setError('Invalid email or password. Try demo@oceanic.com / demo123');
            }
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen flex">
            {/* ============================================
                LEFT SIDE - BRANDING
            ============================================ */}
            <div className="hidden lg:flex lg:w-1/2 bg-navy-600 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>

                <div className="relative z-10 flex flex-col justify-center p-12 lg:p-16">
                    {/* Logo */}
                    <div className="flex items-center gap-3 mb-12">
                        <div className="w-14 h-14 bg-teal-500 flex items-center justify-center">
                            <span className="text-white font-heading font-bold text-2xl">G</span>
                        </div>
                        <div>
                            <div className="text-white font-heading font-bold text-2xl">GIRIK</div>
                            <div className="text-teal-400 text-sm font-medium">Client Portal</div>
                        </div>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-6">
                        Manage Your Fleet<br />
                        <span className="text-teal-400">With Confidence</span>
                    </h1>

                    <p className="text-slate-300 text-lg mb-10 max-w-md">
                        Access your vessel certificates, track survey requests, and stay compliant with our digital maritime platform.
                    </p>

                    {/* Features */}
                    <div className="space-y-4">
                        {[
                            'Real-time certificate tracking',
                            'Instant survey request submission',
                            'Digital document management',
                            'Secure QR verification'
                        ].map((feature, index) => (
                            <div key={index} className="flex items-center gap-3 text-slate-300">
                                <CheckCircle size={20} className="text-teal-400" />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* Ship illustration */}
                    <div className="absolute bottom-0 right-0 opacity-20">
                        <Ship size={300} className="text-teal-500" />
                    </div>
                </div>
            </div>

            {/* ============================================
                RIGHT SIDE - LOGIN FORM
            ============================================ */}
            <div className="flex-1 flex flex-col justify-center p-8 lg:p-16 bg-white">
                <div className="max-w-md mx-auto w-full">
                    {/* Mobile Logo */}
                    <div className="lg:hidden flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 bg-teal-500 flex items-center justify-center">
                            <span className="text-white font-heading font-bold text-xl">G</span>
                        </div>
                        <div>
                            <div className="text-navy-600 font-heading font-bold text-xl">GIRIK</div>
                            <div className="text-teal-500 text-sm font-medium">Client Portal</div>
                        </div>
                    </div>

                    {/* Header */}
                    <div className="mb-8">
                        <h2 className="text-2xl lg:text-3xl font-heading font-bold text-navy-600 mb-2">
                            Welcome Back
                        </h2>
                        <p className="text-slate-600">
                            Sign in to your client account to continue
                        </p>
                    </div>

                    {/* Demo Credentials */}
                    <div className="bg-teal-50 border border-teal-200 p-4 mb-6">
                        <div className="flex items-start gap-3">
                            <Shield className="text-teal-500 flex-shrink-0 mt-0.5" size={20} />
                            <div>
                                <div className="font-medium text-teal-700 text-sm mb-1">Demo Credentials</div>
                                <div className="text-sm text-teal-600">
                                    Email: <span className="font-mono font-medium">demo@oceanic.com</span><br />
                                    Password: <span className="font-mono font-medium">demo123</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 mb-6 text-sm">
                            {error}
                        </div>
                    )}

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full pl-10 pr-4 py-3 border border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    className="w-full pl-10 pr-12 py-3 border border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="w-4 h-4 border-slate-300 text-teal-500 focus:ring-teal-500"
                                />
                                <span className="text-sm text-slate-600">Remember me</span>
                            </label>
                            <button
                                type="button"
                                onClick={onForgotPassword}
                                className="text-sm text-teal-600 hover:text-teal-700 font-medium"
                            >
                                Forgot password?
                            </button>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`
                                w-full py-3 font-semibold text-white flex items-center justify-center gap-2 transition-all
                                ${isLoading
                                    ? 'bg-slate-400 cursor-not-allowed'
                                    : 'bg-teal-500 hover:bg-teal-600'
                                }
                            `}
                        >
                            {isLoading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Signing in...
                                </>
                            ) : (
                                <>
                                    Sign In
                                    <ArrowRight size={18} />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Back to Site */}
                    <div className="mt-8 pt-6 border-t border-slate-200 text-center">
                        <button
                            onClick={onBackToSite}
                            className="text-sm text-slate-600 hover:text-teal-600"
                        >
                            ← Back to main website
                        </button>
                    </div>

                    {/* Security Note */}
                    <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500">
                        <Shield size={14} />
                        <span>256-bit SSL encrypted connection</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientLogin;
