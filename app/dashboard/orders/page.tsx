import React from "react";
import Card from "../components/card";

export default function OrdersPage() {
    // Order statistics
    const orderStats = [
        {
            title: "Total Orders",
            value: "1,234",
            change: "+18.2%",
            changeType: "increase" as const,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            ),
            iconBgColor: "bg-brown"
        },
        {
            title: "Pending",
            value: "52",
            change: "+8.1%",
            changeType: "increase" as const,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            iconBgColor: "bg-light-brown"
        },
        {
            title: "Processing",
            value: "89",
            change: "+12.5%",
            changeType: "increase" as const,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            ),
            iconBgColor: "bg-dark-brown"
        },
        {
            title: "Completed",
            value: "1,093",
            change: "+20.3%",
            changeType: "increase" as const,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            iconBgColor: "bg-dark-gray"
        },
    ];

    // Recent orders
    const orders = [
        { id: "ORD-2024-1234", customer: "John Doe", product: "MacBook Pro 16\"", quantity: 1, total: "$2,499.00", status: "Delivered", date: "2025-11-10" },
        { id: "ORD-2024-1233", customer: "Jane Smith", product: "iPhone 15 Pro Max", quantity: 2, total: "$2,398.00", status: "Shipped", date: "2025-11-09" },
        { id: "ORD-2024-1232", customer: "Bob Johnson", product: "AirPods Pro", quantity: 3, total: "$747.00", status: "Processing", date: "2025-11-09" },
        { id: "ORD-2024-1231", customer: "Alice Williams", product: "iPad Air", quantity: 1, total: "$599.00", status: "Processing", date: "2025-11-08" },
        { id: "ORD-2024-1230", customer: "Charlie Brown", product: "Apple Watch Series 9", quantity: 1, total: "$429.00", status: "Pending", date: "2025-11-08" },
        { id: "ORD-2024-1229", customer: "Diana Prince", product: "Mac Mini M2", quantity: 1, total: "$599.00", status: "Delivered", date: "2025-11-07" },
        { id: "ORD-2024-1228", customer: "Ethan Hunt", product: "Magic Keyboard", quantity: 2, total: "$598.00", status: "Cancelled", date: "2025-11-07" },
        { id: "ORD-2024-1227", customer: "Fiona Gallagher", product: "AirTag 4 Pack", quantity: 1, total: "$99.00", status: "Delivered", date: "2025-11-06" },
    ];

    const getStatusBadge = (status: string) => {
        const styles = {
            Delivered: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
            Shipped: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
            Processing: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
            Pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
            Cancelled: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
        };
        return styles[status as keyof typeof styles] || "bg-gray-100 text-gray-800";
    };

    return (
        <>
            {/* Page Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-dark-brown">My Orders</h1>
                <p className="text-dark-gray mt-1">
                    Track and manage all your orders in one place.
                </p>
            </div>

            {/* Order Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {orderStats.map((stat, index) => (
                    <Card
                        key={index}
                        cardTitle={stat.title}
                        value={stat.value}
                        change={stat.change}
                        changeType={stat.changeType}
                        icon={stat.icon}
                        iconBgColor={stat.iconBgColor}
                    />
                ))}
            </div>

            {/* Orders Table */}
            <div className="bg-beige rounded-lg shadow-md border border-light-brown/20">
                <div className="px-6 py-4 border-b border-light-brown/30">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <h2 className="text-lg font-semibold text-dark-brown">
                            All Orders
                        </h2>
                        <div className="flex items-center gap-3">
                            <select className="px-4 py-2 border border-light-brown/50 rounded-lg text-sm focus:ring-2 focus:ring-brown bg-beige text-dark-brown">
                                <option>All Status</option>
                                <option>Pending</option>
                                <option>Processing</option>
                                <option>Shipped</option>
                                <option>Delivered</option>
                                <option>Cancelled</option>
                            </select>
                            <button className="flex items-center gap-2 px-4 py-2 bg-brown text-beige rounded-lg hover:bg-light-brown transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                New Order
                            </button>
                        </div>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-dark-gray">
                        <thead className="text-xs text-dark-brown uppercase bg-light-brown/10">
                            <tr>
                                <th scope="col" className="px-6 py-3">Order ID</th>
                                <th scope="col" className="px-6 py-3">Customer</th>
                                <th scope="col" className="px-6 py-3">Product</th>
                                <th scope="col" className="px-6 py-3">Quantity</th>
                                <th scope="col" className="px-6 py-3">Total</th>
                                <th scope="col" className="px-6 py-3">Date</th>
                                <th scope="col" className="px-6 py-3">Status</th>
                                <th scope="col" className="px-6 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr
                                    key={order.id}
                                    className="bg-beige border-b border-light-brown/20 hover:bg-light-brown/10"
                                >
                                    <td className="px-6 py-4 font-medium text-dark-brown">
                                        {order.id}
                                    </td>
                                    <td className="px-6 py-4">{order.customer}</td>
                                    <td className="px-6 py-4">{order.product}</td>
                                    <td className="px-6 py-4 text-center">{order.quantity}</td>
                                    <td className="px-6 py-4 font-semibold">{order.total}</td>
                                    <td className="px-6 py-4">{order.date}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(order.status)}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="text-brown hover:text-light-brown font-medium">
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
