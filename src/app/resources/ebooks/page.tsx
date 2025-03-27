import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { Download, FileText, Calendar, ArrowLeft } from "lucide-react";

export default function EbooksPage() {
  const ebooks = [
    {
      title: "The Ultimate Guide to Estonian E-Residency",
      description:
        "Everything you need to know about Estonia's pioneering e-residency program, from application to business setup and management.",
      image:
        "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=800&q=80",
      pages: 48,
      publishDate: "May 2023",
      category: "Country Guide",
      slug: "estonian-e-residency-guide",
    },
    {
      title: "Tax Optimization Strategies for E-Residents",
      description:
        "Learn legal tax optimization strategies available to e-residents across different jurisdictions, with practical examples and expert advice.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
      pages: 36,
      publishDate: "April 2023",
      category: "Taxation",
      slug: "tax-optimization-guide",
    },
    {
      title: "Banking Solutions for E-Resident Businesses",
      description:
        "A comprehensive overview of banking options available to e-residents, from traditional banks to fintech platforms and payment processors.",
      image:
        "https://images.unsplash.com/photo-1616077168712-fc6c788c2efd?w=800&q=80",
      pages: 32,
      publishDate: "March 2023",
      category: "Banking",
      slug: "banking-solutions-guide",
    },
    {
      title: "Lithuanian E-Residency: The Complete Guide",
      description:
        "Explore Lithuania's e-residency program, its benefits for fintech entrepreneurs, and how to leverage its business-friendly environment.",
      image:
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80",
      pages: 42,
      publishDate: "February 2023",
      category: "Country Guide",
      slug: "lithuanian-e-residency-guide",
    },
    {
      title: "E-Residency for Digital Nomads",
      description:
        "How digital nomads can benefit from e-residency programs, with practical tips for managing a location-independent business.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      pages: 28,
      publishDate: "January 2023",
      category: "Lifestyle",
      slug: "e-residency-digital-nomads",
    },
    {
      title: "Compliance Guide for E-Resident Businesses",
      description:
        "Navigate the compliance requirements for e-resident businesses, including reporting obligations, VAT, and international regulations.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      pages: 38,
      publishDate: "December 2022",
      category: "Compliance",
      slug: "compliance-guide",
    },
    {
      title: "Portugal's E-Residency Program Explained",
      description:
        "A detailed look at Portugal's new e-residency program, its unique features, and how it compares to other established programs.",
      image:
        "https://images.unsplash.com/photo-1513735492246-483525079686?w=800&q=80",
      pages: 34,
      publishDate: "November 2022",
      category: "Country Guide",
      slug: "portugal-e-residency-guide",
    },
    {
      title: "E-Residency Success Stories: Case Studies",
      description:
        "Real-world examples of entrepreneurs who have successfully leveraged e-residency to grow their international businesses.",
      image:
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80",
      pages: 30,
      publishDate: "October 2022",
      category: "Case Studies",
      slug: "e-residency-success-stories",
    },
  ];

  const categories = [
    "All Categories",
    "Country Guide",
    "Taxation",
    "Banking",
    "Compliance",
    "Lifestyle",
    "Case Studies",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
      <Header />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link
              href="/resources"
              className="flex items-center text-blue-600 dark:text-blue-500 hover:underline"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Resources
            </Link>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              E-Residency E-Books
            </h1>
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
              Comprehensive guides and resources to help you navigate the world
              of e-residency and international business.
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

          {/* E-Books Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {ebooks.map((ebook, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={ebook.image}
                    alt={ebook.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <div className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/20 rounded-full mb-3">
                    {ebook.category}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {ebook.title}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-4 text-sm">
                    {ebook.description}
                  </p>
                  <div className="flex items-center text-sm text-slate-600 dark:text-slate-400 mb-4">
                    <div className="flex items-center mr-4">
                      <FileText className="h-4 w-4 mr-1" />
                      <span>{ebook.pages} pages</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{ebook.publishDate}</span>
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <Link
                    href={`/resources/ebooks/${ebook.slug}`}
                    className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download E-Book
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Lead Magnet */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg p-8 text-white mb-16">
            <div className="md:flex items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h2 className="text-2xl font-bold mb-4">
                  Get Our Latest E-Book: The Future of E-Residency
                </h2>
                <p className="text-white/80 mb-6">
                  Discover emerging trends, new programs, and future
                  opportunities in the evolving landscape of digital residency
                  and global business.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-emerald-300 mr-2">✓</span>
                    <span>Exclusive insights from e-residency experts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-300 mr-2">✓</span>
                    <span>Analysis of upcoming e-residency programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-300 mr-2">✓</span>
                    <span>
                      Future-proof strategies for global entrepreneurs
                    </span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/3">
                <div className="bg-white/10 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">
                    Subscribe to Download
                  </h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-white placeholder-white/60"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-white placeholder-white/60"
                    />
                    <button className="w-full bg-white text-blue-600 hover:bg-blue-50 py-2 rounded-md font-medium">
                      Get Free E-Book
                    </button>
                  </div>
                  <p className="text-xs text-white/60 mt-2">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Custom E-Book Request */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Need a Custom E-Residency Guide?
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
              Our experts can create personalized guides tailored to your
              specific business needs and circumstances.
            </p>
            <Link
              href="/consultation"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium"
            >
              Request a Custom Guide
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
