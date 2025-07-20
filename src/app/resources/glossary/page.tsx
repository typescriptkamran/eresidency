"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ArrowUp } from "lucide-react";

export default function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("");

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
      term: "EU Company",
      definition:
        "A business entity established within the European Union, providing access to the single market and various business advantages including simplified cross-border operations.",
    },
    {
      term: "Tax Residency",
      definition:
        "The country where an individual or business is considered a resident for tax purposes, determining which tax laws and rates apply to their income and assets.",
    },
    {
      term: "Corporate Income Tax",
      definition:
        "A tax imposed on the profits of corporations. In Estonia, this tax is only applied when profits are distributed, making it attractive for reinvestment.",
    },
    {
      term: "VAT (Value Added Tax)",
      definition:
        "A consumption tax placed on products and services at each stage of the supply chain where value is added, from initial production to the point of sale.",
    },
    {
      term: "SEPA (Single Euro Payments Area)",
      definition:
        "A payment integration initiative that makes bank transfers throughout the eurozone as easy as domestic payments, facilitating business operations across EU countries.",
    },
    {
      term: "KYC (Know Your Customer)",
      definition:
        "A process used by businesses to verify the identity of their clients and assess potential risks of illegal intentions for the business relationship.",
    },
    {
      term: "AML (Anti-Money Laundering)",
      definition:
        "A set of laws, regulations, and procedures intended to prevent criminals from disguising illegally obtained funds as legitimate income.",
    },
    {
      term: "Apostille",
      definition:
        "A form of authentication issued to documents for use in countries that have joined the Hague Apostille Convention, simplifying the process of document legalization.",
    },
    {
      term: "Board Resolution",
      definition:
        "A formal document that records decisions made by a company's board of directors, often required for significant business transactions and changes.",
    },
    {
      term: "Beneficial Owner",
      definition:
        "The natural person who ultimately owns or controls a legal entity or arrangement, or the natural person on whose behalf a transaction is being conducted.",
    },
    {
      term: "Compliance",
      definition:
        "The act of conforming to or meeting rules, regulations, standards, and laws that apply to a business or individual in their jurisdiction.",
    },
    {
      term: "Double Taxation Treaty",
      definition:
        "An agreement between two countries to avoid taxing the same income twice, providing relief for individuals and businesses operating internationally.",
    },
    {
      term: "FATCA (Foreign Account Tax Compliance Act)",
      definition:
        "A United States federal law requiring US citizens and residents to report their foreign financial accounts and offshore assets to the IRS.",
    },
    {
      term: "Incorporation",
      definition:
        "The legal process used to form a corporate entity or company, creating a separate legal entity distinct from its owners.",
    },
    {
      term: "Jurisdiction",
      definition:
        "The official power to make legal decisions and judgments, or the territory within which this power can be exercised.",
    },
    {
      term: "Limited Liability Company (LLC)",
      definition:
        "A business structure that combines the pass-through taxation of a partnership or sole proprietorship with the limited liability of a corporation.",
    },
    {
      term: "Memorandum of Association",
      definition:
        "A legal document that establishes a company and defines its relationship with shareholders, including the company's objectives and powers.",
    },
    {
      term: "Nominee Director",
      definition:
        "A person who acts as a director of a company on behalf of another person or entity, often used for privacy or compliance purposes.",
    },
    {
      term: "OÜ (Osaühing)",
      definition:
        "The Estonian equivalent of a private limited company, the most common business structure for e-residents establishing companies in Estonia.",
    },
    {
      term: "Power of Attorney",
      definition:
        "A legal document that gives one person the authority to act for another person in specified or all legal or financial matters.",
    },
    {
      term: "Registered Office",
      definition:
        "The official address of a company as registered with the relevant authorities, where official correspondence and legal documents are sent.",
    },
    {
      term: "Share Capital",
      definition:
        "The money invested in a company by its shareholders in exchange for shares of ownership, representing the company's equity funding.",
    },
    {
      term: "Statutory Declaration",
      definition:
        "A legal document defined by law that allows a person to declare something to be true in the presence of an authorized witness.",
    },
    {
      term: "Transfer Pricing",
      definition:
        "The pricing of transactions between related entities within a multinational enterprise, subject to specific regulations to prevent tax avoidance.",
    },
    {
      term: "Withholding Tax",
      definition:
        "A tax deducted at source from payments such as dividends, interest, or royalties, often applied to cross-border transactions.",
    },
  ];

  // Filter terms based on search and selected letter
  const filteredTerms = glossaryTerms.filter((term) => {
    const matchesSearch =
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLetter =
      selectedLetter === "" ||
      term.term.charAt(0).toUpperCase() === selectedLetter;
    return matchesSearch && matchesLetter;
  });

  // Group terms by first letter
  const groupedTerms: Record<string, typeof glossaryTerms> =
    filteredTerms.reduce(
      (acc, term) => {
        const firstLetter = term.term.charAt(0).toUpperCase();
        if (!acc[firstLetter]) {
          acc[firstLetter] = [];
        }
        acc[firstLetter].push(term);
        return acc;
      },
      {} as Record<string, typeof glossaryTerms>,
    );

  // Create an array of letters for the alphabet navigation
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const availableLetters = Object.keys(groupedTerms).sort();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToLetter = (letter: string) => {
    const element = document.getElementById(`letter-${letter}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              E-Residency Glossary
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Your comprehensive guide to e-residency, digital business, and
              international tax terminology. Understanding these key terms will
              help you navigate the world of digital entrepreneurship.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Navigation */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search terms or definitions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Alphabet Navigation */}
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              variant={selectedLetter === "" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedLetter("")}
              className="min-w-[40px]"
            >
              All
            </Button>
            {alphabet.map((letter) => {
              const hasTerms = availableLetters.includes(letter);
              return (
                <Button
                  key={letter}
                  variant={selectedLetter === letter ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setSelectedLetter(letter);
                    if (hasTerms) {
                      setTimeout(() => scrollToLetter(letter), 100);
                    }
                  }}
                  disabled={!hasTerms}
                  className="min-w-[40px]"
                >
                  {letter}
                </Button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredTerms.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-300 text-lg">
              No terms found matching your search criteria.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {availableLetters.map((letter) => (
              <div
                key={letter}
                id={`letter-${letter}`}
                className="scroll-mt-32"
              >
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">
                  {letter}
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {groupedTerms[letter].map((item, index) => (
                    <Card key={`${letter}-${index}`} className="h-full">
                      <CardHeader>
                        <CardTitle className="text-lg text-blue-600 dark:text-blue-400">
                          {item.term}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          {item.definition}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 rounded-full w-12 h-12 shadow-lg"
        size="icon"
      >
        <ArrowUp className="h-4 w-4" />
      </Button>

      {/* Footer */}
      <div className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-slate-600 dark:text-slate-300">
              Need help with e-residency applications or have questions about
              these terms?
            </p>
            <p className="text-slate-600 dark:text-slate-300 mt-2">
              <a
                href="/contact"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Contact our experts
              </a>{" "}
              for personalized guidance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
