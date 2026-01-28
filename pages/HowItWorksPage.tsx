// GIRIK Shipping - How It Works Page Component

import React from 'react';
import {
    Send,
    UserCheck,
    Camera,
    FileSearch,
    CreditCard,
    Award,
    CheckCircle,
    ArrowRight,
    ArrowDown,
    Smartphone,
    Cloud,
    QrCode,
    Shield,
    Clock,
    Globe
} from 'lucide-react';
import { WORKFLOW_STEPS } from '../constants';
import { PageType } from '../types';

interface HowItWorksPageProps {
    onNavigate: (page: PageType) => void;
}

const iconMap: { [key: string]: React.ComponentType<{ size?: number; className?: string }> } = {
    Send, UserCheck, Camera, FileSearch, CreditCard, Award, CheckCircle, ArrowRight
};

const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onNavigate }) => {
    const processHighlights = [
        {
            icon: Smartphone,
            title: 'Mobile-First',
            description: 'Surveyors use our mobile app for real-time evidence capture and reporting.'
        },
        {
            icon: Cloud,
            title: 'Cloud-Based',
            description: 'All data securely stored and accessible from anywhere in the world.'
        },
        {
            icon: QrCode,
            title: 'Instant Verification',
            description: 'Every certificate is verifiable via QR code or UTN lookup.'
        },
        {
            icon: Shield,
            title: 'Tamper-Proof',
            description: 'Cryptographic signatures ensure document authenticity.'
        },
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="relative py-32 bg-navy-600 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1544943911-372076044715?q=80&w=2070&auto=format&fit=crop"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl">
                        <span className="badge-teal mb-6 inline-block">The Process</span>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                            How GIRIK Works
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            From request to verification - experience a completely digital certification journey that saves time, reduces errors, and builds trust.
                        </p>
                    </div>
                </div>
            </section>

            {/* Process Highlights */}
            <section className="py-12 bg-white border-b border-slate-100">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {processHighlights.map((item, index) => (
                            <div key={index} className="flex items-center gap-4 p-4">
                                <div className="w-12 h-12 bg-teal-50 flex items-center justify-center flex-shrink-0">
                                    <item.icon className="text-teal-500" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-navy-600">{item.title}</h3>
                                    <p className="text-sm text-slate-600">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Workflow */}
            <section className="section-padding-lg bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <span className="badge-navy mb-4 inline-block">Step by Step</span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-600 mt-4">
                            The Complete Certification Journey
                        </h2>
                        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                            Each step is designed for efficiency, transparency, and compliance.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        {WORKFLOW_STEPS.map((step, index) => (
                            <div key={index} className="relative">
                                <div className={`grid md:grid-cols-12 gap-6 items-center ${index % 2 === 0 ? '' : 'md:grid-flow-col-dense'
                                    }`}>
                                    {/* Step Number */}
                                    <div className={`md:col-span-2 flex md:justify-center ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                                        }`}>
                                        <div className="w-16 h-16 bg-navy-600 text-white font-heading font-bold text-2xl flex items-center justify-center">
                                            {step.step}
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`md:col-span-10 card bg-slate-50 p-8 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'
                                        }`}>
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-teal-50 flex items-center justify-center flex-shrink-0">
                                                {iconMap[step.iconName] ?
                                                    React.createElement(iconMap[step.iconName], { size: 24, className: 'text-teal-500' }) :
                                                    <CheckCircle size={24} className="text-teal-500" />
                                                }
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-heading font-bold text-navy-600 mb-2">
                                                    {step.title}
                                                </h3>
                                                <p className="text-slate-600">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Arrow */}
                                {index < WORKFLOW_STEPS.length - 1 && (
                                    <div className="flex justify-center py-4">
                                        <ArrowDown className="text-slate-300" size={24} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* User Roles */}
            <section className="section-padding-lg bg-slate-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <span className="badge-teal mb-4 inline-block">User Roles</span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-600 mt-4">
                            Who Uses GIRIK?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                role: 'Ship Owner / Operator',
                                actions: ['Submit certification requests', 'Track application status', 'Manage fleet compliance', 'Process payments'],
                                icon: '🚢'
                            },
                            {
                                role: 'Surveyor',
                                actions: ['Receive job assignments', 'Conduct inspections', 'Upload evidence via mobile', 'Submit digital reports'],
                                icon: '👷'
                            },
                            {
                                role: 'Technical Manager',
                                actions: ['Review survey findings', 'Request clarifications', 'Approve technical reports', 'Manage quality'],
                                icon: '⚙️'
                            },
                            {
                                role: 'Compliance Officer',
                                actions: ['Monitor compliance status', 'Generate reports', 'Track expiry dates', 'Audit operations'],
                                icon: '📋'
                            },
                            {
                                role: 'Finance Manager',
                                actions: ['Generate invoices', 'Process payments', 'Track transactions', 'Financial reporting'],
                                icon: '💰'
                            },
                            {
                                role: 'Flag Administration',
                                actions: ['Oversee registrations', 'Monitor compliance', 'Access verification data', 'Regulatory reporting'],
                                icon: '🏛️'
                            },
                        ].map((user, index) => (
                            <div key={index} className="card bg-white p-6">
                                <div className="text-4xl mb-4">{user.icon}</div>
                                <h3 className="font-heading font-bold text-navy-600 text-lg mb-4">
                                    {user.role}
                                </h3>
                                <ul className="space-y-2">
                                    {user.actions.map((action, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                                            <CheckCircle size={14} className="text-teal-500 flex-shrink-0" />
                                            {action}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Turnaround Time */}
            <section className="section-padding-lg bg-navy-600">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="bg-white/10 text-teal-400 border border-teal-400/30 px-4 py-1 text-xs font-bold uppercase tracking-wider inline-block mb-4">
                                Efficiency
                            </span>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                                Faster Turnaround, Guaranteed
                            </h2>
                            <p className="text-slate-300 leading-relaxed mb-8">
                                GIRIK's digital workflows dramatically reduce the time from survey to certificate issuance. Real-time collaboration, automated approvals, and instant document generation mean you get compliant faster.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/10 p-6">
                                    <Clock className="text-teal-400 mb-3" size={32} />
                                    <div className="text-2xl font-heading font-bold text-white">48 hrs</div>
                                    <div className="text-slate-400 text-sm">Average Survey Turnaround</div>
                                </div>
                                <div className="bg-white/10 p-6">
                                    <Globe className="text-teal-400 mb-3" size={32} />
                                    <div className="text-2xl font-heading font-bold text-white">24/7</div>
                                    <div className="text-slate-400 text-sm">Global Support Available</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop"
                                alt="Efficiency"
                                className="w-full shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-teal-500">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                        Ready to Streamline Your Certification Process?
                    </h2>
                    <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
                        Experience the GIRIK difference with a personalized demo of our platform.
                    </p>
                    <button
                        onClick={() => onNavigate('contact')}
                        className="bg-white text-teal-600 px-8 py-4 font-semibold text-sm uppercase tracking-wider hover:bg-navy-600 hover:text-white transition-all"
                    >
                        Request Demo
                    </button>
                </div>
            </section>
        </div>
    );
};

export default HowItWorksPage;
