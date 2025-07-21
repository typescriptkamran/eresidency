import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
      <Header />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">
            Terms of Service
          </h1>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8 mb-8">
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              Last Updated: June 15, 2023
            </p>

            <p className="text-slate-700 dark:text-slate-300 mb-6">
              Please read these Terms of Service ("Terms") carefully before
              using the Global E-Residency website or services. By accessing or
              using our services, you agree to be bound by these Terms.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-slate-700 dark:text-slate-300">
                  By accessing or using the Global E-Residency website,
                  applications, or any other services provided by us
                  (collectively, the "Services"), you agree to be bound by these
                  Terms. If you do not agree to all of these Terms, you may not
                  access or use our Services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  2. Description of Services
                </h2>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  Global E-Residency provides information, resources, and
                  consulting services related to Global E-Residency programs in various
                  countries. Our Services may include, but are not limited to:
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                  <li>Informational content about Global E-Residency programs</li>
                  <li>Consultation services for Global E-Residency applications</li>
                  <li>Assistance with business setup for e-residents</li>
                  <li>Banking and financial services guidance</li>
                  <li>Tax advisory services</li>
                  <li>Resources and educational materials</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  3. User Accounts
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      3.1 Account Creation
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      To access certain features of our Services, you may be
                      required to create an account. You agree to provide
                      accurate, current, and complete information during the
                      registration process and to update such information to
                      keep it accurate, current, and complete.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      3.2 Account Security
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      You are responsible for maintaining the confidentiality of
                      your account credentials and for all activities that occur
                      under your account. You agree to notify us immediately of
                      any unauthorized use of your account or any other breach
                      of security.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  4. Payment Terms
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      4.1 Fees
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      Certain Services may require payment of fees. All fees are
                      stated in euros (€) unless otherwise specified. We reserve
                      the right to change our fees at any time, upon notice to
                      you.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      4.2 Payment Processing
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      We use third-party payment processors to process payments.
                      By providing your payment information, you authorize us to
                      charge the applicable fees to your designated payment
                      method.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      4.3 Refunds
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      Our refund policy varies depending on the specific
                      Service. Please refer to the applicable Service
                      description or contact us for details about our refund
                      policy for a particular Service.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  5. Intellectual Property
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      5.1 Our Content
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      The content, features, and functionality of our Services,
                      including but not limited to text, graphics, logos, icons,
                      images, audio clips, digital downloads, data compilations,
                      and software, are owned by Global E-Residency or our
                      licensors and are protected by copyright, trademark, and
                      other intellectual property laws.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      5.2 Limited License
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      We grant you a limited, non-exclusive, non-transferable,
                      and revocable license to access and use our Services for
                      your personal, non-commercial use. This license does not
                      include the right to: (a) modify or copy our materials;
                      (b) use the materials for any commercial purpose; (c)
                      attempt to decompile or reverse engineer any software
                      contained in our Services; (d) remove any copyright or
                      other proprietary notations; or (e) transfer the materials
                      to another person or "mirror" the materials on any other
                      server.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  6. User Content
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      6.1 Submission of Content
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      You may have the opportunity to submit content to our
                      Services, such as comments, reviews, or other materials.
                      By submitting content, you grant us a worldwide,
                      non-exclusive, royalty-free, perpetual, irrevocable, and
                      fully sublicensable right to use, reproduce, modify,
                      adapt, publish, translate, create derivative works from,
                      distribute, and display such content in any media.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      6.2 Prohibited Content
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      You agree not to submit content that: (a) is unlawful,
                      harmful, threatening, abusive, harassing, defamatory,
                      vulgar, obscene, or invasive of another's privacy; (b)
                      infringes any intellectual property or other rights of any
                      party; (c) contains software viruses or any other code
                      designed to interrupt, destroy, or limit the functionality
                      of any computer software or hardware; or (d) impersonates
                      any person or entity or otherwise misrepresents your
                      affiliation with a person or entity.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  7. Disclaimer of Warranties
                </h2>
                <p className="text-slate-700 dark:text-slate-300">
                  OUR SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE"
                  BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR
                  IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM
                  ALL WARRANTIES, INCLUDING, BUT NOT LIMITED TO, IMPLIED
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <p className="text-slate-700 dark:text-slate-300 mt-4">
                  WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED,
                  TIMELY, SECURE, OR ERROR-FREE, OR THAT ANY DEFECTS WILL BE
                  CORRECTED. WE DO NOT WARRANT OR MAKE ANY REPRESENTATIONS
                  REGARDING THE USE OR THE RESULTS OF THE USE OF OUR SERVICES IN
                  TERMS OF THEIR CORRECTNESS, ACCURACY, RELIABILITY, OR
                  OTHERWISE.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  8. Limitation of Liability
                </h2>
                <p className="text-slate-700 dark:text-slate-300">
                  TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT SHALL
                  Global E-Residency, ITS AFFILIATES, OR THEIR RESPECTIVE
                  OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY
                  INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
                  DAMAGES, INCLUDING BUT NOT LIMITED TO, LOSS OF PROFITS, DATA,
                  USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (A)
                  YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE
                  SERVICES; (B) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE
                  SERVICES; (C) ANY CONTENT OBTAINED FROM THE SERVICES; AND (D)
                  UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS
                  OR CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT
                  (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, WHETHER OR
                  NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  9. Indemnification
                </h2>
                <p className="text-slate-700 dark:text-slate-300">
                  You agree to defend, indemnify, and hold harmless Global E-Residency
                  Experts, its affiliates, and their respective officers,
                  directors, employees, and agents from and against any claims,
                  liabilities, damages, losses, and expenses, including, without
                  limitation, reasonable legal and accounting fees, arising out
                  of or in any way connected with your access to or use of the
                  Services, your violation of these Terms, or your violation of
                  any rights of another.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  10. Termination
                </h2>
                <p className="text-slate-700 dark:text-slate-300">
                  We may terminate or suspend your access to all or part of our
                  Services, with or without notice, for any conduct that we, in
                  our sole discretion, believe is in violation of these Terms,
                  applicable laws, or is harmful to the interests of another
                  user, a third party, or us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  11. Governing Law
                </h2>
                <p className="text-slate-700 dark:text-slate-300">
                  These Terms shall be governed by and construed in accordance
                  with the laws of [Jurisdiction], without regard to its
                  conflict of law provisions. You agree to submit to the
                  personal and exclusive jurisdiction of the courts located
                  within [Jurisdiction].
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  12. Changes to Terms
                </h2>
                <p className="text-slate-700 dark:text-slate-300">
                  We reserve the right to modify these Terms at any time. We
                  will provide notice of any material changes by posting the
                  updated Terms on our website or through other communications.
                  Your continued use of our Services after such changes
                  constitutes your acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  13. Contact Information
                </h2>
                <p className="text-slate-700 dark:text-slate-300">
                  If you have any questions about these Terms, please contact us
                  at:
                </p>
                <div className="mt-4 bg-slate-50 dark:bg-slate-700 p-4 rounded-md">
                  <p className="text-slate-700 dark:text-slate-300">
                    Global E-Residency
                    <br />
                    Email: legal@Global E-Residencyexperts.com
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
              href="/privacy"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Privacy Policy
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
