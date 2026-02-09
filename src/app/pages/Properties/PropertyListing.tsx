import PropertyHeader from "../../../components/properties/PropertyHeader";
import PropertyFilters from "../../../components/properties/PropertyFilters";
import PropertyCard from "../../../components/properties/PropertyCard";
import { DUMMY_AUCTIONS } from "../Auctions/dumyData";

export default function PropertyListing() {
    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* NAVIGATION */}
            <PropertyHeader />

            {/* FILTERS */}
            <PropertyFilters />

            {/* MAIN CONTENT */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">

                {/* LIST HEADER */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold text-slate-900">
                            10000+ results | Residential Properties for Sale
                        </h1>
                        <p className="text-xs text-red-500 font-medium mt-1">
                            (**) Denotes indicative price only. The final reserve price will be declared at the time of auction.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-sm text-slate-600 font-medium">Sort By:</span>
                        <select className="px-3 py-2 border border-slate-300 rounded-md text-sm font-medium outline-none bg-white cursor-pointer hover:border-slate-400">
                            <option>Most Recent</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Auction Date: Near to Far</option>
                        </select>
                    </div>
                </div>

                {/* PROPERTY LIST */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {DUMMY_AUCTIONS.length > 0 ? (
                        DUMMY_AUCTIONS.map(auction => (
                            <PropertyCard key={auction.id} data={auction} />
                        ))
                    ) : (
                        <div className="col-span-full bg-white rounded-xl border border-slate-200 p-12 text-center">
                            <p className="text-slate-500 text-lg font-medium">No Properties Found</p>
                            <p className="text-slate-400">Try adjusting your filters</p>
                        </div>
                    )}
                </div>

                {/* PAGINATION */}
                <div className="mt-12 flex justify-center">
                    <nav className="flex items-center gap-2">
                        <button className="px-4 py-2 border border-slate-200 rounded-lg text-slate-600 bg-white hover:bg-slate-50 shadow-sm disabled:opacity-50" disabled>Previous</button>
                        <button className="px-4 py-2 bg-[#1e1b4b] text-white rounded-lg font-bold shadow-md">1</button>
                        <button className="px-4 py-2 border border-slate-200 rounded-lg text-slate-600 bg-white hover:bg-slate-50 shadow-sm">2</button>
                        <button className="px-4 py-2 border border-slate-200 rounded-lg text-slate-600 bg-white hover:bg-slate-50 shadow-sm">3</button>
                        <span className="px-2 text-slate-400">...</span>
                        <button className="px-4 py-2 border border-slate-200 rounded-lg text-slate-600 bg-white hover:bg-slate-50 shadow-sm">Next</button>
                    </nav>
                </div>

            </main>
        </div>
    );
}