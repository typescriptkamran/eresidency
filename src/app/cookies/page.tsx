import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
      <Header />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">
            Cookie Policy
          </h1>
          
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8 mb-8">
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              Last Updated: June 15, 2023
            </p>
            
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              This Cookie Policy explains how E-Residency Experts ("we," "our," or "us") uses cookies and similar technologies on our website. By using our website, you consent to the use of cookies as described in this policy.
            </p>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  1. What Are Cookies?
                </h2>
                <p className="text-slate-700 dark:text-slate-300">
                  Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and give website owners information about how their site is used.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  2. Types of Cookies We Use
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      2.1 Essential Cookies
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      These cookies are necessary for the website to function properly. They enable basic functions like page navigation, secure areas access, and form submissions. The website cannot function properly without these cookies.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      2.2 Performance Cookies
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      These cookies collect information about how visitors use our website, such as which pages they visit most often and if they receive error messages. They help us improve website performance and user experience. All information collected by these cookies is aggregated and anonymous.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      2.3 Functionality Cookies
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      These cookies allow the website to remember choices you make (such as your username, language, or region) and provide enhanced, more personal features. They may also be used to provide services you have requested, such as watching a video or commenting on a blog.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      2.4 Targeting/Advertising Cookies
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns. They remember that you have visited a website and this information may be shared with other organizations, such as advertisers.
                    </p>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  3. Third-Party Cookies
                </h2>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  In addition to our own cookies, we may also use various third-party cookies to report usage statistics, deliver advertisements, and so on. These cookies may include:
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                  <li>Analytics cookies (e.g., Google Analytics)</li>
                  <li>Social media cookies (e.g., Facebook, Twitter, LinkedIn)</li>
                  <li>Advertising cookies (e.g., Google AdSense)</li>
                  <li>Functionality cookies (e.g., embedded videos, maps)</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  4. How We Use Cookies
                </h2>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  We use cookies for various purposes, including to:
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                  <li>Understand and save user preferences for future visits</li>
                  <li>Compile aggregate data about site traffic and site interactions</li>
                  <li>Enhance and personalize your user experience</li>
                  <li>Develop our website design and content based on your browsing habits</li>
                  <li>Track users' activities on our website</li>
                  <li>Recognize you when you return to our website</li>
                  <li>Target advertisements that may be of interest to you</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  5. Cookie Management
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      5.1 Browser Settings
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      Most web browsers allow you to control cookies through their settings. You can usually find these settings in the "Options" or "Preferences" menu of your browser. To understand these settings, the following links may be helpful:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-slate-700 dark:text-slate-300">
                      <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Cookie settings in Chrome</a></li>
                      <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Cookie settings in Firefox</a></li>
                      <li><a href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Cookie settings in Edge</a></li>
                      <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Cookie settings in Safari</a></li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      5.2 Opt-Out Options
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      You can opt out of third-party cookies by visiting the Network Advertising Initiative opt-out page (<a href="http://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">http://optout.networkadvertising.org/</a>) or the Digital Advertising Alliance opt-out page (<a href="http://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">http://optout.aboutads.info/</a>).
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      5.3 Cookie Consent
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      When you first visit our website, you will be presented with a cookie consent banner that allows you to accept or decline non-essential cookies. You can change your preferences at any time by clicking on the "Cookie Settings" link in the footer of our website.
                    </p>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  6. Consequences of Disabling Cookies
                </h2>
                <p className="text-slate-700 dark:text-slate-300">
                  If you disable cookies, some features of our website may not function properly. This includes preferences, login sessions, and certain interactive features. However, you will still be able to browse most of the website.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  7. Updates to This Cookie Policy
                </h2>
                <p className="text-slate-700 dark:text-slate-300">
                  We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to check this page periodically for any changes.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  8. Contact Us
                </h2>
                <p className="text-slate-700 dark:text-slate-300">
                  If you have any questions or concerns about our use of cookies, please contact us at:
                </p>
                <div className="mt-4 bg-slate-50 dark:bg-slate-700 p-4 rounded-md">
                  <p className="text-slate-700 dark:text-slate-300">
                    E-Residency Experts<br />
                    Email: privacy@e-residencyexperts.com<br />
                    Address: 123 Global Street, Business District, 10001<br />
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
              href="/terms" 
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Terms of Service
