import { useNavigate } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import PropertyHeader from "../../components/properties/PropertyHeader";

export default function ComingSoon() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <PropertyHeader />
            <div className="flex-1 flex flex-col items-center justify-center p-4">
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl text-center max-w-lg w-full">
                    <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Clock className="w-10 h-10 text-blue-600" />
                    </div>

                    <h1 className="text-3xl font-bold text-slate-900 mb-3">Coming Soon</h1>
                    <p className="text-slate-500 mb-8 leading-relaxed">
                        We're working hard to bring you this feature. Stay tuned for updates!
                    </p>

                    <button
                        onClick={() => navigate(-1)}
                        className="w-full bg-[#1e1b4b] text-white py-3.5 rounded-xl font-bold hover:bg-blue-900 transition-all flex items-center justify-center gap-2"
                    >
                        <ArrowLeft size={18} />
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}