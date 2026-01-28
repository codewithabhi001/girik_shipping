// ============================================
// GIRIK SHIPPING - TYPESCRIPT TYPE DEFINITIONS
// Complete Type System for Maritime Platform
// ============================================

// ============================================
// PAGE TYPES
// ============================================
export type PageType =
  | 'home'
  | 'about'
  | 'services'
  | 'how-it-works'
  | 'verify'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'login';

// ============================================
// NAVIGATION
// ============================================
export interface NavLink {
  label: string;
  href: string;
  page: PageType;
  children?: NavLink[];
  external?: boolean;
}

export interface FooterLink {
  title: string;
  links: {
    label: string;
    href: string;
    page?: PageType;
    external?: boolean;
  }[];
}

// ============================================
// SERVICES
// ============================================
export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string;
  image: string;
  features: string[];
  benefits: string[];
  pricing: string;
}

// ============================================
// FEATURES
// ============================================
export interface Feature {
  iconName: string;
  title: string;
  description: string;
  benefit?: string;
}

// ============================================
// STATISTICS
// ============================================
export interface Statistic {
  value: string;
  suffix?: string;
  label: string;
  description?: string;
}

// ============================================
// WORKFLOW
// ============================================
export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
  iconName: string;
  duration?: string;
  actor?: string;
}

// ============================================
// COMPLIANCE
// ============================================
export interface ComplianceBadge {
  name: string;
  iconName: string;
  description?: string;
}

// ============================================
// PROBLEM/SOLUTION
// ============================================
export interface ProblemItem {
  icon: string;
  text: string;
}

export interface ProblemSolution {
  traditional: {
    title: string;
    problems: ProblemItem[];
  };
  girik: {
    title: string;
    solutions: ProblemItem[];
  };
}

// ============================================
// USER TYPES
// ============================================
export interface UserType {
  title: string;
  description: string;
  iconName: string;
  image: string;
  benefits: string[];
  cta?: string;
}

// ============================================
// NEWS
// ============================================
export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image?: string;
  author?: string;
  readTime?: string;
}

// ============================================
// FAQ
// ============================================
export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

// ============================================
// MODULES
// ============================================
export interface Module {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon?: string;
}

// ============================================
// CERTIFICATE DATA
// ============================================
export interface VesselInfo {
  name: string;
  imo: string;
  flag: string;
  type: string;
  tonnage: string;
  yearBuilt?: number;
  owner?: string;
  manager?: string;
}

export interface CertificateInfo {
  type: string;
  issuedBy: string;
  issuedAt: string;
  expiresAt: string;
  surveyDate?: string;
  surveyPort?: string;
  remarks?: string;
}

export interface SurveyorInfo {
  name: string;
  id: string;
  qualification?: string;
}

export interface CertificateData {
  utn: string;
  status: 'valid' | 'expired' | 'pending' | 'revoked';
  vessel: VesselInfo;
  certificate: CertificateInfo;
  surveyor?: SurveyorInfo;
}

// ============================================
// CONTACT
// ============================================
export interface OfficeInfo {
  name: string;
  address: string;
  city: string;
  state?: string;
  country: string;
  postalCode: string;
  phone: string;
  email: string;
  hours?: string;
}

export interface ContactInfo {
  headquarters: OfficeInfo;
  regionalOffices: OfficeInfo[];
  support: {
    email: string;
    phone: string;
    hours?: string;
  };
  sales?: {
    email: string;
    phone?: string;
  };
  media?: {
    email: string;
  };
}

// ============================================
// COMPANY
// ============================================
export interface Address {
  street: string;
  city: string;
  state?: string;
  country: string;
  postalCode: string;
}

export interface SocialMedia {
  linkedin?: string;
  twitter?: string;
  facebook?: string;
  youtube?: string;
  instagram?: string;
}

export interface CompanyInfo {
  name: string;
  fullName: string;
  tagline: string;
  mission: string;
  vision: string;
  founded: number;
  headquarters: string;
  description: string;
  website: string;
  email: string;
  phone: string;
  address: Address;
  socialMedia: SocialMedia;
}

// ============================================
// TEAM
// ============================================
export interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

// ============================================
// TESTIMONIALS
// ============================================
export interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  image?: string;
  rating?: number;
}

// ============================================
// CASE STUDIES
// ============================================
export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  challenge: string;
  solution: string;
  results: string[];
  industry: string;
  fleetSize?: string;
  image: string;
}

// ============================================
// PRICING
// ============================================
export interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: string;
  priceUnit: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

// ============================================
// FORM TYPES
// ============================================
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface VerificationResult {
  found: boolean;
  certificate?: CertificateData;
  error?: string;
}

// ============================================
// API RESPONSE TYPES
// ============================================
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
}

// ============================================
// UTILITY TYPES
// ============================================
export type IconName =
  | 'ShieldCheck'
  | 'QrCode'
  | 'FileCheck'
  | 'Bell'
  | 'Lock'
  | 'Globe'
  | 'Award'
  | 'Clock'
  | 'Zap'
  | 'Rocket'
  | 'Ship'
  | 'Building'
  | 'Flag'
  | 'AlertTriangle'
  | 'FileX'
  | 'Timer'
  | 'Eye'
  | 'XCircle'
  | 'CheckCircle'
  | 'CheckCircle2'
  | 'History'
  | 'Send'
  | 'UserCheck'
  | 'Camera'
  | 'FileSearch'
  | 'CreditCard'
  | 'ArrowRight'
  | 'ChevronRight'
  | 'Settings'
  | 'ArrowLeftRight'
  | 'Compass'
  | 'ClipboardCheck'
  | 'User'
  | 'Users'
  | 'Mail'
  | 'Phone'
  | 'MapPin'
  | 'ExternalLink'
  | 'Download'
  | 'Upload'
  | 'Search'
  | 'Menu'
  | 'X'
  | 'Plus'
  | 'Minus';

export type CertificateStatus = 'valid' | 'expired' | 'pending' | 'revoked';

export type SurveyType =
  | 'initial'
  | 'annual'
  | 'intermediate'
  | 'renewal'
  | 'special'
  | 'occasional';

export type VesselType =
  | 'bulk-carrier'
  | 'tanker'
  | 'container'
  | 'passenger'
  | 'offshore'
  | 'yacht'
  | 'fishing'
  | 'other';
