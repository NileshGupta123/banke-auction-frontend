import {
  Menu,
  X,
  Bell,
  UserCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import BankEAuctionLogo from "./BankEAuctionLogo";
import LanguageSelector from "./LanguageSelector";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "IBC eAuction", to: "/coming-soon" },
  { label: "Properties", to: "/properties" },
  { label: "eAuction", to: "/eauction" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dateTime, setDateTime] = useState("");
  const { user, logout } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    setMobileOpen(false);
  };

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Live date & time (desktop top bar) */
  useEffect(() => {
    const update = () => {
      setDateTime(
        new Date().toLocaleString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "Asia/Kolkata",
        })
      );
    };
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);

  /* CTA scroll handler */
  const handleGetUpdates = () => {
    setMobileOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("cta-section")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 300);
    } else {
      document.getElementById("cta-section")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const isPropertiesPage =
    location.pathname.startsWith("/properties") ||
    location.pathname.startsWith("/eauction") ||
    location.pathname.startsWith("/auctions") ||
    location.pathname.startsWith("/auction-notice") ||
    location.pathname === "/coming-soon";

  // If on properties or eauction page, hide this global navbar because they have dedicated headers
  if (isPropertiesPage) {
    return null;
  }

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${mobileOpen
          ? "bg-[#1e1b4b] shadow-lg"
          : scrolled
            ? "bg-white shadow-sm"
            : "bg-transparent"
          }`}
      >
        {/* DESKTOP TOP INFO BAR */}
        <div
          className={`block transition-all duration-300 ${mobileOpen
            ? "bg-white/5 text-white/90 py-2"
            : scrolled
              ? "bg-slate-900/95 text-slate-300 py-1"
              : "bg-transparent py-2 text-white/90"
            } text-xs border-b border-white/10`}
        >
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between font-medium tracking-wide">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {dateTime} IST
              </span>
            </div>
            <div className="flex items-center gap-6">
              <span className="hidden md:inline hover:text-white transition-colors cursor-pointer">
                support@baanknet.com
              </span>
              <span className="hidden md:inline hover:text-white transition-colors cursor-pointer">
                +91 82912 20220
              </span>
              <div className="block">
                <LanguageSelector />
              </div>
            </div>
          </div>
        </div>

        {/* MAIN NAV */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-16 md:h-20 flex items-center justify-between">
            {/* LOGO */}
            <div
              onClick={() => navigate("/")}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div
                className={`p-2 md:p-2.5 rounded-xl transition-all duration-300 ${mobileOpen
                  ? "bg-white/10"
                  : scrolled
                    ? "bg-blue-600 shadow-blue-200 shadow-lg"
                    : "bg-white/10 backdrop-blur-sm border border-white/20"
                  }`}
              >
                <BankEAuctionLogo
                  className="h-6 w-6"
                  variant="light"
                />
              </div>
              <div>
                <p
                  className={`text-xl font-bold tracking-tight transition-colors ${!mobileOpen && scrolled ? "text-slate-900" : "text-white"
                    }`}
                >
                  BankEAuction
                </p>
                <p
                  className={`text-[10px] uppercase tracking-wider font-semibold ${!mobileOpen && scrolled ? "text-blue-600" : "text-white/80"
                    }`}
                >
                  Premium Auction Platform
                </p>
              </div>
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    `relative text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${scrolled
                      ? isActive
                        ? "text-blue-700 font-semibold"
                        : "text-slate-600 hover:text-blue-700"
                      : isActive
                        ? "text-white font-semibold"
                        : "text-white/90 hover:text-white"
                    } after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:rounded-full after:transition-all after:duration-300 hover:after:w-full ${scrolled ? "after:bg-blue-600" : "after:bg-white"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* DESKTOP ACTIONS */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={handleGetUpdates}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 ${scrolled
                  ? "bg-white border border-slate-200 text-slate-700 hover:border-blue-200 hover:text-blue-700"
                  : "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20"
                  }`}
              >
                <Bell className="h-4 w-4" />
                <span>Updates</span>
              </button>

              <div className="h-8 w-px bg-slate-200/50 mx-1" />

              {user ? (
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-end">
                    <span className={`text-sm font-bold ${scrolled ? "text-slate-800" : "text-white"}`}>Hi, {user.name}</span>
                    <button onClick={logout} className={`text-xs hover:underline ${scrolled ? "text-slate-500" : "text-white/80"}`}>Logout</button>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold text-xs ring-2 ring-white">
                    {user.name?.charAt(0).toUpperCase()}
                  </div>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => navigate("/register")}
                    className={`px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg border ${scrolled
                      ? "border-slate-300 text-slate-700 hover:bg-slate-50"
                      : "border-white/30 text-white hover:bg-white/10"
                      }`}
                  >
                    Buyer Registration
                  </button>

                  <button
                    onClick={() => navigate("/login")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 shadow-sm ${scrolled
                      ? "bg-[#1e1b4b] text-white hover:bg-blue-900"
                      : "bg-white text-[#1e1b4b] hover:bg-slate-100"
                      }`}
                  >
                    <UserCircle className="w-4 h-4" />
                    Login
                  </button>
                </>
              )}
            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${!mobileOpen && scrolled
                ? "text-slate-800 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
                }`}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-[#1e1b4b] border-t border-white/10 shadow-xl transition-all duration-300 origin-top ${mobileOpen
            ? "opacity-100 scale-y-100"
            : "opacity-0 scale-y-0 pointer-events-none"
            }`}
        >
          <div className="px-4 py-6 space-y-4">

            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block text-base font-medium px-3 py-2 rounded-lg transition-colors ${isActive ? "bg-white/10 text-white" : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div className="h-px bg-white/10 my-4" />

            {/* MOBILE UPDATES BUTTON */}
            <button
              onClick={handleGetUpdates}
              className="w-full flex items-center justify-center gap-2 bg-white/5 text-slate-300 border border-white/10 py-3 rounded-lg font-semibold hover:bg-white/10 hover:text-white transition-colors text-sm"
            >
              <Bell className="h-4 w-4" />
              Get Auction Updates
            </button>

            {/* MOBILE AUTH ACTIONS */}
            <div className="space-y-3 pt-2">
              {user ? (
                <div className="px-3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold text-sm">
                      {user.name?.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-bold text-white">Hi, {user.name}</p>
                      <p className="text-xs text-slate-400">Welcome back</p>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full bg-white/10 text-white py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => {
                      navigate("/register");
                      setMobileOpen(false);
                    }}
                    className="w-full px-4 py-3 text-sm font-semibold text-white border border-white/30 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    Buyer Registration
                  </button>

                  <button
                    onClick={() => {
                      navigate("/login");
                      setMobileOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white text-[#1e1b4b] rounded-lg text-sm font-bold hover:bg-slate-100 transition-colors shadow-sm"
                  >
                    <UserCircle className="w-4 h-4" />
                    Login
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}