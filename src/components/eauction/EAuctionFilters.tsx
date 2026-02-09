import { ChevronUp, ChevronDown, Search } from "lucide-react";
import { useState } from "react";

export default function EAuctionFilters() {
    const [isExpanded, setExpanded] = useState(false);

    return (
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm mb-6 overflow-hidden font-sans">
            {/* TOGGLE HEADER */}
            <div
                onClick={() => setExpanded(!isExpanded)}
                className="flex items-center justify-between px-6 py-4 bg-slate-50/50 cursor-pointer hover:bg-slate-100 transition-colors border-b border-slate-100"
            >
                <div className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-blue-900" />
                    <h3 className="text-sm font-bold text-slate-800">Search Filters</h3>
                </div>
                {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
            </div>

            {/* EXPANDABLE BODY */}
            {isExpanded && (
                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

                        {/* LEFT COLUMN */}
                        <div className="space-y-6">
                            <div>
                                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Auction ID :</label>
                                <input type="text" className="w-full h-10 px-3 border border-slate-200 rounded text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-50 transition-all" />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Property Type :</label>
                                <select className="w-full h-10 px-3 border border-slate-200 rounded text-sm text-slate-600 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-50 bg-white">
                                    <option>Select</option>
                                    <option>Residential</option>
                                    <option>Commercial</option>
                                    <option>Industrial</option>
                                    <option>Land</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Type of Action :</label>
                                <select className="w-full h-10 px-3 border border-slate-200 rounded text-sm text-slate-600 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-50 bg-white">
                                    <option>Select</option>
                                    <option>SARFAESI</option>
                                    <option>DRT</option>
                                    <option>Insolvency</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-600 mb-1.5">State :</label>
                                <select className="w-full h-10 px-3 border border-slate-200 rounded text-sm text-slate-600 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-50 bg-white">
                                    <option>Select</option>
                                    <option>Maharashtra</option>
                                    <option>Karnataka</option>
                                    <option>Delhi</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-600 mb-1.5">City :</label>
                                <select className="w-full h-10 px-3 border border-slate-200 rounded text-sm text-slate-600 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-50 bg-white">
                                    <option>Select</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Bank :</label>
                                <select className="w-full h-10 px-3 border border-slate-200 rounded text-sm text-slate-600 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-50 bg-white">
                                    <option>Select</option>
                                    <option>SBI</option>
                                    <option>HDFC</option>
                                    <option>PNB</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Auction Start Date (From) :</label>
                                <input type="date" className="w-full h-10 px-3 border border-slate-200 rounded text-sm text-slate-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-50 transition-all" />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Loan Available :</label>
                                <select className="w-full h-10 px-3 border border-slate-200 rounded text-sm text-slate-600 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-50 bg-white">
                                    <option>Select</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="space-y-6">
                            <div>
                                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Bank Property ID :</label>
                                <input type="text" className="w-full h-10 px-3 border border-slate-200 rounded text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-50 transition-all" />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Property Sub Type :</label>
                                <select className="w-full h-10 px-3 border border-slate-200 rounded text-sm text-slate-600 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-50 bg-white">
                                    <option>Select</option>
                                    <option>Apartment</option>
                                    <option>Villa</option>
                                    <option>Plot</option>
                                    <option>Shop</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Reserve Price :</label>
                                <div className="flex gap-4">
                                    <select className="w-full h-10 px-3 border border-slate-200 rounded text-sm text-slate-600 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-50 bg-white">
                                        <option>Select</option>
                                        <option>10L</option>
                                        <option>50L</option>
                                    </select>
                                    <span className="self-center text-slate-400 text-sm">To</span>
                                    <select className="w-full h-10 px-3 border border-slate-200 rounded text-sm text-slate-600 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-50 bg-white">
                                        <option>Select</option>
                                        <option>5Cr</option>
                                        <option>10Cr</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-600 mb-1.5">District :</label>
                                <select className="w-full h-10 px-3 border border-slate-200 rounded text-sm text-slate-600 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-50 bg-white">
                                    <option>Select</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Pin Code :</label>
                                <input type="text" className="w-full h-10 px-3 border border-slate-200 rounded text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-50 transition-all" />
                            </div>

                            <div className="h-10 md:block hidden"></div> {/* Spacer to align */}

                            <div>
                                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Auction Start Date (To) :</label>
                                <input type="date" className="w-full h-10 px-3 border border-slate-200 rounded text-sm text-slate-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-50 transition-all" />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Possession Status :</label>
                                <select className="w-full h-10 px-3 border border-slate-200 rounded text-sm text-slate-600 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-50 bg-white">
                                    <option>Select</option>
                                    <option>Physical</option>
                                    <option>Symbolic</option>
                                </select>
                            </div>

                        </div>
                    </div>

                    <div className="mt-8 flex justify-center gap-4 border-t border-slate-100 pt-6">
                        <button className="px-10 py-2.5 bg-[#312e81] text-white font-bold rounded text-sm hover:bg-[#1e1b4b] transition-all shadow-md active:scale-95">
                            Search
                        </button>
                        <button className="px-10 py-2.5 bg-white border border-slate-300 text-slate-600 font-bold rounded text-sm hover:bg-slate-50 transition-all active:scale-95">
                            Clear
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}