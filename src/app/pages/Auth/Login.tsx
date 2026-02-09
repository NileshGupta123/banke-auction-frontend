import { Lock, Mail, ArrowRight, AlertCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../../services/authApi";
import { useAuth } from "../../../context/AuthContext";
import BankEAuctionLogo from "../../../components/layout/BankEAuctionLogo";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        console.log("LOGIN PAYLOAD", { email, password }); // 👈 ADD THIS

        setError(null);

        // Simple regex for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        setLoading(true);

        try {
            const res = await loginUser(email, password);

            // Use context login to update state immediately
            login(res.data.accessToken, res.data.refreshToken);

            navigate("/");
        } catch (err: any) {
            if (err.response?.status === 500) {
                setError("System API Error: Please try again later.");
            } else {
                setError(err.response?.data?.message || "Login failed. Please check your credentials.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex bg-white rounded-2xl shadow-2xl overflow-hidden min-h-[600px]">
            {/* LEFT SIDE - BRANDING & VISUALS */}
            <div className="hidden lg:flex w-5/12 relative flex-col justify-between p-12 text-white bg-slate-900">
                {/* ... (Keep existing left side content) ... */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center opacity-60"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1000&q=80")' }}
                />
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-blue-900/90 to-slate-900/50 mix-blend-multiply" />

                <div className="relative z-10">
                    <div className="flex items-center gap-3">
                        <div className="bg-white/20 backdrop-blur-md p-2.5 rounded-lg border border-white/10">
                            <BankEAuctionLogo className="h-6 w-6" variant="light" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white">BankEAuction</span>
                    </div>
                </div>

                <div className="relative z-10">
                    <h2 className="text-3xl font-bold leading-tight mb-4 text-white">
                        Premium Bank Audited Properties
                    </h2>
                    <p className="text-blue-100 text-base leading-relaxed opacity-90">
                        Join thousands of investors finding verified opportunities below market value.
                    </p>
                </div>

                <div className="relative z-10 text-xs text-blue-200/60">
                    © 2026 BankEAuction. Secure & Verified.
                </div>
            </div>

            {/* RIGHT SIDE - FORM */}
            <div className="w-full lg:w-7/12 flex items-center justify-center p-8 md:p-12 bg-white">
                <div className="w-full max-w-md">
                    <div className="text-center mb-10">
                        <h1 className="text-2xl font-bold text-slate-900 mb-2">Welcome Back</h1>
                        <p className="text-slate-500 text-sm">
                            Access your saved auctions and bids
                        </p>
                    </div>

                    <Link to="/" className="absolute top-6 right-6 text-sm font-bold text-slate-400 hover:text-[#1e1b4b] flex items-center gap-1 transition-colors">
                        Skip Login <ArrowRight className="w-4 h-4" />
                    </Link>

                    {/* ERROR ALERT */}
                    {error && (
                        <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-100 flex items-start gap-3 animate-fadeIn">
                            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-red-600 font-medium">{error}</p>
                        </div>
                    )}

                    <form className="space-y-5" onSubmit={handleLogin}>
                        {/* ... (Keep existing form content) ... */}
                        <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 ml-1">Email Address</label>
                            <div className="relative group">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        if (error) setError(null);
                                    }}
                                    className={`w-full pl-10 pr-4 py-3.5 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all outline-none font-medium text-slate-900 ${error ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-blue-600'}`}
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 ml-1">Password</label>
                            <div className="relative group">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        if (error) setError(null);
                                    }}
                                    className={`w-full pl-10 pr-4 py-3.5 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all outline-none font-medium text-slate-900 ${error ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-blue-600'}`}
                                    placeholder="••••••••"
                                />
                            </div>
                            <div className="flex justify-end mt-2">
                                <Link to="/forgot-password" className="text-xs text-blue-600 hover:text-blue-800 font-bold">
                                    Forgot Password?
                                </Link>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#1e1b4b] text-white py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-blue-900 disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-xl shadow-blue-900/10 hover:shadow-blue-900/20 active:scale-95 text-sm uppercase tracking-wide"
                        >
                            {loading ? (
                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    Sign In Securely
                                    <ArrowRight className="h-4 w-4" />
                                </>
                            )}
                        </button>
                    </form>

                    <p className="text-center text-sm mt-8 text-slate-500">
                        New to BankEAuction?{" "}
                        <Link to="/register" className="text-[#1e1b4b] font-bold hover:underline transition-colors">
                            Create Free Account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}