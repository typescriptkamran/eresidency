import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Handshake, Globe, Award, Users } from "lucide-react";

export default function PartnersPage() {
  const partners = [
    {
      name: "Baltic Business Services",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=BBS&backgroundColor=0284c7&textColor=ffffff",
      description: "Leading business service provider in Estonia offering accounting, legal, and administrative support for e-residents.",
      type: "Service Provider",
    },
    {
      name: "Global Tax Advisors",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=GTA&backgroundColor=059669&textColor=ffffff",
      description: "International tax advisory firm specializing in cross-border taxation and compliance for digital businesses.",
      type: "Tax Consultant",
    },
    {
      name: "Digital Nomad Association",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=DNA&backgroundColor=7c3aed&textColor=ffffff",
      description: "Community organization supporting location-independent professionals with resources and networking opportunities.",
      type: "Community Partner",
    },
    {
      name: "EuroFintech Solutions",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=EFS&backgroundColor=db2777&textColor=ffffff",
      description: "Banking and payment solutions provider offering specialized services for e-resident businesses across Europe.",
      type: "Financial Partner",
    },
    {
      name: "Legal Tech Innovations",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=LTI&backgroundColor=ea580c&textColor=ffffff",
      description: "Legal technology firm providing digital identity verification and document processing for e-residency applications.",
      type: "Technology Partner",
    },
    {
      name: "Startup Ecosystem Alliance",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=SEA&backgroundColor=4f46e5&textColor=ffffff",
      description: "Network of startup incubators and accelerators supporting e-resident entrepreneurs with mentorship and resources.",
      type: "Ecosystem Partner",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Our Partners
            </h1>
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
              We collaborate with trusted service providers, financial institutions, and community organizations to deliver comprehensive e-residency solutions to our clients worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 flex items-center justify-center bg-slate-50 dark:bg-slate-700">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-24 w-24 object-contain"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{partner.name}</h3>
                    <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                      {partner.type}
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-6">{partner.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/partners/${partner.name.toLowerCase().replace(/\s+/g, '-')}`}>Learn More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 dark:bg-slate-800 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              Partnership Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-slate-700 p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                    <Globe className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Global Reach</h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      Access our international client base of entrepreneurs and businesses seeking e-residency solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-700 p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-4">
                    <Handshake className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Collaborative Growth</h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      Develop joint service offerings and marketing initiatives to expand your business.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-700 p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-4">
                    <Award className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Credibility & Trust</h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      Associate with our established brand and reputation in the e-residency consulting space.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-700 p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Knowledge Exchange</h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      Share expertise and insights with our network of specialists in complementary fields.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg mb-16">
            <div className="md:flex items-center">
              <div className="md:w-2/3 md:pr-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white