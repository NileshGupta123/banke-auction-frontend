import { useEffect, useMemo, useState } from "react";
import { Clock } from "lucide-react";

type AuctionStatus = "upcoming" | "live" | "closed";

interface Auction {
    id: number;
    propertyId: string;
    auctionId: string;
    bank: string;
    location: string;
    startTime: Date;
    endTime: Date;
    reservePrice: string;
    emd: string;
}

// const PAGE_SIZE = 5;

const AUCTIONS: Auction[] = [
    {
        id: 1,
        propertyId: "PSIB123456",
        auctionId: "231324",
        bank: "Punjab & Sind Bank",
        location: "Delhi",
        startTime: new Date(Date.now() - 1000 * 60 * 90),
        endTime: new Date(Date.now() - 1000 * 60 * 10),
        reservePrice: "₹30,00,000",
        emd: "₹3,00,000",
    },
    {
        id: 2,
        propertyId: "CNRB776",
        auctionId: "226414",
        bank: "Canara Bank",
        location: "Bengaluru, Karnataka",
        startTime: new Date(Date.now() - 1000 * 60 * 20),
        endTime: new Date(Date.now() + 1000 * 60 * 40),
        reservePrice: "₹82,00,000",
        emd: "₹8,20,000",
    },
    {
        id: 3,
        propertyId: "PSIB000006",
        auctionId: "231259",
        bank: "Punjab & Sind Bank",
        location: "Dhanbad, Jharkhand",
        startTime: new Date(Date.now() + 1000 * 60 * 25),
        endTime: new Date(Date.now() + 1000 * 60 * 85),
        reservePrice: "₹45,00,000",
        emd: "₹4,50,000",
    },
    {
        id: 4,
        propertyId: "SBI-HOM-2024",
        auctionId: "231999",
        bank: "State Bank of India",
        location: "Mumbai, Maharashtra",
        startTime: new Date(Date.now() - 1000 * 60 * 60 * 24), // Started yesterday
        endTime: new Date(Date.now() - 1000 * 60 * 60 * 2), // Ended 2 hours ago
        reservePrice: "₹1,20,00,000",
        emd: "₹12,00,000",
    },
    {
        id: 5,
        propertyId: "HDFC-OFF-001",
        auctionId: "232001",
        bank: "HDFC Bank",
        location: "Gurgaon, Haryana",
        startTime: new Date(Date.now() + 1000 * 60 * 60 * 48), // Starts in 2 days
        endTime: new Date(Date.now() + 1000 * 60 * 60 * 96),
        reservePrice: "₹3,50,00,000",
        emd: "₹35,00,000",
    }
];

const TABS = ["live", "upcoming", "closed", "all"] as const;

export default function AuctionStatusSection() {
    const [now, setNow] = useState(new Date());
    const [tab, setTab] = useState<typeof TABS[number]>("all");
    const [expandedId, setExpandedId] = useState<number | null>(null);

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const auctionsWithStatus = useMemo(() => {
        const result = AUCTIONS.map((a) => {
            let status: AuctionStatus = "upcoming";
            if (now >= a.startTime && now < a.endTime) status = "live";
            if (now >= a.endTime) status = "closed";
            return { ...a, status };
        });

        const statusPriority = { live: 1, upcoming: 2, closed: 3 };

        return result.sort((a, b) => statusPriority[a.status] - statusPriority[b.status]);
    }, [now]);

    const filtered =
        tab === "all"
            ? auctionsWithStatus
            : auctionsWithStatus.filter((a) => a.status === tab);

    return (
        <section className="max-w-7xl mx-auto px-4 mt-20 sm:mt-24">
            {/* HEADER */}
            <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-4xl font-bold text-slate-900">
                    Live & Upcoming Bank Auctions
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl mx-auto">
                    Track verified bank auctions with real-time countdowns and RBI-compliant disclosures.
                </p>
            </div>

            {/* TABS */}
            <div className="flex justify-center mb-8">
                <div className="bg-slate-100 rounded-full p-1 flex gap-1 text-xs sm:text-sm">
                    {TABS.map((t) => (
                        <button
                            key={t}
                            onClick={() => setTab(t)}
                            className={`px-4 sm:px-6 py-2 rounded-full font-semibold transition ${tab === t
                                ? "bg-blue-700 text-white shadow"
                                : "text-slate-600 hover:text-blue-700"
                                }`}
                        >
                            {t.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>

            {/* DESKTOP TABLE */}
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-sm min-w-[700px] bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                    <thead className="bg-slate-50 text-slate-600">
                        <tr>
                            <th className="px-6 py-4 text-left">Property ID</th>
                            <th className="px-6 py-4 text-left">Bank</th>
                            <th className="px-6 py-4 text-left">Location</th>
                            <th className="px-6 py-4 text-left">Open Date</th>
                            <th className="px-6 py-4 text-left">Close Date</th>
                            <th className="px-6 py-4 text-left">Countdown</th>
                            <th className="px-6 py-4 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {filtered.map((a) => (
                            <tr key={a.id} className="hover:bg-blue-50 transition">
                                <td className="px-6 py-4 font-mono text-blue-700 font-semibold">
                                    {a.propertyId}
                                </td>
                                <td className="px-6 py-4">{a.bank}</td>
                                <td className="px-6 py-4 text-slate-600">{a.location}</td>
                                <td className="px-6 py-4">{a.startTime.toLocaleDateString()}</td>
                                <td className="px-6 py-4">{a.endTime.toLocaleDateString()}</td>
                                <td className="px-6 py-4">
                                    <Countdown now={now} start={a.startTime} end={a.endTime} />
                                </td>
                                <td className="px-6 py-4">
                                    <StatusBadge start={a.startTime} end={a.endTime} now={now} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* MOBILE CARDS */}
            <div className="md:hidden space-y-4">
                {filtered.map((a) => (
                    <div
                        key={a.id}
                        onClick={() => setExpandedId(expandedId === a.id ? null : a.id)}
                        className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm"
                    >
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-mono text-sm font-semibold text-blue-700">
                                {a.propertyId}
                            </span>
                            <StatusBadge start={a.startTime} end={a.endTime} now={now} />
                        </div>

                        <p className="text-sm font-medium">{a.bank}</p>
                        <p className="text-xs text-slate-500 mb-2">{a.location}</p>

                        <Countdown now={now} start={a.startTime} end={a.endTime} />

                        {expandedId === a.id && (
                            <div className="mt-3 pt-3 border-t text-xs text-slate-600 space-y-1">
                                <p>
                                    <span className="font-medium">Reserve:</span> {a.reservePrice}
                                </p>
                                <p>
                                    <span className="font-medium">EMD:</span> {a.emd}
                                </p>
                                <p>
                                    <span className="font-medium">Starts:</span>{" "}
                                    {a.startTime.toLocaleString()}
                                </p>
                                <p>
                                    <span className="font-medium">Ends:</span>{" "}
                                    {a.endTime.toLocaleString()}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

function StatusBadge({ start, end, now }: { start: Date; end: Date; now: Date }) {
    if (now >= start && now < end) {
        return (
            <span className="text-red-600 font-semibold text-xs flex items-center gap-1">
                <span className="h-2 w-2 bg-red-600 rounded-full animate-pulse" />
                LIVE
            </span>
        );
    }
    if (now < start) return <span className="text-amber-600 text-xs font-semibold">UPCOMING</span>;
    return <span className="text-slate-500 text-xs font-semibold">CLOSED</span>;
}

function Countdown({ start, end, now }: { start: Date; end: Date; now: Date }) {
    const target = now < start ? start : end;
    const diff = target.getTime() - now.getTime();
    if (diff <= 0) return <span className="text-xs text-slate-500">Ended</span>;

    const h = Math.floor(diff / 36e5);
    const m = Math.floor((diff % 36e5) / 6e4);
    const s = Math.floor((diff % 6e4) / 1000);

    return (
        <span className="flex items-center gap-1 text-blue-700 text-xs font-semibold">
            <Clock size={12} /> {h}h {m}m {s}s
        </span>
    );
}