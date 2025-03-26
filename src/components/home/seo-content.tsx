import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileText, Globe, Briefcase, MapPin } from "lucide-react";

export function SEOContent() {
  const seoContent = [
    {
      id: "estonia",
      title: "E-Residency in Estonia",
      icon: <Globe className="h-5 w-5 text-blue-500" />,
      content: (
        <>
          <p className="mb-4">
            Estonia's pioneering e-Residency program offers entrepreneurs
            worldwide the ability to establish and manage an EU-based business
            entirely online. As the first country to introduce such a program,
            Estonia provides a mature digital infrastructure, transparent tax
            system, and minimal bureaucracy.
          </p>
          <p className="mb-4">
            Key benefits include remote company formation, digital signatures,
            access to EU markets, and a competitive tax environment. Our
            platform simplifies the application process, providing step-by-step
            guidance from initial application to successful business operation.
          </p>
          <p>
            Ideal for digital nomads, freelancers, and startup founders,
            Estonian e-Residency opens doors to European business opportunities
            without requiring physical relocation.
          </p>
        </>
      ),
    },
    {
      id: "digital-nomad",
      title: "Digital Nomad Business Solutions",
      icon: <Briefcase className="h-5 w-5 text-emerald-500" />,
      content: (
        <>
          <p className="mb-4">
            Our comprehensive digital nomad business solutions empower
            location-independent professionals to establish legitimate business
            structures while maintaining their mobile lifestyle. Through
            e-residency programs, digital nomads can access banking services,
            process payments, and fulfill tax obligations regardless of their
            physical location.
          </p>
          <p className="mb-4">
            We provide tailored guidance on selecting the optimal e-residency
            program based on your specific business needs, travel patterns, and
            long-term goals. Our AI-powered assessment tool analyzes your unique
            situation to recommend the most advantageous jurisdiction.
          </p>
          <p>
            From initial application to ongoing compliance, our platform offers
            continuous support for digital nomads navigating the complexities of
            international business operations.
          </p>
        </>
      ),
    },
    {
      id: "business-registration",
      title: "International Business Registration",
      icon: <FileText className="h-5 w-5 text-purple-500" />,
      content: (
        <>
          <p className="mb-4">
            Navigating international business registration requires expertise in
            various jurisdictions' legal frameworks, tax implications, and
            compliance requirements. Our platform streamlines this complex
            process, offering comprehensive guidance on establishing your
            business in e-residency countries.
          </p>
          <p className="mb-4">
            We facilitate every step of the registration process, from document
            preparation and submission to coordination with local service
            providers. Our network of verified partners ensures professional
            support throughout the establishment of your international business
            entity.
          </p>
          <p>
            Compare registration requirements, timelines, and costs across
            multiple jurisdictions to make informed decisions aligned with your
            business strategy and growth objectives.
          </p>
        </>
      ),
    },
    {
      id: "remote-work",
      title: "Remote Work Visa Options",
      icon: <MapPin className="h-5 w-5 text-orange-500" />,
      content: (
        <>
          <p className="mb-4">
            Beyond e-residency, many countries now offer specialized visa
            programs designed specifically for remote workers and digital
            nomads. These programs provide legal pathways to live in attractive
            destinations while working for employers or clients based elsewhere.
          </p>
          <p className="mb-4">
            Our platform provides up-to-date information on eligibility
            requirements, application procedures, and benefits of remote work
            visa programs across Europe and beyond. Compare options based on
            duration, tax implications, cost of living, and quality of life
            factors.
          </p>
          <p>
            Discover how combining e-residency with strategic remote work visa
            options can optimize both your business structure and lifestyle
            choices, creating a truly location-independent professional
            existence.
          </p>
        </>
      ),
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-4">
          Comprehensive E-Residency Resources
        </h2>
        <p className="text-lg text-center text-slate-700 dark:text-slate-300 mb-12 max-w-3xl mx-auto">
          Explore our in-depth guides on various aspects of e-residency and
          international business opportunities
        </p>

        <Tabs defaultValue="estonia" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {seoContent.map((item) => (
              <TabsTrigger
                key={item.id}
                value={item.id}
                className="flex items-center"
              >
                {item.icon}
                <span className="ml-2 hidden md:inline">{item.title}</span>
                <span className="ml-2 md:hidden">
                  {item.id
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {seoContent.map((item) => (
            <TabsContent key={item.id} value={item.id}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                  </CardTitle>
                  <CardDescription>
                    Comprehensive guide to help you navigate the complexities
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-slate-700 dark:text-slate-300">
                  {item.content}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
