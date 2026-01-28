// GIRIK Shipping - Contact Page Component

import React, { useState } from 'react';
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    CheckCircle,
    Headphones,
    Globe,
    MessageSquare
} from 'lucide-react';
import { CONTACT_INFO, FAQS } from '../constants';
import { PageType } from '../types';

interface ContactPageProps {
    onNavigate: (page: PageType) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            {/* Hero Section */}
            <section className="relative py-24 bg-navy-600 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl">
                        <span className="badge-teal mb-6 inline-block">Get In Touch</span>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                            Contact Us
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            Have questions about our services? Need a demo? Our team is here to help you navigate your maritime compliance needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Options */}
            <section className="py-8 bg-white border-b border-slate-100">
                <div className="container-custom">
                    <div className="grid md:grid-cols-4 gap-4">
                        <div className="flex items-center gap-4 p-4">
                            <div className="w-12 h-12 bg-teal-50 flex items-center justify-center flex-shrink-0">
                                <Headphones className="text-teal-500" size={24} />
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-navy-600">24/7 Support</div>
                                <div className="text-xs text-slate-500">Always available</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4">
                            <div className="w-12 h-12 bg-teal-50 flex items-center justify-center flex-shrink-0">
                                <Globe className="text-teal-500" size={24} />
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-navy-600">Global Offices</div>
                                <div className="text-xs text-slate-500">Worldwide presence</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4">
                            <div className="w-12 h-12 bg-teal-50 flex items-center justify-center flex-shrink-0">
                                <MessageSquare className="text-teal-500" size={24} />
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-navy-600">Quick Response</div>
                                <div className="text-xs text-slate-500">Within 24 hours</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4">
                            <div className="w-12 h-12 bg-teal-50 flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="text-teal-500" size={24} />
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-navy-600">Expert Team</div>
                                <div className="text-xs text-slate-500">Maritime specialists</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-padding-lg bg-slate-50">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="card bg-white p-8">
                                <h2 className="text-2xl font-heading font-bold text-navy-600 mb-6">
                                    Send Us a Message
                                </h2>

                                {isSubmitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-20 h-20 bg-green-100 flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle className="text-green-500" size={40} />
                                        </div>
                                        <h3 className="text-2xl font-heading font-bold text-navy-600 mb-4">
                                            Message Sent Successfully!
                                        </h3>
                                        <p className="text-slate-600 mb-6">
                                            Thank you for contacting us. Our team will get back to you within 24 hours.
                                        </p>
                                        <button
                                            onClick={() => {
                                                setIsSubmitted(false);
                                                setFormData({ name: '', email: '', company: '', phone: '', subject: '', message: '' });
                                            }}
                                            className="btn-primary"
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-semibold text-navy-600 mb-2">
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="form-input"
                                                    placeholder="Your name"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-navy-600 mb-2">
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="form-input"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-semibold text-navy-600 mb-2">
                                                    Company
                                                </label>
                                                <input
                                                    type="text"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="form-input"
                                                    placeholder="Company name"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-navy-600 mb-2">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="form-input"
                                                    placeholder="+91 XXXXX XXXXX"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-navy-600 mb-2">
                                                Subject *
                                            </label>
                                            <select
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="form-input"
                                            >
                                                <option value="">Select a topic</option>
                                                <option value="demo">Request a Demo</option>
                                                <option value="quote">Get a Quote</option>
                                                <option value="services">Service Inquiry</option>
                                                <option value="verification">Certificate Verification</option>
                                                <option value="support">Technical Support</option>
                                                <option value="partnership">Partnership Inquiry</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-navy-600 mb-2">
                                                Message *
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={6}
                                                className="form-input resize-none"
                                                placeholder="Tell us about your requirements..."
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="btn-primary flex items-center gap-2"
                                        >
                                            {isSubmitting ? (
                                                <>Sending...</>
                                            ) : (
                                                <>
                                                    <Send size={18} />
                                                    Send Message
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>

                        {/* Contact Info Sidebar */}
                        <div className="space-y-6">
                            {/* Office Info */}
                            <div className="card bg-white p-6">
                                <h3 className="font-heading font-bold text-navy-600 mb-6">Head Office</h3>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <MapPin className="text-teal-500 flex-shrink-0 mt-1" size={20} />
                                        <div>
                                            <div className="font-semibold text-navy-600">Address</div>
                                            <div className="text-slate-600 text-sm">
                                                GIRIK Shipping<br />
                                                Maritime Business Centre<br />
                                                Mumbai, Maharashtra 400001<br />
                                                India
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <Phone className="text-teal-500 flex-shrink-0" size={20} />
                                        <div>
                                            <div className="font-semibold text-navy-600">Phone</div>
                                            <a href="tel:+912240005000" className="text-slate-600 text-sm hover:text-teal-500">
                                                +91 22 4000 5000
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <Mail className="text-teal-500 flex-shrink-0" size={20} />
                                        <div>
                                            <div className="font-semibold text-navy-600">Email</div>
                                            <a href="mailto:info@girikshipping.com" className="text-slate-600 text-sm hover:text-teal-500">
                                                info@girikshipping.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <Clock className="text-teal-500 flex-shrink-0" size={20} />
                                        <div>
                                            <div className="font-semibold text-navy-600">Working Hours</div>
                                            <div className="text-slate-600 text-sm">
                                                24/7 Support Available
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div className="card bg-navy-600 p-6 text-white">
                                <h3 className="font-heading font-bold mb-4">Quick Links</h3>
                                <ul className="space-y-3 text-sm">
                                    <li>
                                        <button
                                            onClick={() => onNavigate('verify')}
                                            className="text-slate-300 hover:text-teal-400 transition-colors"
                                        >
                                            → Verify Certificate
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => onNavigate('services')}
                                            className="text-slate-300 hover:text-teal-400 transition-colors"
                                        >
                                            → Our Services
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => onNavigate('login')}
                                            className="text-slate-300 hover:text-teal-400 transition-colors"
                                        >
                                            → Client Portal Login
                                        </button>
                                    </li>
                                </ul>
                            </div>

                            {/* Support Card */}
                            <div className="card bg-teal-500 p-6 text-white">
                                <Headphones className="mb-4" size={32} />
                                <h3 className="font-heading font-bold mb-2">Need Urgent Help?</h3>
                                <p className="text-teal-100 text-sm mb-4">
                                    Our support team is available around the clock for urgent certification matters.
                                </p>
                                <a
                                    href="mailto:support@girikshipping.com"
                                    className="inline-block bg-white text-teal-600 px-4 py-2 text-sm font-semibold hover:bg-navy-600 hover:text-white transition-all"
                                >
                                    Email Support
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Regional Offices */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-heading font-bold text-navy-600">Regional Presence</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { city: 'Mumbai', country: 'India', type: 'Headquarters' },
                            { city: 'Singapore', country: 'Singapore', type: 'Regional Hub' },
                            { city: 'Dubai', country: 'UAE', type: 'Regional Office' },
                        ].map((office, index) => (
                            <div key={index} className="card bg-slate-50 p-6 text-center">
                                <div className="w-12 h-12 bg-teal-50 flex items-center justify-center mx-auto mb-4">
                                    <MapPin className="text-teal-500" size={24} />
                                </div>
                                <div className="font-heading font-bold text-navy-600 text-lg">{office.city}</div>
                                <div className="text-slate-600 text-sm">{office.country}</div>
                                <div className="text-teal-500 text-xs font-semibold mt-2">{office.type}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-padding-lg bg-slate-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="badge-navy mb-4 inline-block">FAQs</span>
                        <h2 className="text-3xl font-heading font-bold text-navy-600 mt-4">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {FAQS.slice(0, 5).map((faq, index) => (
                            <details key={index} className="card bg-white p-6 group">
                                <summary className="font-heading font-bold text-navy-600 cursor-pointer list-none flex justify-between items-center">
                                    {faq.question}
                                    <span className="text-teal-500 transition-transform group-open:rotate-45">+</span>
                                </summary>
                                <p className="text-slate-600 mt-4 pt-4 border-t border-slate-100">
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
