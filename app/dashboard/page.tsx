import React from "react";
import Card from "./components/card"
import Chart from "./components/chart"
import Table from "./components/table"

export default function Page(){

    const cardInfo = [
        {
            title: "Total Revenue",
            value: "$45,231",
            change: "+20.1%",
            changeType: "increase" as const,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            iconBgColor: "bg-blue-500"
        },
        {
            title: "Total Orders",
            value: "1,234",
            change: "+12.5%",
            changeType: "increase" as const,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            ),
            iconBgColor: "bg-green-500"
        },
        {
            title: "Total Customers",
            value: "892",
            change: "+8.2%",
            changeType: "increase" as const,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            iconBgColor: "bg-purple-500"
        },
        {
            title: "Products Sold",
            value: "2,456",
            change: "-3.1%",
            changeType: "decrease" as const,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            ),
            iconBgColor: "bg-orange-500"
        },
    ]

    const recentOrders = [
        { name: "MacBook Pro" },
        { name: "iPhone 15 Pro" },
        { name: "iPad Air" },
        { name: "Apple Watch" },
        { name: "AirPods Pro" },
    ]

    return(
        <>
            {/* Page Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h1>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Welcome back! Here&apos;s what&apos;s happening with your business today.</p>
            </div>

            {/* Dashboard Content */}
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {cardInfo.map((item, index) => (
                    <Card 
                        key={index}
                        cardTitle={item.title}
                        value={item.value}
                        change={item.change}
                        changeType={item.changeType}
                        icon={item.icon}
                        iconBgColor={item.iconBgColor}
                    />
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <Chart title="Revenue Overview" />
                <Chart title="Sales Trends" />
            </div>

            {/* Recent Orders Table */}
            <div className="bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Orders</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="p-4">
                                    <div className="flex items-center">
                                        <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">Product name</th>
                                <th scope="col" className="px-6 py-3">Color</th>
                                <th scope="col" className="px-6 py-3">Category</th>
                                <th scope="col" className="px-6 py-3">Price</th>
                                <th scope="col" className="px-6 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentOrders.map((order, index) => (
                                <Table key={index} name={order.name} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}