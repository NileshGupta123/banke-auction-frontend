import { Building2, ShieldCheck, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ComingSoon() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-blue-900 p-4 rounded-full">
            <Building2 className="h-8 w-8 text-white" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-slate-900 mb-3">
          🚧 Platform Under Active Development
        </h1>

        <p className="text-slate-600 mb-6">
          We’re building this feature with strict compliance, verified bank
          data, and enterprise-grade security.
        </p>

        <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
          <Trust text="RBI compliant" />
          <Trust text="SARFAESI aligned" />
          <Trust text="Secure auctions" />
          <Trust text="Verified banks only" />
        </div>

        <button
          onClick={() => navigate("/")}
          className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800"
        >
          Back to Home
        </button>

        <p className="text-xs text-slate-500 mt-4 flex justify-center gap-1">
          <Clock className="h-3 w-3" /> Phase-wise rollout in progress
        </p>
      </div>
    </div>
  );
}

function Trust({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 bg-slate-100 px-3 py-2 rounded-lg">
      <ShieldCheck className="h-4 w-4 text-green-600" />
      <span>{text}</span>
    </div>
  );
}