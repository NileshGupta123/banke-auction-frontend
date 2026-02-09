import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ankit Sharma",
    role: "Homebuyer",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "BankEAuction helped me discover verified bank auction properties at prices far below the market. The platform is transparent and easy to use. Highly recommended for serious buyers.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "Real Estate Investor",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "As an investor, verified data and compliance matter the most. BankEAuction provides accurate auction details and timely updates. It has become my go-to platform.",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    role: "First-time Property Buyer",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "Buying a property for the first time was intimidating, but this platform made the process simple and transparent. The guidance and verified listings gave me confidence.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-14 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3">
            What Our Clients Say
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by property buyers and investors across India
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 sm:p-8 relative flex flex-col"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 sm:h-12 sm:w-12 text-blue-100" />

              {/* PROFILE */}
              <div className="flex items-center mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                    {t.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500">{t.role}</p>
                </div>
              </div>

              {/* STARS */}
              <div className="flex mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* CONTENT */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {t.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}