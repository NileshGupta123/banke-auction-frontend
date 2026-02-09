import { User, Mail, Lock, ArrowRight, CheckCircle2, ChevronRight, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, InputHTMLAttributes, ReactNode } from "react";
import BankEAuctionLogo from "../../../components/layout/BankEAuctionLogo";

type RegisterStep = "EMAIL" | "OTP" | "PASSWORD";

import { sendEmailOtp, verifyEmailOtp, registerUser } from "../../../services/authApi";

export default function Register() {
    const [step, setStep] = useState<RegisterStep>("EMAIL");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // UI State
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const steps = [
        { id: "EMAIL", label: "Details", number: 1 },
        { id: "OTP", label: "Verify", number: 2 },
        { id: "PASSWORD", label: "Password", number: 3 },
    ];

    const currentStepIndex = steps.findIndex(s => s.id === step);

    const clearStatus = () => {
        setError(null);
        setSuccess(null);
    }

    const handleNextStep = async (targetStep: RegisterStep) => {
        clearStatus();

        if (step === "EMAIL" && targetStep === "OTP") {
            if (!name.trim()) {
                setError("Please enter your full name.");
                return;
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                setError("Please enter a valid email address.");
                return;
            }

            setLoading(true);
            try {
                await sendEmailOtp(email);
                setSuccess(`OTP sent successfully to ${email}`);
                // Use setTimeout to allow success message to be seen before transition
                setTimeout(() => {
                    setStep("OTP");
                    setSuccess(null); // Clear success after step change
                }, 1000);
            } catch (err: any) {
                if (err.response?.status === 500) {
                    setError("System API Error: Unable to send OTP.");
                } else {
                    setError(err.response?.data?.message || "Failed to send OTP. Please try again.");
                }
            } finally {
                setLoading(false);
            }
        }

        else if (step === "OTP" && targetStep === "PASSWORD") {
            if (otp.length !== 6 || !/^\d+$/.test(otp)) {
                setError("Please enter a valid 6-digit OTP.");
                return;
            }

            setLoading(true);
            try {
                await verifyEmailOtp(email, otp);
                setSuccess("OTP verified successfully");
                setTimeout(() => {
                    setStep("PASSWORD");
                    setSuccess(null);
                }, 1000);
            } catch (err: any) {
                if (err.response?.status === 500) {
                    setError("System API Error: Unable to verify OTP.");
                } else {
                    setError(err.response?.data?.message || "Invalid OTP. Please try again.");
                }
            } finally {
                setLoading(false);
            }
        } else {
            setStep(targetStep);
        }
    };

    const handleRegister = async () => {
        clearStatus();

        if (password.length < 8) {
            setError("Password must be at least 8 characters long.");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setLoading(true);
        try {
            await registerUser(name, email, password);
            setSuccess("Registration Successful! Redirecting to login...");

            setTimeout(() => {
                window.location.href = '/login';
            }, 1500);

        } catch (err: any) {
            if (err.response?.status === 500) {
                setError("System API Error: Registration failed.");
            } else {
                setError(err.response?.data?.message || "Registration failed. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="flex bg-white rounded-2xl shadow-2xl overflow-hidden min-h-[600px]">
            {/* LEFT SIDE - BRANDING */}
            <div className="hidden lg:flex w-5/12 relative flex-col justify-between p-12 text-white bg-blue-950">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1000&q=80")' }}
                />
                <div className="absolute inset-0 z-0 bg-blue-950/80 mix-blend-multiply" />

                <div className="relative z-10">
                    <div className="flex items-center gap-3">
                        <div className="bg-white/10 backdrop-blur-md p-2.5 rounded-lg border border-white/10">
                            <BankEAuctionLogo className="h-6 w-6" variant="light" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white">BankEAuction</span>
                    </div>
                </div>

                <div className="relative z-10 mb-8">
                    <h2 className="text-3xl font-bold leading-tight mb-6 text-white">
                        Create Your Investor Account
                    </h2>
                    <ul className="space-y-4">
                        {[
                            "Exclusive access to bank auctions",
                            "Real-time bidding notifications",
                            "Verified property documentation",
                            "Expert legal assistance support"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-medium text-blue-100/90">
                                <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="relative z-10 text-xs text-blue-200/60">
                    Trusted by 50+ Banks & Financial Institutions
                </div>
            </div>

            {/* RIGHT SIDE - FORM */}
            <div className="w-full lg:w-7/12 flex items-center justify-center p-8 bg-white">
                <div className="w-full max-w-md">
                    <div className="mb-4">
                        <h1 className="text-2xl font-bold text-slate-900 mb-2">Register</h1>
                        <p className="text-slate-500 text-sm">Join the largest auction marketplace</p>
                    </div>

                    <Link to="/" className="absolute top-6 right-6 text-sm font-bold text-slate-400 hover:text-[#1e1b4b] flex items-center gap-1 transition-colors">
                        Skip <ArrowRight className="w-4 h-4" />
                    </Link>

                    {/* ALERTS */}
                    {error && (
                        <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-100 flex items-start gap-3 animate-fadeIn">
                            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-red-600 font-medium">{error}</p>
                        </div>
                    )}
                    {success && (
                        <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-100 flex items-start gap-3 animate-fadeIn">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-emerald-600 font-medium">{success}</p>
                        </div>
                    )}

                    {/* STEPPER */}
                    <div className="flex items-center justify-between mb-8 relative px-2">
                        <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-slate-100 -z-10" />
                        {steps.map((s, i) => {
                            const isCompleted = i < currentStepIndex;
                            const isCurrent = i === currentStepIndex;
                            return (
                                <div key={s.id} className="flex flex-col items-center gap-2 bg-white px-2">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${isCompleted ? "bg-emerald-500 text-white" : isCurrent ? "bg-[#1e1b4b] text-white scale-110 shadow-lg" : "bg-slate-100 text-slate-400"}`}>
                                        {isCompleted ? <CheckCircle2 className="h-5 w-5" /> : s.number}
                                    </div>
                                    <span className={`text-[10px] uppercase font-bold tracking-wider ${isCurrent ? "text-[#1e1b4b]" : "text-slate-400"}`}>{s.label}</span>
                                </div>
                            );
                        })}
                    </div>

                    <form className="space-y-5">
                        {step === "EMAIL" && (
                            <div className="space-y-5 animate-fadeIn">
                                <Input
                                    icon={<User />}
                                    label="Full Name"
                                    placeholder="e.g. John Doe"
                                    value={name}
                                    onChange={(e) => { setName(e.target.value); clearStatus(); }}
                                />
                                <Input
                                    icon={<Mail />}
                                    label="Email Address"
                                    placeholder="e.g. john@example.com"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value); clearStatus(); }}
                                />
                                <button
                                    type="button"
                                    disabled={loading}
                                    onClick={() => handleNextStep("OTP")}
                                    className="w-full bg-[#1e1b4b] text-white py-3.5 rounded-xl font-bold hover:bg-blue-900 transition-all shadow-lg shadow-blue-900/10 active:scale-95 flex items-center justify-center gap-2 text-sm uppercase tracking-wide disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {loading ? "Sending OTP..." : <>Continue <ChevronRight className="h-4 w-4" /></>}
                                </button>
                            </div>
                        )}

                        {step === "OTP" && (
                            <div className="space-y-5 animate-fadeIn">
                                <div className="text-center bg-blue-50 p-4 rounded-xl border border-blue-100 mb-2">
                                    <p className="text-xs text-slate-600">
                                        OTP sent to <span className="font-bold text-[#1e1b4b]">{email}</span>
                                    </p>
                                </div>
                                <Input
                                    icon={<Mail />}
                                    label="Enter OTP"
                                    placeholder="6-digit code"
                                    value={otp}
                                    onChange={(e) => { setOtp(e.target.value); clearStatus(); }}
                                    maxLength={6}
                                />
                                <button
                                    type="button"
                                    disabled={loading}
                                    onClick={() => handleNextStep("PASSWORD")}
                                    className="w-full bg-[#1e1b4b] text-white py-3.5 rounded-xl font-bold hover:bg-blue-900 transition-all shadow-lg shadow-blue-900/10 active:scale-95 text-sm uppercase tracking-wide disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {loading ? "Verifying..." : "Verify"}
                                </button>
                                <button type="button" onClick={() => setStep("EMAIL")} className="w-full text-xs font-bold text-slate-500 hover:text-slate-900 py-2">
                                    Change Email
                                </button>
                            </div>
                        )}

                        {step === "PASSWORD" && (
                            <div className="space-y-5 animate-fadeIn">
                                <Input
                                    icon={<Lock />}
                                    label="Create Password"
                                    placeholder="Min 8 characters"
                                    type="password"
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value); clearStatus(); }}
                                />
                                <Input
                                    icon={<Lock />}
                                    label="Confirm Password"
                                    placeholder="Re-enter password"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => {
                                        setConfirmPassword(e.target.value);
                                        clearStatus();
                                    }}
                                />
                                <button
                                    type="button"
                                    disabled={loading}
                                    onClick={handleRegister}
                                    className="w-full bg-[#1e1b4b] text-white py-3.5 rounded-xl font-bold flex justify-center gap-2 hover:bg-blue-900 transition-all shadow-lg shadow-blue-900/10 active:scale-95 text-sm uppercase tracking-wide disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {loading ? "Creating Account..." : <>Complete <ArrowRight className="h-4 w-4" /></>}
                                </button>
                                <button type="button" onClick={() => setStep("OTP")} className="w-full text-xs font-bold text-slate-500 hover:text-slate-900 py-2">
                                    Back
                                </button>
                            </div>
                        )}
                    </form>

                    <p className="text-center text-sm mt-8 text-slate-500">
                        Already have an account?{" "}
                        <Link to="/login" className="text-[#1e1b4b] font-bold hover:underline">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon: ReactNode;
    label?: string;
}

function Input({ icon, label, ...props }: InputProps) {
    return (
        <div>
            {label && <label className="block text-sm font-medium text-slate-700 mb-1.5">{label}</label>}
            <div className="relative group">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                    {icon}
                </span>
                <input
                    {...props}
                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all outline-none"
                />
            </div>
        </div>
    );
}