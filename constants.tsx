// ============================================
// GIRIK SHIPPING - COMPREHENSIVE DATA CONSTANTS
// Complete Portfolio-Ready Content
// ============================================

import {
  NavLink,
  Service,
  Feature,
  Statistic,
  WorkflowStep,
  ComplianceBadge,
  UserType,
  NewsItem,
  FAQ,
  Module,
  CertificateData,
  ContactInfo,
  CompanyInfo,
  FooterLink,
  TeamMember,
  Testimonial,
  CaseStudy,
  PricingTier
} from './types';

// ============================================
// COMPANY INFORMATION
// ============================================
export const COMPANY_INFO: CompanyInfo = {
  name: 'GIRIK Shipping',
  fullName: 'GIRIK Digital Maritime Bureau',
  tagline: 'Digital Maritime Certification. Trusted. Transparent. Compliant.',
  mission: 'To revolutionize global maritime certification by replacing fragmented, paper-based compliance processes with a unified digital infrastructure that ensures authenticity, accelerates operations, and enables real-time verification across the entire maritime ecosystem.',
  vision: 'To become the world\'s most trusted digital backbone for maritime safety documentation, where every certificate issued is instantly verifiable, every vessel is fully traceable, and compliance is seamlessly integrated into daily shipping operations.',
  founded: 2024,
  headquarters: 'Mumbai, India',
  description: 'GIRIK Shipping is a pioneering digital maritime certification bureau that combines deep maritime expertise with cutting-edge technology. We serve as the bridge between traditional maritime compliance requirements and modern digital infrastructure, enabling ship owners, flag administrations, and port authorities to verify vessel documentation instantly and securely.',
  website: 'https://girikshipping.com',
  email: 'info@girikshipping.com',
  phone: '+91 22 4000 5000',
  address: {
    street: 'Maritime Business Centre, Ballard Estate',
    city: 'Mumbai',
    state: 'Maharashtra',
    country: 'India',
    postalCode: '400001'
  },
  socialMedia: {
    linkedin: 'https://linkedin.com/company/girikshipping',
    twitter: 'https://twitter.com/girikshipping',
    facebook: 'https://facebook.com/girikshipping',
    youtube: 'https://youtube.com/@girikshipping'
  }
};

// ============================================
// NAVIGATION LINKS
// ============================================
export const NAV_LINKS: NavLink[] = [
  {
    label: 'Home',
    href: '/',
    page: 'home'
  },
  {
    label: 'About',
    href: '/about',
    page: 'about'
  },
  {
    label: 'Services',
    href: '/services',
    page: 'services',
    children: [
      { label: 'Statutory Certification', href: '/services/statutory', page: 'services' },
      { label: 'Class Surveys', href: '/services/class', page: 'services' },
      { label: 'Technical Advisory', href: '/services/technical', page: 'services' },
      { label: 'Transfer of Class', href: '/services/toca', page: 'services' },
      { label: 'Flag Administration', href: '/services/flag', page: 'services' },
      { label: 'Yacht Certification', href: '/services/yacht', page: 'services' },
    ]
  },
  {
    label: 'How It Works',
    href: '/how-it-works',
    page: 'how-it-works'
  },
  {
    label: 'Verify',
    href: '/verify',
    page: 'verify'
  },
  {
    label: 'Contact',
    href: '/contact',
    page: 'contact'
  }
];

// ============================================
// FOOTER LINKS
// ============================================
export const FOOTER_LINKS: FooterLink[] = [
  {
    title: 'Services',
    links: [
      { label: 'Statutory Certification', href: '/services', page: 'services' },
      { label: 'Class Surveys & Inspections', href: '/services', page: 'services' },
      { label: 'Technical Advisory', href: '/services', page: 'services' },
      { label: 'Transfer of Class (TOCA)', href: '/services', page: 'services' },
      { label: 'Flag State Administration', href: '/services', page: 'services' },
      { label: 'Yacht & Superyacht Services', href: '/services', page: 'services' },
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About GIRIK', href: '/about', page: 'about' },
      { label: 'Our Mission & Vision', href: '/about', page: 'about' },
      { label: 'Leadership Team', href: '/about', page: 'about' },
      { label: 'Careers', href: '/careers', page: 'contact' },
      { label: 'Newsroom', href: '/news', page: 'home' },
      { label: 'Partners & Affiliations', href: '/partners', page: 'about' },
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Knowledge Base', href: '/resources', page: 'home' },
      { label: 'API Documentation', href: '/developers', page: 'home' },
      { label: 'Compliance Guides', href: '/guides', page: 'home' },
      { label: 'Regulatory Updates', href: '/regulations', page: 'home' },
      { label: 'Case Studies', href: '/case-studies', page: 'home' },
      { label: 'FAQs', href: '/faq', page: 'contact' },
    ]
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy', page: 'privacy' },
      { label: 'Terms of Service', href: '/terms', page: 'terms' },
      { label: 'Cookie Policy', href: '/cookies', page: 'privacy' },
      { label: 'GDPR Compliance', href: '/gdpr', page: 'privacy' },
      { label: 'Data Processing Agreement', href: '/dpa', page: 'privacy' },
      { label: 'Acceptable Use Policy', href: '/aup', page: 'terms' },
    ]
  }
];

// ============================================
// SERVICES - COMPLETE PORTFOLIO DATA
// ============================================
export const SERVICES: Service[] = [
  {
    id: 'statutory-certification',
    title: 'Statutory Certification',
    description: 'IMO-compliant statutory surveys and certification under authorized flag state delegation.',
    longDescription: `GIRIK conducts comprehensive statutory surveys on behalf of flag administrations worldwide, ensuring vessels meet all international maritime safety and environmental standards. Our statutory certification services cover the full spectrum of SOLAS, MARPOL, and Load Line requirements.

Our certified surveyors perform initial, renewal, periodical, intermediate, and annual surveys for all vessel types. Each inspection is documented digitally in real-time, with findings, photographs, and recommendations uploaded directly to the GIRIK platform. Upon successful completion, digital certificates are issued with tamper-proof QR verification.

We maintain authorization from over 40 flag states, ensuring global coverage for your fleet. Our direct API integration with flag registries means faster processing and instant verification of all issued certificates.`,
    iconName: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop',
    features: [
      'SOLAS Safety Certification',
      'MARPOL Environmental Compliance',
      'Load Line Certificate',
      'Tonnage Measurement Certificate',
      'Minimum Safe Manning Document',
      'ISM Code Compliance (DOC/SMC)',
      'ISPS Security Certificate',
      'Maritime Labour Convention (MLC)'
    ],
    benefits: [
      'Single-window for all statutory requirements',
      'Faster turnaround with digital workflows',
      'Real-time certificate status tracking',
      'Instant public verification'
    ],
    pricing: 'Custom quote based on vessel type and scope'
  },
  {
    id: 'class-surveys',
    title: 'Classification Surveys',
    description: 'Thorough classification surveys ensuring structural integrity and machinery condition.',
    longDescription: `Classification surveys form the backbone of vessel safety assurance. GIRIK provides full classification services including new construction supervision, annual surveys, intermediate surveys, and special surveys (hull and machinery).

Our expert marine surveyors assess the structural condition of the hull, examine critical machinery components, and verify that vessels maintain their class. We utilize advanced inspection technologies including ultrasonic thickness gauging, underwater inspections, and condition monitoring systems.

All survey findings are documented with detailed photographic evidence and 3D scan data where applicable. Our digital reporting system allows ship managers to track survey status, outstanding recommendations, and class requirements in real-time.`,
    iconName: 'ClipboardCheck',
    image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=1200&auto=format&fit=crop',
    features: [
      'New Construction Survey',
      'Annual Class Survey',
      'Intermediate Survey',
      'Special Survey (SS)',
      'Tailshaft Survey',
      'Boiler Survey',
      'Underwater Survey (UWILD)',
      'Condition Assessment Programme'
    ],
    benefits: [
      'Comprehensive hull & machinery assessment',
      'Advanced NDT inspection methods',
      'Digital twin integration ready',
      'Transparent finding management'
    ],
    pricing: 'Based on vessel size and survey scope'
  },
  {
    id: 'technical-advisory',
    title: 'Technical Advisory Services',
    description: 'Expert maritime consulting for operational efficiency and regulatory compliance.',
    longDescription: `Beyond certification, GIRIK offers specialized technical advisory services to help maritime operators optimize their operations, manage risk, and navigate complex regulatory requirements.

Our technical team comprises Master Mariners, Naval Architects, Marine Engineers, and regulatory specialists who bring decades of combined experience from sea and shore. We provide guidance on alternative fuel transitions, energy efficiency improvements, ballast water management system selection, and emission compliance strategies.

Whether you need pre-purchase condition surveys, P&I club inspections, collision/grounding damage assessments, or fleet operation audits, our advisory team delivers actionable insights backed by data-driven analysis.`,
    iconName: 'Settings',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Pre-Purchase Inspection (PPI)',
      'Condition & Valuation Survey',
      'P&I Club Condition Survey',
      'Energy Efficiency Consulting (EEXI/CII)',
      'Ballast Water Management Advisory',
      'Alternative Fuel Feasibility Study',
      'Collision & Grounding Damage Survey',
      'Fleet Audit & Benchmarking'
    ],
    benefits: [
      'Unbiased expert recommendations',
      'Risk mitigation strategies',
      'Regulatory compliance roadmap',
      'Cost-benefit analysis included'
    ],
    pricing: 'Hourly or project-based engagement'
  },
  {
    id: 'toca',
    title: 'Transfer of Class (TOCA)',
    description: 'Seamless class transfer between recognized organizations with minimal downtime.',
    longDescription: `Transferring class between classification societies can be complex and time-sensitive. GIRIK's dedicated TOCA team facilitates smooth transitions by coordinating with both the losing and gaining class societies, ensuring all records are properly transferred and verified.

We conduct pre-transfer surveys to identify any outstanding recommendations or conditions of class, helping you avoid surprises during the transfer process. Our digital platform maintains a complete audit trail of all communications, survey reports, and class records throughout the transfer.

Post-transfer, all certificates are issued digitally through the GIRIK platform, with full verification capability from day one. Our average TOCA processing time is 30% faster than industry standard, minimizing operational disruption for your vessel.`,
    iconName: 'ArrowLeftRight',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Pre-Transfer Condition Survey',
      'Records Verification & Audit',
      'Coordination with Losing Class',
      'Gaining Class Documentation',
      'Outstanding Condition Review',
      'Hull & Machinery Assessment',
      'Digital Record Migration',
      'Seamless Certificate Issuance'
    ],
    benefits: [
      '30% faster transfer processing',
      'No compliance gaps during transition',
      'Complete audit trail maintained',
      'Single point of contact'
    ],
    pricing: 'Fixed fee per vessel'
  },
  {
    id: 'flag-administration',
    title: 'Flag State Administration',
    description: 'Comprehensive flag state services for vessel registration and compliance.',
    longDescription: `GIRIK partners with progressive flag administrations to provide full-service vessel registration, documentation, and compliance management. Our platform serves as the digital backbone for flag operations, enabling efficient processing of ship registrations, seafarer certifications, and regulatory document management.

For ship owners, we offer streamlined registration processes, transparent fee structures, and responsive support. Our digital registry integration means faster provisional registration, simplified documentation requirements, and real-time status tracking from application to certificate issuance.

We support flag administrations in meeting their IMO obligations, including IMSAS audit preparation, PSC performance monitoring, and regulatory update implementation. Our reporting dashboards provide flag administrators with complete visibility into fleet compliance status.`,
    iconName: 'Flag',
    image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Vessel Registration Services',
      'Certificate of Registry',
      'Continuous Synopsis Record (CSR)',
      'Radio Station License',
      'Seafarer Certification',
      'IMSAS Audit Support',
      'PSC Performance Management',
      'Regulatory Implementation Support'
    ],
    benefits: [
      'Efficient registration process',
      'Transparent fee structure',
      'Digital-first documentation',
      '24/7 registry access'
    ],
    pricing: 'Registration + annual tonnage fees'
  },
  {
    id: 'yacht-certification',
    title: 'Yacht & Superyacht Services',
    description: 'Specialized certification for commercial and private large yachts worldwide.',
    longDescription: `The yacht industry demands specialized expertise and a personalized approach. GIRIK's yacht division serves commercial charter yachts, private superyachts, and expedition vessels with tailored certification and survey services that understand the unique requirements of this sector.

Our yacht surveyors are experienced in Large Yacht Code (LY3/PYC), MCA compliance, and major flag state requirements for yachts including Cayman Islands, Marshall Islands, Malta, and Red Ensign Group flags. We provide new build supervision, ISM/ISPS implementation, and MLC certification for yacht crews.

Beyond compliance, we offer yacht pre-purchase surveys, refit supervision, and operational consulting to ensure your yacht meets the highest standards of safety and performance while maintaining the aesthetic and experiential qualities that define luxury yachting.`,
    iconName: 'Compass',
    image: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Large Yacht Code Compliance (LY3)',
      'Passenger Yacht Code (PYC)',
      'MCA Certification',
      'New Build Supervision',
      'Yacht Pre-Purchase Survey',
      'Refit Project Management',
      'Crew MLC Certification',
      'Charter Compliance'
    ],
    benefits: [
      'Specialist yacht expertise',
      'Global port state acceptance',
      'Discreet & professional service',
      'Flexible scheduling'
    ],
    pricing: 'Project-based quotation'
  }
];

// ============================================
// PLATFORM FEATURES
// ============================================
export const FEATURES: Feature[] = [
  {
    iconName: 'QrCode',
    title: 'QR Code Verification',
    description: 'Every certificate includes a unique QR code enabling instant authenticity verification by anyone, anywhere, without login requirements.',
    benefit: 'Eliminate document fraud'
  },
  {
    iconName: 'FileCheck',
    title: 'Digital Certificates',
    description: 'Cryptographically signed digital certificates that serve as the authoritative record, with PDF and print versions for traditional needs.',
    benefit: 'Paperless compliance'
  },
  {
    iconName: 'Bell',
    title: 'Smart Notifications',
    description: 'Automated alerts for upcoming surveys, certificate expiries, and regulatory changes ensure you never miss a compliance deadline.',
    benefit: 'Proactive compliance'
  },
  {
    iconName: 'Lock',
    title: 'Enterprise Security',
    description: 'AES-256 encryption, role-based access control, multi-factor authentication, and immutable audit trails protect your sensitive data.',
    benefit: 'Bank-grade protection'
  },
  {
    iconName: 'Globe',
    title: 'Global Coverage',
    description: 'Authorized surveyor network spanning 120+ ports worldwide, with 24/7 support and localized expertise in major shipping hubs.',
    benefit: 'Survey anywhere'
  },
  {
    iconName: 'Zap',
    title: 'Real-Time Dashboard',
    description: 'Live fleet compliance status, certificate validity tracking, and survey scheduling all visible in one comprehensive dashboard.',
    benefit: 'Complete visibility'
  },
  {
    iconName: 'Rocket',
    title: 'Rapid Processing',
    description: 'Digital workflows reduce typical certification turnaround from weeks to days, with expedited options available for urgent needs.',
    benefit: '70% faster processing'
  },
  {
    iconName: 'Award',
    title: 'Regulatory Intelligence',
    description: 'Stay ahead with built-in regulatory tracking, impact analysis for upcoming rules, and compliance gap identification.',
    benefit: 'Always compliant'
  }
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS: Statistic[] = [
  {
    value: '2,500',
    suffix: '+',
    label: 'Vessels Certified',
    description: 'Active vessels under GIRIK certification worldwide'
  },
  {
    value: '40',
    suffix: '+',
    label: 'Flag States',
    description: 'Authorized flag administrations we represent'
  },
  {
    value: '120',
    suffix: '+',
    label: 'Ports Covered',
    description: 'Global surveyor network coverage'
  },
  {
    value: '99.9',
    suffix: '%',
    label: 'Platform Uptime',
    description: 'Enterprise-grade reliability guarantee'
  },
  {
    value: '48',
    suffix: 'hrs',
    label: 'Avg. Turnaround',
    description: 'Survey to certificate issuance time'
  },
  {
    value: '150',
    suffix: '+',
    label: 'Expert Surveyors',
    description: 'Qualified marine professionals globally'
  },
  {
    value: '50,000',
    suffix: '+',
    label: 'Certificates Issued',
    description: 'Total digital certificates in circulation'
  },
  {
    value: '24/7',
    suffix: '',
    label: 'Support Available',
    description: 'Round-the-clock assistance for urgent needs'
  }
];

// ============================================
// WORKFLOW STEPS
// ============================================
export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: 1,
    title: 'Submit Request',
    description: 'Ship owner or manager submits certification request via the GIRIK portal, specifying vessel details, required survey type, preferred dates, and port location.',
    iconName: 'Send',
    duration: '5 minutes',
    actor: 'Ship Owner'
  },
  {
    step: 2,
    title: 'Surveyor Assignment',
    description: 'Based on vessel location, survey type, and availability, our system automatically assigns the best-qualified surveyor from our global network.',
    iconName: 'UserCheck',
    duration: '2-4 hours',
    actor: 'GIRIK System'
  },
  {
    step: 3,
    title: 'On-Site Inspection',
    description: 'Assigned surveyor conducts comprehensive on-board inspection, documenting findings with photographs, measurements, and detailed notes via mobile app.',
    iconName: 'Camera',
    duration: 'Survey duration',
    actor: 'Surveyor'
  },
  {
    step: 4,
    title: 'Report Generation',
    description: 'Digital survey report is automatically compiled from inspection data. Technical manager reviews findings, flags any concerns, and verifies completeness.',
    iconName: 'FileSearch',
    duration: '4-8 hours',
    actor: 'Technical Manager'
  },
  {
    step: 5,
    title: 'Invoice & Payment',
    description: 'Itemized digital invoice generated based on services rendered. Multiple payment options available including bank transfer, card, and corporate accounts.',
    iconName: 'CreditCard',
    duration: 'Upon completion',
    actor: 'Finance'
  },
  {
    step: 6,
    title: 'Certificate Issuance',
    description: 'Upon payment confirmation, digital certificate is generated with unique QR code and UTN. Certificate instantly available in portal and downloadable as PDF.',
    iconName: 'Award',
    duration: 'Instant',
    actor: 'GIRIK System'
  },
  {
    step: 7,
    title: 'Public Verification',
    description: 'Certificate is immediately available for public verification. Port authorities, charterers, and stakeholders can verify authenticity via QR scan or UTN lookup.',
    iconName: 'CheckCircle',
    duration: 'Real-time',
    actor: 'Public'
  }
];

// ============================================
// COMPLIANCE BADGES
// ============================================
export const COMPLIANCE_BADGES: ComplianceBadge[] = [
  {
    name: 'IMO Guideline Compliant',
    iconName: 'ShieldCheck',
    description: 'Aligned with International Maritime Organization standards and guidelines'
  },
  {
    name: 'IACS Member Standards',
    iconName: 'Award',
    description: 'Meeting International Association of Classification Societies benchmarks'
  },
  {
    name: 'ISO 27001 Ready',
    iconName: 'Lock',
    description: 'Information security management aligned with international standards'
  },
  {
    name: 'ISO 9001 Ready',
    iconName: 'Award',
    description: 'Quality management system meeting international requirements'
  },
  {
    name: 'GDPR Compliant',
    iconName: 'Globe',
    description: 'Full compliance with EU General Data Protection Regulation'
  },
  {
    name: 'SOC 2 Aligned',
    iconName: 'Lock',
    description: 'Service organization control standards for trust services criteria'
  }
];

// ============================================
// PROBLEM VS SOLUTION
// ============================================
export const PROBLEM_SOLUTION = {
  traditional: {
    title: 'Traditional Challenges',
    problems: [
      { icon: 'FileX', text: 'Paper certificates prone to loss, damage, and forgery' },
      { icon: 'Timer', text: 'Weeks of delay for certificate issuance and renewals' },
      { icon: 'Eye', text: 'No real-time visibility into fleet compliance status' },
      { icon: 'AlertTriangle', text: 'Port State Control detentions from documentation gaps' },
      { icon: 'XCircle', text: 'Fragmented communication between stakeholders' },
      { icon: 'Clock', text: 'Manual tracking of survey schedules and expiry dates' }
    ]
  },
  girik: {
    title: 'The GIRIK Advantage',
    solutions: [
      { icon: 'QrCode', text: 'Tamper-proof digital certificates with instant QR verification' },
      { icon: 'Zap', text: 'Certificates issued within 48 hours of successful survey' },
      { icon: 'FileCheck', text: 'Live dashboard showing real-time compliance status' },
      { icon: 'ShieldCheck', text: 'Zero PSC deficiencies from documentation issues' },
      { icon: 'CheckCircle2', text: 'Unified platform for all stakeholder communication' },
      { icon: 'Bell', text: 'Automated reminders and proactive expiry management' }
    ]
  }
};

// ============================================
// USER TYPES
// ============================================
export const USER_TYPES: UserType[] = [
  {
    title: 'Ship Owners & Operators',
    description: 'Fleet managers and vessel operators seeking streamlined compliance management for their entire fleet with real-time visibility and reduced administrative burden.',
    iconName: 'Ship',
    image: 'https://images.unsplash.com/photo-1577993157145-53d66ad47ad3?q=80&w=800&auto=format&fit=crop',
    benefits: [
      'Unified fleet compliance dashboard',
      'Automated certificate expiry tracking',
      'Simplified survey scheduling',
      'Instant certificate access anywhere',
      'Reduced PSC detention risk',
      'Cost transparency and control'
    ],
    cta: 'Schedule Fleet Demo'
  },
  {
    title: 'Technical Managers',
    description: 'Shore-based technical superintendents and fleet managers responsible for maintaining vessels in class and ensuring regulatory compliance across diverse fleets.',
    iconName: 'Settings',
    image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=800&auto=format&fit=crop',
    benefits: [
      'Complete survey finding visibility',
      'Deficiency tracking and resolution',
      'Document management system',
      'Regulatory change notifications',
      'Performance analytics and reporting',
      'Multi-vessel comparison tools'
    ],
    cta: 'Explore Tech Features'
  },
  {
    title: 'Flag Administrations',
    description: 'Maritime authorities and flag state registries looking to modernize their operations with digital-first vessel documentation and compliance monitoring.',
    iconName: 'Flag',
    image: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?q=80&w=800&auto=format&fit=crop',
    benefits: [
      'Digital vessel registry integration',
      'Real-time fleet compliance monitoring',
      'Automated PSC detention tracking',
      'IMSAS audit preparation tools',
      'Seafarer certification management',
      'Custom reporting and analytics'
    ],
    cta: 'Partner With GIRIK'
  },
  {
    title: 'Port State Control',
    description: 'Port state control officers and maritime inspectors requiring instant access to certificate verification and vessel compliance history.',
    iconName: 'Building',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=800&auto=format&fit=crop',
    benefits: [
      'Instant certificate verification',
      'Complete vessel compliance history',
      'Deficiency record access',
      'Survey date confirmation',
      'Document authenticity validation',
      'API integration available'
    ],
    cta: 'Access Verification'
  },
  {
    title: 'Surveyors',
    description: 'Marine surveyors and inspection professionals seeking modern digital tools to conduct, document, and report surveys efficiently.',
    iconName: 'UserCheck',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop',
    benefits: [
      'Mobile inspection app',
      'Digital photo documentation',
      'Standardized checklist templates',
      'Offline survey capability',
      'Automated report generation',
      'Direct certificate issuance'
    ],
    cta: 'Join Surveyor Network'
  },
  {
    title: 'Charterers & Vettors',
    description: 'Commercial charterers, oil majors, and vetting inspectors who need reliable vessel compliance data for informed chartering decisions.',
    iconName: 'ClipboardCheck',
    image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=800&auto=format&fit=crop',
    benefits: [
      'Vessel compliance scoring',
      'Certificate validity checks',
      'Historical inspection data',
      'Risk assessment insights',
      'Due diligence reports',
      'API for vetting systems'
    ],
    cta: 'Request API Access'
  }
];

// ============================================
// NEWS & UPDATES
// ============================================
export const NEWS: NewsItem[] = [
  {
    id: 'news-1',
    title: 'GIRIK Achieves Authorization from Bahamas Maritime Authority',
    excerpt: 'We are proud to announce our latest flag state authorization, expanding our coverage to one of the world\'s largest ship registries.',
    content: '',
    date: 'January 22, 2026',
    category: 'Authorization',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop',
    author: 'GIRIK Communications',
    readTime: '3 min read'
  },
  {
    id: 'news-2',
    title: 'New Mobile Surveyor App v3.0 Released with Offline Mode',
    excerpt: 'Enhanced mobile application now enables surveyors to complete inspections even without internet connectivity, syncing automatically when back online.',
    content: '',
    date: 'January 18, 2026',
    category: 'Product',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
    author: 'GIRIK Product Team',
    readTime: '4 min read'
  },
  {
    id: 'news-3',
    title: 'IMO MEPC 83 Outcomes: What Ship Owners Need to Know',
    excerpt: 'Comprehensive analysis of the latest Marine Environment Protection Committee decisions and their implications for vessel compliance.',
    content: '',
    date: 'January 12, 2026',
    category: 'Regulatory',
    image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=800&auto=format&fit=crop',
    author: 'Regulatory Affairs',
    readTime: '8 min read'
  },
  {
    id: 'news-4',
    title: 'GIRIK Singapore Hub Now Operational',
    excerpt: 'Expanding our Asia-Pacific presence with a new regional hub to serve the thriving maritime community in Southeast Asia.',
    content: '',
    date: 'January 5, 2026',
    category: 'Company',
    image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=800&auto=format&fit=crop',
    author: 'GIRIK Communications',
    readTime: '3 min read'
  }
];

// ============================================
// FREQUENTLY ASKED QUESTIONS
// ============================================
export const FAQS: FAQ[] = [
  {
    question: 'What is a Unique Tracking Number (UTN)?',
    answer: 'The UTN is a unique alphanumeric identifier assigned to every certificate issued through the GIRIK platform. It follows the format GIRIK-YYYY-XXXX where YYYY represents the year and XXXX is a unique code. This UTN enables instant verification of certificate authenticity through our public verification portal or by scanning the QR code embedded in each certificate.',
    category: 'Verification'
  },
  {
    question: 'How do I verify a GIRIK certificate?',
    answer: 'Certificate verification is free and requires no login. You can verify any GIRIK certificate by: (1) Scanning the QR code printed on the certificate using any smartphone camera, which will take you directly to the verification result; (2) Visiting verify.girikshipping.com and entering the UTN; (3) Using our API for bulk verification if you\'re integrating with your systems. The verification result shows real-time certificate status, validity dates, and vessel details.',
    category: 'Verification'
  },
  {
    question: 'Which flag states does GIRIK represent?',
    answer: 'GIRIK holds authorization from over 40 flag administrations worldwide, including major registries in Panama, Liberia, Marshall Islands, Bahamas, Malta, and others. Our authorizations cover statutory certification under SOLAS, MARPOL, Load Line, Tonnage, and other international conventions. Contact us for the complete list of flag states or to check availability for your specific requirements.',
    category: 'Services'
  },
  {
    question: 'How quickly can I get a certificate issued?',
    answer: 'Our average turnaround from successful survey completion to certificate issuance is 48 hours. This includes technical review, documentation preparation, and digital certificate generation. Expedited processing is available for urgent requirements. The entire process is digitized, eliminating postal delays and enabling instant access to certificates once issued.',
    category: 'Process'
  },
  {
    question: 'Is my vessel data secure on the GIRIK platform?',
    answer: 'Absolutely. GIRIK employs enterprise-grade security including AES-256 encryption for data at rest and in transit, role-based access control (RBAC), multi-factor authentication (MFA), and maintains immutable audit logs for all system activities. Our infrastructure is aligned with ISO 27001 standards and undergoes regular penetration testing and security audits. We are committed to protecting your sensitive maritime data.',
    category: 'Security'
  },
  {
    question: 'Can I integrate GIRIK with my fleet management system?',
    answer: 'Yes, GIRIK offers a comprehensive REST API that enables integration with popular fleet management systems, ERP platforms, and maritime software. Our API supports certificate data retrieval, verification, survey scheduling, and notification webhooks. API documentation is available for approved partners. Contact our integration team to discuss your specific requirements.',
    category: 'Technical'
  },
  {
    question: 'What types of vessels do you certify?',
    answer: 'GIRIK provides certification services for all commercial vessel types including cargo ships, tankers, bulk carriers, container ships, passenger vessels, offshore support vessels, yachts, and specialized craft. We also handle fishing vessels and non-convention vessels depending on flag state requirements. Each vessel type has dedicated survey protocols and specialized surveyors.',
    category: 'Services'
  },
  {
    question: 'How does pricing work?',
    answer: 'Our pricing is transparent and based on several factors including vessel type and size, scope of surveys required, geographical location, and urgency. We provide itemized quotations before any work commences, with no hidden fees. Volume discounts are available for fleet owners with multiple vessels. Contact our sales team for a customized quote tailored to your specific needs.',
    category: 'Pricing'
  },
  {
    question: 'What happens if my vessel fails a survey?',
    answer: 'If non-conformities are identified during a survey, they will be documented with specific recommendations and timeframes for rectification. You can track findings and submit evidence of corrections through the GIRIK platform. Once rectifications are verified (either by re-inspection or document review, depending on the nature of findings), the survey will be closed out and certificates issued. Our technical team is available to provide guidance on addressing findings efficiently.',
    category: 'Process'
  },
  {
    question: 'Do you operate 24/7?',
    answer: 'Yes, our support team operates 24/7 to assist with urgent certification matters, verification queries, and platform support. Our global surveyor network enables survey scheduling in ports across different time zones. For routine inquiries, our standard business hours team is available Monday-Friday 9 AM - 6 PM IST, with regional hub support in Singapore and Dubai covering Asia-Pacific and Middle East time zones.',
    category: 'Support'
  }
];

// ============================================
// PLATFORM MODULES
// ============================================
export const MODULES: Module[] = [
  {
    id: 'vessel-registry',
    title: 'Vessel Registry',
    description: 'Comprehensive vessel database with specifications, ownership history, and documentation.',
    features: ['IMO Number Lookup', 'Vessel Particulars', 'Ownership Records', 'Tonnage Certificates']
  },
  {
    id: 'certificate-hub',
    title: 'Certificate Hub',
    description: 'Central repository for all digital certificates with status tracking and verification.',
    features: ['Active Certificates', 'Expiry Tracking', 'Verification History', 'Download Center']
  },
  {
    id: 'survey-scheduler',
    title: 'Survey Scheduler',
    description: 'Intelligent scheduling system matching vessel requirements with available surveyors.',
    features: ['Request Surveys', 'Surveyor Assignment', 'Calendar View', 'Notifications']
  },
  {
    id: 'inspection-mobile',
    title: 'Inspection App',
    description: 'Mobile application for surveyors to conduct and document inspections on-site.',
    features: ['Offline Mode', 'Photo Capture', 'Digital Checklists', 'GPS Location']
  },
  {
    id: 'reporting-engine',
    title: 'Reporting Engine',
    description: 'Automated report generation and custom analytics for fleet performance.',
    features: ['Survey Reports', 'Compliance Dashboards', 'Trend Analysis', 'Export Options']
  },
  {
    id: 'payment-portal',
    title: 'Payment Portal',
    description: 'Secure payment processing with multiple options and invoice management.',
    features: ['Online Payments', 'Invoice History', 'Corporate Accounts', 'Receipts']
  }
];

// ============================================
// SAMPLE CERTIFICATE DATA
// ============================================
export const SAMPLE_CERTIFICATE: CertificateData = {
  utn: 'GIRIK-2026-X88',
  status: 'valid',
  vessel: {
    name: 'MV Ocean Star',
    imo: '9876543',
    flag: 'Panama',
    type: 'Bulk Carrier',
    tonnage: '45,000 GT',
    yearBuilt: 2018,
    owner: 'Pacific Maritime Corporation',
    manager: 'StarShip Management Ltd.'
  },
  certificate: {
    type: 'Cargo Ship Safety Construction Certificate',
    issuedBy: 'GIRIK Shipping',
    issuedAt: '2024-01-15',
    expiresAt: '2029-01-14',
    surveyDate: '2024-01-10',
    surveyPort: 'Singapore',
    remarks: 'Initial survey completed satisfactorily'
  },
  surveyor: {
    name: 'Capt. Rajesh Kumar',
    id: 'GIRIK-SUR-0042',
    qualification: 'Class I Master Mariner'
  }
};

// ============================================
// CONTACT INFORMATION
// ============================================
export const CONTACT_INFO: ContactInfo = {
  headquarters: {
    name: 'GIRIK Shipping - Headquarters',
    address: 'Maritime Business Centre, Ballard Estate',
    city: 'Mumbai',
    state: 'Maharashtra',
    country: 'India',
    postalCode: '400001',
    phone: '+91 22 4000 5000',
    email: 'info@girikshipping.com',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM IST'
  },
  regionalOffices: [
    {
      name: 'GIRIK Singapore',
      address: '10 Anson Road, International Plaza',
      city: 'Singapore',
      country: 'Singapore',
      postalCode: '079903',
      phone: '+65 6123 4567',
      email: 'singapore@girikshipping.com',
      hours: 'Monday - Friday: 9:00 AM - 6:00 PM SGT'
    },
    {
      name: 'GIRIK Dubai',
      address: 'Dubai Maritime City, Port Rashid',
      city: 'Dubai',
      country: 'United Arab Emirates',
      postalCode: 'N/A',
      phone: '+971 4 567 8900',
      email: 'dubai@girikshipping.com',
      hours: 'Sunday - Thursday: 9:00 AM - 6:00 PM GST'
    },
    {
      name: 'GIRIK Rotterdam',
      address: 'World Port Center, Wilhelminakade',
      city: 'Rotterdam',
      country: 'Netherlands',
      postalCode: '3072 AP',
      phone: '+31 10 123 4567',
      email: 'europe@girikshipping.com',
      hours: 'Monday - Friday: 9:00 AM - 5:00 PM CET'
    }
  ],
  support: {
    email: 'support@girikshipping.com',
    phone: '+91 22 4000 5001',
    hours: '24/7 for urgent matters'
  },
  sales: {
    email: 'sales@girikshipping.com',
    phone: '+91 22 4000 5002'
  },
  media: {
    email: 'press@girikshipping.com'
  }
};

// ============================================
// TEAM MEMBERS
// ============================================
export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Capt. Vikram Sharma',
    position: 'Chief Executive Officer',
    bio: 'Former Master Mariner with 25 years of maritime experience. Led digital transformation initiatives at major classification societies before founding GIRIK.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Dr. Priya Nair',
    position: 'Chief Technology Officer',
    bio: 'PhD in Computer Science from IIT Bombay. Previously built scalable enterprise platforms for Fortune 500 companies. Expert in blockchain and maritime informatics.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Capt. Arjun Menon',
    position: 'Chief Operating Officer',
    bio: 'Chief Engineer with extensive offshore and tanker experience. Built and managed surveyor networks across Asia and Middle East.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Meera Reddy',
    position: 'Chief Commercial Officer',
    bio: '15 years in maritime commercial roles including P&I clubs and ship brokerage. Expert in ship finance and marine insurance.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
    linkedin: 'https://linkedin.com'
  }
];

// ============================================
// TESTIMONIALS
// ============================================
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "GIRIK transformed how we manage compliance across our fleet. What used to take weeks now happens in days, and we have complete visibility into every certificate's status.",
    author: 'Michael Chen',
    position: 'Fleet Director',
    company: 'Pacific Shipping Lines',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  },
  {
    quote: "The instant verification feature has been invaluable for our vetting operations. We can confirm certificate authenticity in seconds, significantly speeding up our due diligence process.",
    author: 'Sarah Williams',
    position: 'Marine Superintendent',
    company: 'Global Energy Tankers',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
  },
  {
    quote: "As a flag state administration, partnering with GIRIK has modernized our registry operations. The digital platform is robust, secure, and our ship owners appreciate the efficiency.",
    author: 'Hon. James Okonkwo',
    position: 'Registrar of Ships',
    company: 'African Maritime Registry',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop'
  }
];

// ============================================
// CASE STUDIES
// ============================================
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'Fleet Digitization for Major Tanker Operator',
    client: 'Oceanic Tanker Holdings',
    challenge: 'Managing 85 vessels across 12 flag states with paper-based processes was causing compliance gaps and operational delays.',
    solution: 'Implemented GIRIK platform fleet-wide with phased migration over 6 months, including training for shore staff and vessel crews.',
    results: [
      '73% reduction in certificate processing time',
      'Zero PSC detentions in first year',
      '$400K annual savings in administrative costs',
      '100% certificate digitization achieved'
    ],
    industry: 'Tanker',
    fleetSize: '85 vessels',
    image: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'case-2',
    title: 'Flag State Registry Modernization',
    client: 'Caribbean Maritime Authority',
    challenge: 'Legacy systems causing slow registration process and inability to meet growing demand from international ship owners.',
    solution: 'Deployed white-label GIRIK platform as the national vessel registry, with custom integrations for existing databases.',
    results: [
      '5x faster vessel registration',
      '40% increase in new registrations',
      'Real-time fleet compliance monitoring',
      'Improved IMO audit performance'
    ],
    industry: 'Flag Administration',
    fleetSize: '2,500+ registered vessels',
    image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=800&auto=format&fit=crop'
  }
];

// ============================================
// PRICING TIERS
// ============================================
export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'For small operators with limited fleets',
    price: 'Custom',
    priceUnit: 'per vessel/month',
    features: [
      'Up to 5 vessels',
      'Statutory certification',
      'Digital certificates',
      'Basic reporting',
      'Email support'
    ],
    cta: 'Get Quote',
    highlighted: false
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'For growing fleets needing comprehensive coverage',
    price: 'Custom',
    priceUnit: 'per vessel/month',
    features: [
      'Up to 25 vessels',
      'All survey types',
      'API access',
      'Advanced analytics',
      'Priority support',
      'Dedicated account manager'
    ],
    cta: 'Get Quote',
    highlighted: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large operators and flag administrations',
    price: 'Custom',
    priceUnit: 'annual agreement',
    features: [
      'Unlimited vessels',
      'Full platform access',
      'Custom integrations',
      'White-label options',
      '24/7 premium support',
      'On-site training',
      'SLA guarantees'
    ],
    cta: 'Contact Sales',
    highlighted: false
  }
];
