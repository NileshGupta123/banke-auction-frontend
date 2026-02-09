import {
  Bell,
  Shield,
  Users,
  Building2,
  ArrowRight,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section
      id="cta-section"
      className="py-14 sm:py-16 bg-gradient-to-br from-slate-900 to-blue-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-snug">
              Never Miss a Bank Auction Opportunity
            </h2>

            <p className="text-sm sm:text-base text-blue-100 mb-6 max-w-xl">
              Get instant WhatsApp notifications for verified bank auction
              properties in your city.
            </p>

            {/* BENEFITS */}
            <div className="space-y-3 mb-6">
              {[
                "City-wise WhatsApp alerts",
                "Verified bank auction properties",
                "Price drops & new listings",
                "Expert auction insights",
                "No spam — unsubscribe anytime",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 text-white text-sm"
                >
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* TRUST BADGES */}
            <div className="flex flex-wrap gap-3">
              <TrustBadge
                icon={<Shield className="h-4 w-4" />}
                label="RBI Authorized"
              />
              <TrustBadge
                icon={<Users className="h-4 w-4" />}
                label="50,000+ Users"
              />
              <TrustBadge
                icon={<Building2 className="h-4 w-4" />}
                label="10,000+ Properties"
              />
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-xl p-5 sm:p-6 shadow-xl">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-11 h-11 bg-green-100 rounded-full mb-3">
                <MessageCircle className="h-6 w-6 text-green-600" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">
                Get WhatsApp Property Alerts
              </h3>
              <p className="text-slate-500 text-sm">
                Based on your city & interest
              </p>
            </div>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                navigate("/coming-soon");
              }}
            >
              {/* NAME */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
                />
              </div>

              {/* CITY */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  City
                </label>
                <input
                  required
                  placeholder="e.g. Mumbai, Delhi, Bengaluru"
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
                />
                <p className="text-xs text-slate-400 mt-1">
                  You’ll receive alerts only for this city
                </p>
              </div>

              {/* WHATSAPP NUMBER */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  WhatsApp Number
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                    +91
                  </span>
                  <input
                    required
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    placeholder="10-digit mobile number"
                    className="w-full pl-12 pr-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
                  />
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  We send updates only via WhatsApp
                </p>
              </div>

              {/* PROPERTY TYPE */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Property Type
                </label>
                <select
                  defaultValue=""
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-600 outline-none bg-white"
                >
                  <option value="" disabled>
                    Select property type
                  </option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Industrial</option>
                  <option>Land & Plots</option>
                  <option>All Types</option>
                </select>
              </div>

              {/* CONSENT */}
              <div className="flex items-start gap-2 text-xs text-slate-500">
                <input
                  type="checkbox"
                  required
                  className="mt-1 accent-green-600"
                />
                <p>
                  I agree to receive property updates on WhatsApp. I can opt out
                  anytime.
                </p>
              </div>

              {/* CTA */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition"
              >
                Get WhatsApp Alerts
                <ArrowRight className="h-4 w-4" />
              </button>

              <p className="text-xs text-slate-400 text-center">
                🔒 We never share your number
              </p>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}

/* TRUST BADGE */
function TrustBadge({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-lg text-xs text-blue-100">
      {icon}
      <span>{label}</span>
    </div>
  );
}

/* INPUT */
function Input({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
      />
    </div>
  );
}