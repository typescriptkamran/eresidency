import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, HelpCircle, Bookmark } from "lucide-react";
import { AnimatedHero } from "@/components/shared/animated-hero";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedHero
            title="Global E-Residency Resources"
            subtitle="Access our comprehensive collection of guides, articles, and tools"
            imageSrc="https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=1200&q=80"
            imageAlt="Global E-Residency resources and guides"
            height="md:h-[350px]"
          />
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-12">
            Access our comprehensive collection of guides, articles, and tools
            to help you navigate the world of Global E-Residency and international
            business setup.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Link href="/blog" className="group">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:translate-y-[-5px]">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Blog
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Latest articles, news, and updates about Global E-Residency programs
                  worldwide.
                </p>
              </div>
            </Link>

            <Link href="/resources/ebooks" className="group">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:translate-y-[-5px]">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  E-Books
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Comprehensive guides on Global E-Residency, taxation, and business
                  setup.
                </p>
              </div>
            </Link>

            <Link href="/faq" className="group">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:translate-y-[-5px]">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                  <HelpCircle className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  FAQ
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Answers to commonly asked questions about Global E-Residency
                  programs.
                </p>
              </div>
            </Link>

            <Link href="/resources/glossary" className="group">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:translate-y-[-5px]">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-4">
                  <Bookmark className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Glossary
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Definitions of key terms related to Global E-Residency and
                  international business.
                </p>
              </div>
            </Link>
          </div>

          <div className="bg-blue-50 dark:bg-slate-800 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Featured Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Ultimate Guide to Estonian Global E-Residency
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  Everything you need to know about Estonia's pioneering
                  Global E-Residency program, from application to business setup.
                </p>
                <Button asChild variant="outline">
                  <Link href="/resources/ebooks/estonian-Global E-Residency-guide">
                    Download Guide
                  </Link>
                </Button>
              </div>
              <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Tax Optimization Strategies for E-Residents
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  Learn legal tax optimization strategies available to
                  e-residents across different jurisdictions.
                </p>
                <Button asChild variant="outline">
                  <Link href="/resources/ebooks/tax-optimization-guide">
                    Download Guide
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6 text-center max-w-2xl mx-auto">
              Stay updated with the latest Global E-Residency news, resources, and
              special offers delivered directly to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2 text-slate-900 dark:text-white"
                />
                <Button type="submit">Subscribe</Button>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 text-center">
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
