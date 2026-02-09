import { MapPin, Building2, ShieldCheck, Eye, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface AuctionCardProps {
    id: string; // Add ID for navigation
    propertyId: string;
    title: string;
    bank: string;
    location: string;
    reservePrice: string;
    emd: string;
    status: "Upcoming" | "Live" | "Closed" | "Cancelled";
    image: string;
    startTime: Date;
    endTime: Date;
    verified?: boolean;
}

export default function AuctionCard(props: AuctionCardProps) {
    const navigate = useNavigate();

    const formatDate = (d: Date) =>
        d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });

    return (
        <div
            onClick={() => navigate(`/auctions/${props.id}`)}
            className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full"
        >
            {/* IMAGE */}
            <div className="relative h-56 sm:h-48 overflow-hidden">
                <img
                    src={props.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt={props.title}
                />

                <span
                    className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-sm uppercase tracking-wider text-white shadow-sm
          ${props.status === "Live" ? "bg-red-600" : props.status === "Upcoming" ? "bg-amber-500" : props.status === "Cancelled" ? "bg-red-800" : "bg-slate-500"}`}
                >
                    {props.status}
                </span>

                {props.verified && (
                    <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-green-700 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-md">
                        <ShieldCheck size={12} /> VERIFIED
                    </span>
                )}
            </div>

            {/* CONTENT */}
            <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start text-xs mb-3">
                    <span className="font-mono text-slate-400 bg-slate-50 px-2 py-1 rounded">ID: {props.propertyId}</span>
                    <span className="flex items-center gap-1 text-blue-800 font-bold bg-blue-50 px-2 py-1 rounded-full border border-blue-100">
                        <Building2 size={12} />
                        {props.bank}
                    </span>
                </div>

                <h3 className="text-lg sm:text-base font-bold text-slate-900 mb-2 line-clamp-2 sm:line-clamp-1 group-hover:text-blue-700 transition-colors leading-tight">
                    {props.title}
                </h3>

                <div className="flex items-center gap-1.5 text-sm sm:text-xs text-slate-500 mb-5">
                    <MapPin size={16} className="text-slate-400 shrink-0" />
                    <span className="line-clamp-1">{props.location}</span>
                </div>

                <div className="space-y-3 mb-5 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                    <div className="flex justify-between items-center text-sm sm:text-xs">
                        <span className="text-slate-500 font-medium">Reserve Price</span>
                        <span className="font-bold text-slate-900 text-base sm:text-sm">{props.reservePrice}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm sm:text-xs">
                        <span className="text-slate-500 font-medium">EMD Amount</span>
                        <span className="font-semibold text-slate-700">{props.emd}</span>
                    </div>
                </div>

                <div className="mt-auto">
                    <div className="flex flex-col gap-1.5 text-xs text-slate-500 mb-4 border-t border-slate-100 pt-3">
                        <div className="flex justify-between items-center">
                            <span>Start Date</span>
                            <span className="font-medium text-slate-700 bg-slate-50 px-2 py-0.5 rounded">{formatDate(props.startTime)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>End Date</span>
                            <span className="font-medium text-slate-700 bg-slate-50 px-2 py-0.5 rounded">{formatDate(props.endTime)}</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-2">
                        <div
                            onClick={(e) => { e.stopPropagation(); navigate(`/auction-notice/${props.id}`); }}
                            className="flex items-center gap-2 text-[#312e81] text-xs font-bold cursor-pointer hover:underline"
                        >
                            <div className="bg-slate-100 p-1 rounded-full"><Eye size={12} /></div>
                            View Auction Detail
                        </div>
                        <div
                            onClick={(e) => { e.stopPropagation(); navigate(`/auctions/${props.id}`); }}
                            className="flex items-center gap-2 text-[#312e81] text-xs font-bold cursor-pointer hover:underline"
                        >
                            <div className="bg-slate-100 p-1 rounded-full"><FileText size={12} /></div>
                            View Property Detail
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}