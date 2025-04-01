import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowLeft, Download, FileText, CheckCircle } from "lucide-react";
import { AnimatedHero } from "@/components/shared/animated-hero";

export default function EstoniaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
      <Header />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link
              href="/programs"
              className="flex items-center text-blue-600 dark:text-blue-500 hover:underline"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Programs
            </Link>
          </div>

          <div className="relative mb-12">
            <AnimatedHero
              title="Estonia E-Residency Program"
              subtitle="The world's first digital residency program offering global entrepreneurs access to the EU market"
              imageSrc="https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=1200&q=80"
              imageAlt="Tallinn, Estonia cityscape with digital overlay"
              height="md:h-[400px]"
              overlayColor="from-blue-900/80 to-blue-800/60"
            />
            <div className="absolute top-6 right-6 md:top-10 md:right-10 w-16 h-10 md:w-24 md:h-16 rounded-md overflow-hidden shadow-lg z-30">
              <img
                src="https://images.unsplash.com/photo-1508945603530-36fe98aa1b4b?w=400&q=80"
                alt="Estonian flag"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    The Pioneer of Digital Residency
                  </h2>

                  <p className="text-slate-700 dark:text-slate-300 mb-6">
                    Estonia launched the world's first e-residency program in
                    2014, revolutionizing how entrepreneurs interact with
                    government services. As an Estonian e-resident, you gain a
                    government-issued digital identity and access to Estonia's
                    transparent digital business environment.
                  </p>

                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Key Benefits
                  </h3>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-emerald-500 mr-2 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-slate-900 dark:text-white">
                          100% Online Business Management
                        </span>
                        <p className="text-slate-600 dark:text-slate-400">
                          Run your company remotely from anywhere in the world
                          with minimal bureaucracy.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-emerald-500 mr-2 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-slate-900 dark:text-white">
                          EU Market Access
                        </span>
                        <p className="text-slate-600 dark:text-slate-400">
                          Establish an EU-based company with access to the
                          European single market and payment providers.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-emerald-500 mr-2 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-slate-900 dark:text-white">
                          Favorable Tax System
                        </span>
                        <p className="text-slate-600 dark:text-slate-400">
                          0% corporate income tax on reinvested profits, with
                          taxation only when profits are distributed.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-emerald-500 mr-2 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-slate-900 dark:text-white">
                          Digital Signatures
                        </span>
                        <p className="text-slate-600 dark:text-slate-400">
                          Legally sign documents remotely, recognized throughout
                          the EU under eIDAS regulation.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-emerald-500 mr-2 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-slate-900 dark:text-white">
                          Banking & Payment Solutions
                        </span>
                        <p className="text-slate-600 dark:text-slate-400">
                          Access to Estonian and EU banking services, fintech
                          solutions, and payment providers.
                        </p>
                      </div>
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Application Process
                  </h3>

                  <ol className="list-decimal list-inside space-y-3 mb-8 text-slate-700 dark:text-slate-300">
                    <li>
                      Complete the online application form and pay the state fee
                      (€120)
                    </li>
                    <li>Undergo background verification (typically 30 days)</li>
                    <li>
                      Collect your digital ID card in person at an Estonian
                      embassy or consulate
                    </li>
                    <li>Set up your digital ID and authentication tools</li>
                    <li>
                      Register your company online through the e-Business
                      Register
                    </li>
                  </ol>

                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Requirements
                  </h3>

                  <ul className="list-disc list-inside space-y-2 mb-8 text-slate-700 dark:text-slate-300">
                    <li>Valid government-issued ID or passport</li>
                    <li>Digital photo</li>
                    <li>Motivation statement</li>
                    <li>Payment method for state fee</li>
                    <li>Clean criminal record</li>
                  </ul>
                </div>

                <div className="md:w-1/3">
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 sticky top-8">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                      Ready to Get Started?
                    </h3>

                    <p className="text-slate-700 dark:text-slate-300 mb-6">
                      Our team of experts can guide you through the entire
                      Estonian e-residency application process and help set up
                      your business.
                    </p>

                    <Link
                      href="/consultation"
                      className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-medium text-center mb-4"
                    >
                      Schedule a Consultation
                    </Link>

                    <Link
                      href="/services/application"
                      className="block w-full bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 py-3 px-4 rounded-md font-medium text-center mb-6"
                    >
                      Application Assistance
                    </Link>

                    <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
                      <h4 className="font-medium text-slate-900 dark:text-white mb-3">
                        Resources
                      </h4>

                      <ul className="space-y-3">
                        <li>
                          <Link
                            href="/resources/ebooks"
                            className="flex items-center text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <FileText className="h-4 w-4 mr-2" />
                            Estonia E-Residency Guide
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="flex items-center text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Application Checklist
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Compare with Other E-Residency Programs
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              Not sure if Estonia is the right fit for your business needs?
              Compare with other available programs.
            </p>
            <Link
              href="/comparisons"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium"
            >
              View Comparisons
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
