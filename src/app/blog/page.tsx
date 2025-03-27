import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function BlogPage() {
  const featuredPost = {
    title: "The Future of E-Residency: Trends to Watch in 2023",
    excerpt:
      "As digital nomadism and remote work continue to reshape the global economy, e-residency programs are evolving to meet new demands. Discover the key trends that will define the future of digital citizenship.",
    date: "June 15, 2023",
    author: "Maria Rodriguez",
    category: "Trends",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    slug: "future-of-e-residency-trends",
  };

  const blogPosts = [
    {
      title:
        "Estonian E-Residency vs. Lithuanian E-Residency: A Comprehensive Comparison",
      excerpt:
        "Both Estonia and Lithuania offer compelling e-residency programs, but which one is right for your business? This detailed comparison breaks down the pros and cons of each.",
      date: "May 28, 2023",
      author: "Alex Johnson",
      category: "Comparisons",
      image:
        "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800&q=80",
      slug: "estonia-vs-lithuania-e-residency",
    },
    {
      title: "Tax Implications of E-Residency: What You Need to Know",
      excerpt:
        "Understanding the tax implications of e-residency is crucial for optimizing your global business strategy. Learn about corporate taxes, VAT, and personal income considerations.",
      date: "May 12, 2023",
      author: "David Chen",
      category: "Taxation",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
      slug: "tax-implications-e-residency",
    },
    {
      title:
        "How to Choose the Right Banking Solution for Your E-Resident Business",
      excerpt:
        "From traditional banks to fintech platforms, e-residents have more banking options than ever. This guide helps you navigate the choices and find the right solution for your needs.",
      date: "April 30, 2023",
      author: "Sophie Williams",
      category: "Banking",
      image:
        "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&q=80",
      slug: "banking-solutions-e-residents",
    },
    {
      title:
        "Success Story: How Jane Built a 7-Figure Business as an Estonian E-Resident",
      excerpt:
        "Jane transformed her freelance design business into a thriving agency by leveraging Estonian e-residency. Learn about her journey, challenges, and strategies for success.",
      date: "April 15, 2023",
      author: "Michael Brown",
      category: "Success Stories",
      image:
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80",
      slug: "success-story-jane-e-resident",
    },
    {
      title: "The Complete Guide to Portugal's New E-Residency Program",
      excerpt:
        "Portugal has joined the e-residency movement with a program that offers unique benefits. Discover everything you need to know about applying, benefits, and business opportunities.",
      date: "March 22, 2023",
      author: "Ana Silva",
      category: "Guides",
      image:
        "https://images.unsplash.com/photo-1513735492246-483525079686?w=800&q=80",
      slug: "portugal-e-residency-guide",
    },
    {
      title: "Digital Nomad Visas vs. E-Residency: Which Is Right for You?",
      excerpt:
        "With more countries offering digital nomad visas, how do they compare to e-residency programs? This article explores the key differences and helps you make the right choice.",
      date: "March 10, 2023",
      author: "James Wilson",
      category: "Lifestyle",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      slug: "digital-nomad-visas-vs-e-residency",
    },
  ];

  const categories = [
    "All Categories",
    "Guides",
    "Taxation",
    "Banking",
    "Comparisons",
    "Success Stories",
    "Lifestyle",
    "Trends",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
      <Header />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              E-Residency Blog
            </h1>
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
              Expert insights, guides, and news about e-residency programs and
              international business opportunities.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium ${index === 0 ? "bg-blue-600 text-white" : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="uppercase tracking-wide text-sm text-blue-600 dark:text-blue-400 font-semibold mb-1">
                    Featured Post
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-700 dark:text-slate-300 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-slate-600 dark:text-slate-400 mb-6">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{featuredPost.author}</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
                  >
                    Read Full Article
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/20 rounded-full mb-3">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {post.title}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-slate-600 dark:text-slate-400 mb-4">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mb-16">
            <nav className="inline-flex rounded-md shadow-sm">
              <a
                href="#"
                className="px-3 py-2 rounded-l-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
              >
                Previous
              </a>
              <a
                href="#"
                className="px-3 py-2 border-t border-b border-slate-300 dark:border-slate-600 bg-blue-600 text-white hover:bg-blue-700"
              >
                1
              </a>
              <a
                href="#"
                className="px-3 py-2 border-t border-b border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
              >
                2
              </a>
              <a
                href="#"
                className="px-3 py-2 border-t border-b border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
              >
                3
              </a>
              <a
                href="#"
                className="px-3 py-2 rounded-r-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
              >
                Next
              </a>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
              Get the latest e-residency insights, guides, and news delivered
              directly to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2 text-slate-900 dark:text-white"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
