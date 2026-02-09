import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserCircle, Menu, X } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import BankEAuctionLogo from "../layout/BankEAuctionLogo";
import LanguageSelector from "../layout/LanguageSelector";

export default function PropertyHeader() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { user, logout } = useAuth();
    const [dateTime, setDateTime] = useState("");

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

    const location = useLocation();
    const navigate = useNavigate();
    const isActive = (path: string) => location.pathname.startsWith(path);

    const handleLogout = () => {
        logout();
        setMobileOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 bg-[#1e1b4b] text-white shadow-lg">
            {/* DESKTOP TOP INFO BAR */}
            <div
                className="block bg-white/5 text-white/90 py-2 text-xs border-b border-white/10"
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

                {/* LOGO */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
                        <BankEAuctionLogo className="w-6 h-6" variant="light" />
                    </div>
                    <span className="text-xl font-bold tracking-tight">BankEAuction</span>
                </Link>

                {/* NAVIGATION - DESKTOP */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link to="/" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Home</Link>
                    <Link to="/coming-soon" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">IBC Auction</Link>
                    <Link
                        to="/properties"
                        className={`text-sm font-bold transition-all ${isActive('/properties') ? 'text-white border-b-2 border-white pb-1' : 'text-slate-300 hover:text-white'}`}
                    >
                        Property
                    </Link>
                    <Link
                        to="/eauction"
                        className={`text-sm font-bold transition-all ${isActive('/eauction') ? 'text-white border-b-2 border-white pb-1' : 'text-slate-300 hover:text-white'}`}
                    >
                        eAuction
                    </Link>
                </nav>



                {/* CTAs DESKTOP */}
                <div className="hidden md:flex items-center gap-4">
                    {/* LanguageSelector moved to Top Bar */}
                    {user ? (
                        <div className="flex items-center gap-4">
                            <div className="flex flex-col items-end">
                                <span className="text-sm font-bold text-white">Hi, {user.name}</span>
                                <button onClick={handleLogout} className="text-xs hover:underline text-white/80">Logout</button>
                            </div>
                            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold text-xs ring-2 ring-white">
                                {user.name?.charAt(0).toUpperCase()}
                            </div>
                        </div>
                    ) : (
                        <>
                            <button
                                onClick={() => navigate('/register')}
                                className="px-4 py-2 text-sm font-semibold text-white border border-white/30 rounded-lg hover:bg-white/10 transition-colors"
                            >
                                Buyer Registration
                            </button>
                            <button
                                onClick={() => navigate('/login')}
                                className="flex items-center gap-2 px-4 py-2 bg-white text-[#1e1b4b] rounded-lg text-sm font-bold hover:bg-slate-100 transition-colors shadow-sm"
                            >
                                <UserCircle className="w-4 h-4" />
                                Login
                            </button>
                        </>
                    )}
                </div>

                {/* MOBILE MENU TOGGLE */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* MOBILE MENU OVERLAY */}
            <div
                className={`md:hidden absolute top-full left-0 right-0 bg-[#1e1b4b] border-t border-white/10 shadow-xl transition-all duration-300 origin-top ${mobileOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
                    }`}
            >
                <div className="px-4 py-6 space-y-4">

                    <Link
                        to="/"
                        onClick={() => setMobileOpen(false)}
                        className="block text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg"
                    >
                        Home
                    </Link>
                    <Link
                        to="/coming-soon"
                        onClick={() => setMobileOpen(false)}
                        className="block text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg"
                    >
                        IBC Auction
                    </Link>
                    <Link
                        to="/properties"
                        onClick={() => setMobileOpen(false)}
                        className={`block text-base font-medium px-3 py-2 rounded-lg ${isActive('/properties') ? 'bg-white/10 text-white' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
                    >
                        Property
                    </Link>
                    <Link
                        to="/eauction"
                        onClick={() => setMobileOpen(false)}
                        className={`block text-base font-medium px-3 py-2 rounded-lg ${isActive('/eauction') ? 'bg-white/10 text-white' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
                    >
                        eAuction
                    </Link>

                    <div className="h-px bg-white/10 my-4" />

                    {/* MOBILE AUTH ACTIONS */}
                    <div className="space-y-3">
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
                                    onClick={() => { navigate('/register'); setMobileOpen(false); }}
                                    className="w-full px-4 py-3 text-sm font-semibold text-white border border-white/30 rounded-lg hover:bg-white/10 transition-colors"
                                >
                                    Buyer Registration
                                </button>
                                <button
                                    onClick={() => { navigate('/login'); setMobileOpen(false); }}
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
        </header >
    );
}