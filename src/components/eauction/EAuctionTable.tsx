import AuctionCard from "../auctions/AuctionCard";

export const AUCTION_DATA = [
    {
        id: "238179",
        propId: "SBIN400052634855",
        title: "2 BHK Individual House for Sale in HAJARATABI, Nargund, Nargund",
        bank: "State Bank of India",
        location: "Karnataka, Gadag, Nargund-582207",
        branch: "SARB HUBBALLI-40564",
        reservePrice: "₹ 40.63 Lakh",
        emd: "₹ 4.06 Lakh",
        start: new Date("2026-01-19T10:00:00"),
        end: new Date("2026-01-19T16:00:00"),
        status: "Upcoming" as const,
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "237010",
        propId: "CBINBANK1500SONIA",
        title: "Individual House for Sale in Haldia",
        bank: "Central Bank of India",
        location: "West Bengal, Haldia, Purba Medinipur",
        branch: "HALDIA BRANCH - 2233",
        reservePrice: "₹ 95.81 Lakh",
        emd: "₹ 9.58 Lakh",
        start: new Date("2026-01-20T11:00:00"),
        end: new Date("2026-01-20T15:00:00"),
        status: "Live" as const,
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        verified: true
    },
    {
        id: "245112",
        propId: "PNB0992837482",
        title: "Commercial Shop 250 Sq.ft in Market Road, Pune",
        bank: "Punjab National Bank",
        location: "Maharashtra, Pune, Market Yard",
        branch: "PUNE MAIN - 4455",
        reservePrice: "₹ 25.50 Lakh",
        emd: "₹ 2.55 Lakh",
        start: new Date("2026-01-22T10:30:00"),
        end: new Date("2026-01-22T14:30:00"),
        status: "Upcoming" as const,
        image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "245115",
        propId: "BOB22998374",
        title: "Residential Plot 1200 Sq.ft in Whitefield",
        bank: "Bank of Baroda",
        location: "Karnataka, Bangalore, Whitefield",
        branch: "ROSARB BANGALORE",
        reservePrice: "₹ 1.25 Cr",
        emd: "₹ 12.50 Lakh",
        start: new Date("2026-01-25T11:00:00"),
        end: new Date("2026-01-25T16:00:00"),
        status: "Upcoming" as const,
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        verified: true
    },
    {
        id: "245116",
        propId: "SBI88776655",
        title: "Luxury Apartment 3BHK in South Mumbai",
        bank: "State Bank of India",
        location: "Maharashtra, Mumbai, Colaba",
        branch: "MUMBAI MAIN",
        reservePrice: "₹ 5.50 Cr",
        emd: "₹ 55.00 Lakh",
        start: new Date("2025-12-01T10:00:00"),
        end: new Date("2025-12-01T14:00:00"),
        status: "Closed" as const,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "245117",
        propId: "UBI99887766",
        title: "Industrial Land 5000 Sq.ft in Gujarat",
        bank: "Union Bank of India",
        location: "Gujarat, Ahmedabad, GIDC",
        branch: "AHMEDABAD CORP",
        reservePrice: "₹ 2.10 Cr",
        emd: "₹ 21.00 Lakh",
        start: new Date("2026-01-15T11:00:00"),
        end: new Date("2026-01-15T13:00:00"),
        status: "Cancelled" as const,
        image: "https://images.unsplash.com/photo-1565402170291-8491f14678db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "245118",
        propId: "HDFC55443322",
        title: "Office Space 1500 Sq.ft in Cyber City",
        bank: "HDFC Bank",
        location: "Haryana, Gurgaon, Cyber City",
        branch: "GURGAON MAIN",
        reservePrice: "₹ 3.75 Cr",
        emd: "₹ 37.50 Lakh",
        start: new Date(Date.now() - 1000 * 60 * 30), // Started 30 mins ago
        end: new Date(Date.now() + 1000 * 60 * 60 * 2), // Ends in 2 hours
        status: "Live" as const,
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        verified: true
    },
    {
        id: "245119",
        propId: "ICICI11223344",
        title: "Independent Villa 4BHK in Hyderabad",
        bank: "ICICI Bank",
        location: "Telangana, Hyderabad, Jubilee Hills",
        branch: "HYDERABAD SPL",
        reservePrice: "₹ 6.20 Cr",
        emd: "₹ 62.00 Lakh",
        start: new Date("2024-11-15T10:00:00"),
        end: new Date("2024-11-15T15:00:00"),
        status: "Closed" as const,
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "245116-2",
        propId: "SBI88776655",
        title: "Luxury Apartment 3BHK in South Mumbai",
        bank: "State Bank of India",
        location: "Maharashtra, Mumbai, Colaba",
        branch: "MUMBAI MAIN",
        reservePrice: "₹ 5.50 Cr",
        emd: "₹ 55.00 Lakh",
        start: new Date("2025-12-01T10:00:00"),
        end: new Date("2025-12-01T14:00:00"),
        status: "Closed" as const,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "245117-2",
        propId: "UBI99887766",
        title: "Industrial Land 5000 Sq.ft in Gujarat",
        bank: "Union Bank of India",
        location: "Gujarat, Ahmedabad, GIDC",
        branch: "AHMEDABAD CORP",
        reservePrice: "₹ 2.10 Cr",
        emd: "₹ 21.00 Lakh",
        start: new Date("2026-01-15T11:00:00"),
        end: new Date("2026-01-15T13:00:00"),
        status: "Cancelled" as const,
        image: "https://images.unsplash.com/photo-1565402170291-8491f14678db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "245118-2",
        propId: "HDFC55443322",
        title: "Office Space 1500 Sq.ft in Cyber City",
        bank: "HDFC Bank",
        location: "Haryana, Gurgaon, Cyber City",
        branch: "GURGAON MAIN",
        reservePrice: "₹ 3.75 Cr",
        emd: "₹ 37.50 Lakh",
        start: new Date(Date.now() - 1000 * 60 * 30), // Started 30 mins ago
        end: new Date(Date.now() + 1000 * 60 * 60 * 2), // Ends in 2 hours
        status: "Live" as const,
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        verified: true
    },
    {
        id: "245119-2",
        propId: "ICICI11223344",
        title: "Independent Villa 4BHK in Hyderabad",
        bank: "ICICI Bank",
        location: "Telangana, Hyderabad, Jubilee Hills",
        branch: "HYDERABAD SPL",
        reservePrice: "₹ 6.20 Cr",
        emd: "₹ 62.00 Lakh",
        start: new Date("2024-11-15T10:00:00"),
        end: new Date("2024-11-15T15:00:00"),
        status: "Closed" as const,
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

export default function EAuctionTable({ data }: { data: typeof AUCTION_DATA }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
            {data.length > 0 ? (
                data.map((item) => (
                    <div key={item.id} className="h-full">
                        <AuctionCard
                            id={item.id}
                            propertyId={item.propId}
                            title={item.title}
                            bank={item.bank}
                            location={item.location}
                            reservePrice={item.reservePrice}
                            emd={item.emd}
                            status={item.status}
                            image={item.image}
                            startTime={item.start}
                            endTime={item.end}
                            verified={item.verified}
                        />
                    </div>
                ))
            ) : (
                <div className="col-span-full py-12 text-center text-slate-500">
                    No auctions found for this category.
                </div>
            )}
        </div>
    );
}