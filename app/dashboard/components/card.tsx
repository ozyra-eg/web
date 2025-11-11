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
    const { cardTitle, value, change, changeType = 'increase', icon, iconBgColor = 'bg-brown' } = props;
    
    return(
        <div className="bg-beige rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 border border-light-brown/20">
            <div className="flex items-center justify-between mb-4">
                <div className={`${iconBgColor} rounded-lg p-3 text-beige`}>
                    {icon}
                </div>
                {change && (
                    <span className={`text-sm font-semibold ${
                        changeType === 'increase' 
                            ? 'text-light-brown' 
                            : 'text-brown'
                    }`}>
                        {changeType === 'increase' ? '↑' : '↓'} {change}
                    </span>
                )}
            </div>
            <div>
                <h3 className="text-sm font-medium text-dark-gray mb-1">
                    {cardTitle}
                </h3>
                <p className="text-2xl font-bold text-dark-brown">
                    {value}
                </p>
            </div>
        </div>
    )
}
