import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

export default function GlossaryPage() {
  const glossaryTerms = [
    {
      term: "E-Residency",
      definition:
        "A digital identity issued by a government that allows non-residents to access services such as company formation, banking, payment processing, and taxation. It does not confer citizenship or physical residency rights.",
    },
    {
      term: "Digital Nomad",
      definition:
        "An individual who works remotely while traveling and living in different locations, often leveraging digital technologies to perform their job duties regardless of their physical location.",
    },
    {
      term: "Digital Signature",
      definition:
        "An electronic signature that is used to authenticate the identity of the sender of a message or document and ensure that the original content is unchanged. E-residency programs often provide legally binding digital signature capabilities.",
    },
    {
      term: "VAT (Value Added Tax)",
      definition:
        "A consumption tax placed on a product whenever value is added at each stage of the supply chain, from production to the point of sale. E-residents must often register for and comply with VAT regulations in their country of e-residency.",
    },
    {
      term: "MOSS (Mini One Stop Shop)",
      definition:
        "A simplified tax compliance scheme that allows businesses to register for VAT in one EU member state and file a single VAT return for all their EU sales, rather than registering in each country where they have customers.",
    },
    {
      term: "KYC (Know Your Customer)",
      definition:
        "The process of verifying the identity of clients and assessing potential risks of illegal intentions for the business relationship. E-residents often undergo KYC procedures when opening bank accounts or using financial services.",
    },
    {
      term: "AML (Anti-Money Laundering)",
      definition:
        "A set of laws, regulations, and procedures intended to prevent criminals from disguising illegally obtained funds as legitimate income. E-resident businesses must comply with AML regulations in their jurisdiction.",
    },
    {
      term: "OÜ (Osaühing)",
      definition:
        "The Estonian term for a private limited company, which is the most common business entity type established by e-residents in Estonia. Similar to an LLC in the United States or an Ltd in the UK.",
    },
    {
      term: "UAB (Uždaroji Akcinė Bendrovė)",
      definition:
        "The Lithuanian term for a private limited liability company, which is the most common business entity type established by e-residents in Lithuania.",
    },
    {
      term: "LDA (Sociedade por Quotas)",
      definition:
        "The Portuguese term for a private limited company, which is a common business entity type for e-residents in Portugal.",
    },
    {
      term: "Tax Residency",
      definition:
        "The country where an individual or company is subject to taxation on their worldwide income. E-residency does not automatically establish tax residency, which is typically determined by physical presence, permanent home, or management location.",
    },
    {
      term: "Double Taxation Treaty",
      definition:
        "An agreement between two countries that determines which country has the right to tax different types of income and prevents the same income from being taxed twice. E-residents should understand relevant treaties between their tax residence country and e-residency country.",
    },
    {
      term: "Permanent Establishment",
      definition:
        "A fixed place of business that generally gives rise to income or value-added tax liability in a particular jurisdiction. E-residents must be careful not to inadvertently create a permanent establishment in countries where they operate.",
    },
    {
      term: "Board Member",
      definition:
        "An individual who is part of the governing body of a company. Some e-residency programs require at least one board member to be a resident of the country or the EU.",
    },
    {
      term: "Registered Address",
      definition:
        "The official address of a company where legal documents can be served. E-resident businesses typically need a registered address in their country of e-residency, often provided through a service provider.",
    },
    {
      term: "Virtual Office",
      definition:
        "A service that provides businesses with a physical address and office-related services without the cost of a long-term lease or administrative staff. Many e-residents use virtual office services in their country of e-residency.",
    },
    {
      term: "SEPA (Single Euro Payments Area)",
      definition:
        "A payment-integration initiative of the European Union for simplification of bank transfers denominated in euro. E-resident businesses in EU countries can make and receive SEPA payments.",
    },
    {
      term: "IBAN (International Bank Account Number)",
      definition:
        "A standard international numbering system for identifying bank accounts across national borders. E-resident businesses typically receive an IBAN for their business bank accounts.",
    },
    {
      term: "eIDAS Regulation",
      definition:
        "European Union regulation on electronic identification and trust services for electronic transactions in the internal market. This regulation ensures that electronic signatures, like those used by e-residents, are recognized across EU member states.",
    },
    {
      term: "Smart-ID",
      definition:
        "A digital authentication solution used in Estonia and other Baltic countries that allows users to securely authenticate themselves and sign documents digitally using a smartphone app.",
    },
  ];

  // Group terms by first letter
  const groupedTerms = glossaryTerms.reduce((acc, term) => {
    const firstLetter = term.term.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(term);
    return acc;
  }, {});

  // Create an array of letters for the alphabet navigation
  const alphabet = Object.keys(groupedTerms).sort();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
      <Header />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
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
              E-Residency Glossary
            </h1>
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
              A comprehensive guide to key terms and definitions related to
              e-residency and international business.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-12">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search glossary terms..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Alphabet Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {alphabet.map((letter) => (
              <a
                key={letter}
                href={`#${letter}`}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white font-medium"
              >
                {letter}
              </a>
            ))}
          </div>

          {/* Glossary Terms */}
          <div className="space-y-12">
            {alphabet.map((letter) => (
              <div key={letter} id={letter} className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">
                  {letter}
                </h2>
                <div className="space-y-6">
                  {groupedTerms[letter].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6"
                    >
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                        {item.term}
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300">
                        {item.definition}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Related Resources */}
          <div className="mt-16 bg-white dark:bg-slate-800 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
              Related Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/resources/ebooks"
                className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg hover:shadow-md transition-shadow text-center"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  E-Books
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  Comprehensive guides on e-residency and international business
                </p>
              </Link>
              <Link
                href="/blog"
                className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg hover:shadow-md transition-shadow text-center"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Blog
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  Latest articles and insights on e-residency topics
                </p>
              </Link>
              <Link
                href="/faq"
                className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg hover:shadow-md transition-shadow text-center"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  FAQ
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  Answers to commonly asked questions about e-residency
                </p>
              </Link>
            </div>
          </div>

          {/* Have a Question */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              Our e-residency experts are ready to answer your specific
              questions.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
