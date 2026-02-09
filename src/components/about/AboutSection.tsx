import { Shield, Award, Users, TrendingUp, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AboutSection() {
  const navigate = useNavigate();

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white py-16 md:py-24"
    >
      {/* Decorative shapes (hidden on small screens) */}
      <div className="hidden md:block absolute -top-20 -left-20 w-60 h-60 bg-blue-100 rounded-full opacity-30 pointer-events-none" />
      <div className="hidden md:block absolute -bottom-16 -right-16 w-72 h-72 bg-green-100 rounded-full opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight">
              Your Trusted Real Estate Partner in India
            </h2>

            <p className="text-slate-600 text-base md:text-lg mb-4">
              With over a decade of experience in the Indian real estate market,
              we’ve helped thousands of buyers and investors discover verified
              bank auction properties.
            </p>

            <p className="text-slate-600 text-base md:text-lg mb-6">
              Transparency, legal compliance, and RBI-aligned processes are at
              the heart of everything we build.
            </p>

            <button
              onClick={() => navigate("/coming-soon")}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md hover:shadow-lg"
            >
              Learn More About Us
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* RIGHT FEATURE CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                icon: Shield,
                title: "Verified Listings",
                desc: "All properties are legally verified and bank-approved",
                bg: "bg-blue-100",
                color: "text-blue-600",
              },
              {
                icon: Award,
                title: "Trusted Platform",
                desc: "Recognized across India for transparent auctions",
                bg: "bg-green-100",
                color: "text-green-600",
              },
              {
                icon: Users,
                title: "Expert Team",
                desc: "Auction & legal experts guiding every step",
                bg: "bg-orange-100",
                color: "text-orange-600",
              },
              {
                icon: TrendingUp,
                title: "Market Insights",
                desc: "Real-time pricing & investment intelligence",
                bg: "bg-blue-100",
                color: "text-blue-600",
              },
            ].map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="bg-white p-5 md:p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
                >
                  <div
                    className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${f.bg}`}
                  >
                    <Icon className={`h-7 w-7 ${f.color}`} />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {f.title}
                  </h3>
                  <p className="text-sm text-slate-600">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}