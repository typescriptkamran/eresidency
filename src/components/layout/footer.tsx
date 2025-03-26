import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "E-Residency Programs",
      links: [
        { name: "Estonia", href: "/programs/estonia" },
        { name: "Lithuania", href: "/programs/lithuania" },
        { name: "Portugal", href: "/programs/portugal" },
        { name: "Ukraine", href: "/programs/ukraine" },
        { name: "Compare All", href: "/comparisons" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Consultations", href: "/consultation" },
        { name: "Application Assistance", href: "/services/application" },
        { name: "Business Setup", href: "/services/business-setup" },
        { name: "Banking Solutions", href: "/services/banking" },
        { name: "Tax Advisory", href: "/services/tax" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "E-Books", href: "/resources/ebooks" },
        { name: "Success Stories", href: "/stories" },
        { name: "FAQ", href: "/faq" },
        { name: "Glossary", href: "/resources/glossary" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Partners", href: "/partners" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
      ],
    },
  ];

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-500">
                E-Residency
              </span>
              <span className="ml-1 text-2xl font-bold text-white">
                Experts
              </span>
            </Link>
            <p className="mt-4 text-slate-400">
              Your trusted partner for navigating global e-residency
              opportunities and international business expansion.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-blue-500">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-500">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-500">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-blue-500"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-slate-400 text-sm">
                © {currentYear} E-Residency Experts. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-slate-400 hover:text-blue-500 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-slate-400 hover:text-blue-500 text-sm"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-slate-400 hover:text-blue-500 text-sm"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
          <div className="mt-6 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-slate-400">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <span>contact@e-residencyexperts.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
