import PropertyCard from "./PropertyCard";
import { ArrowRight, ShieldCheck, Landmark, TrendingDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Auction } from "../../app/pages/Auctions/dummyData";
import { useState } from "react";

// Adapter to map local demo data to Auction interface
const properties: Auction[] = [
  {
    id: "LP-001",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    title: "Independent Residential House",
    city: "New Delhi",
    state: "Delhi",
    reservePrice: "₹78,00,000",
    bankName: "HDFC Bank",
    status: "UPCOMING",
    propertyType: "Residential",
    area: "1800 Sq.ft",
    auctionDate: "25 Oct 2026",
    actionType: "SARFAESI",
    possessionStatus: "Physical"
  },
  {
    id: "LP-002",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
    title: "2 BHK Apartment",
    city: "Bengaluru",
    state: "Karnataka",
    reservePrice: "₹52,00,000",
    bankName: "SBI",
    status: "LIVE",
    propertyType: "Residential Flat",
    area: "1250 Sq.ft",
    auctionDate: "30 Oct 2026",
    actionType: "SARFAESI",
    possessionStatus: "Symbolic"
  },
  {
    id: "LP-003",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
    title: "Commercial Shop Space",
    city: "Mumbai",
    state: "Maharashtra",
    reservePrice: "₹1,15,00,000",
    bankName: "ICICI Bank",
    status: "UPCOMING",
    propertyType: "Commercial",
    area: "950 Sq.ft",
    auctionDate: "02 Nov 2026",
    actionType: "DRT",
    possessionStatus: "Physical"
  },
];

export default function LatestProperties() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilterClick = (filter: string) => {
    if (filter === "Plots / Land") {
      navigate("/coming-soon");
    } else {
      setActiveFilter(filter);
    }
  };

  const filteredProperties = activeFilter === "All"
    ? properties
    : properties.filter(p => {
      if (activeFilter === "Residential") return p.propertyType.includes("Residential");
      if (activeFilter === "Commercial") return p.propertyType.includes("Commercial");
      return true;
    });

  return (
    <section id="properties" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Latest Bank Auction Properties
          </h2>
          <p className="text-xs text-red-500 font-medium mb-2">
            (**) Denotes indicative price only. The final reserve price will be declared at the time of auction.
          </p>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            Preview of verified residential and commercial properties from
            leading banks across India.
          </p>
        </div>

        {/* TRUST STRIP */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <TrustBadge
            icon={<ShieldCheck size={16} />}
            text="Legally Verified"
          />
          <TrustBadge
            icon={<Landmark size={16} />}
            text="PSU & Private Banks"
          />
          <TrustBadge
            icon={<TrendingDown size={16} />}
            text="Below Market Prices"
          />
        </div>

        {/* FILTER PILLS */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {["All", "Residential", "Commercial", "Plots / Land"].map((item) => (
            <button
              key={item}
              onClick={() => handleFilterClick(item)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition
                ${activeFilter === item && item !== "Plots / Land"
                  ? "bg-[#1e1b4b] text-white border-[#1e1b4b]"
                  : "bg-white border-slate-200 text-slate-600 hover:bg-blue-50 hover:text-blue-800"}`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {filteredProperties.map((property, index) => (
            <div
              key={index}
              onClick={() => navigate(`/properties/${property.id}`)}
              className="cursor-pointer h-full"
            >
              <PropertyCard data={property} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-slate-600 mb-4 text-sm md:text-base">
            Full auction data, EMD details & bidding access launching soon
          </p>
          <button
            onClick={() => navigate("/coming-soon")}
            className="inline-flex items-center gap-2 bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition font-semibold shadow-md"
          >
            Explore All Bank Auctions
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* TRUST BADGE */
function TrustBadge({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-semibold text-slate-700 shadow-sm">
      <span className="text-green-600">{icon}</span>
      {text}
    </div>
  );
}