import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Globe, Users, Zap, Heart, Award } from "lucide-react";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Careers at Global E-Residency
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Join a team that's transforming how entrepreneurs build and manage
            businesses worldwide. At Global E-Residency, we're passionate about
            empowering digital nomads, freelancers, and startups through
            Estonia's innovative e-Residency program.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            View Open Positions
          </Button>
        </div>
      </section>

      {/* Why Work with Us */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Work with Us?
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

      {/* Our Values */}
      <section className="bg-gray-50 py-16 px-4">
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
                <h3 className="font-semibold text-gray-900 mb-2">Diversity</h3>
                <p className="text-gray-600">
                  We celebrate diverse perspectives, fostering an inclusive
                  workplace that reflects our global community.
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

      {/* Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Benefits of Joining Our Team
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
            <div className="flex items-center space-x-3">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">
                Health and wellness support, including mental health resources
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">
                Team-building events, both virtual and in-person
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Current Openings
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
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">
                      Business Consultant
                    </CardTitle>
                    <CardDescription className="mt-2">
                      <Badge variant="secondary">Remote/Hybrid</Badge>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Provide expert guidance on company formation, tax compliance,
                  and banking solutions for e-Residents.
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  <strong>Requirements:</strong> Background in business
                  consultancy, fluency in multiple languages a plus, and strong
                  analytical skills.
                </p>
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">
                      Digital Marketing Manager
                    </CardTitle>
                    <CardDescription className="mt-2">
                      <Badge variant="secondary">Remote</Badge>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Develop and execute marketing campaigns to promote Global
                  E-Residency's services to a global audience.
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  <strong>Requirements:</strong> Proven experience in digital
                  marketing, proficiency in SEO/SEM, and a creative mindset.
                </p>
                <Button className="w-full">Apply Now</Button>
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
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Don't see the perfect role? We're always open to talented
              individuals. Send us your resume and a cover letter to explore
              future opportunities.
            </p>
            <Button variant="outline" size="lg">
              Contact Our HR Team
            </Button>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How to Apply
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-lg">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Browse Openings
              </h3>
              <p className="text-gray-600 text-sm">
                Select a role that matches your skills and interests.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-lg">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Submit Application
              </h3>
              <p className="text-gray-600 text-sm">
                Send your resume and cover letter via our application portal.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-lg">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Interview Process
              </h3>
              <p className="text-gray-600 text-sm">
                Our team will review and reach out to schedule an interview.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-lg">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Join Our Mission
              </h3>
              <p className="text-gray-600 text-sm">
                Start shaping the future of global entrepreneurship!
              </p>
            </div>
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
            <Button size="lg" variant="secondary">
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Contact Our HR Team
            </Button>
          </div>
          <p className="text-blue-100 mt-6">
            Want to learn more about our services?{" "}
            <a href="/" className="text-white underline hover:no-underline">
              Visit Our Homepage
            </a>{" "}
            to discover how we empower entrepreneurs worldwide.
          </p>
        </div>
      </section>
    </div>
  );
}
