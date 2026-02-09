interface BankEAuctionLogoProps {
    className?: string;
    variant?: 'light' | 'dark';
}

export default function BankEAuctionLogo({ className = "h-8 w-8", variant = 'light' }: BankEAuctionLogoProps) {
    const fillColor = variant === 'light' ? '#ffffff' : '#1e40af';

    return (
        <svg
            viewBox="0 0 100 100"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Bank building symbol */}
            <rect x="20" y="35" width="60" height="50" fill={fillColor} opacity="0.2" rx="2" />

            {/* Gavel handle */}
            <rect x="55" y="45" width="4" height="25" fill={fillColor} rx="2" />

            {/* Gavel head */}
            <rect x="50" y="40" width="14" height="8" fill={fillColor} rx="2" />

            {/* Building columns */}
            <rect x="25" y="45" width="6" height="35" fill={fillColor} />
            <rect x="35" y="45" width="6" height="35" fill={fillColor} />

            {/* Base */}
            <rect x="20" y="82" width="60" height="6" fill={fillColor} rx="1" />

            {/* Roof/pediment */}
            <path d="M 15 35 L 50 15 L 85 35 L 80 35 L 50 20 L 20 35 Z" fill={fillColor} />

            {/* Auction price tag accent */}
            <circle cx="72" cy="60" r="8" fill="#3b82f6" opacity="0.8" />
            <text x="72" y="63" fontSize="8" fill="white" textAnchor="middle" fontWeight="bold">₹</text>
        </svg>
    );
}