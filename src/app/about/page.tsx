import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Award, Users, Globe, Shield } from "lucide-react";
import { AnimatedHero } from "@/components/shared/animated-hero";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedHero
            title="About E-Residency Experts"
            subtitle="Learn about our mission, values, and the team behind our e-residency services"
            imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
            imageAlt="Team of professionals working together"
            height="md:h-[400px]"
          />
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              About E-Residency Experts
            </h1>
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
              We're a team of international business specialists dedicated to
              helping entrepreneurs and businesses leverage e-residency programs
              worldwide to achieve their global ambitions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                At E-Residency Experts, our mission is to empower entrepreneurs
                and businesses to operate globally without borders. We believe
                that geographic limitations should never hinder business
                potential in today's digital world.
              </p>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                We're committed to providing expert guidance, personalized
                solutions, and ongoing support to help our clients navigate the
                complexities of international business setup through e-residency
                programs.
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                Our goal is to make global business accessible to everyone, from
                solo entrepreneurs to established companies looking to expand
                internationally.
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-slate-800 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Why Choose Us?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">
                    ✓
                  </span>
                  <span className="text-slate-700 dark:text-slate-300">
                    <strong>Expertise:</strong> Our team includes legal experts,
                    tax advisors, and business consultants with specialized
                    knowledge in e-residency programs.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">
                    ✓
                  </span>
                  <span className="text-slate-700 dark:text-slate-300">
                    <strong>Personalized Approach:</strong> We tailor our
                    services to your specific business needs, goals, and
                    circumstances.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">
                    ✓
                  </span>
                  <span className="text-slate-700 dark:text-slate-300">
                    <strong>End-to-End Support:</strong> From initial
                    consultation to ongoing compliance, we're with you every
                    step of the way.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">
                    ✓
                  </span>
                  <span className="text-slate-700 dark:text-slate-300">
                    <strong>Global Network:</strong> Our partnerships with local
                    service providers ensure seamless implementation across
                    different jurisdictions.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Excellence
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  We strive for excellence in everything we do, from the advice
                  we provide to the service we deliver.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Client-Centric
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Our clients' success is our success. We put your needs and
                  goals at the center of everything we do.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Global Mindset
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  We embrace diversity and think globally, helping businesses
                  transcend geographical boundaries.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Integrity
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  We operate with transparency, honesty, and ethical standards
                  in all our business dealings.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              Our Story
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                E-Residency Experts was founded in 2018 by a group of
                international business consultants who recognized the
                transformative potential of Estonia's pioneering e-residency
                program. As early adopters themselves, our founders experienced
                firsthand the benefits and challenges of navigating this new
                digital frontier.
              </p>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                What began as a specialized consultancy for Estonian e-residency
                has evolved into a comprehensive service covering multiple
                e-residency programs worldwide. As more countries have launched
                their own versions of digital residency, we've expanded our
                expertise to help clients choose the right program for their
                specific needs.
              </p>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Today, we're proud to have helped over 1,000 entrepreneurs and
                businesses from more than 50 countries establish and grow their
                operations through various e-residency programs. Our team has
                grown to include experts from diverse backgrounds, including
                law, taxation, business administration, and technology.
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                As the landscape of digital business continues to evolve, we
                remain at the forefront, constantly updating our knowledge and
                services to provide the most current and valuable guidance to
                our clients.
              </p>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Ready to Start Your E-Residency Journey?
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Whether you're just exploring your options or ready to take the
              next step, our team is here to help you navigate the world of
              e-residency.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/consultation">Schedule a Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
