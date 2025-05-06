
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const SolutionsClinics = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-[#E9F7F6] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">For Clinics & Therapists</h1>
            <p className="text-lg text-gray-700 mb-8">
              Enhance your practice with AI-powered tools that support patients between sessions and provide valuable insights.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-[#2EC4B6] hover:bg-teal-600" asChild>
                <Link to="/contact">Schedule a Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/signup">Start Free Trial</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits for Mental Health Professionals</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6">
              <div className="rounded-full bg-[#E9F7F6] w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2EC4B6]"><path d="M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/><path d="M5 3 2 6"/><path d="m22 6-3-3"/><path d="m6 19-2 2"/><path d="m18 19 2 2"/><path d="M12 10v6"/><path d="M12 10 8 8"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Extended Care</h3>
              <p className="text-gray-600">
                Provide continuous support for patients between sessions with AI-powered check-ins and interventions.
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="rounded-full bg-[#E9F7F6] w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2EC4B6]"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Better Insights</h3>
              <p className="text-gray-600">
                Access comprehensive mood tracking data to understand patient patterns and progress over time.
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="rounded-full bg-[#E9F7F6] w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2EC4B6]"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Improved Outcomes</h3>
              <p className="text-gray-600">
                Enhance therapeutic effectiveness with supplementary AI tools that reinforce clinical interventions.
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="rounded-full bg-[#E9F7F6] w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2EC4B6]"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Practice Security</h3>
              <p className="text-gray-600">
                Our platform is HIPAA-compliant with enterprise-grade security to protect patient data and privacy.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex">
              <div className="mr-4">
                <div className="rounded-full bg-[#2EC4B6] p-2 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Patient Dashboard</h3>
                <p className="text-gray-600">
                  Access comprehensive insights into patient mood trends, engagement patterns, and progress metrics in one centralized view.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <div className="rounded-full bg-[#2EC4B6] p-2 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Customizable Interventions</h3>
                <p className="text-gray-600">
                  Configure AI responses and recommendations to align with your specific therapeutic approach and patient needs.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <div className="rounded-full bg-[#2EC4B6] p-2 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/></svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Session Preparation</h3>
                <p className="text-gray-600">
                  Review pre-session check-ins that highlight patient concerns and priorities before appointments.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <div className="rounded-full bg-[#2EC4B6] p-2 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"/></svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Homework Assignments</h3>
                <p className="text-gray-600">
                  Assign and track completion of therapeutic exercises, journaling prompts, and other homework tasks.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <div className="rounded-full bg-[#2EC4B6] p-2 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="12" x2="12" y1="9" y2="15"/><line x1="9" x2="15" y1="12" y2="12"/></svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Crisis Alerts</h3>
                <p className="text-gray-600">
                  Receive immediate notifications when AI detects potential crisis situations requiring clinical attention.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <div className="rounded-full bg-[#2EC4B6] p-2 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Ethical AI Integration</h3>
                <p className="text-gray-600">
                  Our AI is designed to complement, not replace, professional care with clear boundary setting and transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Clinic Pricing</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">Flexible plans to match your practice's needs.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <Card className="border-2 border-gray-200">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Solo Practitioner</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">$99</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#2EC4B6] mr-2 shrink-0" />
                    <span>Up to 30 patient accounts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#2EC4B6] mr-2 shrink-0" />
                    <span>Basic analytics dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#2EC4B6] mr-2 shrink-0" />
                    <span>Email support</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* Group Plan */}
            <Card className="border-2 border-[#2EC4B6] shadow-lg relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#2EC4B6] text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Group Practice</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">$299</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#2EC4B6] mr-2 shrink-0" />
                    <span>Up to 100 patient accounts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#2EC4B6] mr-2 shrink-0" />
                    <span>Advanced analytics & reporting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#2EC4B6] mr-2 shrink-0" />
                    <span>Customizable interventions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#2EC4B6] mr-2 shrink-0" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button className="w-full bg-[#2EC4B6] hover:bg-teal-600" asChild>
                  <Link to="/contact">Request Demo</Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* Enterprise Plan */}
            <Card className="border-2 border-gray-200">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">Custom</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#2EC4B6] mr-2 shrink-0" />
                    <span>Unlimited patient accounts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#2EC4B6] mr-2 shrink-0" />
                    <span>Full integration with EHR systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#2EC4B6] mr-2 shrink-0" />
                    <span>Custom branding options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#2EC4B6] mr-2 shrink-0" />
                    <span>Dedicated account manager</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2EC4B6] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Enhance Your Practice with AI Support</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join leading mental health professionals who are extending their care beyond the therapy room with Aaiena.
          </p>
          <Button size="lg" className="bg-white text-[#2EC4B6] hover:bg-gray-100" asChild>
            <Link to="/contact">Schedule Your Demo</Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default SolutionsClinics;
