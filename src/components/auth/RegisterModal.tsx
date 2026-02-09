import { X, Mail, Lock, User } from "lucide-react";
import { createPortal } from "react-dom";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { useState } from "react";
import { sendEmailOtp, verifyEmailOtp, registerUser } from "../../services/authApi";

type RegisterStep = "EMAIL" | "OTP" | "PASSWORD";

interface RegisterModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSwitchToLogin: () => void;
}

export default function RegisterModal({
    isOpen,
    onClose,
    onSwitchToLogin,
}: RegisterModalProps) {
    useLockBodyScroll(isOpen);

    const [step, setStep] = useState<RegisterStep>("EMAIL");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    if (!isOpen) return null;


    const sendOtp = async () => {
        try {
            await sendEmailOtp(email);
            setStep("OTP");
        } catch (err: any) {
            alert(err.response?.data?.message || "Failed to send OTP");
        }
    };

    const verifyOtp = async () => {
        try {
            await verifyEmailOtp(email, otp);
            setStep("PASSWORD");
        } catch (err: any) {
            alert(err.response?.data?.message || "Invalid OTP");
        }
    };

    const completeRegistration = async () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            await registerUser(name, email, password);
            alert("Registration successful. Please login.");
            onClose();
            onSwitchToLogin();
        } catch (err: any) {
            alert(err.response?.data?.message || "Registration failed");
        }
    };


    return createPortal(
        <div
            onClick={onClose}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 relative"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
                >
                    <X />
                </button>

                <h2 className="text-2xl font-bold text-center mb-2">
                    Create Account
                </h2>

                <form className="space-y-4">
                    {step === "EMAIL" && (
                        <>
                            <Input
                                icon={<User />}
                                placeholder="Full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Input
                                icon={<Mail />}
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button
                                type="button"
                                onClick={sendOtp}
                                className="w-full bg-blue-900 text-white py-3 rounded-lg"
                            >
                                Send OTP
                            </button>
                        </>
                    )}

                    {step === "OTP" && (
                        <>
                            <Input
                                icon={<Mail />}
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                maxLength={6}
                            />
                            <button
                                type="button"
                                onClick={verifyOtp}
                                className="w-full bg-blue-900 text-white py-3 rounded-lg"
                            >
                                Verify OTP
                            </button>
                        </>
                    )}

                    {step === "PASSWORD" && (
                        <>
                            <Input
                                icon={<Lock />}
                                placeholder="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Input
                                icon={<Lock />}
                                placeholder="Confirm Password"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                            />
                            <button
                                type="button"
                                onClick={completeRegistration}
                                className="w-full bg-blue-900 text-white py-3 rounded-lg"
                            >
                                Create Account
                            </button>
                        </>
                    )}
                </form>

                <div className="text-center text-sm mt-4">
                    Already have an account?{" "}
                    <button
                        onClick={() => {
                            onClose();
                            onSwitchToLogin();
                        }}
                        className="text-blue-900 font-medium"
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
}

function Input({
    icon,
    ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
    icon: React.ReactNode;
}) {
    return (
        <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                {icon}
            </span>
            <input
                {...props}
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-900"
            />
        </div>
    );
}