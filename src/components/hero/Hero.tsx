import {
  Search,
  MapPin,
  Building2,
  Clock,
  Shield,
  ArrowRight,
  Bell,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1726471809607-b7f016a1696e?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleGetUpdates = () => {
    document.getElementById("cta-section")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
      {/* Background Images */}
      {HERO_IMAGES.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1400ms] ${index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/65 to-slate-900/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* LEFT CONTENT */}
          <div className="text-white">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-xs sm:text-sm font-medium mb-4 backdrop-blur">
              <Shield className="h-4 w-4 text-green-400" />
              Authorized Bank Auction Platform
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">
              Verified Bank Auction Properties
              <span className="block text-blue-300">
                Below Market Value
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-xl mb-7">
              Discover legally verified residential and commercial bank-owned
              properties across India. Transparent auctions, RBI-compliant
              process, and trusted institutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
              <button
                onClick={handleGetUpdates}
                className="inline-flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 px-6 py-3 rounded-lg text-sm font-semibold transition shadow-md"
              >
                <Bell className="h-4 w-4" />
                Get Latest Property Update
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => navigate("/coming-soon")}
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-slate-100 transition"
              >
                View Live Auctions
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-5 border-t border-white/20 max-w-md">
              {[
                { value: "10K+", label: "Verified Properties" },
                { value: "500+", label: "Live Auctions" },
                { value: "50+", label: "Partner Banks" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-xl sm:text-2xl font-bold text-blue-300">
                    {stat.value}
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-300">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SEARCH CARD */}
          <div className="bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-5 sm:p-6 lg:p-8 border border-slate-200">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4 pb-2 border-b">
              Find Auction Properties
            </h3>

            <div className="space-y-3">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  placeholder="City, State or Location"
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg text-sm focus:ring-1 focus:ring-blue-900 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <select className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg text-sm bg-white focus:ring-1 focus:ring-blue-900 outline-none">
                    <option>Property Type</option>
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Industrial</option>
                    <option>Land / Plot</option>
                  </select>
                </div>

                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <select className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg text-sm bg-white focus:ring-1 focus:ring-blue-900 outline-none">
                    <option>Auction Status</option>
                    <option>Live</option>
                    <option>Upcoming</option>
                    <option>Closed</option>
                  </select>
                </div>
              </div>

              <button
                onClick={() => navigate("/coming-soon")}
                className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3.5 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition shadow-md"
              >
                <Search className="h-4 w-4" />
                Search Properties
              </button>
            </div>

            {/* Quick Filters */}
            <div className="mt-4 pt-4 border-t">
              <p className="text-xs text-slate-500 mb-2">Quick Search</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "SBI Auctions",
                  "PNB Properties",
                  "Residential",
                  "Commercial",
                  "Delhi NCR",
                  "Mumbai",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => navigate("/coming-soon")}
                    className="px-2.5 py-1 text-xs rounded-md bg-slate-100 text-slate-600 hover:bg-blue-100 hover:text-blue-900 transition"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BANK STRIP */}
        <div className="mt-10 sm:mt-14 pt-6 border-t border-white/10 text-center">
          <p className="text-[11px] sm:text-xs text-slate-400 mb-4">
            Auctions from India’s Leading Banks
          </p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 opacity-60">
            {[
              "State Bank of India",
              "Punjab National Bank",
              "Bank of Baroda",
              "Canara Bank",
              "Union Bank",
            ].map((bank) => (
              <span
                key={bank}
                className="text-xs sm:text-sm font-semibold text-slate-300"
              >
                {bank}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}