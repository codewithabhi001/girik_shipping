// ============================================
// GIRIK SHIPPING - CLIENT MODULE TYPES
// Complete Type Definitions for Client Portal
// ============================================

// ============================================
// CLIENT AUTHENTICATION
// ============================================
export interface ClientUser {
    id: string;
    email: string;
    name: string;
    companyId: string;
    companyName: string;
    role: 'client_admin' | 'client_user';
    avatar?: string;
    lastLogin?: string;
}

export interface ClientLoginCredentials {
    email: string;
    password: string;
    rememberMe?: boolean;
}

// ============================================
// VESSEL TYPES
// ============================================
export interface ClientVessel {
    id: string;
    name: string;
    imoNumber: string;
    callSign: string;
    mmsi: string;
    flagState: string;
    portOfRegistry: string;
    yearBuilt: number;
    shipType: string;
    grossTonnage: number;
    netTonnage: number;
    deadweight: number;
    engineType: string;
    builderName: string;
    classStatus: 'active' | 'suspended' | 'withdrawn';
    certificates: ClientCertificate[];
}

// ============================================
// CERTIFICATE TYPES
// ============================================
export interface ClientCertificate {
    id: string;
    vesselId: string;
    vesselName: string;
    certificateName: string;
    certificateType: string;
    utn: string;
    issueDate: string;
    expiryDate: string;
    status: 'valid' | 'expiring_soon' | 'expired' | 'pending';
    issuingAuthority: string;
    pdfUrl?: string;
    qrCode?: string;
}

// ============================================
// JOB REQUEST TYPES
// ============================================
export type JobStatus =
    | 'created'
    | 'gm_approved'
    | 'tm_approved'
    | 'assigned'
    | 'survey_done'
    | 'payment_pending'
    | 'certified'
    | 'rejected';

export type JobReason =
    | 'new_certificate'
    | 'renewal'
    | 'endorsement'
    | 'special_survey'
    | 'toca';

export interface JobTimelineItem {
    status: string;
    date: string;
    user?: string;
    remarks?: string;
}

export interface JobSurveyOutput {
    surveyDate: string;
    surveyReportPdf?: string;
    attendancePhoto?: string;
    nonConformities: string[];
}

export interface JobPaymentInfo {
    invoiceNumber: string;
    amount: number;
    currency: string;
    paymentStatus: 'pending' | 'paid' | 'overdue';
    receiptUrl?: string;
}

export interface ClientJobRequest {
    id: string;
    jobId: string;
    vesselId: string;
    vesselName: string;
    certificateType: string;
    reason: JobReason;
    status: JobStatus;
    targetPort: string;
    targetDate: string;
    remarks?: string;
    createdAt: string;
    documents: string[];
    timeline: JobTimelineItem[];
    surveyOutput?: JobSurveyOutput;
    paymentInfo?: JobPaymentInfo;
}

// ============================================
// NOTIFICATION TYPES
// ============================================
export type NotificationType =
    | 'job_update'
    | 'certificate_expiry'
    | 'payment_request'
    | 'system';

export interface ClientNotification {
    id: string;
    type: NotificationType;
    title: string;
    message: string;
    timestamp: string;
    isRead: boolean;
    link?: string;
}

// ============================================
// COMPANY PROFILE
// ============================================
export interface ClientCompanyProfile {
    id: string;
    companyName: string;
    companyCode: string;
    address: string;
    city: string;
    country: string;
    contactPerson: string;
    contactEmail: string;
    phone: string;
    registrationDate: string;
}

// ============================================
// DASHBOARD STATS
// ============================================
export interface ClientDashboardStats {
    totalVessels: number;
    activeJobs: number;
    certificatesExpiringSoon: number;
    pendingPayments: number;
}

export interface ClientAlert {
    id: string;
    type: 'expiry' | 'rejected' | 'payment';
    title: string;
    message: string;
    severity: 'warning' | 'error' | 'info';
    date: string;
    actionUrl?: string;
}

// ============================================
// CLIENT PAGE TYPES
// ============================================
export type ClientPageType =
    | 'dashboard'
    | 'vessels'
    | 'vessel-details'
    | 'jobs'
    | 'job-details'
    | 'create-job'
    | 'certificates'
    | 'notifications'
    | 'profile'
    | 'verify';

// ============================================
// FORM TYPES
// ============================================
export interface CreateJobFormData {
    vesselId: string;
    certificateType: string;
    reason: JobReason;
    targetPort: string;
    targetDate: string;
    remarks: string;
    documents: File[];
}
