import React from "react";
import Card from "../components/card";
import PaymentCard from "../components/payment-card";

export default function PaymentPage() {
    // Payment statistics
    const paymentStats = [
        {
            title: "Total Processed",
            value: "$124,563",
            change: "+12.5%",
            changeType: "increase" as const,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            iconBgColor: "bg-brown"
        },
        {
            title: "Pending Payments",
            value: "$8,420",
            change: "+5.2%",
            changeType: "increase" as const,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            iconBgColor: "bg-light-brown"
        },
        {
            title: "Failed Transactions",
            value: "12",
            change: "-2.1%",
            changeType: "decrease" as const,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            iconBgColor: "bg-dark-brown"
        },
        {
            title: "Refunds Issued",
            value: "$2,150",
            change: "+3.8%",
            changeType: "increase" as const,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                </svg>
            ),
            iconBgColor: "bg-dark-gray"
        },
    ];

    // Payment methods
    const paymentMethods = [
        {
            cardType: "Visa",
            lastFour: "4532",
            expiryDate: "12/25",
            isDefault: true
        },
        {
            cardType: "Mastercard",
            lastFour: "8765",
            expiryDate: "09/24",
            isDefault: false
        },
        {
            cardType: "Card",
            lastFour: "2468",
            expiryDate: "03/26",
            isDefault: false
        }
    ];

    // Recent transactions
    const recentTransactions = [
        { id: "TXN-001", customer: "John Doe", amount: "$450.00", status: "Completed", date: "2025-11-10", method: "Visa" },
        { id: "TXN-002", customer: "Jane Smith", amount: "$1,250.00", status: "Completed", date: "2025-11-10", method: "Mastercard" },
        { id: "TXN-003", customer: "Bob Johnson", amount: "$350.00", status: "Pending", date: "2025-11-09", method: "Visa" },
        { id: "TXN-004", customer: "Alice Williams", amount: "$890.00", status: "Failed", date: "2025-11-09", method: "Cash" },
        { id: "TXN-005", customer: "Charlie Brown", amount: "$2,100.00", status: "Completed", date: "2025-11-08", method: "Visa" },
        { id: "TXN-006", customer: "Diana Prince", amount: "$675.00", status: "Refunded", date: "2025-11-08", method: "Mastercard" },
    ];

    const getStatusBadge = (status: string) => {
        const styles = {
            Completed: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
            Pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
            Failed: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
            Refunded: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
        };
        return styles[status as keyof typeof styles] || "bg-gray-100 text-gray-800";
    };

    return (
        <>
            {/* Page Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-dark-brown">Payments</h1>
                <p className="text-dark-gray mt-1">
                    Manage your payment methods and view transaction history.
                </p>
            </div>

            {/* Payment Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {paymentStats.map((stat, index) => (
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

            {/* Payment Methods Section */}
            {/* <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-dark-brown">
                        Payment Methods
                    </h2>
                    <button className="flex items-center gap-2 px-4 py-2 bg-brown text-beige rounded-lg hover:bg-light-brown transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Add New Card
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {paymentMethods.map((method, index) => (
                        <PaymentCard
                            key={index}
                            cardType={method.cardType}
                            lastFour={method.lastFour}
                            expiryDate={method.expiryDate}
                            isDefault={method.isDefault}
                        />
                    ))}
                </div>
            </div> */}

            {/* Recent Transactions */}
            <div className="bg-beige rounded-lg shadow-md border border-light-brown/20">
                <div className="px-6 py-4 border-b border-light-brown/30">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-dark-brown">
                            Recent Transactions
                        </h2>
                        <button className="text-sm text-brown hover:text-light-brown font-medium">
                            View All
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-dark-gray">
                        <thead className="text-xs text-dark-brown uppercase bg-light-brown/10">
                            <tr>
                                <th scope="col" className="px-6 py-3">Transaction ID</th>
                                <th scope="col" className="px-6 py-3">Customer</th>
                                <th scope="col" className="px-6 py-3">Amount</th>
                                <th scope="col" className="px-6 py-3">Payment Method</th>
                                <th scope="col" className="px-6 py-3">Date</th>
                                <th scope="col" className="px-6 py-3">Status</th>
                                <th scope="col" className="px-6 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentTransactions.map((transaction) => (
                                <tr
                                    key={transaction.id}
                                    className="bg-beige border-b border-light-brown/20 hover:bg-light-brown/10"
                                >
                                    <td className="px-6 py-4 font-medium text-dark-brown">
                                        {transaction.id}
                                    </td>
                                    <td className="px-6 py-4">{transaction.customer}</td>
                                    <td className="px-6 py-4 font-semibold">{transaction.amount}</td>
                                    <td className="px-6 py-4">{transaction.method}</td>
                                    <td className="px-6 py-4">{transaction.date}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(transaction.status)}`}>
                                            {transaction.status}
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
