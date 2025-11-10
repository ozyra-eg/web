"use client"

import React from "react";
import { Line } from "react-chartjs-2";
import {

Chart as ChartJS,
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend,
} from "chart.js";

ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend
);

const revenueData = {
labels: [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
],
datasets: [
    {
        label: "Revenue Earned ($)",
        data: [1200, 1900, 1700, 2200, 2500, 2100, 2300, 2400, 2000, 2600, 2700, 3000],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
    },
],
};

type ChartProps = {
    title?: string;
    data?: typeof revenueData;
    chartOptions?: Record<string, unknown>;
};

const RevenueLineChart: React.FC<ChartProps> = ({ title = "Monthly Revenue", data, chartOptions }) => {
    const chartData = data || revenueData;
    const chartOpts = chartOptions || {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: { position: "top" as const },
            title: { display: false },
        },
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
            <div className="w-full">
                <Line data={chartData} options={chartOpts} />
            </div>
        </div>
    );
};

export default RevenueLineChart;
