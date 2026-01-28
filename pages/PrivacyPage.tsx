// GIRIK Shipping - Privacy Policy Page Component

import React from 'react';
import { Shield, Lock, Eye, Database, Globe, Mail } from 'lucide-react';
import { PageType } from '../types';

interface PrivacyPageProps {
    onNavigate: (page: PageType) => void;
}

const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
    const lastUpdated = 'January 15, 2026';

    const sections = [
        {
            title: '1. Introduction',
            content: `GIRIK Shipping ("Company," "we," "our," or "us") is committed to protecting the privacy and security of our clients' data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our digital maritime certification platform and services.

By accessing or using our services, you agree to this Privacy Policy. If you do not agree with the terms of this policy, please do not access our platform.`
        },
        {
            title: '2. Information We Collect',
            content: `We collect information that you provide directly to us, including:

**Personal Information:**
• Name, email address, phone number
• Company name and job title
• Billing and payment information

**Vessel Information:**
• Vessel name, IMO number, and registration details
• Vessel specifications (type, tonnage, dimensions)
• Flag state and ownership information

**Operational Data:**
• Survey reports and inspection results
• Certificate records and compliance history
• Crew certifications and documentation

**Technical Data:**
• IP address and browser type
• Device information and identifiers
• Usage logs and access patterns`
        },
        {
            title: '3. How We Use Your Information',
            content: `We use the collected information for the following purposes:

• **Certification Services:** Processing certification requests, conducting surveys, and issuing digital certificates
• **Compliance Management:** Maintaining records required by international maritime regulations (IMO, Flag States)
• **Platform Operations:** Managing user accounts, processing payments, and providing customer support
• **Communication:** Sending notifications about certificate status, expiry reminders, and regulatory updates
• **Analytics:** Improving our services, analyzing usage patterns, and developing new features
• **Legal Compliance:** Meeting our obligations under applicable laws and regulations`
        },
        {
            title: '4. Data Sharing and Disclosure',
            content: `We may share your information in the following circumstances:

• **Flag Administrations:** As required for statutory certification purposes
• **Port State Control:** When legally required for vessel inspections
• **Classification Societies:** For transfer of class (TOCA) processes
• **Service Providers:** Third-party vendors who assist in our operations (under strict confidentiality agreements)
• **Legal Requirements:** When required by law, court order, or government regulations
• **Public Verification:** Certificate verification data is publicly accessible to enable stakeholders to verify document authenticity

We do NOT sell, rent, or trade your personal or vessel information to third parties for marketing purposes.`
        },
        {
            title: '5. Data Security',
            content: `We implement robust security measures to protect your information:

• **Encryption:** All data is encrypted using AES-256 standards in transit and at rest
• **Access Control:** Role-based access control (RBAC) ensures only authorized personnel can access sensitive data
• **Audit Trails:** Immutable logs track all access and modifications to records
• **Infrastructure:** Our platform is hosted on enterprise-grade cloud infrastructure with 99.9% uptime SLA
• **Compliance:** We are aligned with ISO 27001 information security standards

Despite our security measures, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.`
        },
        {
            title: '6. Data Retention',
            content: `We retain your information for as long as necessary to:

• Provide our certification services
• Comply with legal obligations (maritime records are typically retained for 10+ years per IMO guidelines)
• Resolve disputes and enforce agreements
• Maintain audit trails required by regulatory bodies

After the retention period, data is securely deleted or anonymized. You may request deletion of non-regulatory data by contacting us.`
        },
        {
            title: '7. Your Rights',
            content: `Depending on your jurisdiction, you may have the following rights:

• **Access:** Request a copy of the personal information we hold about you
• **Correction:** Request correction of inaccurate or incomplete information
• **Deletion:** Request deletion of your personal information (subject to legal retention requirements)
• **Portability:** Request transfer of your data in a machine-readable format
• **Objection:** Object to processing of your information in certain circumstances
• **Withdrawal:** Withdraw consent where processing is based on consent

To exercise these rights, contact us at privacy@girikshipping.com.`
        },
        {
            title: '8. Cookies and Tracking',
            content: `Our platform uses cookies and similar technologies to:

• Maintain session state and user preferences
• Analyze platform usage and performance
• Enhance security and detect fraud

You can control cookies through your browser settings. Disabling cookies may affect platform functionality.`
        },
        {
            title: '9. International Data Transfers',
            content: `Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers, including:

• Standard contractual clauses approved by relevant authorities
• Ensuring recipients maintain adequate data protection standards
• Compliance with applicable international data transfer regulations`
        },
        {
            title: '10. Children\'s Privacy',
            content: `Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware of such collection, we will delete the information immediately.`
        },
        {
            title: '11. Changes to This Policy',
            content: `We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date. We encourage you to review this policy periodically.

Continued use of our services after any changes constitutes acceptance of the updated policy.`
        },
        {
            title: '12. Contact Us',
            content: `For questions or concerns about this Privacy Policy or our data practices, please contact:

**GIRIK Shipping - Privacy Office**
Email: privacy@girikshipping.com
Phone: +91 22 4000 5000
Address: Maritime Business Centre, Mumbai, Maharashtra 400001, India

For data protection inquiries in the EU, contact our designated representative at gdpr@girikshipping.com.`
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
                            Privacy Policy
                        </h1>
                        <p className="text-slate-300">
                            Last Updated: {lastUpdated}
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Summary */}
            <section className="py-8 bg-teal-50 border-b border-teal-100">
                <div className="container-custom">
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="flex items-center gap-3">
                            <Shield className="text-teal-500" size={24} />
                            <span className="text-sm font-semibold text-navy-600">AES-256 Encryption</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Lock className="text-teal-500" size={24} />
                            <span className="text-sm font-semibold text-navy-600">Role-Based Access</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Eye className="text-teal-500" size={24} />
                            <span className="text-sm font-semibold text-navy-600">Audit Trails</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Globe className="text-teal-500" size={24} />
                            <span className="text-sm font-semibold text-navy-600">GDPR Aligned</span>
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
                                <ul className="space-y-2 text-sm">
                                    {sections.map((section, index) => (
                                        <li key={index}>
                                            <a
                                                href={`#section-${index}`}
                                                className="text-slate-600 hover:text-teal-500 transition-colors"
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
                                    <div key={index} id={`section-${index}`} className="mb-12">
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

            {/* CTA */}
            <section className="section-padding bg-slate-50">
                <div className="container-custom text-center">
                    <h2 className="text-2xl font-heading font-bold text-navy-600 mb-4">
                        Questions About Your Data?
                    </h2>
                    <p className="text-slate-600 mb-6">
                        Our privacy team is here to help with any questions or concerns.
                    </p>
                    <button
                        onClick={() => onNavigate('contact')}
                        className="btn-primary"
                    >
                        Contact Privacy Office
                    </button>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPage;
