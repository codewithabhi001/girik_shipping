// ============================================
// GIRIK CLASS - HOW IT WORKS PAGE
// Classification Process Explained
// ============================================

import React from 'react';
import {
    FileText,
    ClipboardCheck,
    Ship,
    Wrench,
    Award,
    ArrowRight,
    CheckCircle,
    Phone,
    Mail,
    Clock,
    Users,
    Shield,
    Anchor,
    Calendar,
    Globe,
    FileCheck,
    Search,
    Settings,
    QrCode,
    Flag
} from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { PageType } from '../types';

interface HowItWorksPageProps {
    onNavigate: (page: PageType) => void;
}

const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onNavigate }) => {
    // Classification Process Steps
    const processSteps = [
        {
            step: '01',
            title: 'Initial Inquiry',
            description: 'Submit your classification request with vessel particulars. Our team reviews requirements and provides a quotation within 24 hours.',
            icon: FileText,
            details: [
                'Submit vessel details and documentation',
                'Specify type of classification required',
                'Receive quotation and scope of work',
                'Sign classification agreement'
            ]
        },
        {
            step: '02',
            title: 'Plan Approval',
            description: 'Our technical team reviews and approves vessel plans, drawings, and calculations according to GIRIK Class Rules.',
            icon: ClipboardCheck,
            details: [
                'Submit GA plans and structural drawings',
                'Machinery arrangement review',
                'Stability calculations verification',
                'Fire safety and LSA plan approval'
            ]
        },
        {
            step: '03',
            title: 'Construction Survey',
            description: 'For new buildings, our surveyors attend at shipyard to monitor construction and conduct stage surveys.',
            icon: Ship,
            details: [
                'Steel cutting and keel laying',
                'Block assembly inspections',
                'Machinery installation surveys',
                'Sea trials attendance'
            ]
        },
        {
            step: '04',
            title: 'Statutory Surveys',
            description: 'Conduct all required statutory surveys and inspections as authorized by the flag state administration.',
            icon: FileCheck,
            details: [
                'SOLAS safety equipment inspection',
                'MARPOL pollution prevention',
                'ISM/ISPS code audits',
                'MLC compliance verification'
            ]
        },
        {
            step: '05',
            title: 'Certificate Issuance',
            description: 'Upon satisfactory completion, digital e-certificates are issued with QR verification codes.',
            icon: Award,
            details: [
                'Classification certificate issued',
                'Statutory certificates issued',
                'QR codes for instant verification',
                'Certificates uploaded to IMO GISIS'
            ]
        }
    ];

    // Survey Types
    const surveyTypes = [
        {
            title: 'Initial Survey',
            description: 'Complete examination before classification or first certificate issuance',
            icon: Search
        },
        {
            title: 'Annual Survey',
            description: 'Yearly inspection to confirm vessel maintains class and statutory compliance',
            icon: Calendar
        },
        {
            title: 'Intermediate Survey',
            description: 'Mid-cycle survey between special surveys at the 2nd or 3rd anniversary',
            icon: Clock
        },
        {
            title: 'Special Survey',
            description: 'Comprehensive 5-year renewal including drydocking and detailed examination',
            icon: Wrench
        },
        {
            title: 'Bottom Survey',
            description: 'Underwater hull examination in drydock or by divers/ROV if in water',
            icon: Anchor
        },
        {
            title: 'Damage Survey',
            description: 'Unscheduled survey following collision, grounding, or machinery damage',
            icon: Settings
        }
    ];

    // Benefits
    const benefits = [
        {
            title: 'Fast Response',
            description: 'Survey requests processed within 24 hours. Surveyors available in all major ports.',
            icon: Clock
        },
        {
            title: 'Global Coverage',
            description: '120+ surveyors in 50+ countries ensure prompt service wherever you operate.',
            icon: Globe
        },
        {
            title: 'Digital Certificates',
            description: 'All certificates issued digitally with QR codes for instant verification.',
            icon: QrCode
        },
        {
            title: '40+ Flag States',
            description: 'Authorized to issue statutory certificates on behalf of 40+ flag administrations.',
            icon: Flag
        }
    ];

    // FAQs
    const faqs = [
        {
            question: 'How long does the classification process take?',
            answer: 'For an existing vessel, the transfer of class can be completed in 2-4 weeks depending on survey requirements. New construction timelines depend on the shipyard schedule.'
        },
        {
            question: 'What documents are required for classification?',
            answer: 'Typically we require GA plans, midship section, structural drawings, machinery particulars, stability book, and existing certificates if transferring class.'
        },
        {
            question: 'Can I transfer my vessel to GIRIK Class from another society?',
            answer: 'Yes, we accept transfer of class from all recognized classification societies. Our team will coordinate with the previous class for record transfer.'
        },
        {
            question: 'How are survey fees calculated?',
            answer: 'Fees are based on vessel type, size (GT), survey type, and location. Contact us for a detailed quotation for your specific vessel.'
        },
        {
            question: 'Are GIRIK Class certificates accepted by port state control?',
            answer: 'Yes, GIRIK Class certificates are issued on behalf of authorized flag states and are accepted by port state control authorities worldwide.'
        }
    ];

    return (
        <div>
            {/* HERO SECTION */}
            <section className="relative py-32 pt-40" style={{ background: '#0B2545' }}>
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=2070&auto=format&fit=crop")' }}
                />
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-2 text-sm font-semibold uppercase tracking-wider mb-6" style={{ background: '#00A896', color: 'white' }}>
                            How It Works
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
                            The Classification Process
                        </h1>
                        <p className="text-xl text-white/70 leading-relaxed">
                            Understanding how ship classification and statutory certification works -
                            from initial inquiry to certificate issuance.
                        </p>
                    </div>
                </div>
            </section>

            {/* BENEFITS BAR */}
            <section style={{ background: '#00A896' }} className="py-8">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <benefit.icon size={24} className="mb-2" />
                                <div className="font-semibold">{benefit.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESS STEPS */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#00A896' }}>
                            Step By Step
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4" style={{ color: '#0B2545' }}>
                            Classification Process
                        </h2>
                        <p className="max-w-2xl mx-auto" style={{ color: '#6b7c93' }}>
                            From initial inquiry to certificate issuance, here's what to expect when
                            classifying your vessel with GIRIK Class.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {processSteps.map((step, index) => (
                            <div key={index} className="grid lg:grid-cols-12 gap-8 items-start">
                                {/* Step Number */}
                                <div className="lg:col-span-2 flex lg:justify-end">
                                    <div className="w-20 h-20 flex items-center justify-center flex-shrink-0" style={{ background: '#0B2545' }}>
                                        <span className="text-3xl font-heading font-bold text-white">{step.step}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="lg:col-span-10 p-8" style={{ background: '#f8fafc', borderLeft: '4px solid #00A896' }}>
                                    <div className="flex items-start gap-4 mb-4">
                                        <step.icon size={28} style={{ color: '#00A896' }} className="flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="text-2xl font-heading font-bold mb-2" style={{ color: '#0B2545' }}>
                                                {step.title}
                                            </h3>
                                            <p className="mb-4" style={{ color: '#6b7c93', fontSize: '1.0625rem' }}>
                                                {step.description}
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-2">
                                                {step.details.map((detail, i) => (
                                                    <div key={i} className="flex items-center gap-2 text-sm">
                                                        <CheckCircle size={14} style={{ color: '#00A896' }} />
                                                        <span style={{ color: '#0B2545' }}>{detail}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SURVEY TYPES */}
            <section className="py-20" style={{ background: '#0B2545' }}>
                <div className="container-custom">
                    <div className="text-center mb-14">
                        <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#00A896' }}>
                            Survey Regime
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-3 mb-4">
                            Types of Surveys
                        </h2>
                        <p className="max-w-2xl mx-auto text-white/70">
                            Various surveys are required to maintain class and statutory certificates
                            throughout the vessel's operational life.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {surveyTypes.map((type, index) => (
                            <div key={index} className="p-6" style={{ background: 'rgba(255,255,255,0.05)' }}>
                                <type.icon size={28} style={{ color: '#00A896' }} className="mb-4" />
                                <h3 className="text-lg font-heading font-bold text-white mb-2">
                                    {type.title}
                                </h3>
                                <p className="text-sm text-white/70">
                                    {type.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TIMELINE EXAMPLE */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#00A896' }}>
                                5-Year Cycle
                            </span>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-6" style={{ color: '#0B2545' }}>
                                Survey Cycle Explained
                            </h2>
                            <p className="mb-6" style={{ color: '#6b7c93', fontSize: '1.0625rem' }}>
                                Class and statutory certificates are typically valid for 5 years, with
                                periodic surveys required to maintain validity. Here's a typical survey
                                cycle for a cargo vessel:
                            </p>

                            <div className="space-y-4">
                                {[
                                    { year: 'Year 1', survey: 'Annual Survey + Bottom Survey (in dock)', color: '#00A896' },
                                    { year: 'Year 2', survey: 'Annual Survey', color: '#0B2545' },
                                    { year: 'Year 2.5', survey: 'Intermediate Survey + Bottom Survey', color: '#00A896' },
                                    { year: 'Year 3', survey: 'Annual Survey', color: '#0B2545' },
                                    { year: 'Year 4', survey: 'Annual Survey', color: '#0B2545' },
                                    { year: 'Year 5', survey: 'Special Survey (Class Renewal) + Bottom Survey', color: '#00A896' }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        <div className="w-20 text-sm font-semibold" style={{ color: item.color }}>
                                            {item.year}
                                        </div>
                                        <div className="flex-1 p-3" style={{ background: '#f8fafc' }}>
                                            <span className="text-sm" style={{ color: '#0B2545' }}>{item.survey}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop"
                                alt="Vessel survey in progress"
                                className="w-full shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20" style={{ background: '#f8fafc' }}>
                <div className="container-custom">
                    <div className="text-center mb-14">
                        <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#00A896' }}>
                            Common Questions
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4" style={{ color: '#0B2545' }}>
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white p-6 shadow-sm">
                                <h3 className="font-heading font-bold text-lg mb-3 flex items-start gap-3" style={{ color: '#0B2545' }}>
                                    <span className="text-lg font-bold" style={{ color: '#00A896' }}>Q.</span>
                                    {faq.question}
                                </h3>
                                <p className="pl-7" style={{ color: '#6b7c93' }}>
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20" style={{ background: '#00A896' }}>
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
                        Contact our team to discuss your classification requirements.
                        We'll guide you through every step of the process.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={() => onNavigate('contact')}
                            className="px-10 py-4 font-semibold flex items-center gap-3"
                            style={{ background: 'white', color: '#0B2545' }}
                        >
                            Contact Us <ArrowRight size={18} />
                        </button>
                        <button
                            onClick={() => onNavigate('services')}
                            className="px-10 py-4 font-semibold flex items-center gap-3 border-2 border-white text-white hover:bg-white hover:text-[#0B2545] transition-all"
                        >
                            View Services
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowItWorksPage;
