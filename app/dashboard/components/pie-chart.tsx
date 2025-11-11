"use client";

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

type PieChartProps = {
    title: string;
    labels: string[];
    data: number[];
    chartType?: 'pie' | 'doughnut';
    backgroundColor?: string[];
};

const PieChart = ({ title, labels, data, chartType = 'doughnut', backgroundColor }: PieChartProps) => {
    const defaultColors = [
        '#5c0b00',     // brown
        '#94492e',     // light-brown
        '#210906',     // dark-brown
        '#4f4f4f',     // dark-gray
        '#b0b0b0',     // light-gray
        '#8b4513',     // saddle brown
        '#a0522d',     // sienna
    ];

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Count',
                data: data,
                backgroundColor: backgroundColor || defaultColors.slice(0, labels.length),
                borderColor: '#fffcf2',
                borderWidth: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                position: 'bottom' as const,
                labels: {
                    padding: 15,
                    font: {
                        size: 12,
                    },
                    color: '#210906',
                },
            },
            tooltip: {
                callbacks: {
                    label: function(context: {label: string, parsed: number, dataset: {data: number[]}}) {
                        const label = context.label || '';
                        const value = context.parsed || 0;
                        const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
                        const percentage = ((value / total) * 100).toFixed(1);
                        return `${label}: ${value} (${percentage}%)`;
                    }
                }
            }
        },
    };

    const ChartComponent = chartType === 'pie' ? Pie : Doughnut;

    return (
        <div className="bg-beige rounded-lg shadow-md p-6 border border-light-brown/20 flex flex-col h-full">
            <h3 className="text-lg font-semibold text-dark-brown mb-4">{title}</h3>
            <div className="w-full flex-1 flex items-center justify-center min-h-[350px]">
                <div className="max-w-md w-full">
                    <ChartComponent data={chartData} options={options} />
                </div>
            </div>
        </div>
    );
};

export default PieChart;
