import { MapPin, Calendar, Square, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Auction } from "../../app/pages/Auctions/dummyData";

interface PropertyCardProps {
  data: Auction;
}

export default function PropertyCard({ data }: PropertyCardProps) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/properties/${data.id}`)}
      className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full cursor-pointer"
    >

      {/* IMAGE SECTION - Updated */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        <div className="absolute top-4 left-4 bg-[#3b82f6] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
          Bank Auction
        </div>

        <button
          onClick={(e) => e.stopPropagation()}
          className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center text-slate-700 hover:text-red-500 transition-colors shadow-sm cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
        </button>
      </div>

      {/* CONTENT SECTION */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-900 line-clamp-1 mb-2 group-hover:text-[#2563eb] transition-colors">{data.title}</h3>

          <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-4">
            <MapPin className="w-4 h-4 text-slate-400" />
            {data.city}, {data.state}
          </div>

          <div className="bg-slate-50 rounded-lg p-3 mb-6">
            <div className="grid grid-cols-2 gap-4">
              {/* Action */}
              <div className="flex items-start gap-2">
                <div className="p-1.5 bg-white rounded text-slate-500 shadow-sm">
                  <FileText className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-semibold leading-tight mb-0.5">Action</p>
                  <p className="text-xs font-bold text-slate-800 line-clamp-1">{data.actionType || "SARFAESI"}</p>
                </div>
              </div>

              {/* Area */}
              <div className="flex items-start gap-2">
                <div className="p-1.5 bg-white rounded text-slate-500 shadow-sm">
                  <Square className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-semibold leading-tight mb-0.5">Area</p>
                  <p className="text-xs font-bold text-slate-800 line-clamp-1">{data.area}</p>
                </div>
              </div>

              {/* Dates */}
              <div className="flex items-start gap-2 pt-2 border-t border-slate-200/50">
                <div className="p-1.5 bg-white rounded text-slate-500 shadow-sm">
                  <Calendar className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-semibold leading-tight mb-0.5">Auction Date</p>
                  <p className="text-xs font-bold text-slate-800">{data.auctionDate.split(',')[0]}</p>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-2 border-t border-slate-200/50">
                <div className="p-1.5 bg-white rounded text-slate-500 shadow-sm">
                  <Calendar className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-semibold leading-tight mb-0.5">EMD Last Date</p>
                  <p className="text-xs font-bold text-slate-800">{data.emdSubmissionDate || "24 Oct 2026"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
          <div>
            <p className="text-lg font-bold text-[#1e1b4b]">
              {data.reservePrice}
              <span className="text-red-500 text-sm ml-1">**</span>
            </p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/properties/${data.id}`);
            }}
            className="bg-[#1e1b4b] text-white px-6 py-2 rounded-lg text-xs font-bold hover:bg-blue-900 transition-colors shadow-sm"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}