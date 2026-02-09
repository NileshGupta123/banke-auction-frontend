import {
  ChevronLeft,
  ChevronRight,
  Award,
  Newspaper,
  Image as ImageIcon,
} from "lucide-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const mediaItems = [
  {
    image:
      "https://images.pexels.com/photos/3555615/pexels-photo-3555615.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Certified Industry Leader 2024",
    type: "Certification",
    icon: Award,
  },
  {
    image:
      "https://images.pexels.com/photos/3808604/pexels-photo-3808604.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Featured in Times Magazine",
    type: "Article",
    icon: Newspaper,
  },
  {
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Grand Opening Ceremony 2023",
    type: "Photo",
    icon: ImageIcon,
  },
  {
    image:
      "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Best Real Estate Platform Award",
    type: "Award",
    icon: Award,
  },
];

export default function MediaGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "right" ? 320 : -320,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3">
            Awards & Recognition
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by thousands and recognized by industry leaders.
          </p>
        </div>

        {/* SCROLLER */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4"
          >
            {mediaItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.title}
                  onClick={() => navigate("/coming-soon")}
                  className="flex-shrink-0 w-64 sm:w-72 md:w-80 text-left focus:outline-none"
                >
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition">
                    {/* IMAGE */}
                    <div className="relative h-48 sm:h-60 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />

                      <div className="absolute top-3 right-3 bg-blue-600 text-white p-2 rounded-full">
                        <Icon className="h-4 w-4" />
                      </div>

                      <span className="absolute bottom-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                        {item.type}
                      </span>
                    </div>

                    {/* CONTENT */}
                    <div className="p-4">
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs text-blue-600 font-medium">
                        View Details →
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* DESKTOP ARROWS ONLY */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow hover:bg-blue-600 hover:text-white transition"
            aria-label="Scroll left"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow hover:bg-blue-600 hover:text-white transition"
            aria-label="Scroll right"
          >
            <ChevronRight />
          </button>
        </div>

        {/* SCROLLBAR HIDE */}
        <style>{`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </div>
    </section>
  );
}