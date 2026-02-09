import { X, Mail, Lock } from "lucide-react";
import { createPortal } from "react-dom";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { useState } from "react";
import { loginUser } from "../../services/authApi";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSwitchToRegister: () => void;
}

export default function LoginModal({
    isOpen,
    onClose,
    onSwitchToRegister,
}: LoginModalProps) {
    useLockBodyScroll(isOpen);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        console.log("LOGIN PAYLOAD", { email, password }); // 👈 ADD THIS

        setLoading(true);

        try {
            const res = await loginUser(email, password);

            // 🔐 Store tokens
            sessionStorage.setItem("accessToken", res.data.accessToken);
            localStorage.setItem("refreshToken", res.data.refreshToken);

            // 📣 Notify app of auth change
            window.dispatchEvent(new Event("auth-change"));

            onClose();
        } catch (err: any) {
            alert(err.response?.data?.message || "Login failed");
        } finally {
            setLoading(false);
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

                <h2 className="text-2xl font-bold text-center mb-6">
                    Welcome Back
                </h2>

                <form className="space-y-4" onSubmit={handleLogin}>
                    <Input
                        icon={<Mail />}
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        icon={<Lock />}
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 disabled:opacity-60"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                <div className="text-center text-sm text-slate-500 mt-4">
                    Don’t have an account?{" "}
                    <button
                        type="button"
                        onClick={() => {
                            onClose();
                            onSwitchToRegister();
                        }}
                        className="text-blue-900 font-medium hover:underline"
                    >
                        Register
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
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900"
            />
        </div>
    );
}