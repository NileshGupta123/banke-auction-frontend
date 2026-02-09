import { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
    X,
    Heart,
    Share2,
    MapPin,
    Calendar,
    Building2,
    Maximize2,
    FileText,
    Clock,
    Info
} from "lucide-react";
import { DUMMY_AUCTIONS } from "./dumyData";
import PropertyHeader from "../../../components/properties/PropertyHeader";

// Helper for safe data access
const getAuction = (id: string | undefined) => {
    return DUMMY_AUCTIONS.find(a => a.id === id) || DUMMY_AUCTIONS[0];
};

export default function AuctionDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const auction = getAuction(id);

    const [contactModalOpen, setContactModalOpen] = useState(false);
    const [interestedModalOpen, setInterestedModalOpen] = useState(false);

    // Mock data expansion to match screenshot fields
    const details = {
        ...auction,
        carpetArea: "10080 sq feet",
        possessionStatus: "Symbolic",
        typeOfAction: "Under SARFAESI",
        inspectionStart: "16-01-2026 10:00",
        inspectionEnd: "23-01-2026 16:00",
        auctionStart: "24-01-2026 11:00",
        auctionEnd: "24-01-2026 16:00",
        emdEnd: "23-01-2026 16:00",
        propertyId: "PUNBABA40355029",
        borrowerName: "Shabana Enterprise",
        titleDeed: "Registered Sale Deed",
        ownership: "Freehold",
        address: `Equitable Mortgage of IP of Landed property located at Mouza-Kanishail Pt-II, Block-10.`,
        views: 44
    };


    // ...
    return (
        <div className="min-h-screen bg-slate-50 pb-20 font-sans">
            <PropertyHeader />
            {/* BREADCRUMB */}
            <div className="bg-[#1e1b4b] text-white py-2 px-4 md:px-8 text-xs md:text-sm">
                Home &gt; IBC eAuction &gt; Property &gt; eAuction &gt; {details.bankName}
            </div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-6">

                {/* DISCLAIMER */}
                <div className="text-right text-xs text-red-500 font-medium mb-4">
                    (**) Denotes indicative price only. The final reserve price will be declared at the time of auction.
                </div>

                {/* MAIN CARD */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 md:p-6 mb-6">
                    <div className="flex flex-col lg:flex-row gap-8">

                        {/* LEFT: IMAGE GRID (2x2) */}
                        <div className="w-full lg:w-[400px] shrink-0">
                            <div className="grid grid-cols-2 gap-1 rounded-lg overflow-hidden h-[300px] md:h-[350px]">
                                <img src={details.image} className="w-full h-full object-cover" alt="Property View 1" />
                                <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Property View 2" />
                                <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Property View 3" />
                                <img src="https://images.unsplash.com/photo-1484154218962-a1c002085aac?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Property View 4" />
                            </div>
                        </div>

                        {/* RIGHT: DETAILS */}
                        <div className="flex-1">
                            <div className="flex justify-between items-start mb-4">
                                <h1 className="text-2xl font-bold text-slate-800">{details.title}</h1>
                                <div className="flex gap-2 text-slate-400">
                                    <Heart className="w-6 h-6 hover:text-red-500 cursor-pointer" />
                                    <Share2 className="w-6 h-6 hover:text-blue-600 cursor-pointer" />
                                </div>
                            </div>

                            {/* BLUE SUMMARY CARD */}
                            <div className="bg-[#e0f2fe] rounded-xl p-6 mb-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-4">
                                    <DetailItem icon={<Maximize2 className="w-5 h-5" />} label="Carpet Area" value={details.carpetArea} />
                                    <DetailItem icon={<Building2 className="w-5 h-5" />} label="Possession Status" value={details.possessionStatus} />
                                    <DetailItem icon={<FileText className="w-5 h-5" />} label="Type of Action" value={details.typeOfAction} />

                                    <DetailItem icon={<MapPin className="w-5 h-5" />} label="State" value={details.state} />
                                    <DetailItem icon={<MapPin className="w-5 h-5" />} label="District" value={`${details.city} District`} />
                                    <DetailItem icon={<MapPin className="w-5 h-5" />} label="City" value={details.city} />

                                    <DetailItem icon={<Calendar className="w-5 h-5" />} label="Inspection Start Date & Time" value={details.inspectionStart} />
                                    <DetailItem icon={<Calendar className="w-5 h-5" />} label="Inspection End Date & Time" value={details.inspectionEnd} />
                                    <div className="hidden md:block"></div> {/* Spacer */}

                                    <DetailItem icon={<Calendar className="w-5 h-5" />} label="Auction Start Date & Time" value={details.auctionStart} />
                                    <DetailItem icon={<Calendar className="w-5 h-5" />} label="Auction End Date & Time" value={details.auctionEnd} />
                                    <DetailItem icon={<Calendar className="w-5 h-5" />} label="EMD End Date & Time" value={details.emdEnd} />
                                </div>
                            </div>

                            {/* FOOTER ACTIONS */}
                            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <Building2 className="w-4 h-4 text-slate-600" />
                                        <span className="font-semibold text-slate-700">{details.bankName}</span>
                                    </div>
                                    <div className="text-xs text-slate-500">Property ID : {details.propertyId}</div>
                                </div>

                                <div className="text-2xl font-bold text-slate-900">
                                    {details.reservePrice}<span className="text-red-500 text-lg">**</span>
                                </div>

                                <div className="flex gap-2 w-full md:w-auto">
                                    <button
                                        onClick={() => setContactModalOpen(true)}
                                        className="flex-1 md:flex-none bg-[#312e81] text-white px-6 py-2 rounded shadow-sm hover:bg-[#1e1b4b] font-medium transition-colors"
                                    >
                                        Contact Us
                                    </button>
                                    <button
                                        onClick={() => setInterestedModalOpen(true)}
                                        className="flex-1 md:flex-none bg-[#312e81] text-white px-6 py-2 rounded shadow-sm hover:bg-[#1e1b4b] font-medium transition-colors"
                                    >
                                        Interested ?
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM SECTION: TWO COLUMNS */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* LEFT: MORE DETAILS */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* DETAILS TABLE */}
                        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                            <div className="bg-[#bfdbfe] px-6 py-3 font-bold text-slate-800">
                                More Details
                            </div>
                            <div className="p-6 space-y-4">
                                <Row label="Title Deed Type" value={details.titleDeed} />
                                <Row label="Borrower's Name" value={details.borrowerName} />
                                <Row label="Registered Address of Borrower" value="Prop: Abdul Rajak S/o Late Abdul Mukit Vill & PO Kanishail, Karimganj-788710 Sirbhumi District, Assam" />
                                <Row label="Ownership Type" value={details.ownership} />
                                <Row label="Property Address" value={details.address} />
                                <Row label="State" value={details.state} />
                                <Row label="District" value={`${details.city} District`} />
                                <Row label="Pin Code" value="788710" />
                                <Row label="Ownership of Property" value="Borrower & Guarantor" />
                                <Row label="Facing" value="North" />
                                <Row label="Other Detail" value="Land" />
                            </div>
                        </div>



                    </div>

                    {/* RIGHT: AUCTION DETAILS & WIDGETS */}
                    <div className="space-y-6">

                        {/* AUCTION DETAILS CARD */}
                        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                            <div className="bg-[#bfdbfe] px-6 py-3 font-bold text-slate-800">
                                Auction Details
                            </div>
                            <div className="p-6 space-y-6">
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div className="font-semibold text-slate-800">Auction ID</div>
                                    <div className="text-slate-900 font-bold">237224</div>

                                    <div className="font-semibold text-slate-800">Auction Start Date</div>
                                    <div className="text-slate-900 font-bold">{details.auctionStart}</div>

                                    <div className="font-semibold text-slate-800">Auction End Date</div>
                                    <div className="text-slate-900 font-bold">{details.auctionEnd}</div>

                                    <div className="font-semibold text-slate-800">EMD</div>
                                    <div className="text-slate-900 font-bold">
                                        ₹ 3,08,100<br />
                                        <span className="text-xs font-normal text-slate-500">( three lac eight thousand one hundred rupees )</span>
                                    </div>

                                    <div className="font-semibold text-slate-800">EMD End Date & Time</div>
                                    <div className="text-slate-900 font-bold">{details.emdEnd}</div>

                                    <div className="font-semibold text-slate-800">Reserve Price</div>
                                    <div className="text-slate-900 font-bold">
                                        ₹ {details.reservePrice}<br />
                                        <span className="text-xs font-normal text-slate-500">( thirty lac eighty one thousand rupees )</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => navigate(`/auction-notice/${details.id}`, { state: { from: location.pathname } })}
                                    className="w-full bg-[#312e81] text-white py-2 rounded-lg font-bold shadow hover:bg-[#1e1b4b] transition-colors"
                                >
                                    View Detail
                                </button>
                            </div>
                        </div>

                        {/* VIEWS WIDGET */}
                        <div className="bg-sky-200/50 rounded-xl p-8 text-center border border-sky-100">
                            <p className="text-lg font-semibold text-slate-700 mb-2">Property Views</p>
                            <p className="text-3xl font-bold text-slate-900">{details.views}</p>
                        </div>

                    </div>
                </div>

            </div>

            {/* CONTACT MODAL */}
            {contactModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn" onClick={() => setContactModalOpen(false)}>
                    <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden" onClick={e => e.stopPropagation()}>
                        <div className="flex items-center justify-between p-4 border-b border-slate-100">
                            <h3 className="text-lg font-bold text-slate-800">Contact Us</h3>
                            <button onClick={() => setContactModalOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex items-center justify-between py-2 border-b border-slate-50">
                                <span className="font-bold text-slate-800">Name</span>
                                <span className="text-slate-600">Jai Prakash</span>
                            </div>
                            <div className="flex items-center justify-between py-2 border-b border-slate-50">
                                <span className="font-bold text-slate-800">Email ID</span>
                                <span className="text-slate-600">jaimalik1989@sbi.co.in</span>
                            </div>
                            <div className="flex items-center justify-between py-2 border-b border-slate-50">
                                <span className="font-bold text-slate-800">Mobile No.</span>
                                <span className="text-slate-600">9300029300</span>
                            </div>
                            <div className="flex items-center justify-between py-2">
                                <span className="font-bold text-slate-800">Branch Name</span>
                                <span className="text-slate-600">SARB PANCHKULA-51519</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* INTERESTED MODAL */}
            {interestedModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn" onClick={() => setInterestedModalOpen(false)}>
                    <div className="bg-white rounded-xl shadow-xl w-full max-w-lg overflow-hidden" onClick={e => e.stopPropagation()}>
                        <div className="flex items-center justify-between p-4 border-b border-slate-100">
                            <h3 className="text-xl font-bold text-slate-800">Interested for Property</h3>
                            <button onClick={() => setInterestedModalOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-6">
                            <div className="bg-amber-50 text-amber-800 text-sm p-3 rounded-lg mb-6 border border-amber-100">
                                Please enter your details to get notified once the auction is published for this property.
                            </div>

                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1">Name <span className="text-red-500">*</span></label>
                                    <input type="text" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-blue-500 focus:bg-white transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1">Company Name</label>
                                    <input type="text" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-blue-500 focus:bg-white transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1">Email ID <span className="text-red-500">*</span></label>
                                    <input type="email" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-blue-500 focus:bg-white transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1">Mobile No. <span className="text-red-500">*</span></label>
                                    <input type="tel" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-blue-500 focus:bg-white transition-colors" />
                                    <div className="text-right mt-1">
                                        <a href="#" className="text-xs text-blue-600 font-semibold hover:underline">Verify Mobile No</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 mt-4">
                                    <input type="checkbox" id="consent" className="mt-1 w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                                    <label htmlFor="consent" className="text-sm text-slate-600">
                                        Please provide your consent to share the details with the concerned bank.
                                    </label>
                                </div>

                                <button type="button" className="w-full bg-[#1e1b4b] text-white py-3 rounded-lg font-bold hover:bg-blue-900 transition-colors shadow-lg mt-4 disabled:opacity-50 disabled:cursor-not-allowed">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

// Subcomponents
function DetailItem({ icon, label, value }: { icon: any, label: string, value: string }) {
    return (
        <div className="flex items-start gap-3">
            <div className="text-slate-700 mt-1">{icon}</div>
            <div>
                <p className="text-xs text-slate-500 mb-0.5">{label}</p>
                <p className="text-sm font-bold text-slate-900">{value}</p>
            </div>
        </div>
    );
}

function Row({ label, value }: { label: string, value: string }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-4">
            <div className="text-sm text-slate-500 font-medium">{label}</div>
            <div className="text-sm text-slate-900 font-medium break-words">{value}</div>
        </div>
    );
}