import {
  Shield,
  Phone,
  MapPin,
  Mail,
  CheckCircle,
  FileText,
  Scale,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";
import BankEAuctionLogo from "./BankEAuctionLogo";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* TRUST STRIP */}
      <div className="bg-slate-800 py-3 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-10 text-[11px] sm:text-xs">
            <TrustItem icon={<Shield className="text-green-400" />} text="RBI Authorized Platform" />
            <TrustItem icon={<CheckCircle className="text-blue-400" />} text="ISO 9001:2015 Certified" />
            <TrustItem icon={<Scale className="text-amber-400" />} text="SARFAESI Act Compliant" />
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-2 rounded-lg">
                <BankEAuctionLogo className="h-5 w-5" variant="light" />
              </div>
              <span className="text-lg font-bold text-white">BankEAuction</span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              India’s trusted platform for verified bank auction properties from
              PSU & private banks.
            </p>

            <div className="flex gap-3">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="/coming-soon"
                  aria-label={label}
                  className="h-8 w-8 flex items-center justify-center rounded bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

          </div>

          {/* QUICK LINKS */}
          <FooterColumn title="Quick Links">
            {["Live Auctions", "Bank Properties", "How It Works", "Auction Guides", "Blog"].map(
              (item) => (
                <FooterLink key={item} label={item} />
              )
            )}
          </FooterColumn>

          {/* PROPERTY TYPES */}
          <FooterColumn title="Property Types">
            {["Residential", "Commercial", "Industrial", "Land & Plots", "Agricultural"].map(
              (item) => (
                <FooterLink key={item} label={`${item} Properties`} />
              )
            )}
          </FooterColumn>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Contact Us</h3>

            <ul className="space-y-3 text-xs">
              <li className="flex gap-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex gap-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>1800-XXX-XXXX</span>
              </li>
              <li className="flex gap-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>support@banke-auction.com</span>
              </li>
            </ul>

            <div className="mt-4 p-3 bg-slate-800 rounded-lg text-xs">
              <div className="flex items-center gap-2 mb-1">
                <Shield className="h-3 w-3 text-green-400" />
                <span className="font-semibold text-green-400">
                  RBI Registration
                </span>
              </div>
              <p className="text-slate-400">Compliant with Indian banking norms</p>
            </div>
          </div>
        </div>

        {/* BANK STRIP */}
        <div className="border-t border-slate-800 pt-6 mb-6">
          <p className="text-center text-xs text-slate-500 mb-3">
            Auctions from India’s Leading Banks
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-xs text-slate-400">
            {["SBI", "PNB", "Canara Bank", "Bank of Baroda", "Union Bank", "Indian Bank"].map(
              (bank) => (
                <span key={bank} className="hover:text-slate-300 transition">
                  {bank}
                </span>
              )
            )}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-slate-800 pt-6 text-xs">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-center sm:text-left">
              © 2026 BankEAuction. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              {["Privacy Policy", "Terms of Service", "Disclaimer", "Grievance Redressal"].map(
                (item) => (
                  <Link
                    key={item}
                    to="/coming-soon"
                    className="hover:text-blue-400 transition"
                  >
                    {item}
                  </Link>
                )
              )}
            </div>
          </div>

          <p className="mt-3 text-slate-500 text-center">
            Disclaimer: This platform provides information on bank auction properties.
            Please verify details with respective banks before bidding.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- SMALL HELPERS ---------- */

function TrustItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <span>{text}</span>
    </div>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-white font-semibold text-sm mb-3">{title}</h3>
      <ul className="space-y-2 text-xs">{children}</ul>
    </div>
  );
}

function FooterLink({ label }: { label: string }) {
  return (
    <li>
      <Link
        to="/coming-soon"
        className="flex items-center gap-2 hover:text-blue-400 transition"
      >
        <FileText className="h-3 w-3" />
        {label}
      </Link>
    </li>
  );
}