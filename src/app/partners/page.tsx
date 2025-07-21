import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Handshake, Globe, Award, Users } from "lucide-react";

type Partner = {
  name: string;
  logo: string;
  description: string;
  type: string;
};

export default function PartnersPage() {
  const partners: Partner[] = [
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
      description: "Legal technology firm providing digital identity verification and document processing for Global E-Residency applications.",
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
              We collaborate with trusted service providers, financial institutions, and community organizations to deliver comprehensive Global E-Residency solutions to our clients worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {partners.map((partner) => (
              <div key={partner.name} className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
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
              {[
                {
                  icon: <Globe className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
                  title: "Global Reach",
                  desc: "Access our international client base of entrepreneurs and businesses seeking Global E-Residency solutions.",
                  bg: "bg-blue-100 dark:bg-blue-900",
                },
                {
                  icon: <Handshake className="h-5 w-5 text-green-600 dark:text-green-400" />,
                  title: "Collaborative Growth",
                  desc: "Develop joint service offerings and marketing initiatives to expand your business.",
                  bg: "bg-green-100 dark:bg-green-900",
                },
                {
                  icon: <Award className="h-5 w-5 text-purple-600 dark:text-purple-400" />,
                  title: "Credibility & Trust",
                  desc: "Associate with our established brand and reputation in the Global E-Residency consulting space.",
                  bg: "bg-purple-100 dark:bg-purple-900",
                },
                {
                  icon: <Users className="h-5 w-5 text-orange-600 dark:text-orange-400" />,
                  title: "Knowledge Exchange",
                  desc: "Share expertise and insights with our network of specialists in complementary fields.",
                  bg: "bg-orange-100 dark:bg-orange-900",
                },
              ].map((benefit, index) => (
                <div key={index} className="bg-white dark:bg-slate-700 p-6 rounded-lg">
                  <div className="flex items-start mb-4">
                    <div className={`w-10 h-10 ${benefit.bg} rounded-full flex items-center justify-center mr-4`}>
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{benefit.title}</h3>
                      <p className="text-slate-700 dark:text-slate-300">{benefit.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg mb-16">
            <div className="md:flex items-center">
              <div className="md:w-2/3 md:pr-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Become a Partner
                </h2>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  Join our growing ecosystem of trusted partners and expand your reach in the Global E-Residency market. Let’s create impactful solutions together.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center md:justify-end mt-6 md:mt-0">
                <Button asChild size="lg">
                  <Link href="/contact">Partner With Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
