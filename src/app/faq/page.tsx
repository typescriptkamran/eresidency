"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
      <Header />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 text-center">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-12 text-center">
            Find answers to common questions about e-residency programs and our services.
          </p>

          <div className="space-y-6 mb-12">
            <FAQItem
              question="What is e-residency?"
              answer="E-residency is a digital identity issued by a government that allows non-residents to access services such as company formation, banking, payment processing, and taxation. It does not confer citizenship or physical residency rights, but enables digital entrepreneurship from anywhere in the world."
            />
            <FAQItem
              question="Which countries offer e-residency programs?"
              answer="Currently, Estonia, Lithuania, Portugal, and Ukraine offer established e-residency programs, with Estonia being the pioneer. Each program has different features, benefits, and requirements tailored to their specific jurisdictions."
            />
            <FAQItem
              question="Do I need to visit the country to obtain e-residency?"
              answer="In most cases, you will need to visit an embassy or consulate of the country to complete identity verification and collect your digital ID. Some programs are working on fully remote solutions, but currently, at least one in-person visit is typically required."
            />
            <FAQItem
              question="How long does it take to get e-residency?"
              answer="Processing times vary by country. Estonian e-residency typically takes 2-4 weeks, Lithuanian e-residency 3-6 weeks, Portuguese e-residency 4-8 weeks, and Ukrainian e-residency 1-3 weeks. These timeframes may vary based on application volume and individual circumstances."
            />
            <FAQItem
              question="What are the costs involved in obtaining e-residency?"
              answer="Application fees range from €50-150 depending on the country. Additional costs may include company registration fees, legal address services, accounting services, and banking fees. Our consultation services can provide a detailed breakdown of all costs for your specific situation."
            />
            <FAQItem
              question="Can I open a bank account with e-residency?"
              answer="E-residency itself does not guarantee bank account approval, but it does make you eligible to apply for banking services in the respective country. Estonia and Lithuania have well-developed fintech ecosystems with various banking options for e-residents. Our banking solutions service can help navigate this process."
            />
            <FAQItem
              question="What tax benefits do e-residents receive?"
              answer="Tax benefits vary by country. Estonia offers 0% corporate tax on reinvested profits, while Lithuania and Portugal have their own tax incentives. However, your personal tax obligations depend on your tax residency, which is typically determined by where you physically reside. We recommend consulting with a tax professional for your specific situation."
            />
            <FAQItem
              question="Does e-residency give me the right to live in the country?"
              answer="No, e-residency is not a visa or residence permit. It does not grant the right to live in or visit the country. It is purely a digital identity for business purposes. Portugal's program does offer potential pathways to physical residency through complementary programs."
            />
            <FAQItem
              question="How can your services help me with e-residency?"
              answer="Our services include application assistance, business setup, banking solutions, and tax advisory. We guide you through the entire process from selecting the right e-residency program to establishing and running your business. Our experts have helped hundreds of entrepreneurs successfully navigate the e-residency landscape."
            />
            <FAQItem
              question="Can I have multiple e-residencies?"
              answer="Yes, you can apply for and hold e-residency status in multiple countries simultaneously. This can provide additional flexibility for your business operations and access to different markets and services."
            />
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 text-center">
              Still Have Questions?
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6 text-center">
              Our e-residency experts are ready to help you with personalized answers to your specific questions.
            </p>
            <div className="flex justify-center">
              <Link
                href="/consultation"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium"
              >
                Schedule a Free Consultation
              </Link>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Explore Related Resources
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                href="/resources/ebooks"
                className="bg-white dark:bg-slate-700 p-4 rounded-md hover:shadow-md transition-shadow"
              >
                <h4 className="font-medium text-slate-900 dark:text-white mb-1">
                  E-Books
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Comprehensive guides on e-residency
                </p>
              </Link>
              <Link
                href="/blog"
                className="bg-white dark:bg-slate-700 p-4 rounded-md hover:shadow-md transition-shadow"
              >
                <h4 className="font-medium text-slate-900 dark:text-white mb-1">
                  Blog
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Latest articles and updates
                </p>
              </Link>
              <Link
                href="/resources/glossary"
                className="bg-white dark:bg-slate-700 p-4 rounded-md hover:shadow-md transition-shadow"
              >
                <h4 className="font-medium text-slate-900 dark:text-white mb-1">
                  Glossary
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Key terms and definitions
                </p>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
      <button
        className="w-full flex justify-between items-center p-4 text-left bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-slate-500 dark:text-slate-400" />
        ) : (
          <ChevronDown className="h-5 w-5 text-slate-500 dark:text-slate-400" />
        )}
      </button>
      {isOpen && (
        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700">
          <p className="text-slate-700 dark:text-slate-300">{answer}</p>
        </div>
      )}
    </div>
  );
}
