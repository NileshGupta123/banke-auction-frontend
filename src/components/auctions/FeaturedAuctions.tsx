import AuctionCard from "./AuctionCard";
import { ArrowRight, Shield, Clock, Landmark, Gavel } from "lucide-react";
import { useNavigate } from "react-router-dom";

const auctions = [
    {
        id: "SBI-AUC-2024-001",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Commercial Building - Prime Location",
        bank: "State Bank of India",
        location: "Connaught Place, Delhi",
        reservePrice: 28000000,
        emd: 2500000,
        startTime: new Date(Date.now() - 2 * 60 * 60 * 1000),
        endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
        verified: true,
    },
    {
        id: "PNB-AUC-2024-045",
        image: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Luxury Villa - Bank Seized",
        bank: "Punjab National Bank",
        location: "Gurgaon, Haryana",
        reservePrice: 48000000,
        emd: 4500000,
        startTime: new Date(Date.now() + 12 * 60 * 60 * 1000),
        endTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
        verified: true,
    },
    {
        id: "CAN-AUC-2024-089",
        image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Industrial Warehouse Plot",
        bank: "Canara Bank",
        location: "Bangalore, Karnataka",
        reservePrice: 19500000,
        emd: 1800000,
        startTime: new Date(Date.now() - 6 * 60 * 60 * 1000),
        endTime: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
        verified: true,
    },
];

const formatINR = (amount: number) =>
    new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
    }).format(amount);

export default function FeaturedAuctions() {
    const navigate = useNavigate();
    const now = new Date();

    return (
        <section id="auctions" className="py-20 sm:py-24 bg-slate-50 relative">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* HEADER */}
                <div className="text-center mb-10 sm:mb-12">
                    <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-1.5 rounded-full text-xs font-semibold mb-4">
                        <Clock className="h-3.5 w-3.5 animate-pulse" />
                        LIVE BANK AUCTIONS
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
                        Featured Bank Auctions
                    </h2>

                    <p className="text-slate-600 text-sm sm:text-lg max-w-2xl mx-auto">
                        Verified auctions conducted by leading banks under SARFAESI Act.
                    </p>
                </div>

                {/* METRICS */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                    <Metric icon={<Landmark />} title="50+ Partner Banks" desc="PSU & Private" />
                    <Metric icon={<Gavel />} title="100% Transparent" desc="Official Notices" />
                    <Metric icon={<Shield />} title="Legally Verified" desc="Clear Titles" />
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {auctions.map((a) => {
                        const status =
                            now < a.startTime ? "Upcoming" : now > a.endTime ? "Closed" : "Live";

                        return (
                            <AuctionCard
                                key={a.id}
                                propertyId={a.id}
                                title={a.title}
                                bank={a.bank}
                                location={a.location}
                                image={a.image}
                                status={status}
                                reservePrice={formatINR(a.reservePrice)}
                                emd={formatINR(a.emd)}
                                startTime={a.startTime}
                                endTime={a.endTime}
                                verified={a.verified}
                            />
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <button
                        onClick={() => navigate("/coming-soon")}
                        className="inline-flex items-center gap-2 bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition font-semibold"
                    >
                        View All Live Auctions
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </section>
    );
}

function Metric({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
    return (
        <div className="bg-white rounded-xl border p-4 text-center shadow-sm">
            <div className="flex justify-center mb-2 text-blue-800">{icon}</div>
            <p className="font-semibold text-slate-900 text-sm">{title}</p>
            <p className="text-xs text-slate-500">{desc}</p>
        </div>
    );
}