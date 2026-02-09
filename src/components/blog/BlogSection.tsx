import { Calendar, User, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const blogPosts = [
  {
    id: "1",
    image:
      "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "First-Time Home Buying Guide in India",
    excerpt:
      "Key legal, financial, and bidding tips every first-time home buyer in India should know before purchasing a property.",
    author: "Amit Verma",
    date: "15 Jan 2024",
    category: "Buying Guide",
  },
  {
    id: "2",
    image:
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Bank Auction Property Investment Strategies",
    excerpt:
      "Learn how investors can identify undervalued bank auction properties and reduce legal and financial risks.",
    author: "Neha Kulkarni",
    date: "10 Jan 2024",
    category: "Investment",
  },
  {
    id: "3",
    image:
      "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "How to Safely Participate in Bank eAuctions",
    excerpt:
      "A practical guide on EMD, auction timelines, and compliance requirements under SARFAESI Act.",
    author: "Rahul Mehta",
    date: "05 Jan 2024",
    category: "Auctions",
  },
];

export default function BlogSection() {
  const navigate = useNavigate();

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3">
            Latest News & Insights
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Insights, guides, and updates on bank auctions and property investment in India
          </p>
        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition flex flex-col overflow-hidden"
            >
              {/* IMAGE */}
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-44 sm:h-56 object-cover"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {post.category}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-base sm:text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>

                {/* META */}
                <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => navigate("/coming-soon")}
                  className="text-blue-700 font-medium flex items-center gap-2 hover:gap-3 transition-all text-sm"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* VIEW ALL */}
        <div className="text-center">
          <button
            onClick={() => navigate("/coming-soon")}
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition font-medium text-sm"
          >
            View All Articles
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}