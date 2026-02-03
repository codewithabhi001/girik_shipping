// ============================================
// GIRIK CLASS - TERMS OF SERVICE PAGE
// ============================================

import React from 'react';
import {
    Shield,
    FileText,
    CheckCircle,
    AlertCircle
} from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { PageType } from '../types';

interface TermsPageProps {
    onNavigate: (page: PageType) => void;
}

const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
    const lastUpdated = 'January 15, 2026';

    const sections = [
        {
            title: '1. Acceptance of Terms',
            content: `By accessing or using the GIRIK Class platform, website, or classification services (collectively, the "Services"), you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our Services.

These Terms apply to all users, including ship owners, operators, technical managers, surveyors, flag administrations, and any other parties accessing our platform or engaging our services.

We reserve the right to modify these Terms at any time. Changes will be effective upon posting to our website. Your continued use of the Services after any changes indicates acceptance of the modified Terms.`
        },
        {
            title: '2. Description of Services',
            content: `GIRIK Class provides maritime classification and statutory certification services, including but not limited to:

• Ship classification surveys and certification
• Statutory surveys on behalf of authorized flag administrations
• Technical advisory and consultancy services
• Digital certificate issuance and verification
• Client portal for fleet management and compliance tracking
• Surveyor mobile application and reporting tools

We act as a Recognized Organization (RO) authorized by various flag state administrations to conduct surveys and issue certificates under applicable international maritime conventions.`
        },
        {
            title: '3. User Accounts',
            content: `To access certain features of our platform, you must register for an account. You agree to:

• Provide accurate, current, and complete information during registration
• Maintain the security of your account credentials
• Promptly update your information if it changes
• Accept responsibility for all activities under your account
• Immediately notify us of any unauthorized access or security breach

We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent or unauthorized activities.`
        },
        {
            title: '4. Service Fees and Payment',
            content: `Fees for our Services are provided upon request and may vary based on vessel type, survey scope, location, and urgency. By engaging our Services, you agree to:

• Pay all applicable fees as quoted and invoiced
• Pay invoices within the agreed payment terms (typically 30 days unless otherwise specified)
• Pay late payment interest at 1.5% per month on overdue amounts
• Reimburse reasonable expenses incurred by surveyors (travel, accommodation, etc.)

We may withhold certificate issuance or suspend services for accounts with outstanding payments. All fees are exclusive of applicable taxes unless otherwise stated.`
        },
        {
            title: '5. Certificate Validity and Verification',
            content: `Certificates issued by GIRIK Class are valid only when:

• Issued in accordance with applicable conventions and flag state requirements
• The vessel maintains compliance with conditions of class and certification
• No material deficiencies or non-conformities have been identified
• Required surveys are completed within prescribed timeframes
• Fees have been paid in full

Certificates may be withdrawn, suspended, or cancelled if conditions are not maintained. Public verification of certificate status is available through our verification portal and represents the authoritative record of validity.`
        },
        {
            title: '6. Limitations and Disclaimers',
            content: `IMPORTANT: Classification and statutory certification services are provided based on sampling, visual examination, and testing during surveys. They do not:

• Guarantee the absolute safety or seaworthiness of any vessel
• Detect all defects or deficiencies that may exist
• Replace the responsibility of owners and operators for vessel safety
• Constitute a warranty or guarantee of any kind

Surveys are conducted in accordance with applicable rules and standards at the time of survey. Changes in vessel condition after a survey are the responsibility of the owner/operator.

TO THE MAXIMUM EXTENT PERMITTED BY LAW, GIRIK CLASS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM OR RELATED TO OUR SERVICES.`
        },
        {
            title: '7. Intellectual Property',
            content: `All content, trademarks, logos, rules, guidelines, software, and materials provided through our Services are the intellectual property of GIRIK Class or our licensors.

You may not:

• Copy, modify, or distribute our materials without written permission
• Use our trademarks or logos without authorization
• Reverse engineer or attempt to derive source code from our software
• Reproduce our rules or guidelines for commercial purposes

We grant you a limited, non-exclusive license to access and use the platform for its intended purposes only.`
        },
        {
            title: '8. Confidentiality',
            content: `We maintain confidentiality of vessel and commercial information provided by our clients, except where disclosure is:

• Required by law, regulation, or legal process
• Necessary for certificate verification (public certificate status)
• Required by flag administrations under our authorization agreements
• Shared with IMO databases as mandated by convention
• Authorized in writing by the client

Clients agree to maintain confidentiality of any proprietary methodologies, rules, or technical guidance provided by GIRIK Class.`
        },
        {
            title: '9. Indemnification',
            content: `You agree to indemnify and hold harmless GIRIK Class, its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from:

• Your use of our Services
• Your breach of these Terms
• Your violation of any applicable laws or regulations
• Inaccurate or incomplete information provided by you
• Claims by third parties related to your vessels or operations`
        },
        {
            title: '10. Governing Law and Disputes',
            content: `These Terms are governed by the laws of India, without regard to conflict of law principles.

Any disputes arising from these Terms or our Services shall be resolved through:

1. Good faith negotiation between the parties
2. Mediation administered by a mutually agreed mediator
3. Binding arbitration under the Arbitration and Conciliation Act, 1996
4. The seat of arbitration shall be Mumbai, India
5. The language of arbitration shall be English

For claims not subject to arbitration, courts in Mumbai, India shall have exclusive jurisdiction.`
        },
        {
            title: '11. Force Majeure',
            content: `Neither party shall be liable for delays or failures in performance resulting from circumstances beyond reasonable control, including:

• Natural disasters, severe weather, or acts of God
• War, terrorism, or civil unrest
• Government actions, regulations, or embargoes
• Epidemics, pandemics, or quarantine restrictions
• Communication or power failures
• Labor disputes or strikes

Affected parties shall notify the other promptly and use reasonable efforts to mitigate impacts.`
        },
        {
            title: '12. Termination',
            content: `We may terminate or suspend your access to our Services immediately, without prior notice, for:

• Breach of these Terms
• Fraudulent or illegal activities
• Non-payment of fees
• Providing false or misleading information
• Conduct that threatens the integrity of our services

Upon termination:

• Outstanding fees remain payable
• Certificates issued remain valid until their expiry (unless separately withdrawn)
• Your obligation of confidentiality survives
• Provisions regarding limitation of liability and indemnification survive`
        }
    ];

    return (
        <div>
            {/* HERO */}
            <section className="relative py-32 pt-40" style={{ background: '#0B2545' }}>
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-2 text-sm font-semibold uppercase tracking-wider mb-6" style={{ background: '#00A896', color: 'white' }}>
                            Legal
                        </span>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight mb-6">
                            Terms of Service
                        </h1>
                        <p className="text-white/70 text-lg">
                            Last updated: {lastUpdated}
                        </p>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-4 gap-12">
                        {/* Sidebar */}
                        <div className="hidden lg:block">
                            <div className="sticky top-24 p-6" style={{ background: '#f8fafc' }}>
                                <h3 className="font-heading font-bold mb-4" style={{ color: '#0B2545' }}>
                                    Contents
                                </h3>
                                <nav className="space-y-2">
                                    {sections.map((section, index) => (
                                        <a
                                            key={index}
                                            href={`#section-${index}`}
                                            className="block text-sm py-2 hover:text-[#00A896] transition-colors"
                                            style={{ color: '#6b7c93' }}
                                        >
                                            {section.title}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            <div className="prose max-w-none">
                                <p className="text-lg mb-8" style={{ color: '#6b7c93' }}>
                                    Please read these Terms of Service carefully before using the GIRIK Class
                                    platform and services. These Terms constitute a legally binding agreement
                                    between you and GIRIK Classification Society.
                                </p>

                                {sections.map((section, index) => (
                                    <div key={index} id={`section-${index}`} className="mb-12">
                                        <h2 className="text-2xl font-heading font-bold mb-4" style={{ color: '#0B2545' }}>
                                            {section.title}
                                        </h2>
                                        <div
                                            className="whitespace-pre-line"
                                            style={{ color: '#6b7c93', lineHeight: '1.8' }}
                                        >
                                            {section.content}
                                        </div>
                                    </div>
                                ))}

                                {/* Contact */}
                                <div className="mt-16 p-8" style={{ background: '#f8fafc' }}>
                                    <h2 className="text-xl font-heading font-bold mb-4" style={{ color: '#0B2545' }}>
                                        Contact Information
                                    </h2>
                                    <p className="mb-4" style={{ color: '#6b7c93' }}>
                                        For questions about these Terms, please contact:
                                    </p>
                                    <div className="space-y-2">
                                        <p style={{ color: '#0B2545' }}>
                                            <strong>Legal Department</strong>
                                        </p>
                                        <p style={{ color: '#6b7c93' }}>
                                            GIRIK Class, {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.country}
                                        </p>
                                        <p style={{ color: '#6b7c93' }}>
                                            Email: legal@girikclass.com
                                        </p>
                                        <p style={{ color: '#6b7c93' }}>
                                            Phone: {COMPANY_INFO.phone}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TermsPage;
