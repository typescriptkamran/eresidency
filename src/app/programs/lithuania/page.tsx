import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowLeft, Download, FileText, CheckCircle } from "lucide-react";

export default function LithuaniaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
      <Header />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link
              href="/programs"
              className="flex items-center text-green-600 dark:text-green-500 hover:underline"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Programs
            </Link>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg overflow-hidden">
            <div className="h-64 bg-gradient-to-r from-green-500 to-green-700 flex items-center justify-center p-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
                Lithuania E-Residency Program
              </h1>
            </div>

            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    Europe's Fintech Hub
                  </h2>

                  <p className="text-slate-700 dark:text-slate-300 mb-6">
                    Lithuania's e-residency program offers entrepreneurs a
                    gateway to one of Europe's most dynamic fintech ecosystems.
                    With a business-friendly regulatory environment and
                    streamlined processes, Lithuania has positioned itself as an
                    attractive destination for digital businesses.
                  </p>

                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Key Benefits
                  </h3>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-emerald-500 mr-2 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-slate-900 dark:text-white">
                          Fintech-Friendly Environment
                        </span>
                        <p className="text-slate-600 dark:text-slate-400">
                          Access to one of Europe's most progressive regulatory
                          frameworks for fintech companies.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-emerald-500 mr-2 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-slate-900 dark:text-white">
                          Fast Company Registration
                        </span>
                        <p className="text-slate-600 dark:text-slate-400">
                          Register a company in as little as 3 business days
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
                          Establish an EU-based business with access to the
                          European single market.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-emerald-500 mr-2 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-slate-900 dark:text-white">
                          Banking Excellence
                        </span>
                        <p className="text-slate-600 dark:text-slate-400">
                          Access to Lithuania's robust banking system and
                          numerous fintech payment solutions.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-emerald-500 mr-2 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-slate-900 dark:text-white">
                          Remote Business Management
                        </span>
                        <p className="text-slate-600 dark:text-slate-400">
                          Manage your Lithuanian company remotely with digital
                          tools and services.
                        </p>
                      </div>
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Application Process
                  </h3>

                  <ol className="list-decimal list-inside space-y-3 mb-8 text-slate-700 dark:text-slate-300">
                    <li>
                      Submit your application through the official Lithuanian
                      e-residency portal
                    </li>
                    <li>
                      Pay the state fee (€90-120 depending on processing time)
                    </li>
                    <li>
                      Undergo background verification (typically 1-4 weeks)
                    </li>
                    <li>
                      Collect your digital ID card at a Lithuanian embassy or
                      consulate
                    </li>
                    <li>
                      Set up your digital identity and authentication tools
                    </li>
                    <li>
                      Register your company through the Center of Registers
                    </li>
                  </ol>

                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Requirements
                  </h3>

                  <ul className="list-disc list-inside space-y-2 mb-8 text-slate-700 dark:text-slate-300">
                    <li>Valid passport or government-issued ID</li>
                    <li>Digital photo</li>
                    <li>Business purpose statement</li>
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
                      Lithuanian e-residency application process and help set up
                      your business.
                    </p>

                    <Link
                      href="/consultation"
                      className="block w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-md font-medium text-center mb-4"
                    >
                      Schedule a Consultation
                    </Link>

                    <Link
                      href="/services/application"
                      className="block w-full bg-white dark:bg-slate-700 text-green-600 dark:text-green-400 border border-green-600 dark:border-green-400 py-3 px-4 rounded-md font-medium text-center mb-6"
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
                            className="flex items-center text-green-600 dark:text-green-500 hover:underline"
                          >
                            <FileText className="h-4 w-4 mr-2" />
                            Lithuania E-Residency Guide
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="flex items-center text-green-600 dark:text-green-500 hover:underline"
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
              Not sure if Lithuania is the right fit for your business needs?
              Compare with other available programs.
            </p>
            <Link
              href="/comparisons"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium"
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
