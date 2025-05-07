
import React from "react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle, BarChart3, Users, Briefcase, TrendingUp } from "lucide-react";

const SolutionsEmployers = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-[#E9F7F6] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">For Employers</h1>
            <p className="text-lg text-gray-700 mb-8">
              Support your team's mental wellbeing with scalable solutions that promote a healthier, more productive workplace.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-[#2EC4B6] hover:bg-teal-600" asChild>
                <Link to="/contact">Book a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Download Brochure</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Why Workplace Mental Health Matters</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            The impact of employee mental health on organizational success is significant and measurable.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <div className="text-4xl font-bold text-[#2EC4B6] mb-2">68%</div>
              <p className="text-gray-600">of workers report that workplace stress negatively affects their mental health</p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="text-4xl font-bold text-[#2EC4B6] mb-2">$1,600</div>
              <p className="text-gray-600">average annual cost per employee due to mental health challenges</p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="text-4xl font-bold text-[#2EC4B6] mb-2">4.1x</div>
              <p className="text-gray-600">higher average ROI for companies investing in employee mental health programs</p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="text-4xl font-bold text-[#2EC4B6] mb-2">25%</div>
              <p className="text-gray-600">reduction in turnover for companies with robust mental health support</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">The Aaiena Workplace Wellness Solution</h2>
              <p className="text-gray-700 mb-6">
                Our comprehensive platform uses AI technology to support the mental wellbeing of your entire organization while providing anonymous insights to help you create a healthier workplace culture.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <Users className="h-5 w-5 text-[#2EC4B6]" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Universal Access</h3>
                    <p className="text-gray-600">Every employee gets 24/7 AI support and wellness resources</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <BarChart3 className="h-5 w-5 text-[#2EC4B6]" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Anonymous Analytics</h3>
                    <p className="text-gray-600">Organizational-level insights while protecting individual privacy</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <Briefcase className="h-5 w-5 text-[#2EC4B6]" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Workplace Integration</h3>
                    <p className="text-gray-600">Seamlessly fits into your existing HR and wellness programs</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <TrendingUp className="h-5 w-5 text-[#2EC4B6]" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Measurable Impact</h3>
                    <p className="text-gray-600">Track ROI with comprehensive reporting on engagement and outcomes</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <Card className="p-8 shadow-lg">
                <CardContent>
                  <img 
                    src="/placeholder.svg" 
                    alt="Dashboard Preview" 
                    className="rounded-md shadow mb-6" 
                  />
                  <h3 className="text-xl font-bold mb-2">Admin Dashboard</h3>
                  <p className="text-gray-600 mb-4">
                    Our dashboard provides HR leaders and wellness managers with actionable insights while maintaining employee confidentiality.
                  </p>
                  <Button className="bg-[#2EC4B6] hover:bg-teal-600" asChild>
                    <Link to="/contact">Request a Demo</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="rounded-full bg-[#E9F7F6] w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2EC4B6]"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">AI-Powered Support</h3>
              <p className="text-gray-600">
                Employees receive personalized support through conversations with our empathetic AI assistant, available any time they need it.
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="rounded-full bg-[#E9F7F6] w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2EC4B6]"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Global Access</h3>
              <p className="text-gray-600">
                Support for remote and international teams with multilingual capabilities and cultural adaptations.
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="rounded-full bg-[#E9F7F6] w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2EC4B6]"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/><circle cx="12" cy="12" r="4"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Wellness Challenges</h3>
              <p className="text-gray-600">
                Engage teams with optional group activities and challenges that build mental resilience and foster connection.
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="rounded-full bg-[#E9F7F6] w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2EC4B6]"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Analytical Insights</h3>
              <p className="text-gray-600">
                Anonymized, aggregate data helps identify workplace stressors and measure the impact of wellness initiatives.
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="rounded-full bg-[#E9F7F6] w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2EC4B6]"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Professional Services</h3>
              <p className="text-gray-600">
                Optional integration with EAP programs and seamless referrals to professional mental health services when needed.
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="rounded-full bg-[#E9F7F6] w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2EC4B6]"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Custom Branding</h3>
              <p className="text-gray-600">
                White-label options to align the platform with your company's brand and internal wellness initiatives.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2">Tech Company</h3>
              <p className="text-gray-500 mb-4">500+ Employees</p>
              <p className="text-gray-600 mb-4">
                Reduced employee turnover by 22% and improved team satisfaction scores by implementing Aaiena's wellness platform during a period of rapid growth.
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold">32% ROI</p>
                  <p className="text-sm text-gray-500">First Year</p>
                </div>
                <Button variant="link" className="text-[#2EC4B6]" asChild>
                  <Link to="/contact">Read Case Study</Link>
                </Button>
              </div>
            </Card>
            
            <Card className="p-6 border-2 border-[#2EC4B6]">
              <h3 className="text-xl font-bold mb-2">Healthcare Network</h3>
              <p className="text-gray-500 mb-4">2,000+ Employees</p>
              <p className="text-gray-600 mb-4">
                Addressed burnout among healthcare staff with targeted wellness programs, resulting in improved patient care metrics and 28% reduction in sick days.
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold">47% ROI</p>
                  <p className="text-sm text-gray-500">First Year</p>
                </div>
                <Button variant="link" className="text-[#2EC4B6]" asChild>
                  <Link to="/contact">Read Case Study</Link>
                </Button>
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2">Retail Chain</h3>
              <p className="text-gray-500 mb-4">10,000+ Employees</p>
              <p className="text-gray-600 mb-4">
                Improved employee retention and customer satisfaction by implementing Aaiena's mental wellness platform across distributed store locations.
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold">29% ROI</p>
                  <p className="text-sm text-gray-500">First Year</p>
                </div>
                <Button variant="link" className="text-[#2EC4B6]" asChild>
                  <Link to="/contact">Read Case Study</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Enterprise Pricing</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">Scalable solutions for organizations of all sizes.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-gray-200 relative">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Startup</h3>
                <div className="mb-1">
                  <span className="text-3xl font-bold">$5</span>
                  <span className="text-gray-500">/employee/month</span>
                </div>
                <p className="text-gray-500 mb-4">For organizations with 10-99 employees</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#2EC4B6] mr-2 shrink-0" />
                    <span>Full access for all employees</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#2EC4B6] mr-2 shrink-0" />
                    <span>Basic wellness analytics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#2EC4B6] mr-2 shrink-0" />
                    <span>Email support</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-[#2EC4B6] shadow-lg relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#2EC4B6] text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Business</h3>
                <div className="mb-1">
                  <span className="text-3xl font-bold">$4</span>
                  <span className="text-gray-500">/employee/month</span>
                </div>
                <p className="text-gray-500 mb-4">For organizations with 100-999 employees</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#2EC4B6] mr-2 shrink-0" />
                    <span>All Startup features</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#2EC4B6] mr-2 shrink-0" />
                    <span>Advanced analytics dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#2EC4B6] mr-2 shrink-0" />
                    <span>Custom wellness challenges</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#2EC4B6] mr-2 shrink-0" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button className="w-full bg-[#2EC4B6] hover:bg-teal-600" asChild>
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-gray-200 relative">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <div className="mb-1">
                  <span className="text-3xl font-bold">Custom</span>
                </div>
                <p className="text-gray-500 mb-4">For organizations with 1,000+ employees</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#2EC4B6] mr-2 shrink-0" />
                    <span>All Business features</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#2EC4B6] mr-2 shrink-0" />
                    <span>API integrations with HRIS</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#2EC4B6] mr-2 shrink-0" />
                    <span>Custom reporting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#2EC4B6] mr-2 shrink-0" />
                    <span>Dedicated success manager</span>
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
          <h2 className="text-3xl font-bold mb-6">Transform Your Workplace Wellness Strategy</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join forward-thinking organizations that prioritize employee mental health as a cornerstone of their success.
          </p>
          <Button size="lg" className="bg-white text-[#2EC4B6] hover:bg-gray-100" asChild>
            <Link to="/contact">Book a Consultation</Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default SolutionsEmployers;
