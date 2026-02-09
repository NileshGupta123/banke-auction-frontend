import { useState } from "react";
import ContextHeader from "../../../components/eauction/ContextHeader";
import EAuctionFilters from "../../../components/eauction/EAuctionFilters";
import EAuctionTable, { AUCTION_DATA } from "../../../components/eauction/EAuctionTable";
import PropertyHeader from "../../../components/properties/PropertyHeader"; // Reusing the header for now

const TABS = ["Upcoming", "Live", "Closed", "Cancelled", "All"];

export default function EAuctionListing() {
    const [activeTab, setActiveTab] = useState("Upcoming");
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 9;

    // Filter Logic
    const filteredData = activeTab === "All"
        ? AUCTION_DATA
        : AUCTION_DATA.filter(item => item.status.toLowerCase() === activeTab.toLowerCase());

    // Pagination Logic
    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const paginatedData = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        setCurrentPage(1); // Reset to first page on tab change
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(p => p + 1);
    };

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(p => p - 1);
    };

    return (
        <div className="min-h-screen bg-slate-100 pb-20 font-sans">
            {/* GLOBAL HEADER */}
            <PropertyHeader />

            {/* CONTEXT HEADER */}
            <ContextHeader />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">

                {/* ADVANCED FILTER PANEL */}
                <EAuctionFilters />

                {/* STATUS TABS */}
                <div className="flex items-center gap-1 mb-0 overflow-x-auto no-scrollbar border-b border-transparent">
                    {TABS.map(tab => {
                        // Calculate specific counts for tabs if needed, for now using static for Upcoming as per original design or could be dynamic
                        const count = tab === "All" ? AUCTION_DATA.length : AUCTION_DATA.filter(i => i.status.toLowerCase() === tab.toLowerCase()).length;
                        return (
                            <button
                                key={tab}
                                onClick={() => handleTabChange(tab)}
                                className={`px-6 py-2 text-xs font-bold uppercase transition-all whitespace-nowrap ${activeTab === tab
                                    ? "bg-[#312e81] text-white shadow-sm rounded-sm"
                                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                                    }`}
                            >
                                {tab} <span className="text-[10px] ml-1 opacity-80">({count})</span>
                            </button>
                        );
                    })}
                </div>

                {/* DATA TABLE CONTAINER */}
                <div className="bg-white rounded-b-lg shadow-sm min-h-[500px]">
                    <EAuctionTable data={paginatedData} />

                    {/* PAGINATION */}
                    {totalItems > 0 && (
                        <div className="p-4 border-t border-slate-100 flex items-center justify-between">
                            <div className="text-xs text-slate-500">
                                Showing {(currentPage - 1) * pageSize + 1}-{Math.min(currentPage * pageSize, totalItems)} of {totalItems} records
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={handlePrev}
                                    disabled={currentPage === 1}
                                    className="px-3 py-1 border rounded text-xs disabled:opacity-50 hover:bg-slate-50 disabled:hover:bg-transparent"
                                >
                                    Prev
                                </button>
                                <span className="px-3 py-1 text-xs font-medium text-slate-600">
                                    Page {currentPage} of {totalPages}
                                </span>
                                <button
                                    onClick={handleNext}
                                    disabled={currentPage === totalPages}
                                    className="px-3 py-1 border rounded text-xs bg-slate-50 hover:bg-slate-100 disabled:opacity-50 disabled:hover:bg-slate-50"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}