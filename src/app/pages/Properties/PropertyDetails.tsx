import React, { useState } from 'react';
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { MapPin, Calendar, Building2, Download, ChevronDown, Share2, Heart, ExternalLink, ChevronLeft, ChevronRight, X, Phone, Mail, User, Briefcase } from "lucide-react";

import { DUMMY_AUCTIONS } from "../Auctions/dumyData";
import PropertyHeader from "../../../components/properties/PropertyHeader";

export default function PropertyDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const [contactModalOpen, setContactModalOpen] = useState(false);
    const [interestedModalOpen, setInterestedModalOpen] = useState(false);

    // Find auction by ID (handle URL encoding if needed, though simple match should work for now)
    const auction = DUMMY_AUCTIONS.find(a => a.id === id) || DUMMY_AUCTIONS[0]; // Fallback to first for demo if not found

    // Construct data object compatibly with the view
    // filling in missing details with defaults for the UI demo
    const data = {
        id: auction.id,
        title: auction.title,
        bank: auction.bankName,
        reservePrice: auction.reservePrice,
        emd: "10% of Reserve", // Calculated or static default
        auctionDate: auction.auctionDate,
        time: "11:00 AM - 01:00 PM",
        status: auction.status,
        images: [
            auction.image,
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800", // Living Room
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800", // Kitchen
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800", // Bedroom
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"  // Bathroom/Other
        ],
        city: auction.city,
        possessionStatus: auction.possessionStatus || "Physical",
        actionType: auction.actionType || "Under SARFAESI",
        sections: {
            general: {
                "Auction ID": `#${auction.id}`,
                "Bank Reference": `${auction.bankName.substring(0, 3).toUpperCase()}/MUM/SAR/2025/112`,
                "Event Type": "E-Auction",
                "Scheme": "SARFAESI Act"
            },
            property: {
                "Type": auction.propertyType,
                "Area": auction.area,
                "Floor": "4th Floor",
                "Building Name": "Gokul Heights",
                "Ownership": "Freehold"
            },
            location: {
                "City": auction.city,
                "State": auction.state,
                "District": "Fatehabad", // Demo
                "Locality": auction.city, // fallback
                "PIN": "400053"
            },
            financial: {
                "Reserve Price": auction.reservePrice,
                "EMD Amount": "10% of Price",
                "Bid Multiplier": "₹ 1,00,000",
                "EMD Submission Deadline": "24 Oct 2025, 05:00 PM"
            },
            dates: {
                "Auction Start": auction.auctionDate,
                "Auction End": "TBD",
                "Inspection Date": "On Request"
            }
        },
        documents: [
            { name: "Sale Notice", size: "1.2 MB" },
            { name: "Tender Document", size: "2.4 MB" },
            { name: "Property Map", size: "800 KB" }
        ]
    };

    if (!auction && !id) return <div>Loading...</div>;

    const [showGallery, setShowGallery] = React.useState(false);
    const [currentImage, setCurrentImage] = React.useState(0);

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentImage((prev) => (prev + 1) % data.images.length);
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentImage((prev) => (prev - 1 + data.images.length) % data.images.length);
    };

    return (
        <div className="min-h-screen bg-slate-50 pb-12">
            <PropertyHeader />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">

                {/* BREADCRUMB / BACK */}
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
                    <span className="cursor-pointer hover:text-blue-600" onClick={() => navigate('/properties')}>Properties</span>
                    <span>/</span>
                    <span>{data.city}</span>
                    <span>/</span>
                    <span className="font-semibold text-slate-800">#{data.id}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* LEFT COLUMN (Content) */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* HERO IMAGE */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                            <div
                                className="h-56 sm:h-64 md:h-72 lg:h-[320px] w-full relative group cursor-pointer"
                                onClick={() => setShowGallery(true)}
                            >
                                <img src={data.images[0]} alt={data.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

                                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 text-sm font-bold rounded shadow-sm">
                                    {data.status}
                                </div>
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white font-semibold flex items-center gap-2 bg-black/50 px-3 py-1.5 md:px-4 md:py-2 rounded-full backdrop-blur-sm hover:bg-black/70 transition-colors pointer-events-none whitespace-nowrap">
                                    <span className="text-xs md:text-base">Click here to see more photos</span>
                                </div>
                                <div className="absolute bottom-4 right-4 flex gap-2" onClick={e => e.stopPropagation()}>
                                    <button className="p-2 bg-white/90 rounded-full hover:bg-white text-slate-700 shadow-lg backdrop-blur-sm">
                                        <Share2 className="w-4 h-4 md:w-5 md:h-5" />
                                    </button>
                                    <button className="p-2 bg-white/90 rounded-full hover:bg-white text-slate-700 shadow-lg backdrop-blur-sm">
                                        <Heart className="w-4 h-4 md:w-5 md:h-5" />
                                    </button>
                                </div>
                            </div>
                            <div className="p-4 md:p-6">
                                <h1 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">{data.title}</h1>

                                {/* BLUE INFO BOX */}
                                <div className="bg-blue-50/80 rounded-xl p-6 mb-6">
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">

                                        <div className="flex items-start gap-3">
                                            <div className="p-2 bg-white rounded-lg text-slate-600 shadow-sm">
                                                <User className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-slate-500 font-medium">Ownership</p>
                                                <p className="text-sm font-bold text-slate-900">{data.sections.property.Ownership}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <div className="p-2 bg-white rounded-lg text-slate-600 shadow-sm">
                                                <ExternalLink className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-slate-500 font-medium">Type of Action</p>
                                                <p className="text-sm font-bold text-slate-900">{data.actionType}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <div className="p-2 bg-white rounded-lg text-slate-600 shadow-sm">
                                                <MapPin className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-slate-500 font-medium">Location</p>
                                                <p className="text-sm font-bold text-slate-900">{data.city}, {data.sections.location.State}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <div className="p-2 bg-white rounded-lg text-slate-600 shadow-sm">
                                                <Calendar className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-slate-500 font-medium">Auction Start</p>
                                                <p className="text-sm font-bold text-slate-900">{data.auctionDate.split(',')[0]} 11:00</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <div className="p-2 bg-white rounded-lg text-slate-600 shadow-sm">
                                                <Calendar className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-slate-500 font-medium">Auction End</p>
                                                <p className="text-sm font-bold text-slate-900">{data.auctionDate.split(',')[0]} 16:00</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <div className="p-2 bg-white rounded-lg text-slate-600 shadow-sm">
                                                <Calendar className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-slate-500 font-medium">EMD End Date</p>
                                                <p className="text-sm font-bold text-slate-900">22 Oct 2026 14:00</p>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="mt-6 pt-4 border-t border-blue-100/50 flex flex-col md:flex-row items-center justify-between gap-4">
                                        <div className="flex items-center gap-2">
                                            <Building2 className="w-4 h-4 text-slate-500" />
                                            <span className="text-sm font-semibold text-slate-700">{data.bank}</span>
                                        </div>
                                        <p className="text-xs text-slate-500">Property ID : {data.id}</p>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-100 pt-6">
                                    <p className="text-2xl md:text-3xl font-bold text-[#1e1b4b]">
                                        {data.reservePrice}
                                        <span className="text-red-500 text-lg ml-1">**</span>
                                    </p>

                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => setContactModalOpen(true)}
                                            className="bg-[#312e81] text-white px-8 py-3 rounded-lg font-bold shadow hover:bg-[#1e1b4b] transition-all flex-1 sm:flex-none"
                                        >
                                            Contact Us
                                        </button>
                                        <button
                                            onClick={() => setInterestedModalOpen(true)}
                                            className="bg-[#312e81] text-white px-8 py-3 rounded-lg font-bold shadow hover:bg-[#1e1b4b] transition-all flex-1 sm:flex-none"
                                        >
                                            Interested ?
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SECTIONS ACCORDION */}
                        <div className="space-y-4">
                            <DetailSection title="General Details" content={data.sections.general} />
                            <DetailSection title="Property Details" content={data.sections.property} />
                            <DetailSection title="Location" content={data.sections.location} />
                            <DetailSection title="Financial Details" content={data.sections.financial} />
                            <DetailSection title="Auction Dates" content={data.sections.dates} />
                        </div>

                        {/* DOCUMENT & NOTICE ETC (Kept same as before) */}
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                            <div className="px-6 py-4 border-b border-slate-100 bg-blue-50/50 flex justify-between items-center">
                                <h2 className="text-lg font-bold text-slate-800">Formal Auction Notice</h2>
                                <span className="text-xs text-blue-600 font-semibold bg-blue-100 px-2 py-1 rounded">Official</span>
                            </div>
                            <div className="p-6">
                                <p className="text-sm text-slate-600 mb-4">
                                    View the complete official auction notice, including detailed terms, conditions, and strictly formatted schedule.
                                </p>
                                <button
                                    onClick={() => navigate(`/auction-notice/${data.id}`, { state: { from: location.pathname } })}
                                    className="w-full bg-white border-2 border-[#312e81] text-[#312e81] py-2 rounded-lg font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    View Auction Details
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                                <h2 className="text-lg font-bold text-slate-800">Auction Documents</h2>
                            </div>
                            <div className="p-2">
                                {data.documents.map((doc, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-lg transition-colors group">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                                                <ExternalLink className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-slate-800">{doc.name}</p>
                                                <p className="text-xs text-slate-500">{doc.size} • PDF</p>
                                            </div>
                                        </div>
                                        <button className="text-blue-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                                            Download <Download className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* RIGHT SIDEBAR - STICKY WRAPPER */}
                    <div className="space-y-6 sticky top-24 self-start">
                        {/* SUMMARY CARD */}
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                            <h3 className="text-lg font-bold text-slate-800 mb-4">Quick Summary</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-semibold">Reserve Price</p>
                                    <p className="text-2xl font-bold text-slate-900">{data.sections.financial["Reserve Price"]}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-semibold">EMD Amount</p>
                                    <p className="text-lg font-semibold text-slate-700">{data.sections.financial["EMD Amount"]}</p>
                                </div>
                                <div className="pt-4 border-t border-slate-100">
                                    <p className="text-xs text-slate-500 mb-1">Auction Ends In</p>
                                    <div className="flex gap-2 text-center">
                                        {['04', '12', '45', '30'].map((num, i) => (
                                            <div key={i} className="flex-1 bg-slate-900 text-white rounded p-1">
                                                <p className="text-lg font-mono font-bold leading-none">{num}</p>
                                                <p className="text-[9px] uppercase text-slate-400 leading-none mt-1">
                                                    {['Day', 'Hr', 'Min', 'Sec'][i]}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* MAP */}
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden h-64 w-full relative">
                            <iframe
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                src={`https://maps.google.com/maps?q=${encodeURIComponent(data.city + ", " + data.sections.location.State)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                                className="absolute inset-0"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </div>

            {/* IMAGE GALLERY MODAL */}
            {showGallery && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn"
                    onClick={() => setShowGallery(false)}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors p-2 z-10"
                        onClick={() => setShowGallery(false)}
                    >
                        <X size={32} />
                    </button>

                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/75 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all z-10"
                        onClick={prevImage}
                    >
                        <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
                    </button>

                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/75 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all z-10"
                        onClick={nextImage}
                    >
                        <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
                    </button>

                    <div
                        className="relative w-full max-w-6xl h-[85vh] flex flex-col items-center justify-center"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="flex-1 w-full flex items-center justify-center overflow-hidden">
                            <img
                                src={data.images[currentImage]}
                                alt={`Gallery View ${currentImage + 1}`}
                                className="max-w-full max-h-full object-contain shadow-2xl"
                            />
                        </div>

                        <div className="mt-4 flex gap-2 overflow-x-auto max-w-full pb-2 px-4 scrollbar-hide">
                            {data.images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentImage(idx)}
                                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${idx === currentImage ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
                                        }`}
                                />
                            ))}
                        </div>
                        <div className="mt-2 text-white/60 text-sm font-medium">
                            {currentImage + 1} / {data.images.length}
                        </div>
                    </div>
                </div>
            )}

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

function DetailSection({ title, content }: { title: string, content: Record<string, string> }) {
    return (
        <details className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden" open>
            <summary className="flex items-center justify-between px-6 py-4 font-bold text-slate-800 cursor-pointer list-none select-none bg-slate-50/50 hover:bg-slate-100 transition-colors">
                {title}
                <ChevronDown className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-180" />
            </summary>
            <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 animate-fadeIn">
                {Object.entries(content).map(([key, value]) => (
                    <div key={key}>
                        <p className="text-xs text-slate-500 uppercase font-semibold mb-1">{key}</p>
                        <p className="text-sm font-medium text-slate-900">{value}</p>
                    </div>
                ))}
            </div>
        </details>
    );
}