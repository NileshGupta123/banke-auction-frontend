export interface Auction {
    id: string;
    title: string;
    bankName: string;
    reservePrice: string;
    auctionDate: string;
    city: string;
    state: string;
    status: "UPCOMING" | "LIVE" | "CLOSED" | "CANCELLED";
    image: string;
    propertyType: string;
    area: string;
    possessionStatus?: string;
    // New Fields
    ownership?: string;
    pinCode?: string;
    project?: string;
    developer?: string;
    actionType?: string;
    inspectionDate?: string;
    emdSubmissionDate?: string;
}

export const DUMMY_AUCTIONS: Auction[] = [
    {
        id: "AUC-2024-001",
        title: "Premium 3BHK Apartment in Bandra West",
        bankName: "State Bank of India",
        reservePrice: "₹ 4.5 Cr",
        auctionDate: "25 Aug 2024, 11:00 AM",
        city: "Mumbai",
        state: "Maharashtra",
        status: "UPCOMING",
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=800",
        propertyType: "Residential Flat",
        area: "1450 Sq.ft",
        ownership: "Freehold",
        possessionStatus: "Physical",
        pinCode: "400050",
        actionType: "SARFAESI",
        inspectionDate: "20 Aug 2024, 10:00 AM - 04:00 PM",
        emdSubmissionDate: "24 Aug 2024, 05:00 PM"
    },
    {
        id: "AUC-2024-002",
        title: "Commercial Office Space in Cyber City",
        bankName: "HDFC Bank",
        reservePrice: "₹ 2.8 Cr",
        auctionDate: "20 Aug 2024, 02:00 PM",
        city: "Gurugram",
        state: "Haryana",
        status: "LIVE",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
        propertyType: "Office Space",
        area: "2200 Sq.ft",
        ownership: "Leasehold",
        possessionStatus: "Symbolic",
        pinCode: "122002",
        actionType: "DRT",
        inspectionDate: "18 Aug 2024, 11:00 AM - 03:00 PM",
        emdSubmissionDate: "19 Aug 2024, 04:00 PM"
    },
    {
        id: "AUC-2024-003",
        title: "Industrial Plot in Peenya Industrial Area",
        bankName: "Bank of Baroda",
        reservePrice: "₹ 1.2 Cr",
        auctionDate: "15 Sep 2024, 10:00 AM",
        city: "Bengaluru",
        state: "Karnataka",
        status: "UPCOMING",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
        propertyType: "Industrial Land",
        area: "5000 Sq.ft",
    },
    {
        id: "AUC-2024-004",
        title: "Luxury Villa in ECR",
        bankName: "Punjab National Bank",
        reservePrice: "₹ 3.2 Cr",
        auctionDate: "10 Aug 2024, 12:00 PM",
        city: "Chennai",
        state: "Tamil Nadu",
        status: "CLOSED",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
        propertyType: "Independent House",
        area: "3500 Sq.ft",
    },
    {
        id: "AUC-2024-005",
        title: "2BHK Flat in Whitefield",
        bankName: "Canara Bank",
        reservePrice: "₹ 85 Lakhs",
        auctionDate: "05 Sep 2024, 11:30 AM",
        city: "Bengaluru",
        state: "Karnataka",
        status: "UPCOMING",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
        propertyType: "Residential Flat",
        area: "1100 Sq.ft",
    },
    {
        id: "AUC-2024-006",
        title: "Shop in Connaught Place",
        bankName: "ICICI Bank",
        reservePrice: "₹ 5.5 Cr",
        auctionDate: "01 Sep 2024, 03:00 PM",
        city: "New Delhi",
        state: "Delhi",
        status: "UPCOMING",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800",
        propertyType: "Retail Shop",
        area: "800 Sq.ft",
    },
];