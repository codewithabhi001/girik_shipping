// ============================================
// GIRIK SHIPPING - CLIENT NOTIFICATIONS PAGE
// Notification Center
// ============================================

import React, { useState } from 'react';
import {
    Bell,
    Award,
    ClipboardList,
    CreditCard,
    Info,
    Check,
    Trash2,
    CheckCheck,
    Filter
} from 'lucide-react';
import { ClientPageType, NotificationType } from '../types';
import { CLIENT_NOTIFICATIONS } from '../constants';

interface ClientNotificationsProps {
    onNavigate: (page: ClientPageType, id?: string) => void;
}

const ClientNotifications: React.FC<ClientNotificationsProps> = ({ onNavigate }) => {
    const [notifications, setNotifications] = useState(CLIENT_NOTIFICATIONS);
    const [filter, setFilter] = useState<string>('all');

    const filteredNotifications = notifications.filter(n => {
        if (filter === 'all') return true;
        if (filter === 'unread') return !n.isRead;
        return n.type === filter;
    });

    const unreadCount = notifications.filter(n => !n.isRead).length;

    const markAsRead = (id: string) => {
        setNotifications(notifications.map(n =>
            n.id === id ? { ...n, isRead: true } : n
        ));
    };

    const markAllAsRead = () => {
        setNotifications(notifications.map(n => ({ ...n, isRead: true })));
    };

    const deleteNotification = (id: string) => {
        setNotifications(notifications.filter(n => n.id !== id));
    };

    const getIcon = (type: NotificationType) => {
        switch (type) {
            case 'certificate_expiry':
                return <Award className="text-amber-500" size={20} />;
            case 'job_update':
                return <ClipboardList className="text-blue-500" size={20} />;
            case 'payment_request':
                return <CreditCard className="text-green-500" size={20} />;
            default:
                return <Info className="text-slate-500" size={20} />;
        }
    };

    const getTimestamp = (timestamp: string) => {
        const date = new Date(timestamp);
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return 'Today';
        if (diffDays === 1) return 'Yesterday';
        if (diffDays < 7) return `${diffDays} days ago`;
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-heading font-bold text-navy-600">Notifications</h1>
                    <p className="text-slate-600">
                        {unreadCount > 0
                            ? `You have ${unreadCount} unread notification${unreadCount > 1 ? 's' : ''}`
                            : 'All caught up!'}
                    </p>
                </div>
                {unreadCount > 0 && (
                    <button
                        onClick={markAllAsRead}
                        className="text-teal-600 font-medium text-sm flex items-center gap-2 hover:text-teal-700"
                    >
                        <CheckCheck size={18} />
                        Mark all as read
                    </button>
                )}
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
                {[
                    { value: 'all', label: 'All' },
                    { value: 'unread', label: `Unread (${unreadCount})` },
                    { value: 'job_update', label: 'Job Updates' },
                    { value: 'certificate_expiry', label: 'Expiry Alerts' },
                    { value: 'payment_request', label: 'Payments' }
                ].map(opt => (
                    <button
                        key={opt.value}
                        onClick={() => setFilter(opt.value)}
                        className={`
                            px-3 py-1.5 text-sm font-medium transition-colors
                            ${filter === opt.value
                                ? 'bg-teal-500 text-white'
                                : 'bg-white border border-slate-200 text-slate-600 hover:border-teal-500'}
                        `}
                    >
                        {opt.label}
                    </button>
                ))}
            </div>

            {/* Notifications List */}
            {filteredNotifications.length > 0 ? (
                <div className="bg-white border border-slate-200">
                    <div className="divide-y divide-slate-100">
                        {filteredNotifications.map((notification) => (
                            <div
                                key={notification.id}
                                className={`
                                    px-5 py-4 flex items-start gap-4 hover:bg-slate-50 transition-colors
                                    ${!notification.isRead ? 'bg-teal-50/50' : ''}
                                `}
                            >
                                {/* Icon */}
                                <div className="w-10 h-10 bg-slate-100 flex items-center justify-center flex-shrink-0">
                                    {getIcon(notification.type)}
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className={`font-medium ${!notification.isRead ? 'text-navy-600' : 'text-slate-700'}`}>
                                                {notification.title}
                                            </h3>
                                            <p className="text-sm text-slate-600 mt-0.5">{notification.message}</p>
                                            <p className="text-xs text-slate-400 mt-2">
                                                {getTimestamp(notification.timestamp)}
                                            </p>
                                        </div>

                                        {/* Unread Indicator */}
                                        {!notification.isRead && (
                                            <div className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0 mt-2" />
                                        )}
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-1 flex-shrink-0">
                                    {!notification.isRead && (
                                        <button
                                            onClick={() => markAsRead(notification.id)}
                                            className="p-2 text-slate-400 hover:text-teal-600 hover:bg-teal-50"
                                            title="Mark as read"
                                        >
                                            <Check size={16} />
                                        </button>
                                    )}
                                    <button
                                        onClick={() => deleteNotification(notification.id)}
                                        className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50"
                                        title="Delete"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                /* Empty State */
                <div className="bg-white border border-slate-200 p-12 text-center">
                    <div className="w-20 h-20 bg-slate-100 mx-auto mb-4 flex items-center justify-center">
                        <Bell size={40} className="text-slate-400" />
                    </div>
                    <h3 className="font-heading font-bold text-navy-600 text-lg mb-2">No Notifications</h3>
                    <p className="text-slate-600 max-w-md mx-auto">
                        {filter !== 'all'
                            ? 'No notifications match your filter.'
                            : 'You\'re all caught up! No new notifications.'}
                    </p>
                </div>
            )}

            {/* Notification Settings Info */}
            <div className="bg-slate-50 border border-slate-200 p-4 flex items-start gap-3">
                <Info size={20} className="text-slate-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-600">
                    <p className="font-medium text-slate-700 mb-1">Stay Updated</p>
                    <p>You'll receive notifications for job updates, certificate expiry alerts, and payment requests. Contact support to manage your notification preferences.</p>
                </div>
            </div>
        </div>
    );
};

export default ClientNotifications;
