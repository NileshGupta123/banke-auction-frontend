import { X, Check } from "lucide-react";
import { useState, useEffect } from "react";

interface FilterDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const FILTER_CATEGORIES = [
    "Bank", "Property ID", "Ownership Type", "Pin Code", "Possession Status",
    "Posted Since", "Auction Created Date", "Facing", "Project Name", "Developer Name"
];

const FILTER_OPTIONS: Record<string, string[]> = {
    "Bank": ["State Bank of India", "HDFC Bank", "ICICI Bank", "Punjab National Bank", "Bank of Baroda", "Union Bank of India", "Canara Bank", "Axis Bank"],
    "Ownership Type": ["Freehold", "Leasehold", "Power of Attorney", "Co-operative Society"],
    "Possession Status": ["Physical Possession", "Symbolic Possession", "Constructive Possession"],
    "Facing": ["North", "South", "East", "West", "North-East", "North-West", "South-East", "South-West"],
    "Posted Since": ["Last 24 Hours", "Last 3 Days", "Last Week", "Last Month"],
    "Property ID": ["Requires Search Input"], // Placeholder logic for now
};


export default function FilterDrawer({ isOpen, onClose }: FilterDrawerProps) {
    const [activeCategory, setActiveCategory] = useState("Bank");
    const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

    // Body Scroll Lock
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const toggleFilter = (category: string, value: string) => {
        const current = selectedFilters[category] || [];
        const next = current.includes(value)
            ? current.filter(item => item !== value)
            : [...current, value];

        setSelectedFilters({ ...selectedFilters, [category]: next });
    };

    if (!isOpen) return null;

    const currentOptions = FILTER_OPTIONS[activeCategory] || ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];

    return (
        <div className="fixed inset-0 z-[60] flex justify-end isolate">
            {/* BACKDROP */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fadeIn"
                onClick={onClose}
            ></div>

            {/* DRAWER PANEL */}
            <div className="relative w-full max-w-2xl bg-white shadow-2xl h-full flex flex-col animate-slideInRight">

                {/* HEADER */}
                <div className="flex items-center justify-between p-4 border-b border-slate-100">
                    <h2 className="text-lg font-bold text-slate-800">All Filters</h2>
                    <button onClick={onClose} className="p-2 hover:bg-slate-50 rounded-full text-slate-500">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* CONTENT BODY */}
                <div className="flex-1 flex overflow-hidden">
                    {/* LEFT COLUMN - CATEGORIES */}
                    <div className="w-1/3 bg-slate-50 border-r border-slate-200 overflow-y-auto">
                        {FILTER_CATEGORIES.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`w-full text-left px-4 py-3 text-sm font-medium border-l-4 transition-all ${activeCategory === category
                                        ? "bg-white border-[#1e1b4b] text-[#1e1b4b]"
                                        : "border-transparent text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                                    }`}
                            >
                                {category}
                                {(selectedFilters[category]?.length || 0) > 0 && (
                                    <span className="ml-2 inline-flex items-center justify-center w-5 h-5 text-[10px] bg-blue-100 text-blue-700 rounded-full">
                                        {selectedFilters[category].length}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* RIGHT COLUMN - FIELDS */}
                    <div className="flex-1 bg-white overflow-y-auto p-6">
                        <h3 className="font-bold text-slate-800 mb-4">{activeCategory}</h3>
                        <div className="space-y-3">
                            {currentOptions.map((opt) => {
                                const isSelected = selectedFilters[activeCategory]?.includes(opt);
                                return (
                                    <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${isSelected ? "bg-[#1e1b4b] border-[#1e1b4b]" : "border-slate-300 group-hover:border-slate-400"
                                            }`}>
                                            {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                                        </div>
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            checked={isSelected || false}
                                            onChange={() => toggleFilter(activeCategory, opt)}
                                        />
                                        <span className="text-sm text-slate-600 group-hover:text-slate-900">{opt}</span>
                                    </label>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* FOOTER */}
                <div className="p-4 border-t border-slate-100 bg-white flex items-center justify-between gap-4">
                    <button
                        onClick={() => setSelectedFilters({})}
                        className="text-sm font-semibold text-slate-500 hover:text-slate-800"
                    >
                        Clear All
                    </button>
                    <button
                        onClick={onClose}
                        className="flex-1 bg-[#1e1b4b] text-white py-3 rounded-lg font-bold shadow-lg hover:bg-blue-900 transition-colors"
                    >
                        View Properties
                    </button>
                </div>

            </div>
        </div>
    );
}