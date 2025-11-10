import React from "react";

export default function UpdatesPage() {
    const updates = [
        {
            id: 1,
            type: "order",
            title: "New order received",
            message: "Order #ORD-2024-1234 has been placed by John Doe",
            time: "2 minutes ago",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            ),
            iconBg: "bg-blue-100 dark:bg-blue-900",
            iconColor: "text-blue-600 dark:text-blue-400"
        },
        {
            id: 2,
            type: "payment",
            title: "Payment successful",
            message: "Payment of $2,499.00 has been processed successfully",
            time: "15 minutes ago",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            iconBg: "bg-green-100 dark:bg-green-900",
            iconColor: "text-green-600 dark:text-green-400"
        },
        {
            id: 3,
            type: "customer",
            title: "New customer registered",
            message: "Alice Williams has joined your platform",
            time: "1 hour ago",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            ),
            iconBg: "bg-purple-100 dark:bg-purple-900",
            iconColor: "text-purple-600 dark:text-purple-400"
        },
        {
            id: 4,
            type: "alert",
            title: "Low stock alert",
            message: "iPhone 15 Pro Max stock is running low (5 units left)",
            time: "2 hours ago",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            ),
            iconBg: "bg-yellow-100 dark:bg-yellow-900",
            iconColor: "text-yellow-600 dark:text-yellow-400"
        },
        {
            id: 5,
            type: "shipment",
            title: "Order shipped",
            message: "Order #ORD-2024-1233 has been shipped via FedEx",
            time: "3 hours ago",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
            ),
            iconBg: "bg-indigo-100 dark:bg-indigo-900",
            iconColor: "text-indigo-600 dark:text-indigo-400"
        },
        {
            id: 6,
            type: "review",
            title: "New product review",
            message: "Bob Johnson left a 5-star review on MacBook Pro",
            time: "5 hours ago",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
            ),
            iconBg: "bg-pink-100 dark:bg-pink-900",
            iconColor: "text-pink-600 dark:text-pink-400"
        },
        {
            id: 7,
            type: "error",
            title: "Payment failed",
            message: "Payment of $890.00 was declined by the bank",
            time: "6 hours ago",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            iconBg: "bg-red-100 dark:bg-red-900",
            iconColor: "text-red-600 dark:text-red-400"
        },
        {
            id: 8,
            type: "system",
            title: "System maintenance scheduled",
            message: "Scheduled maintenance on Nov 15, 2025 from 2:00 AM - 4:00 AM",
            time: "1 day ago",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            iconBg: "bg-gray-100 dark:bg-gray-700",
            iconColor: "text-gray-600 dark:text-gray-400"
        }
    ];

    return (
        <>
            {/* Page Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Updates & Notifications</h1>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Stay informed about your business activities and system updates.
                </p>
            </div>

            {/* Filter Tabs */}
            <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        All
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-colors">
                        Orders
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-colors">
                        Payments
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-colors">
                        Customers
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-colors">
                        Alerts
                    </button>
                </div>
            </div>

            {/* Updates List */}
            <div className="bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    {updates.map((update) => (
                        <div
                            key={update.id}
                            className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                        >
                            <div className="flex items-start gap-4">
                                <div className={`flex-shrink-0 ${update.iconBg} ${update.iconColor} p-3 rounded-lg`}>
                                    {update.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-2">
                                        <div>
                                            <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                                                {update.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                                {update.message}
                                            </p>
                                        </div>
                                        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                                        {update.time}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Load More Button */}
            <div className="mt-6 text-center">
                <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    Load More Updates
                </button>
            </div>
        </>
    );
}
