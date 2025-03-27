import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";
import { AnimatedHero } from "@/components/shared/animated-hero";

export default function StoriesPage() {
  const successStories = [
    {
      name: "Sarah Johnson",
      company: "Digital Nomad Solutions",
      country: "Estonia",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      quote:
        "Estonia's e-residency program allowed me to run my consulting business from anywhere in the world while maintaining EU presence. The digital infrastructure is simply amazing.",
      business: "Digital Marketing Consultancy",
    },
    {
      name: "Michael Chen",
      company: "GlobalTech Ventures",
      country: "Lithuania",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      quote:
        "Lithuania's fintech-friendly environment was perfect for our payment processing startup. The banking options and regulatory framework have been instrumental to our growth.",
      business: "Fintech Startup",
    },
    {
      name: "Elena Petrova",
      company: "Remote Dev Team",
      country: "Ukraine",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      quote:
        "Ukraine's e-residency program offered us an affordable way to establish our software development company with access to amazing tech talent. The low operational costs have been a game-changer.",
      business: "Software Development",
    },
    {
      name: "Carlos Rodriguez",
      company: "EuroTrade Imports",
      country: "Portugal",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      quote:
        "Portugal's e-residency program gave our import/export business the perfect EU base with favorable tax conditions and excellent logistics connections to both Europe and South America.",
      business: "Import/Export Business",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedHero
            title="E-Residency Success Stories"
            subtitle="Discover how entrepreneurs and businesses have leveraged e-residency programs to grow globally"
            imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
            imageAlt="Successful entrepreneurs with e-residency"
            height="md:h-[350px]"
          />
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-12">
            Discover how entrepreneurs and businesses from around the world have
            leveraged e-residency programs to grow their operations, optimize
            taxes, and access new markets.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={story.image}
                    alt={`${story.name} from ${story.company}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-start mb-4">
                    <Quote className="h-8 w-8 text-blue-500 mr-2 flex-shrink-0 mt-1" />
                    <p className="text-slate-700 dark:text-slate-300 italic">
                      {story.quote}
                    </p>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {story.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {story.company}
                    </p>
                    <div className="flex justify-between mt-2">
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        {story.business}
                      </span>
                      <span className="text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
                        {story.country} E-Residency
                      </span>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full mt-6">
                    <Link
                      href={`/stories/${story.name.toLowerCase().replace(" ", "-")}`}
                    >
                      Read Full Story
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 dark:bg-slate-800 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Key Benefits Highlighted in Our Success Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-slate-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Tax Optimization
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Our clients have saved an average of 15-30% on their tax
                  obligations through strategic use of e-residency programs.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Market Access
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  E-residency has provided businesses with seamless access to
                  the EU market and banking infrastructure.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Remote Operations
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Digital nomads and remote teams have established fully
                  compliant businesses without geographic restrictions.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Share Your E-Residency Success Story
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 max-w-3xl mx-auto">
              Have you benefited from an e-residency program? We'd love to
              feature your story and insights to help others on their
              e-residency journey.
            </p>
            <Button asChild size="lg">
              <Link href="/contact?subject=Success%20Story">
                Submit Your Story
              </Link>
            </Button>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Ready to Create Your Own Success Story?
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 max-w-3xl mx-auto">
              Our e-residency experts can help you navigate the options and find
              the perfect program for your business needs.
            </p>
            <Button asChild size="lg" className="px-8 py-6 text-lg">
              <Link href="/consultation">Schedule a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
