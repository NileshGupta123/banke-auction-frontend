import { useParams, useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { DUMMY_AUCTIONS } from "./dumyData";

// Helper for safe data access
const getAuction = (id: string | undefined) => {
    return DUMMY_AUCTIONS.find(a => a.id === id) || DUMMY_AUCTIONS[0];
};

export default function AuctionNotice() {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    // Determine back path: prefer state, then specific checks, finally default
    const handleBack = () => {
        if (location.state?.from) {
            navigate(location.state.from);
        } else {
            // Fallback if accessed directly
            navigate('/eauction');
        }
    };
    const auction = getAuction(id);

    // Extended mock data to match the fields in the screenshots
    const data = {
        ...auction,
        bankPropertyId: "PUNBABA40355029",
        customerId: "U05663273",
        branch: "ARMB GUWAHATI 823100",
        officer: "Anjana Das-Authorised Officer - Scale - IV - CM",
        propertyType: "Residential",
        propertySubType: "Plot",
        propertyTitle: "Plot for Sale in Karimganj",
        propertyAddress: "Equitable Mortgage of IP of Landed property located at Mouza-Kanishail Pt-II, Block-10, Pargana-Kusiarkul, Dist-Karimganj measuring 3 Katha 10 Chatak under Old Dag no.748 and Khatian no.523, New Dag no.748 and Patta no.507",
        borrowerName: "Shabana Enterprise",
        registeredAddress: "Prop: Abdul Rajak S/o Late Abdul Mukit Vill & PO Kanishail, Karimganj-788710 Sirbhumi District, Assam",
        carpetArea: "10080.00",
        typeOfAction: "-",

        // Inspection
        dealingOfficer: "Ashis Chakraborty",
        mobileNo: "9435173713",
        branchAddress: "GUWAHATI",

        // Dates
        inspectionFrom: "16-01-2026 10:00",
        inspectionTo: "23-01-2026 16:00",
        emdStart: "15-01-2026 17:25",
        emdEnd: "23-01-2026 16:00",
        auctionStart: "24-01-2026 11:00",
        auctionEnd: "24-01-2026 16:00",

        // Business Rules
        reservePrice: "30,81,000.00",
        emd: "3,08,100.00",
        incrementPrice: "50,000.00",
        incrementExtension: "50,000.00",
        extendTimeMinutes: "30",
        extendTimeByMinutes: "30"
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans pb-20">
            {/* HEADER STRIP */}
            <div className="bg-white border-b border-t border-slate-200 px-4 py-3 md:px-8 flex justify-between items-center shadow-sm">
                <h1 className="text-xl font-medium text-slate-700">Auction Notice</h1>
                <button
                    onClick={handleBack}
                    className="text-blue-600 text-sm font-semibold flex items-center gap-1 hover:underline active:text-blue-800"
                >
                    <ArrowLeft size={16} /> Go Back
                </button>
            </div>

            <div className="max-w-6xl mx-auto px-4 mt-8 bg-white shadow-sm border border-slate-200 rounded-lg min-h-[800px]">

                {/* GENERAL DETAIL */}
                <Section title="General Detail">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        <Field label="Auction ID" value={data.id} />
                        <div className="hidden md:block"></div> {/* Spacer to match layout if needed, or just flow */}

                        <Field label="Bank Property ID" value={data.bankPropertyId} />
                        <Field label="Customer ID" value={data.customerId} />

                        <Field label="Branch" value={data.branch} />
                        <Field label="Officer, Designation" value={data.officer} />

                        <Field label="Property Type" value={data.propertyType} />
                        <Field label="Property Sub Type" value={data.propertySubType} />

                        <Field label="Property Title" value={data.propertyTitle} />
                        <div className="hidden md:block"></div>

                        <Field label="Property Address" value={data.propertyAddress} fullWidth />

                        <Field label="Borrower name" value={data.borrowerName} />
                        <div className="hidden md:block"></div>

                        <Field label="Registered Address of Borrower" value={data.registeredAddress} fullWidth />

                        <Field label="Carpet Area (sq feet)" value={data.carpetArea} />
                        <div className="hidden md:block"></div>

                        <Field label="Type of Action" value={data.typeOfAction} />
                    </div>
                </Section>

                {/* INSPECTION DETAIL */}
                <Section title="Inspection Detail">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        <Field label="Dealing Officer Name,Designation" value={data.dealingOfficer} />
                        <Field label="Mobile No." value={data.mobileNo} />
                        <Field label="Branch Address" value={data.branchAddress} />
                    </div>
                </Section>

                {/* KEY DATE */}
                <Section title="Key Date">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        <Field label="Inspection Date & Time From" value={data.inspectionFrom} />
                        <Field label="Inspection Date & Time To" value={data.inspectionTo} />

                        <Field label="EMD Start date & time" value={data.emdStart} />
                        <Field label="EMD End date & time" value={data.emdEnd} />

                        <Field label="Auction Start Date & Time" value={data.auctionStart} />
                        <Field label="Auction End Date & Time" value={data.auctionEnd} />
                    </div>
                </Section>

                {/* BUSINESS RULES */}
                <Section title="Business Rules">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        <Field label="Reserve Price" value={data.reservePrice} />
                        <Field label="EMD" value={data.emd} />

                        <Field label="Increment Price" value={data.incrementPrice} />
                        <Field label="Increment Price During Time Extension" value={data.incrementExtension} />

                        <Field label="Extend Time When Valid Bid Received in Last(In Minutes)" value={data.extendTimeMinutes} />
                        <Field label="Extend Time By (In Minutes)" value={data.extendTimeByMinutes} />
                    </div>
                </Section>

                {/* DOWNLOAD DOCUMENT */}
                <Section title="Download Document">
                    <div className="border border-slate-200 rounded overflow-hidden">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="px-4 py-3 font-semibold text-slate-600">Sr. No.</th>
                                    <th className="px-4 py-3 font-semibold text-slate-600">Document Description</th>
                                    <th className="px-4 py-3 font-semibold text-slate-600">Size (MB)</th>
                                    <th className="px-4 py-3 font-semibold text-slate-600">Status</th>
                                    <th className="px-4 py-3 font-semibold text-slate-600">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-4 py-3 border-b text-slate-700">1</td>
                                    <td className="px-4 py-3 border-b text-slate-700">Terms and Conditions</td>
                                    <td className="px-4 py-3 border-b text-slate-700">0.70</td>
                                    <td className="px-4 py-3 border-b text-slate-700">Approved</td>
                                    <td className="px-4 py-3 border-b">
                                        <button className="text-blue-600 hover:text-blue-800 font-medium text-xs border border-blue-600 px-3 py-1 rounded hover:bg-blue-50 transition-colors">
                                            Download
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Section>

                <div className="h-20"></div> {/* Bottom spacer */}
            </div>
        </div>
    );
}

// Subcomponents
function Section({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="px-8 py-6 border-b border-slate-100 last:border-0">
            <h2 className="text-[#312e81] font-semibold text-base mb-6">{title}</h2>
            {children}
        </div>
    );
}

function Field({ label, value, fullWidth }: { label: string, value: string, fullWidth?: boolean }) {
    return (
        <div className={`flex ${fullWidth ? 'col-span-1 md:col-span-2' : ''} text-sm gap-4`}>
            <div className="text-slate-500 min-w-[180px] w-[30%] shrink-0">{label}</div>
            <div className={`text-slate-800 font-medium ${fullWidth ? 'flex-1' : ''}`}>: {value}</div>
        </div>
    );
}