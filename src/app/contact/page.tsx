import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import { AnimatedHero } from "@/components/shared/animated-hero";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedHero
            title="Contact E-Residency Experts"
            subtitle="Have questions? Our team is here to help you navigate the e-residency process"
            imageSrc="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=1200&q=80"
            imageAlt="Contact and support team"
            height="md:h-[350px]"
          />
          {/* SEO-optimized header section */}
          <div className="text-center mb-12">
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
              Have questions about Estonian e-residency or other global
              e-residency programs? Our team of experts is here to help you
              navigate the application process and set up your business
              efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Contact Information */}
            <div className="md:col-span-1">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-0.5 mr-3" />
                    <div>
                      <h3 className="font-medium text-slate-900 dark:text-white">
                        Email
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300 mt-1">
                        contact@e-residencyexperts.com
                      </p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-0.5 mr-3" />
                    <div>
                      <h3 className="font-medium text-slate-900 dark:text-white">
                        Phone
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300 mt-1">
                        +1 (555) 123-4567
                      </p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                        Mon-Fri from 9am to 6pm (EST)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-0.5 mr-3" />
                    <div>
                      <h3 className="font-medium text-slate-900 dark:text-white">
                        Office
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300 mt-1">
                        123 Business Avenue
                        <br />
                        Tallinn, Estonia 10115
                      </p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                        Virtual meetings available
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-0.5 mr-3" />
                    <div>
                      <h3 className="font-medium text-slate-900 dark:text-white">
                        Business Hours
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300 mt-1">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 2:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <h3 className="font-medium text-slate-900 dark:text-white mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <MessageSquare className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Send Us a Message
                  </h2>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Subject
                    </label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>

                  <div>
                    <label
                      htmlFor="interest"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    >
                      I'm interested in
                    </label>
                    <select
                      id="interest"
                      className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-slate-900 dark:text-white"
                    >
                      <option value="">Select your interest</option>
                      <option value="estonia">Estonian E-Residency</option>
                      <option value="lithuania">Lithuanian E-Residency</option>
                      <option value="portugal">Portuguese E-Residency</option>
                      <option value="ukraine">Ukrainian E-Residency</option>
                      <option value="comparison">Program Comparison</option>
                      <option value="business">Business Setup</option>
                      <option value="tax">Tax Advisory</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your inquiry..."
                      rows={6}
                    />
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="privacy"
                        name="privacy"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="privacy"
                        className="text-slate-700 dark:text-slate-300"
                      >
                        I agree to the{" "}
                        <Link
                          href="/privacy"
                          className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          privacy policy
                        </Link>
                      </label>
                    </div>
                  </div>

                  <div>
                    <Button type="submit" className="w-full py-6 text-lg">
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  What are your consultation fees?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  We offer a free initial 30-minute consultation to discuss your
                  needs and determine how we can help. Our paid consultation
                  packages start at €99 for a comprehensive assessment.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  How long does it take to get e-residency?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  The timeline varies by country. Estonian e-residency typically
                  takes 2-4 weeks, while other programs may take 1-8 weeks
                  depending on the country and your specific situation.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Do I need to visit Estonia to get e-residency?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  No, you don't need to visit Estonia to apply for e-residency.
                  However, you will need to collect your digital ID card in
                  person at an Estonian embassy or consulate in your region.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Can you help with banking solutions?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Yes, we provide guidance on banking options for e-residents,
                  including traditional banks and fintech solutions that work
                  well with e-residency programs.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-600 dark:bg-blue-800 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Start Your E-Residency Journey?
            </h2>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              Whether you're just exploring options or ready to apply, our team
              is here to guide you through every step of the process.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild variant="secondary" size="lg">
                <Link href="/consultation">Schedule a Consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent border-white hover:bg-white hover:text-blue-600"
              >
                <Link href="/programs">Explore Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
