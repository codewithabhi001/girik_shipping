// ============================================
// GIRIK CLASS - PRIVACY POLICY PAGE
// ============================================

import React from 'react';
import {
    Shield,
    Lock,
    Eye,
    Database,
    Globe,
    Mail,
    ArrowRight,
    CheckCircle
} from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { PageType } from '../types';

interface PrivacyPageProps {
    onNavigate: (page: PageType) => void;
}

const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
    const lastUpdated = 'January 15, 2026';

    const sections = [
        {
            title: 'Information We Collect',
            content: `We collect information you provide directly to us, including:

• **Personal Information**: Name, email address, phone number, company name, and job title when you register for an account or contact us.
• **Vessel Information**: IMO numbers, vessel particulars, flag state, and related technical data necessary for classification services.
• **Account Data**: Login credentials, preferences, and communication history.
• **Survey Data**: Inspection reports, photographs, measurements, and findings from surveys conducted on your vessels.
• **Payment Information**: Billing address and payment method details processed through secure third-party payment processors.

We also automatically collect certain information when you use our platform:

• **Usage Data**: Pages visited, features used, time spent on the platform, and interaction patterns.
• **Device Information**: IP address, browser type, operating system, and device identifiers.
• **Location Data**: Approximate location based on IP address.`
        },
        {
            title: 'How We Use Your Information',
            content: `We use the information we collect to:

• **Provide Services**: Process survey requests, issue certificates, and deliver classification services.
• **Maintain Accounts**: Manage your account, communicate with you, and provide customer support.
• **Improve Platform**: Analyze usage patterns to enhance user experience and develop new features.
• **Ensure Compliance**: Meet regulatory requirements and obligations under maritime conventions.
• **Security**: Protect against fraud, unauthorized access, and other security threats.
• **Communication**: Send service-related notifications, updates, and marketing communications (with your consent).
• **Legal Obligations**: Comply with applicable laws, regulations, and legal processes.`
        },
        {
            title: 'Information Sharing',
            content: `We may share your information with:

• **Flag Administrations**: As required for statutory certification and regulatory compliance.
• **Port State Control**: Certificate verification data is publicly accessible to enable inspection.
• **IMO Databases**: Vessel and certificate data shared with GISIS as required.
• **Service Providers**: Third-party vendors who assist in platform operations, payment processing, and customer support.
• **Legal Requirements**: When required by law, court order, or government authority.
• **Business Transfers**: In connection with mergers, acquisitions, or sale of assets.

We do not sell your personal information to third parties for marketing purposes.`
        },
        {
            title: 'Data Security',
            content: `We implement industry-standard security measures to protect your information:

• **Encryption**: AES-256 encryption for data at rest and TLS 1.3 for data in transit.
• **Access Controls**: Role-based access control (RBAC) limiting data access to authorized personnel.
• **Authentication**: Multi-factor authentication (MFA) available for all accounts.
• **Auditing**: Immutable audit logs tracking all access and modifications to sensitive data.
• **Infrastructure**: Enterprise-grade cloud infrastructure with redundancy and disaster recovery.
• **Security Testing**: Regular penetration testing and vulnerability assessments.

Despite these measures, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security of your data.`
        },
        {
            title: 'Data Retention',
            content: `We retain your information for as long as necessary to provide our services and fulfill the purposes described in this policy:

• **Certificate Data**: Retained for the validity period of certificates plus 10 years as required by maritime regulations.
• **Survey Reports**: Retained for the life of the vessel plus 5 years.
• **Account Information**: Retained for as long as your account is active, plus 3 years after account closure.
• **Payment Records**: Retained for 7 years as required for tax and accounting purposes.
• **Marketing Data**: Until you withdraw consent or unsubscribe.

After retention periods expire, data is securely deleted or anonymized.`
        },
        {
            title: 'Your Rights',
            content: `Depending on your jurisdiction, you may have the following rights:

• **Access**: Request access to personal information we hold about you.
• **Correction**: Request correction of inaccurate or incomplete data.
• **Deletion**: Request deletion of your personal information (subject to legal retention requirements).
• **Portability**: Request a copy of your data in a structured, machine-readable format.
• **Objection**: Object to processing of your data for certain purposes.
• **Withdraw Consent**: Withdraw consent for marketing communications at any time.

To exercise these rights, contact us at privacy@girikclass.com. We will respond within 30 days.`
        },
        {
            title: 'International Data Transfers',
            content: `Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place:

• **Standard Contractual Clauses**: EU-approved contractual terms for data transfers.
• **Data Processing Agreements**: Written agreements with all third-party processors.
• **Adequacy Decisions**: Transfers to countries recognized as providing adequate protection.

Our primary operations are based in India, with regional offices in Singapore, Dubai, and Athens.`
        },
        {
            title: 'Cookies and Tracking',
            content: `We use cookies and similar technologies to enhance your experience:

• **Essential Cookies**: Required for platform functionality and security.
• **Analytics Cookies**: Help us understand how you use our platform.
• **Preference Cookies**: Remember your settings and preferences.

You can manage cookie preferences through your browser settings. Note that disabling certain cookies may affect platform functionality.`
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
                            Privacy Policy
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
                                    GIRIK Class ("we", "our", or "us") is committed to protecting your privacy.
                                    This Privacy Policy explains how we collect, use, disclose, and safeguard
                                    your information when you use our maritime classification services and platform.
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
                                        Contact Us
                                    </h2>
                                    <p className="mb-4" style={{ color: '#6b7c93' }}>
                                        If you have questions about this Privacy Policy or wish to exercise your rights,
                                        please contact us:
                                    </p>
                                    <div className="space-y-2">
                                        <p style={{ color: '#0B2545' }}>
                                            <strong>Data Protection Officer</strong>
                                        </p>
                                        <p style={{ color: '#6b7c93' }}>
                                            GIRIK Class, {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.country}
                                        </p>
                                        <p style={{ color: '#6b7c93' }}>
                                            Email: privacy@girikclass.com
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

export default PrivacyPage;
