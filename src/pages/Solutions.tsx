
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Solutions = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-[#E9F7F6] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Solutions</h1>
            <p className="text-lg text-gray-700 mb-8">
              Comprehensive mental wellness tools tailored for different needs.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Individuals */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-[#E9F7F6] rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2EC4B6]"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>
                </div>
                <CardTitle className="text-2xl">For Individuals</CardTitle>
                <CardDescription>Personal mental wellness journey</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Take control of your mental health with personalized AI support, daily check-ins, and evidence-based recommendations tailored just for you.</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#2EC4B6] mr-2">✓</span>
                    <span>Private AI conversations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2EC4B6] mr-2">✓</span>
                    <span>Personalized wellness plans</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2EC4B6] mr-2">✓</span>
                    <span>Progress tracking tools</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#2EC4B6] hover:bg-teal-600" asChild>
                  <Link to="/solutions/individuals">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
            
            {/* Clinics */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-[#E9F7F6] rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2EC4B6]"><path d="M19 3v12h-5c-.023-3.681.184-7.406 5-12zm0 12v6h-1v-3M8 4v12h3"/><path d="M2 8h8"/></svg>
                </div>
                <CardTitle className="text-2xl">For Clinics</CardTitle>
                <CardDescription>Enhance therapeutic outcomes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Augment your practice with AI-powered tools that help patients between sessions and provide valuable insights for more effective therapy.</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#2EC4B6] mr-2">✓</span>
                    <span>Pre-session check-ins</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2EC4B6] mr-2">✓</span>
                    <span>Therapist dashboards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2EC4B6] mr-2">✓</span>
                    <span>Between-session support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#2EC4B6] hover:bg-teal-600" asChild>
                  <Link to="/solutions/clinics">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
            
            {/* Employers */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-[#E9F7F6] rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2EC4B6]"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
                </div>
                <CardTitle className="text-2xl">For Employers</CardTitle>
                <CardDescription>Foster workplace wellness</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Support your team's mental wellbeing with scalable solutions that promote a healthier, more productive workplace environment.</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#2EC4B6] mr-2">✓</span>
                    <span>Team wellness tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2EC4B6] mr-2">✓</span>
                    <span>Anonymous insights</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2EC4B6] mr-2">✓</span>
                    <span>Group wellness resources</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#2EC4B6] hover:bg-teal-600" asChild>
                  <Link to="/solutions/employers">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2EC4B6] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Mental Wellness?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Connect with our team to learn how Aaiena can support your specific needs and goals.
          </p>
          <Button size="lg" className="bg-white text-[#2EC4B6] hover:bg-gray-100" asChild>
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Solutions;
