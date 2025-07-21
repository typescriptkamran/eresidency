import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";
import { AnimatedHero } from "@/components/shared/animated-hero";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Alexandra Kowalski",
      role: "Founder & CEO",
      bio: "Alexandra has over 15 years of experience in international business consulting. She was among the first wave of Estonian e-residents and has since helped hundreds of entrepreneurs establish global businesses.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      linkedin: "#",
      email: "alexandra@Global E-Residencyexperts.com",
      specialties: [
        "Strategic Planning",
        "Business Development",
        "International Expansion",
      ],
    },
    {
      name: "Marcus Chen",
      role: "Head of Legal Services",
      bio: "Marcus is an international business lawyer with expertise in EU corporate law and Global E-Residency regulations. He ensures our clients receive accurate legal guidance for their global business operations.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      linkedin: "#",
      email: "marcus@Global E-Residencyexperts.com",
      specialties: ["Corporate Law", "Compliance", "Regulatory Affairs"],
    },
    {
      name: "Elena Petrova",
      role: "Tax Advisory Director",
      bio: "Elena is a certified tax consultant specializing in international taxation. She helps our clients navigate complex tax regulations and develop efficient tax strategies across multiple jurisdictions.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
      linkedin: "#",
      email: "elena@Global E-Residencyexperts.com",
      specialties: [
        "International Taxation",
        "Tax Planning",
        "Financial Compliance",
      ],
    },
    {
      name: "David Okafor",
      role: "Business Setup Specialist",
      bio: "David specializes in streamlining the business setup process for e-residents. His expertise in digital documentation and administrative procedures ensures a smooth establishment process for our clients.",
      image:
        "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=400&q=80",
      linkedin: "#",
      email: "david@Global E-Residencyexperts.com",
      specialties: [
        "Business Registration",
        "Process Optimization",
        "Digital Administration",
      ],
    },
    {
      name: "Sofia Rodriguez",
      role: "Banking Solutions Expert",
      bio: "Sofia has extensive experience in international banking and fintech. She helps our clients navigate banking options and establish efficient financial operations for their e-resident businesses.",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
      linkedin: "#",
      email: "sofia@Global E-Residencyexperts.com",
      specialties: [
        "Banking Relationships",
        "Payment Solutions",
        "Financial Technology",
      ],
    },
    {
      name: "Thomas Müller",
      role: "Client Success Manager",
      bio: "Thomas ensures our clients receive exceptional service throughout their journey with us. He coordinates our team's efforts to deliver tailored solutions that meet each client's unique needs.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      linkedin: "#",
      email: "thomas@Global E-Residencyexperts.com",
      specialties: [
        "Client Relationship Management",
        "Project Coordination",
        "Business Consulting",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedHero
            title="Meet Our Team"
            subtitle="Our diverse team of experts brings together specialized knowledge in international business"
            imageSrc="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
            imageAlt="Team of Global E-Residency"
            height="md:h-[350px]"
          />
          <div className="text-center mb-16">
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
              Our diverse team of experts brings together specialized knowledge
              in international business, taxation, law, and technology to
              provide comprehensive Global E-Residency solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    {member.bio}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                      Specialties:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, i) => (
                        <span
                          key={i}
                          className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={member.linkedin}
                      className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center"
                    >
                      <Linkedin className="h-5 w-5 mr-1" />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center"
                    >
                      <Mail className="h-5 w-5 mr-1" />
                      <span className="text-sm">Email</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 dark:bg-slate-800 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
              Our Expertise
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-slate-700 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  Legal Advisory
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Our legal experts ensure your business complies with all
                  relevant regulations across different jurisdictions.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-700 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  Tax Optimization
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  We develop legal tax strategies that leverage the benefits of
                  Global E-Residency programs while ensuring full compliance.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-700 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  Business Setup
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  From company registration to banking solutions, we handle all
                  aspects of establishing your e-resident business.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-700 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  Ongoing Support
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  We provide continuous assistance with compliance, reporting,
                  and strategic growth for your business.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg text-center mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 max-w-3xl mx-auto">
              We're always looking for talented professionals who are passionate
              about helping businesses go global through Global E-Residency solutions.
            </p>
            <Button asChild size="lg">
              <Link href="/careers">View Open Positions</Link>
            </Button>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Ready to Work With Our Experts?
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Schedule a consultation with our team to discuss how we can help
              you leverage Global E-Residency for your business goals.
            </p>
            <Button asChild size="lg" className="px-8 py-6 text-lg">
              <Link href="/consultation">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
