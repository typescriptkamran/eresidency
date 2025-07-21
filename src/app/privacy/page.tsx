import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
      <Header />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">
            Privacy Policy
          </h1>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8 mb-8">
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              Last Updated: June 15, 2023
            </p>

            <p className="text-slate-700 dark:text-slate-300 mb-6">
              Global E-Residency ("we," "our," or "us") is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website or use our services.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  1. Information We Collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      1.1 Personal Information
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      We may collect personal information that you voluntarily
                      provide to us when you:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-slate-700 dark:text-slate-300">
                      <li>Register for an account</li>
                      <li>Sign up for our newsletter</li>
                      <li>Request a consultation</li>
                      <li>Submit a contact form</li>
                      <li>Apply for Global E-Residency services</li>
                      <li>Participate in surveys or promotions</li>
                    </ul>
                    <p className="text-slate-700 dark:text-slate-300 mt-2">
                      This information may include your name, email address,
                      phone number, mailing address, payment information, and
                      other details relevant to the services you're requesting.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      1.2 Automatically Collected Information
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      When you visit our website, we may automatically collect
                      certain information about your device, including:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-slate-700 dark:text-slate-300">
                      <li>IP address</li>
                      <li>Browser type and version</li>
                      <li>Operating system</li>
                      <li>Referring website</li>
                      <li>Pages you view</li>
                      <li>Time and date of your visit</li>
                      <li>Time spent on pages</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      1.3 Cookies and Similar Technologies
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      We use cookies and similar tracking technologies to
                      collect information about your browsing activities. These
                      technologies help us analyze website traffic, customize
                      content, and improve your experience. You can control
                      cookies through your browser settings. For more
                      information, please see our{" "}
                      <Link
                        href="/cookies"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Cookie Policy
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  We may use the information we collect for various purposes,
                  including to:
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>
                    Send administrative information, such as updates, security
                    alerts, and support messages
                  </li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>
                    Communicate with you about products, services, offers, and
                    events
                  </li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Detect, prevent, and address technical issues</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  3. Information Sharing and Disclosure
                </h2>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  We may share your information in the following circumstances:
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      3.1 Service Providers
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      We may share your information with third-party vendors,
                      service providers, and other business partners who perform
                      services on our behalf, such as payment processing, data
                      analysis, email delivery, hosting, and customer service.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      3.2 Business Transfers
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      If we are involved in a merger, acquisition, or sale of
                      all or a portion of our assets, your information may be
                      transferred as part of that transaction.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      3.3 Legal Requirements
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      We may disclose your information if required to do so by
                      law or in response to valid requests by public authorities
                      (e.g., a court or government agency).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      3.4 Protection of Rights
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      We may disclose your information to protect the safety,
                      rights, property, or security of Global E-Residency, our
                      services, any third party, or the general public; to
                      detect, prevent, or otherwise address fraud, security, or
                      technical issues; or to prevent or stop activity we
                      consider to be illegal or unethical.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  4. Data Security
                </h2>
                <p className="text-slate-700 dark:text-slate-300">
                  We implement appropriate technical and organizational measures
                  to protect the security of your personal information. However,
                  please note that no method of transmission over the Internet
                  or electronic storage is 100% secure. While we strive to use
                  commercially acceptable means to protect your information, we
                  cannot guarantee its absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  5. Your Rights and Choices
                </h2>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  Depending on your location, you may have certain rights
                  regarding your personal information, including:
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                  <li>
                    Accessing, correcting, or deleting your personal information
                  </li>
                  <li>
                    Withdrawing your consent at any time (where processing is
                    based on consent)
                  </li>
                  <li>
                    Requesting restriction of processing of your personal
                    information
                  </li>
                  <li>Requesting transfer of your personal information</li>
                  <li>Opting out of marketing communications</li>
                </ul>
                <p className="text-slate-700 dark:text-slate-300 mt-4">
                  To exercise these rights, please contact us using the
                  information provided in the "Contact Us" section below.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  6. International Data Transfers
                </h2>
                <p className="text-slate-700 dark:text-slate-300">
                  Your information may be transferred to, and processed in,
                  countries other than the country in which you reside. These
                  countries may have data protection laws that are different
                  from the laws of your country. We ensure that appropriate
                  safeguards are in place to protect your personal information
                  in accordance with this Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  7. Children's Privacy
                </h2>
                <p className="text-slate-700 dark:text-slate-300">
                  Our services are not directed to individuals under the age of
                  18. We do not knowingly collect personal information from
                  children. If you are a parent or guardian and believe that
                  your child has provided us with personal information, please
                  contact us so that we can delete the information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  8. Changes to This Privacy Policy
                </h2>
                <p className="text-slate-700 dark:text-slate-300">
                  We may update this Privacy Policy from time to time. The
                  updated version will be indicated by an updated "Last Updated"
                  date. We encourage you to review this Privacy Policy
                  periodically to stay informed about how we are protecting your
                  information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  9. Contact Us
                </h2>
                <p className="text-slate-700 dark:text-slate-300">
                  If you have any questions or concerns about this Privacy
                  Policy or our privacy practices, please contact us at:
                </p>
                <div className="mt-4 bg-slate-50 dark:bg-slate-700 p-4 rounded-md">
                  <p className="text-slate-700 dark:text-slate-300">
                    Global E-Residency
                    <br />
                    Email: privacy@Global E-Residencyexperts.com
                    <br />
                    Address: 123 Global Street, Business District, 10001
                    <br />
                    Phone: +1 (555) 123-4567
                  </p>
                </div>
              </section>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <Link
              href="/terms"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
