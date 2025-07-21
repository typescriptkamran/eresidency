import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "lucide-react";
import { AnimatedHero } from "@/components/shared/animated-hero";

export default function ConsultationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedHero
            title="Schedule Your Free Global E-Residency Consultation"
            subtitle="Speak with our experts to get personalized guidance on choosing the right program"
            imageSrc="https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=1200&q=80"
            imageAlt="Business consultation meeting"
            height="md:h-[350px]"
          />
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
                Speak with our Global E-Residency to get personalized guidance
                on choosing the right program for your business needs and
                navigating the application process.
              </p>

              <div className="bg-blue-50 dark:bg-slate-800 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  What to Expect in Your Consultation
                </h3>
                <ul className="space-y-3">
                  {[
                    "Personalized assessment of your business needs",
                    "Detailed comparison of suitable Global E-Residency options",
                    "Step-by-step guidance on the application process",
                    "Information on banking, taxation, and compliance",
                    "Answers to all your specific questions",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span className="text-slate-700 dark:text-slate-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    Available Consultation Options
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start p-4 border border-slate-200 dark:border-slate-700 rounded-md">
                    <input
                      type="radio"
                      id="video"
                      name="consultation-type"
                      className="mt-1 mr-3"
                    />
                    <div>
                      <label
                        htmlFor="video"
                        className="font-medium text-slate-900 dark:text-white block mb-1"
                      >
                        Video Call (30 minutes)
                      </label>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Face-to-face consultation via Zoom or Google Meet
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 border border-slate-200 dark:border-slate-700 rounded-md">
                    <input
                      type="radio"
                      id="phone"
                      name="consultation-type"
                      className="mt-1 mr-3"
                    />
                    <div>
                      <label
                        htmlFor="phone"
                        className="font-medium text-slate-900 dark:text-white block mb-1"
                      >
                        Phone Call (30 minutes)
                      </label>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Speak directly with an Global E-Residency expert
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 border border-slate-200 dark:border-slate-700 rounded-md">
                    <input
                      type="radio"
                      id="email"
                      name="consultation-type"
                      className="mt-1 mr-3"
                    />
                    <div>
                      <label
                        htmlFor="email"
                        className="font-medium text-slate-900 dark:text-white block mb-1"
                      >
                        Email Consultation
                      </label>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Detailed written response to your specific questions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Book Your Free Consultation
              </h2>
              <form className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Full Name
                    </label>
                    <Input id="name" placeholder="John Doe" />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Phone Number
                    </label>
                    <Input id="phone" placeholder="+1 (555) 123-4567" />
                  </div>

                  <div>
                    <label
                      htmlFor="business"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Business Type
                    </label>
                    <select
                      id="business"
                      className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-slate-900 dark:text-white"
                    >
                      <option value="">Select your business type</option>
                      <option value="startup">Startup</option>
                      <option value="freelancer">Freelancer</option>
                      <option value="established">Established Business</option>
                      <option value="digital-nomad">Digital Nomad</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Your Specific Questions or Requirements
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Please share any specific questions or information about your business needs..."
                      rows={4}
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <Button type="submit" className="w-full py-6 text-lg">
                    Schedule Consultation
                  </Button>
                  <p className="text-sm text-slate-600 dark:text-slate-400 text-center mt-4">
                    By submitting this form, you agree to our privacy policy and
                    terms of service.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
