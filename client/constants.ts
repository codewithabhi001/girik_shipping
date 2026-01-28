// ============================================
// GIRIK SHIPPING - CLIENT MODULE CONSTANTS
// Dummy Data for Client Portal
// ============================================

import {
    ClientUser,
    ClientVessel,
    ClientCertificate,
    ClientJobRequest,
    ClientNotification,
    ClientCompanyProfile,
    ClientDashboardStats,
    ClientAlert
} from './types';

// ============================================
// DEMO CLIENT USER (Login Credentials)
// Email: demo@oceanic.com | Password: demo123
// ============================================
export const DEMO_CLIENT: ClientUser = {
    id: 'client-001',
    email: 'demo@oceanic.com',
    name: 'Rajesh Kumar',
    companyId: 'comp-001',
    companyName: 'Oceanic Maritime Ltd.',
    role: 'client_admin',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    lastLogin: '2026-01-28T18:30:00Z'
};

// ============================================
// COMPANY PROFILE
// ============================================
export const CLIENT_COMPANY: ClientCompanyProfile = {
    id: 'comp-001',
    companyName: 'Oceanic Maritime Ltd.',
    companyCode: 'OML-2019',
    address: '15th Floor, Maritime Tower, Nariman Point',
    city: 'Mumbai',
    country: 'India',
    contactPerson: 'Rajesh Kumar',
    contactEmail: 'operations@oceanic-maritime.com',
    phone: '+91 22 6789 0123',
    registrationDate: '2019-03-15'
};

// ============================================
// VESSELS DATA
// ============================================
export const CLIENT_VESSELS: ClientVessel[] = [
    {
        id: 'vessel-001',
        name: 'MV Ocean Pioneer',
        imoNumber: '9876543',
        callSign: 'VJKP',
        mmsi: '419876543',
        flagState: 'India',
        portOfRegistry: 'Mumbai',
        yearBuilt: 2018,
        shipType: 'Bulk Carrier',
        grossTonnage: 45000,
        netTonnage: 28000,
        deadweight: 82000,
        engineType: 'MAN B&W 6S60MC-C',
        builderName: 'Hyundai Heavy Industries',
        classStatus: 'active',
        certificates: []
    },
    {
        id: 'vessel-002',
        name: 'MV Coastal Star',
        imoNumber: '9765432',
        callSign: 'VKAS',
        mmsi: '419765432',
        flagState: 'Panama',
        portOfRegistry: 'Panama City',
        yearBuilt: 2015,
        shipType: 'Container Ship',
        grossTonnage: 35000,
        netTonnage: 18000,
        deadweight: 42000,
        engineType: 'Wartsila 8RT-flex68D',
        builderName: 'Samsung Heavy Industries',
        classStatus: 'active',
        certificates: []
    },
    {
        id: 'vessel-003',
        name: 'MV Blue Horizon',
        imoNumber: '9654321',
        callSign: 'V2BH',
        mmsi: '419654321',
        flagState: 'Marshall Islands',
        portOfRegistry: 'Majuro',
        yearBuilt: 2020,
        shipType: 'Oil Tanker',
        grossTonnage: 55000,
        netTonnage: 32000,
        deadweight: 105000,
        engineType: 'MAN B&W 7S80MC-C',
        builderName: 'Daewoo Shipbuilding',
        classStatus: 'active',
        certificates: []
    },
    {
        id: 'vessel-004',
        name: 'MV Pacific Voyager',
        imoNumber: '9543210',
        callSign: 'KPVG',
        mmsi: '419543210',
        flagState: 'Liberia',
        portOfRegistry: 'Monrovia',
        yearBuilt: 2012,
        shipType: 'General Cargo',
        grossTonnage: 25000,
        netTonnage: 14000,
        deadweight: 35000,
        engineType: 'Wartsila 6RT-flex50',
        builderName: 'Oshima Shipbuilding',
        classStatus: 'suspended',
        certificates: []
    }
];

// ============================================
// CERTIFICATES DATA
// ============================================
export const CLIENT_CERTIFICATES: ClientCertificate[] = [
    {
        id: 'cert-001',
        vesselId: 'vessel-001',
        vesselName: 'MV Ocean Pioneer',
        certificateName: 'Safety Management Certificate (SMC)',
        certificateType: 'SMC',
        utn: 'GIRIK-SMC-2025-001234',
        issueDate: '2025-06-15',
        expiryDate: '2030-06-14',
        status: 'valid',
        issuingAuthority: 'GIRIK Shipping',
        pdfUrl: '#'
    },
    {
        id: 'cert-002',
        vesselId: 'vessel-001',
        vesselName: 'MV Ocean Pioneer',
        certificateName: 'International Safety Management (ISM)',
        certificateType: 'ISM',
        utn: 'GIRIK-ISM-2025-001235',
        issueDate: '2025-06-15',
        expiryDate: '2030-06-14',
        status: 'valid',
        issuingAuthority: 'GIRIK Shipping',
        pdfUrl: '#'
    },
    {
        id: 'cert-003',
        vesselId: 'vessel-001',
        vesselName: 'MV Ocean Pioneer',
        certificateName: 'International Load Line Certificate',
        certificateType: 'ILLC',
        utn: 'GIRIK-ILLC-2024-001100',
        issueDate: '2024-03-10',
        expiryDate: '2026-03-09',
        status: 'expiring_soon',
        issuingAuthority: 'GIRIK Shipping',
        pdfUrl: '#'
    },
    {
        id: 'cert-004',
        vesselId: 'vessel-002',
        vesselName: 'MV Coastal Star',
        certificateName: 'Cargo Ship Safety Construction Certificate',
        certificateType: 'CSSCC',
        utn: 'GIRIK-CSSCC-2025-002345',
        issueDate: '2025-01-20',
        expiryDate: '2030-01-19',
        status: 'valid',
        issuingAuthority: 'GIRIK Shipping',
        pdfUrl: '#'
    },
    {
        id: 'cert-005',
        vesselId: 'vessel-002',
        vesselName: 'MV Coastal Star',
        certificateName: 'International Ship Security Certificate',
        certificateType: 'ISSC',
        utn: 'GIRIK-ISSC-2024-002346',
        issueDate: '2024-08-01',
        expiryDate: '2026-02-15',
        status: 'expiring_soon',
        issuingAuthority: 'GIRIK Shipping',
        pdfUrl: '#'
    },
    {
        id: 'cert-006',
        vesselId: 'vessel-003',
        vesselName: 'MV Blue Horizon',
        certificateName: 'International Oil Pollution Prevention Certificate',
        certificateType: 'IOPP',
        utn: 'GIRIK-IOPP-2025-003456',
        issueDate: '2025-02-01',
        expiryDate: '2030-01-31',
        status: 'valid',
        issuingAuthority: 'GIRIK Shipping',
        pdfUrl: '#'
    },
    {
        id: 'cert-007',
        vesselId: 'vessel-004',
        vesselName: 'MV Pacific Voyager',
        certificateName: 'Safety Equipment Certificate',
        certificateType: 'SEC',
        utn: 'GIRIK-SEC-2023-004567',
        issueDate: '2023-05-10',
        expiryDate: '2025-12-31',
        status: 'expired',
        issuingAuthority: 'GIRIK Shipping',
        pdfUrl: '#'
    }
];

// ============================================
// JOB REQUESTS DATA
// ============================================
export const CLIENT_JOBS: ClientJobRequest[] = [
    {
        id: 'job-001',
        jobId: 'GIRIK-JOB-2026-00125',
        vesselId: 'vessel-001',
        vesselName: 'MV Ocean Pioneer',
        certificateType: 'Annual Survey - SMC',
        reason: 'renewal',
        status: 'certified',
        targetPort: 'Mumbai',
        targetDate: '2025-12-15',
        createdAt: '2025-11-20',
        documents: ['previous_smc.pdf', 'vessel_details.pdf'],
        timeline: [
            { status: 'Created', date: '2025-11-20', user: 'Rajesh Kumar' },
            { status: 'GM Approved', date: '2025-11-21', user: 'Operations Manager' },
            { status: 'TM Approved', date: '2025-11-22', user: 'Technical Manager' },
            { status: 'Survey Assigned', date: '2025-11-25', user: 'System' },
            { status: 'Survey Completed', date: '2025-12-15', user: 'Capt. Sharma' },
            { status: 'Payment Done', date: '2025-12-18' },
            { status: 'Certificate Issued', date: '2025-12-20' }
        ],
        surveyOutput: {
            surveyDate: '2025-12-15',
            surveyReportPdf: '#',
            attendancePhoto: '#',
            nonConformities: []
        },
        paymentInfo: {
            invoiceNumber: 'INV-2025-00125',
            amount: 2500,
            currency: 'USD',
            paymentStatus: 'paid',
            receiptUrl: '#'
        }
    },
    {
        id: 'job-002',
        jobId: 'GIRIK-JOB-2026-00189',
        vesselId: 'vessel-002',
        vesselName: 'MV Coastal Star',
        certificateType: 'ISSC Renewal',
        reason: 'renewal',
        status: 'survey_done',
        targetPort: 'Singapore',
        targetDate: '2026-01-25',
        createdAt: '2026-01-10',
        documents: ['current_issc.pdf'],
        timeline: [
            { status: 'Created', date: '2026-01-10', user: 'Rajesh Kumar' },
            { status: 'GM Approved', date: '2026-01-11', user: 'Operations Manager' },
            { status: 'TM Approved', date: '2026-01-12', user: 'Technical Manager' },
            { status: 'Survey Assigned', date: '2026-01-15', user: 'System' },
            { status: 'Survey Completed', date: '2026-01-25', user: 'Capt. Lee' }
        ],
        surveyOutput: {
            surveyDate: '2026-01-25',
            surveyReportPdf: '#',
            nonConformities: ['Minor: Fire extinguisher due for service']
        }
    },
    {
        id: 'job-003',
        jobId: 'GIRIK-JOB-2026-00201',
        vesselId: 'vessel-003',
        vesselName: 'MV Blue Horizon',
        certificateType: 'Special Survey - Class',
        reason: 'special_survey',
        status: 'assigned',
        targetPort: 'Dubai',
        targetDate: '2026-02-10',
        remarks: 'Please coordinate with dry dock schedule',
        createdAt: '2026-01-20',
        documents: ['class_status.pdf', 'previous_survey.pdf'],
        timeline: [
            { status: 'Created', date: '2026-01-20', user: 'Rajesh Kumar' },
            { status: 'GM Approved', date: '2026-01-21', user: 'Operations Manager' },
            { status: 'TM Approved', date: '2026-01-22', user: 'Technical Manager' },
            { status: 'Survey Assigned', date: '2026-01-25', user: 'System', remarks: 'Assigned to Capt. Mohammad' }
        ]
    },
    {
        id: 'job-004',
        jobId: 'GIRIK-JOB-2026-00215',
        vesselId: 'vessel-001',
        vesselName: 'MV Ocean Pioneer',
        certificateType: 'ILLC Survey',
        reason: 'renewal',
        status: 'gm_approved',
        targetPort: 'Chennai',
        targetDate: '2026-02-20',
        createdAt: '2026-01-28',
        documents: ['current_illc.pdf'],
        timeline: [
            { status: 'Created', date: '2026-01-28', user: 'Rajesh Kumar' },
            { status: 'GM Approved', date: '2026-01-29', user: 'Operations Manager' }
        ]
    },
    {
        id: 'job-005',
        jobId: 'GIRIK-JOB-2026-00098',
        vesselId: 'vessel-004',
        vesselName: 'MV Pacific Voyager',
        certificateType: 'SEC Renewal',
        reason: 'renewal',
        status: 'rejected',
        targetPort: 'Colombo',
        targetDate: '2025-12-01',
        remarks: 'Urgent renewal required',
        createdAt: '2025-11-15',
        documents: ['expired_sec.pdf'],
        timeline: [
            { status: 'Created', date: '2025-11-15', user: 'Rajesh Kumar' },
            { status: 'Rejected', date: '2025-11-16', user: 'Operations Manager', remarks: 'Vessel class suspended. Please resolve class issues first.' }
        ]
    }
];

// ============================================
// NOTIFICATIONS DATA
// ============================================
export const CLIENT_NOTIFICATIONS: ClientNotification[] = [
    {
        id: 'notif-001',
        type: 'certificate_expiry',
        title: 'Certificate Expiring Soon',
        message: 'ILLC for MV Ocean Pioneer expires in 45 days. Please initiate renewal.',
        timestamp: '2026-01-28T10:00:00Z',
        isRead: false,
        link: '#certificates'
    },
    {
        id: 'notif-002',
        type: 'job_update',
        title: 'Survey Completed',
        message: 'ISSC Survey for MV Coastal Star has been completed. Awaiting payment.',
        timestamp: '2026-01-25T16:30:00Z',
        isRead: false,
        link: '#jobs'
    },
    {
        id: 'notif-003',
        type: 'payment_request',
        title: 'Payment Required',
        message: 'Invoice INV-2026-00189 for $2,800 is pending. Please process payment.',
        timestamp: '2026-01-26T09:00:00Z',
        isRead: true,
        link: '#jobs'
    },
    {
        id: 'notif-004',
        type: 'job_update',
        title: 'Job Request Approved',
        message: 'Your Special Survey request for MV Blue Horizon has been approved.',
        timestamp: '2026-01-22T11:30:00Z',
        isRead: true,
        link: '#jobs'
    },
    {
        id: 'notif-005',
        type: 'certificate_expiry',
        title: 'Certificate Expired',
        message: 'SEC for MV Pacific Voyager has expired. Immediate action required.',
        timestamp: '2026-01-01T00:00:00Z',
        isRead: true,
        link: '#certificates'
    },
    {
        id: 'notif-006',
        type: 'system',
        title: 'New Feature Available',
        message: 'You can now download certificates directly from the dashboard.',
        timestamp: '2026-01-15T12:00:00Z',
        isRead: true
    }
];

// ============================================
// DASHBOARD STATS
// ============================================
export const CLIENT_DASHBOARD_STATS: ClientDashboardStats = {
    totalVessels: 4,
    activeJobs: 3,
    certificatesExpiringSoon: 2,
    pendingPayments: 1
};

// ============================================
// ALERTS DATA
// ============================================
export const CLIENT_ALERTS: ClientAlert[] = [
    {
        id: 'alert-001',
        type: 'expiry',
        title: 'ILLC Expiring - MV Ocean Pioneer',
        message: 'Certificate expires on March 9, 2026. Please initiate renewal process.',
        severity: 'warning',
        date: '2026-01-28',
        actionUrl: '#certificates'
    },
    {
        id: 'alert-002',
        type: 'payment',
        title: 'Payment Pending - MV Coastal Star',
        message: 'Invoice INV-2026-00189 for ISSC Survey is pending. Amount: $2,800',
        severity: 'info',
        date: '2026-01-26',
        actionUrl: '#jobs'
    },
    {
        id: 'alert-003',
        type: 'rejected',
        title: 'Job Rejected - MV Pacific Voyager',
        message: 'SEC Renewal request was rejected due to suspended class status.',
        severity: 'error',
        date: '2025-11-16',
        actionUrl: '#jobs'
    }
];

// ============================================
// CERTIFICATE TYPES DROPDOWN
// ============================================
export const CERTIFICATE_TYPES = [
    { value: 'smc', label: 'Safety Management Certificate (SMC)' },
    { value: 'ism', label: 'International Safety Management (ISM)' },
    { value: 'issc', label: 'International Ship Security Certificate (ISSC)' },
    { value: 'illc', label: 'International Load Line Certificate (ILLC)' },
    { value: 'iopp', label: 'International Oil Pollution Prevention (IOPP)' },
    { value: 'csscc', label: 'Cargo Ship Safety Construction Certificate' },
    { value: 'cssc', label: 'Cargo Ship Safety Certificate' },
    { value: 'sec', label: 'Safety Equipment Certificate (SEC)' },
    { value: 'src', label: 'Safety Radio Certificate (SRC)' },
    { value: 'class', label: 'Class Certificate' },
    { value: 'other', label: 'Other' }
];

// ============================================
// JOB REASONS DROPDOWN
// ============================================
export const JOB_REASONS = [
    { value: 'new_certificate', label: 'New Certificate' },
    { value: 'renewal', label: 'Renewal' },
    { value: 'endorsement', label: 'Endorsement' },
    { value: 'special_survey', label: 'Special Survey' },
    { value: 'toca', label: 'Transfer of Class Authority (TOCA)' }
];

// ============================================
// CLIENT SIDEBAR MENU
// ============================================
export const CLIENT_MENU = [
    { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
    { id: 'vessels', label: 'My Vessels', icon: 'Ship' },
    { id: 'jobs', label: 'Job Requests', icon: 'ClipboardList' },
    { id: 'certificates', label: 'Certificates', icon: 'Award' },
    { id: 'notifications', label: 'Notifications', icon: 'Bell' },
    { id: 'profile', label: 'Profile', icon: 'Building2' }
];

// ============================================
// JOB STATUS CONFIG
// ============================================
export const JOB_STATUS_CONFIG = {
    created: { label: 'Created', color: 'bg-slate-500', textColor: 'text-slate-500' },
    gm_approved: { label: 'GM Approved', color: 'bg-blue-500', textColor: 'text-blue-500' },
    tm_approved: { label: 'TM Approved', color: 'bg-indigo-500', textColor: 'text-indigo-500' },
    assigned: { label: 'Assigned', color: 'bg-purple-500', textColor: 'text-purple-500' },
    survey_done: { label: 'Survey Done', color: 'bg-amber-500', textColor: 'text-amber-500' },
    payment_pending: { label: 'Payment Pending', color: 'bg-orange-500', textColor: 'text-orange-500' },
    certified: { label: 'Certified', color: 'bg-teal-500', textColor: 'text-teal-500' },
    rejected: { label: 'Rejected', color: 'bg-red-500', textColor: 'text-red-500' }
};
