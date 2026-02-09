import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import AuctionCard from "../../../components/auctions/AuctionCard";
import MobileFilterModal from "../../../components/auctions/MobileFilterModal";
import DesktopFilterSidebar from "../../../components/auctions/DesktopFilterSidebar";
import { DUMMY_AUCTIONS } from "./dummyData";

export default function AuctionSearch() {
    const [activeTab, setActiveTab] = useState("ALL");
    const [showMobileFilters, setShowMobileFilters] = useState(false);

    const filteredAuctions = activeTab === "ALL"
        ? DUMMY_AUCTIONS
        : DUMMY_AUCTIONS.filter(a => a.status === activeTab);

    return (
        <div className="min-h-screen bg-slate-50 pt-16 pb-12">

            {/* STATUS TABS - STICKY */}
            <div className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar">
                    <div className="flex items-center gap-8 h-12">
                        {[
                            { label: "All", count: 152 },
                            { label: "Upcoming", count: 24 },
                            { label: "Live", count: 3, activeColor: "text-green-600 border-green-600" },
                            { label: "Closed", count: 120 },
                            { label: "Cancelled", count: 5, activeColor: "text-red-500 border-red-500" },
                        ].map(tab => {
                            const isActive = activeTab === tab.label.toUpperCase() || (tab.label === "All" && activeTab === "ALL");
                            return (
                                <button
                                    key={tab.label}
                                    onClick={() => setActiveTab(tab.label.toUpperCase())}
                                    className={`relative h-full flex items-center gap-2 text-sm font-medium border-b-2 transition-colors whitespace-nowrap px-1 ${isActive
                                        ? `${tab.activeColor || "border-blue-900 text-blue-900"}`
                                        : "border-transparent text-slate-500 hover:text-slate-800"
                                        }`}
                                >
                                    {tab.label}
                                    <span className={`px-2 py-0.5 rounded-full text-[10px] ${isActive ? "bg-slate-100 text-slate-800" : "bg-slate-100 text-slate-500"}`}>
                                        {tab.count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">

                {/* MOBILE FILTER BAR (Hidden on Desktop) */}
                {/* MOBILE FILTER BAR (Hidden on Desktop) */}
                <div className="lg:hidden sticky top-12 z-30 my-6 transition-all duration-300">
                    <div className="bg-[#1e1b4b] py-3 px-4 shadow-md rounded-xl flex items-center gap-3">
                        <div className="flex-1 bg-white rounded-full flex items-center px-3 py-2 h-10">
                            <Search className="w-3.5 h-3.5 text-slate-500 mr-1.5" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full text-xs text-slate-700 outline-none placeholder:text-slate-500 font-medium"
                            />
                        </div>
                        <button
                            onClick={() => setShowMobileFilters(true)}
                            className="bg-white text-[#1e1b4b] p-2 rounded-full shadow-sm hover:bg-slate-50 transition-colors"
                        >
                            <SlidersHorizontal className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="flex gap-8 relative mt-8">

                    {/* DESKTOP SIDEBAR */}
                    <DesktopFilterSidebar />

                    {/* MAIN CONTENT Area */}
                    <div className="flex-1 min-w-0">
                        {/* PAGE HEADER */}
                        <div className="flex flex-col md:flex-row items-end justify-between gap-4 mb-6">
                            <div>
                                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
                                    10000+ results | Residential Properties for Sale
                                </h1>
                            </div>

                            <div className="hidden md:flex items-center gap-3">
                                <span className="text-sm text-slate-600">Sort By:</span>
                                <select className="px-3 py-2 border border-slate-300 rounded-md text-sm font-medium outline-none bg-white">
                                    <option>Most Recent</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                </select>
                            </div>
                        </div>

                        <p className="text-xs text-red-500 mb-6 text-right w-full font-medium">
                            (**) Denotes indicative price only. The final reserve price will be declared at the time of auction.
                        </p>

                        {/* AUCTION LIST (Single Col) */}
                        <div className="space-y-6">
                            {filteredAuctions.length > 0 ? (
                                filteredAuctions.map(auction => {
                                    // Adapter for compatibility if needed, or pass directly if DUMMY_AUCTIONS matches
                                    // Assuming DUMMY_AUCTIONS has been updated or AuctionCard handles it.
                                    // We will pass the auction object.
                                    return <AuctionCard key={auction.id} auction={auction} />
                                })
                            ) : (
                                <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
                                    <p className="text-slate-500">No Auctions Found</p>
                                </div>
                            )}
                        </div>

                        {/* PAGINATION */}
                        <div className="mt-12 flex justify-center">
                            <nav className="flex items-center gap-2">
                                <button className="px-4 py-2 border border-slate-200 rounded-lg text-slate-600 bg-white hover:bg-slate-50 shadow-sm disabled:opacity-50">Previous</button>
                                <button className="px-4 py-2 bg-[#1e1b4b] text-white rounded-lg font-bold shadow-md">1</button>
                                <button className="px-4 py-2 border border-slate-200 rounded-lg text-slate-600 bg-white hover:bg-slate-50 shadow-sm">2</button>
                                <button className="px-4 py-2 border border-slate-200 rounded-lg text-slate-600 bg-white hover:bg-slate-50 shadow-sm">3</button>
                                <button className="px-4 py-2 border border-slate-200 rounded-lg text-slate-600 bg-white hover:bg-slate-50 shadow-sm">Next</button>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            {/* MOBILE FILTER MODAL */}
            <MobileFilterModal
                isOpen={showMobileFilters}
                onClose={() => setShowMobileFilters(false)}
            />

        </div>
    );
}