import { ReactNode } from "react";

interface AuthLayoutProps {
    children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-slate-900">
            {/* BACKGROUND IMAGE & BLUR */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2070&q=80")' }}
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-tr from-slate-900/90 via-slate-900/80 to-blue-900/40 backdrop-blur-sm" />

            {/* CONTENT */}
            <div className="relative z-10 w-full max-w-[1100px]">
                {children}
            </div>
        </div>
    );
}
