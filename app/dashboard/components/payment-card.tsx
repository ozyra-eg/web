type PaymentCardProps = {
    cardType: string;
    lastFour: string;
    expiryDate: string;
    isDefault?: boolean;
};

export default function PaymentCard({ cardType, lastFour, expiryDate, isDefault = false }: PaymentCardProps) {
    const getCardIcon = () => {
        switch (cardType.toLowerCase()) {
            case 'visa':
                return (
                    <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none">
                        <rect width="48" height="48" rx="8" fill="#1A1F71"/>
                        <path d="M20.5 30h-3.2l2-12h3.2l-2 12zm8.7-11.7c-.6-.2-1.5-.5-2.7-.5-3 0-5.1 1.6-5.1 3.8 0 1.7 1.5 2.6 2.6 3.1 1.2.6 1.6.9 1.6 1.4 0 .7-.9 1.1-1.7 1.1-1.1 0-1.7-.2-2.6-.6l-.4-.2-.4 2.3c.7.3 2 .6 3.4.6 3.2 0 5.2-1.5 5.3-3.9 0-1.3-.8-2.3-2.5-3.1-1-.5-1.7-.9-1.7-1.4 0-.5.5-.9 1.7-.9.9 0 1.6.2 2.1.4l.3.1.4-2.2zm6.8-1.8h-2.5c-.8 0-1.3.2-1.7 1l-4.7 11.2h3.2l.6-1.7h3.9l.4 1.7h2.8l-2-12zm-3.4 7.8c.2-.6 1.2-3.3 1.2-3.3l.7 3.3h-1.9zm-15.9-7.8l-3.1 8.2-.3-1.6c-.6-1.9-2.3-4-4.3-5l2.9 10.9h3.2l4.8-12.5h-3.2z" fill="white"/>
                    </svg>
                );
            case 'mastercard':
                return (
                    <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none">
                        <rect width="48" height="48" rx="8" fill="#EB001B"/>
                        <circle cx="18" cy="24" r="10" fill="#FF5F00"/>
                        <circle cx="30" cy="24" r="10" fill="#F79E1B"/>
                    </svg>
                );
            default:
                return (
                    <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none">
                        <rect width="48" height="48" rx="8" fill="#6B7280"/>
                        <rect x="8" y="16" width="32" height="4" fill="white"/>
                        <rect x="8" y="24" width="20" height="3" fill="white"/>
                    </svg>
                );
        }
    };

    return (
        <div className="relative bg-gradient-to-br from-dark-brown to-brown rounded-xl p-6 text-beige shadow-lg hover:shadow-xl transition-shadow duration-200">
            {isDefault && (
                <span className="absolute top-4 right-4 text-xs font-semibold bg-light-brown px-2 py-1 rounded-full text-beige">
                    Default
                </span>
            )}
            <div className="flex justify-between items-start mb-8">
                <div className="text-sm font-medium text-beige/80">
                    {cardType}
                </div>
                {getCardIcon()}
            </div>
            <div className="space-y-4">
                <div className="text-xl font-mono tracking-wider">
                    •••• •••• •••• {lastFour}
                </div>
                <div className="flex justify-between items-center text-sm">
                    <div>
                        <div className="text-xs text-beige/70 mb-1">Expires</div>
                        <div className="font-medium">{expiryDate}</div>
                    </div>
                    <button className="text-xs text-beige/70 hover:text-beige transition-colors">
                        Edit
                    </button>
                </div>
            </div>
        </div>
    );
}
