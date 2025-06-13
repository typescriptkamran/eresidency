import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Home,
  Search,
  ArrowLeft,
  Globe,
  Users,
  Zap,
  CheckCircle,
  Award,
  Heart,
} from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      {/* 404 Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-8xl font-bold text-blue-600 mb-4">404</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Page Not Found
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            The page you're looking for doesn't exist, but your journey to
            global entrepreneurship doesn't have to end here. Explore our
            opportunities and join our mission to transform how businesses
            operate worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Button>
            </Link>
            <Link href="/careers">
              <Button size="lg" variant="outline">
                <Users className="w-4 h-4 mr-2" />
                View Careers
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Join Us - Featured Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            While You're Here - Discover Career Opportunities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <Globe className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Global Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Help thousands of clients from over 100 countries launch
                  EU-based businesses, shaping the future of
                  location-independent work.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <Zap className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Innovative Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Work with cutting-edge technology, including AI-powered tools
                  and platforms optimized for iOS and Android, to deliver
                  exceptional client experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <Users className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Remote Flexibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Embrace the digital nomad lifestyle with remote or hybrid
                  roles, allowing you to work from anywhere while collaborating
                  with a diverse, global team.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Job Openings */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Current Opportunities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">
                      Customer Success Specialist
                    </CardTitle>
                    <CardDescription className="mt-2">
                      <Badge variant="secondary">Remote</Badge>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Support e-Residency clients with business setup, banking, and
                  tax queries, ensuring a seamless experience.
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  <strong>Requirements:</strong> Excellent communication skills,
                  experience in customer support, and knowledge of e-Residency
                  or international business.
                </p>
                <Link href="/careers">
                  <Button className="w-full">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">
                      Software Developer
                    </CardTitle>
                    <CardDescription className="mt-2">
                      <Badge variant="secondary">Remote</Badge>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Build and maintain our AI-powered platform to enhance client
                  onboarding and service delivery.
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  <strong>Requirements:</strong> Experience in web or mobile
                  development, familiarity with JavaScript or Python, and a
                  passion for user-friendly design.
                </p>
                <Link href="/careers">
                  <Button className="w-full">Learn More</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link href="/careers">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                View All Openings
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Client Success
                </h3>
                <p className="text-gray-600">
                  We prioritize our clients' goals, delivering personalized
                  solutions with expertise and care.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We embrace technology and creativity to streamline processes
                  and enhance services.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Transparency
                </h3>
                <p className="text-gray-600">
                  We operate with honesty and clarity, building trust with
                  clients and colleagues.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600">
                  We strive for quality in everything we do, from client support
                  to internal collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Preview */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Join Our Team?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-3">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">
                Competitive salaries tailored to your role and experience
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">
                Flexible work hours to suit your lifestyle
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">
                Remote work options with access to collaboration tools
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">
                Professional development programs and certifications
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Help */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Looking for Something Else?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/programs">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <Globe className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">
                    E-Residency Programs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm text-center">
                    Explore e-Residency options for different countries
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <Zap className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Our Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm text-center">
                    Discover our business setup and consultation services
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/about">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">About Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm text-center">
                    Learn more about our mission and team
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/contact">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <Heart className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm text-center">
                    Get in touch with our team for support
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-12 h-12 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            At Global E-Residency, we're building a world where anyone, anywhere
            can start and grow a business with ease. If you're driven by
            innovation, passionate about helping others, and ready to make a
            difference, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/careers">
              <Button size="lg" variant="secondary">
                View Career Opportunities
              </Button>
            </Link>
            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
