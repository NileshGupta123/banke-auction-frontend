import { MapPin, ChevronDown, SlidersHorizontal, Search } from "lucide-react";
import { useState } from "react";
import FilterDrawer from "./FilterDrawer";

export default function PropertyFilters() {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    return (
        <>
            <div className="bg-white border-b border-slate-200 sticky top-16 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">

                    {/* MOBILE SEARCH (Visible only on resize logic usually, but here handling responsiveness via classes) */}
                    <div className="md:hidden flex items-center gap-3">
                        <div className="flex-1 bg-slate-100 rounded-lg flex items-center px-3 py-2.5">
                            <Search className="w-4 h-4 text-slate-500 mr-2" />
                            <input
                                type="text"
                                placeholder="Search location, bank..."
                                className="bg-transparent w-full text-sm outline-none text-slate-800 placeholder:text-slate-500"
                            />
                        </div>
                        <button
                            onClick={() => setDrawerOpen(true)}
                            className="p-2.5 bg-[#1e1b4b] text-white rounded-lg shadow-sm"
                        >
                            <SlidersHorizontal className="w-5 h-5" />
                        </button>
                    </div>

                    {/* DESKTOP FILTERS */}
                    <div className="hidden md:flex items-center gap-4">

                        {/* LOCATION */}
                        <div className="flex-1 max-w-xs relative group">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                <MapPin className="w-4 h-4" />
                            </div>
                            <select className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 outline-none focus:border-[#1e1b4b] appearance-none cursor-pointer hover:bg-slate-100 transition-colors">
                                <option>Select Location</option>
                                <option>Mumbai</option>
                                <option>Delhi</option>
                                <option>Bangalore</option>
                            </select>
                            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>

                        {/* PROPERTY TYPE */}
                        <div className="relative w-48">
                            <select className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 outline-none focus:border-[#1e1b4b] appearance-none cursor-pointer hover:bg-slate-100">
                                <option>Property Type</option>
                                <option>Residential</option>
                                <option>Commercial</option>
                            </select>
                            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>

                        {/* BUDGET */}
                        <div className="relative w-48">
                            <select className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 outline-none focus:border-[#1e1b4b] appearance-none cursor-pointer hover:bg-slate-100">
                                <option>Budget</option>
                                <option>Under 50L</option>
                                <option>50L - 1Cr</option>
                                <option>1Cr+</option>
                            </select>
                            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>

                        {/* LOAN TOGGLE */}
                        <label className="flex items-center gap-2 cursor-pointer px-3 py-2 hover:bg-slate-50 rounded-lg border border-transparent hover:border-slate-100 transition-all">
                            <div className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
                            </div>
                            <span className="text-sm font-medium text-slate-600">Loan Available</span>
                        </label>

                        <div className="h-8 w-px bg-slate-200 mx-2"></div>

                        {/* MORE FILTERS */}
                        <button
                            onClick={() => setDrawerOpen(true)}
                            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
                        >
                            <SlidersHorizontal className="w-4 h-4" />
                            More Filters
                        </button>
                    </div>
                </div>
            </div>

            <FilterDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />
        </>
    );
}