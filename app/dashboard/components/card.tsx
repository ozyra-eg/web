import React from 'react';

type CardProps = {
    cardTitle: string;
    value: string;
    change?: string;
    changeType?: 'increase' | 'decrease';
    icon: React.ReactNode;
    iconBgColor?: string;
};

export default function Card(props: CardProps){
    const { cardTitle, value, change, changeType = 'increase', icon, iconBgColor = 'bg-blue-500' } = props;
    
    return(
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 dark:bg-gray-800">
            <div className="flex items-center justify-between mb-4">
                <div className={`${iconBgColor} rounded-lg p-3 text-white`}>
                    {icon}
                </div>
                {change && (
                    <span className={`text-sm font-semibold ${
                        changeType === 'increase' 
                            ? 'text-green-600 dark:text-green-400' 
                            : 'text-red-600 dark:text-red-400'
                    }`}>
                        {changeType === 'increase' ? '↑' : '↓'} {change}
                    </span>
                )}
            </div>
            <div>
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                    {cardTitle}
                </h3>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {value}
                </p>
            </div>
        </div>
    )
}
