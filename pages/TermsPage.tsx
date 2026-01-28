// GIRIK Shipping - Terms of Service Page Component

import React from 'react';
import { FileText, AlertTriangle, Scale } from 'lucide-react';
import { PageType } from '../types';

interface TermsPageProps {
    onNavigate: (page: PageType) => void;
}

const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
    const lastUpdated = 'January 15, 2026';

    const sections = [
        {
            title: '1. Agreement to Terms',
            content: `By accessing or using the GIRIK Shipping platform and services ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use our Services.

These Terms constitute a legally binding agreement between you (whether as an individual or on behalf of an entity) and GIRIK Shipping ("Company," "we," "our," or "us").`
        },
        {
            title: '2. Definitions',
            content: `**"Platform"** refers to the GIRIK digital certification system, including web applications, mobile applications, and APIs.

**"Certificate"** refers to any digital document issued through the Platform, including statutory certificates, class certificates, and compliance documentation.

**"UTN"** refers to the Unique Tracking Number assigned to each certificate.

**"Surveyor"** refers to qualified personnel authorized to conduct inspections on behalf of GIRIK.

**"User"** refers to any individual or entity accessing or using the Services.`
        },
        {
            title: '3. Services Description',
            content: `GIRIK Shipping provides digital maritime certification and compliance services, including but not limited to:

• Statutory certification on behalf of authorized Flag Administrations
• Classification surveys and inspections
• Digital certificate issuance and management
• Public certificate verification
• Technical advisory services

The scope of services may vary based on your subscription tier and agreements.`
        },
        {
            title: '4. Digital Certificate Validity',
            content: `**Primary Source of Truth:** Certificates issued by GIRIK Shipping are digital-first. While we provide downloadable PDF copies for convenience, THE DIGITAL RECORD STORED IN OUR DATABASE IS THE PRIMARY SOURCE OF TRUTH.

**Verification:** The QR-verified online status serves as the definitive legal proof of certification. Any discrepancy between a physical/PDF document and the online record shall be resolved in favor of the online record.

**Revocation:** We reserve the right to revoke or suspend certificates if:
• Information provided was found to be inaccurate or fraudulent
• Vessel fails to maintain compliance with survey requirements
• Payment obligations are not fulfilled
• Requested by the relevant Flag Administration`
        },
        {
            title: '5. User Accounts',
            content: `**Registration:** To access certain features, you must create an account. You agree to provide accurate, current, and complete information during registration.

**Account Security:** You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. Notify us immediately of any unauthorized access.

**Account Types:** Access rights and permissions are determined by your assigned role (Ship Owner, Surveyor, Administrator, etc.) as defined in your service agreement.

**Termination:** We may suspend or terminate accounts that violate these Terms or remain inactive for extended periods.`
        },
        {
            title: '6. User Obligations',
            content: `As a user of our Services, you agree to:

• Provide accurate and truthful information regarding vessels, surveys, and certification matters
• Maintain vessel compliance with all applicable regulations between surveys
• Notify us promptly of any changes to vessel specifications, ownership, or flag state
• Pay all applicable fees in a timely manner
• Not attempt to circumvent security measures or access unauthorized areas of the Platform
• Not use the Services for any unlawful purpose
• Not interfere with or disrupt the Services or servers`
        },
        {
            title: '7. Survey and Inspection Terms',
            content: `**Scheduling:** Survey requests are subject to availability and scheduling requirements. We will make reasonable efforts to accommodate preferred dates.

**Cooperation:** Vessel owners/operators must provide safe access to the vessel and all relevant documentation for surveyors.

**Findings:** Survey findings are based on the observed condition at the time of inspection. We are not liable for conditions that develop after the survey.

**Disputes:** If you disagree with survey findings, you may request a review within 14 days of the survey report issuance. Additional fees may apply.`
        },
        {
            title: '8. Fees and Payment',
            content: `**Fee Structure:** Fees for Services are determined by the applicable rate schedule or your service agreement. Fees may include:
• Certificate issuance fees
• Survey and inspection fees
• Expedited processing fees
• Travel and disbursement costs

**Payment Terms:** Unless otherwise agreed, payment is due within 30 days of invoice. Certificates will not be issued until payment is received.

**Late Payment:** Overdue amounts may accrue interest at 1.5% per month. We may suspend services for accounts with outstanding balances.

**Refunds:** Fees are generally non-refundable once services have been rendered. Cancellation policies apply to scheduled surveys.`
        },
        {
            title: '9. Intellectual Property',
            content: `**Ownership:** All intellectual property rights in the Platform, including software, designs, trademarks, and content, are owned by GIRIK Shipping.

**License:** Subject to these Terms, we grant you a limited, non-exclusive, non-transferable license to access and use the Platform for its intended purposes.

**Restrictions:** You may not:
• Copy, modify, or create derivative works of the Platform
• Reverse engineer or decompile any part of the Platform
• Use our trademarks without prior written consent
• Resell access to the Platform or Services`
        },
        {
            title: '10. Limitation of Liability',
            content: `**Disclaimer:** THE SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.

**Liability Cap:** TO THE MAXIMUM EXTENT PERMITTED BY LAW, GIRIK SHIPPING'S LIABILITY FOR ANY CLAIMS ARISING FROM THESE TERMS OR SERVICES SHALL NOT EXCEED THE FEES PAID BY YOU IN THE 12 MONTHS PRECEDING THE CLAIM.

**Exclusions:** WE SHALL NOT BE LIABLE FOR:
• Indirect, incidental, special, or consequential damages
• Loss of profits, revenue, or business opportunities
• Damages arising from vessel detention or delays
• Third-party claims against you

**Regulatory Liability:** Our certification does not guarantee absolute vessel safety or compliance. Ultimate responsibility for vessel safety remains with the owner/operator.`
        },
        {
            title: '11. Indemnification',
            content: `You agree to indemnify, defend, and hold harmless GIRIK Shipping, its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from:

• Your use of the Services
• Your violation of these Terms
• Your violation of any third-party rights
• Any inaccurate information you provide
• Your vessel's non-compliance with regulations`
        },
        {
            title: '12. Confidentiality',
            content: `**Confidential Information:** Both parties may receive confidential information during the course of the Services.

**Obligations:** Each party agrees to:
• Maintain confidentiality of the other party's confidential information
• Use such information only for purposes related to the Services
• Not disclose to third parties without prior written consent

**Exceptions:** Confidentiality obligations do not apply to information that is:
• Publicly available
• Independently developed
• Required to be disclosed by law or regulatory authority`
        },
        {
            title: '13. Governing Law and Disputes',
            content: `**Governing Law:** These Terms are governed by the laws of India, without regard to conflict of law principles.

**Jurisdiction:** Any disputes shall be subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra, India.

**Arbitration:** For disputes exceeding INR 10,00,000, either party may elect binding arbitration in accordance with the Arbitration and Conciliation Act, 1996.

**Resolution Process:** Before initiating legal action, parties agree to attempt good-faith negotiation for at least 30 days.`
        },
        {
            title: '14. Force Majeure',
            content: `Neither party shall be liable for failure to perform obligations due to circumstances beyond reasonable control, including:

• Natural disasters, acts of God
• War, terrorism, civil unrest
• Government actions, regulatory changes
• Pandemics or public health emergencies
• Cyberattacks or system failures
• Port closures or shipping disruptions`
        },
        {
            title: '15. Modifications to Terms',
            content: `We reserve the right to modify these Terms at any time. Changes become effective when posted on our Platform.

**Notification:** We will provide notice of material changes via email or Platform notification at least 30 days before they take effect.

**Continued Use:** Your continued use of Services after changes constitutes acceptance of the modified Terms. If you do not agree, you must discontinue use.`
        },
        {
            title: '16. Miscellaneous',
            content: `**Severability:** If any provision is found unenforceable, the remaining provisions continue in effect.

**Waiver:** Failure to enforce any right does not constitute a waiver of that right.

**Assignment:** You may not assign your rights under these Terms without our consent. We may assign our rights freely.

**Entire Agreement:** These Terms, along with applicable service agreements, constitute the entire agreement between you and GIRIK Shipping.

**Contact:** For questions about these Terms, contact us at legal@girikshipping.com.`
        }
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="relative py-24 bg-navy-600">
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl">
                        <span className="badge-teal mb-6 inline-block">Legal</span>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                            Terms of Service
                        </h1>
                        <p className="text-slate-300">
                            Last Updated: {lastUpdated}
                        </p>
                    </div>
                </div>
            </section>

            {/* Important Notice */}
            <section className="py-6 bg-yellow-50 border-y border-yellow-200">
                <div className="container-custom">
                    <div className="flex items-start gap-4">
                        <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-1" size={24} />
                        <div>
                            <h3 className="font-heading font-bold text-yellow-800 mb-1">Important Notice</h3>
                            <p className="text-yellow-700 text-sm">
                                By using GIRIK Shipping services, you acknowledge that certificates issued are digital-first.
                                The online verification record is the primary source of truth for all certification matters.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="section-padding-lg bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-4 gap-12">
                        {/* Table of Contents */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24">
                                <h3 className="font-heading font-bold text-navy-600 mb-4">Contents</h3>
                                <ul className="space-y-2 text-sm max-h-[70vh] overflow-y-auto">
                                    {sections.map((section, index) => (
                                        <li key={index}>
                                            <a
                                                href={`#terms-section-${index}`}
                                                className="text-slate-600 hover:text-teal-500 transition-colors block py-1"
                                            >
                                                {section.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            <div className="prose prose-slate max-w-none">
                                {sections.map((section, index) => (
                                    <div key={index} id={`terms-section-${index}`} className="mb-12">
                                        <h2 className="text-xl font-heading font-bold text-navy-600 mb-4">
                                            {section.title}
                                        </h2>
                                        <div className="text-slate-600 leading-relaxed whitespace-pre-line">
                                            {section.content}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Acceptance */}
            <section className="section-padding bg-slate-50">
                <div className="container-custom text-center">
                    <Scale className="text-teal-500 mx-auto mb-4" size={48} />
                    <h2 className="text-2xl font-heading font-bold text-navy-600 mb-4">
                        Questions About These Terms?
                    </h2>
                    <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                        If you have questions about these Terms of Service or need clarification on any provisions,
                        our legal team is available to assist.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={() => onNavigate('contact')}
                            className="btn-primary"
                        >
                            Contact Legal Team
                        </button>
                        <button
                            onClick={() => onNavigate('privacy')}
                            className="btn-secondary border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white"
                        >
                            View Privacy Policy
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TermsPage;
