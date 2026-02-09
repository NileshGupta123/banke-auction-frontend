import { Globe, Check, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

const LANGUAGES = [
    { code: "en", label: "English", native: "English" },
    { code: "hi", label: "Hindi", native: "हिंदी" },
    { code: "bn", label: "Bengali", native: "বাংলা" },
    { code: "pa", label: "Punjabi", native: "ਪੰਜਾਬੀ" },
    { code: "gu", label: "Gujarati", native: "ગુજરાતી" },
    { code: "te", label: "Telugu", native: "తెలుగు" },
    { code: "ta", label: "Tamil", native: "தமிழ்" },
    { code: "kn", label: "Kannada", native: "ಕನ್ನಡ" },
    { code: "mr", label: "Marathi", native: "मराठी" },
    { code: "ml", label: "Malayalam", native: "മലയാളം" },
    { code: "as", label: "Assamese", native: "অসমীয়া" },
    { code: "or", label: "Odia", native: "ଓଡ଼ିଆ" },
];

export default function LanguageSelector({ mobile = false }: { mobile?: boolean }) {
    const [selectedLang, setSelectedLang] = useState("en");
    const [isOpen, setIsOpen] = useState(false);

    const [isTranslating, setIsTranslating] = useState(false);

    // Initialize selected language from cookie or default
    useEffect(() => {
        const getCookie = (name: string) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop()?.split(";").shift();
        };

        const googleTranslateCookie = getCookie("googtrans");
        if (googleTranslateCookie) {
            // Cookie format is usually /source/target or /target
            const lang = googleTranslateCookie.split("/").pop();
            if (lang && LANGUAGES.some(l => l.code === lang)) {
                setSelectedLang(lang);
            }
        }
    }, []);

    const changeLanguage = (langCode: string) => {
        setSelectedLang(langCode);
        setIsOpen(false);
        setIsTranslating(true);

        const googleTranslateElement = document.querySelector(".goog-te-combo") as HTMLSelectElement;
        if (googleTranslateElement) {
            googleTranslateElement.value = langCode;
            // Dispatch events to trigger translation without opening UI components
            googleTranslateElement.dispatchEvent(new Event("change", { bubbles: true }));
            googleTranslateElement.dispatchEvent(new Event("input", { bubbles: true }));
        }

        // Set cookie manually to ensure persistence
        // Try both source=en and source=auto to be safe
        const domain = window.location.hostname === 'localhost' ? '' : `domain=.${window.location.hostname}`;
        document.cookie = `googtrans=/en/${langCode}; path=/; ${domain}`;
        document.cookie = `googtrans=/auto/${langCode}; path=/; ${domain}`;
        document.cookie = `googtrans=/en/${langCode}; path=/;`;
        document.cookie = `googtrans=/auto/${langCode}; path=/;`;

        // Simulate translation delay for UI feedback
        setTimeout(() => setIsTranslating(false), 2000);
    };

    if (mobile) {
        return (
            <div className="w-full">
                <label className="block text-xs uppercase text-slate-400 font-semibold tracking-wider mb-2 px-1">
                    Select Language
                </label>
                <div className="grid grid-cols-2 gap-2">
                    {LANGUAGES.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm border transition-all ${selectedLang === lang.code
                                ? "bg-blue-600 text-white border-blue-600"
                                : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
                                }`}
                        >
                            <span>{lang.native}</span>
                            {selectedLang === lang.code && <Check className="w-3.5 h-3.5" />}
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                onBlur={() => setTimeout(() => setIsOpen(false), 200)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-xs font-medium text-white/90 border border-white/10"
            >
                {isTranslating ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                    <Globe className="w-3.5 h-3.5" />
                )}
                <span>{LANGUAGES.find(l => l.code === selectedLang)?.native || "Language"}</span>
            </button>

            {isOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 py-1 rounded-xl bg-white shadow-xl ring-1 ring-black/5 z-50 max-h-[80vh] overflow-y-auto">
                    {LANGUAGES.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)} // MouseDown fires before Blur
                            onMouseDown={(e) => e.preventDefault()}
                            className={`w-full flex items-center justify-between px-4 py-2 text-sm transition-colors ${selectedLang === lang.code
                                ? "bg-blue-50 text-blue-700 font-medium"
                                : "text-slate-700 hover:bg-slate-50"
                                }`}
                        >
                            <div className="flex flex-col items-start">
                                <span className="leading-none">{lang.native}</span>
                                <span className="text-[10px] text-slate-400 mt-0.5">{lang.label}</span>
                            </div>
                            {selectedLang === lang.code && <Check className="w-4 h-4" />}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}