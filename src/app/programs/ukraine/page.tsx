import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowLeft, Download, FileText, CheckCircle } from "lucide-react";

export default function UkrainePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
      <Header />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link
              href="/programs"
              className="flex items-center text-indigo-600 dark:text-indigo-500 hover:underline"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Programs
            </Link>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg overflow-hidden">
            <div className="h-64 bg-gradient-to-r from-indigo-500 to-indigo-700 flex items-center justify-center p-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
                Ukraine Global E-Residency Program
              </h1>
            </div>

            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    Emerging Digital Hub
                  </h2>

                  <p className="text-slate-700 dark:text-slate-300 mb-6">
                    Ukraine's Global E-Residency program is part of the country's
                    ambitious Diia City initiative, designed to create a special
                    legal framework for the IT industry. Despite current
                    challenges, Ukraine continues to develop its digital
                    infrastructure and position itself as an emerging tech hub
                    in Eastern Europe.
                  </p>

                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Key Benefits
                  </h3>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-emerald-500 mr-2 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-slate-900 dark:text-white">
                          IT-Focused Framework
                        </span>
                        <p className="text-slate-600 dark:text-slate-400">
                          Special legal regime designed specifically for IT
                          companies and professionals.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-emerald-500 mr-2 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-slate-900 dark:text-white">
                          Competitive Tax Rates
                        </span>
                        <p className="text-slate-600 dark:text-slate-400">
                          Favorable tax conditions for IT businesses and
                          contractors within the Diia City framework.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-emerald-500 mr-2 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-slate-900 dark:text-white">
                          Talent Access
                        </span>
                        <p className="text-slate-600 dark:text-slate-400">
                          Connect with Ukraine's large pool of skilled IT
                          professionals and developers.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-emerald-500 mr-2 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-slate-900 dark:text-white">
                          Digital Infrastructure
                        </span>
                        <p className="text-slate-600 dark:text-slate-400">
                          Access to Ukraine's rapidly developing digital
                          government services and infrastructure.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-emerald-500 mr-2 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-slate-900 dark:text-white">
                          Cost-Effective Operations
                        </span>
                        <p className="text-slate-600 dark:text-slate-400">
                          Lower operational costs compared to many Western
                          European locations.
                        </p>
                      </div>
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Application Process
                  </h3>

                  <ol className="list-decimal list-inside space-y-3 mb-8 text-slate-700 dark:text-slate-300">
                    <li>Register through Ukraine's Diia portal</li>
                    <li>Complete the Global E-Residency application form</li>
                    <li>Pay the application fee (approximately €100)</li>
                    <li>Undergo verification process</li>
                    <li>Receive digital identity credentials</li>
                    <li>
                      Register your business under the Diia City framework if
                      eligible
                    </li>
                  </ol>

                  <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 mb-8">
                    <p className="text-amber-800 dark:text-amber-200 font-medium">
                      Important Note: Due to the current situation in Ukraine,
                      some aspects of the Global E-Residency program may be temporarily
                      modified or have limited functionality. Our consultants
                      can provide you with the most up-to-date information.
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Requirements
                  </h3>

                  <ul className="list-disc list-inside space-y-2 mb-8 text-slate-700 dark:text-slate-300">
                    <li>Valid passport or government-issued ID</li>
                    <li>Digital photo</li>
                    <li>Business purpose statement</li>
                    <li>Payment method for application fee</li>
                    <li>Clean criminal record</li>
                    <li>For Diia City: IT-related business activities</li>
                  </ul>
                </div>

                <div className="md:w-1/3">
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 sticky top-8">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                      Ready to Get Started?
                    </h3>

                    <p className="text-slate-700 dark:text-slate-300 mb-6">
                      Our team of experts can guide you through the Ukrainian
                      Global E-Residency application process and help you understand
                      the current status and opportunities.
                    </p>

                    <Link
                      href="/consultation"
                      className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-md font-medium text-center mb-4"
                    >
                      Schedule a Consultation
                    </Link>

                    <Link
                      href="/services/application"
                      className="block w-full bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 border border-indigo-600 dark:border-indigo-400 py-3 px-4 rounded-md font-medium text-center mb-6"
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
                            className="flex items-center text-indigo-600 dark:text-indigo-500 hover:underline"
                          >
                            <FileText className="h-4 w-4 mr-2" />
                            Ukraine Global E-Residency Guide
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="flex items-center text-indigo-600 dark:text-indigo-500 hover:underline"
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
              Compare with Other Global E-Residency Programs
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              Not sure if Ukraine is the right fit for your business needs?
              Compare with other available programs.
            </p>
            <Link
              href="/comparisons"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium"
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
