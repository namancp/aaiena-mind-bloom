
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const SolutionsIndividuals = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-[#E9F7F6] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">For Individuals</h1>
            <p className="text-lg text-gray-700 mb-8">
              Your personal AI companion for daily mental wellness support and growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-[#2EC4B6] hover:bg-teal-600" asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/chatbot">Try the AI Chatbot</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Personal Mental Wellness Journey</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="rounded-full bg-[#E9F7F6] w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2EC4B6]"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 AI Support</h3>
              <p className="text-gray-600">
                Access empathetic, personalized support whenever you need it, day or night, with our AI chatbot designed to understand your unique needs.
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="rounded-full bg-[#E9F7F6] w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2EC4B6]"><path d="M2 12a10 10 0 1 1 10 10 2.5 2.5 0 0 1-4-2.5 2.5 2.5 0 0 0-4-2.5A10 10 0 0 1 2 12z"/><path d="M9 12a3 3 0 1 0 3 3"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Mood Tracking</h3>
              <p className="text-gray-600">
                Monitor your emotional wellbeing over time with our simple daily check-ins, revealing patterns and insights about your mental health journey.
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="rounded-full bg-[#E9F7F6] w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2EC4B6]"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Personalized Wellness</h3>
              <p className="text-gray-600">
                Receive tailored recommendations for activities, exercises, and resources based on your unique emotional patterns and needs.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 h-full w-1 bg-teal-100 md:left-1/2 md:-ml-0.5"></div>
              
              {/* Step 1 */}
              <div className="mb-12 flex md:justify-between">
                <div className="hidden md:block md:w-5/12"></div>
                <div className="flex items-center md:w-2/12 md:justify-center">
                  <div className="rounded-full bg-[#2EC4B6] p-2 text-white z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                </div>
                <div className="ml-8 md:ml-0 md:w-5/12">
                  <h3 className="text-xl font-bold mb-2">Create Your Account</h3>
                  <p className="text-gray-600">Sign up for your personal Aaiena account to begin your wellness journey and unlock all features.</p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="mb-12 flex md:justify-between">
                <div className="ml-8 md:ml-0 md:order-1 md:w-5/12">
                  <h3 className="text-xl font-bold mb-2">Complete Your Profile</h3>
                  <p className="text-gray-600">Share your wellness goals and preferences to help our AI understand how best to support you.</p>
                </div>
                <div className="flex items-center md:order-2 md:w-2/12 md:justify-center">
                  <div className="rounded-full bg-[#2EC4B6] p-2 text-white z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="m16 13-3.5 3.5-2-2L8 17"/></svg>
                  </div>
                </div>
                <div className="hidden md:order-3 md:block md:w-5/12"></div>
              </div>
              
              {/* Step 3 */}
              <div className="mb-12 flex md:justify-between">
                <div className="hidden md:block md:w-5/12"></div>
                <div className="flex items-center md:w-2/12 md:justify-center">
                  <div className="rounded-full bg-[#2EC4B6] p-2 text-white z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  </div>
                </div>
                <div className="ml-8 md:ml-0 md:w-5/12">
                  <h3 className="text-xl font-bold mb-2">Chat With Your AI</h3>
                  <p className="text-gray-600">Engage with your personal AI assistant for supportive conversations whenever you need them.</p>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex md:justify-between">
                <div className="ml-8 md:ml-0 md:order-1 md:w-5/12">
                  <h3 className="text-xl font-bold mb-2">Track and Grow</h3>
                  <p className="text-gray-600">Complete daily check-ins to monitor your progress and receive increasingly personalized support.</p>
                </div>
                <div className="flex items-center md:order-2 md:w-2/12 md:justify-center">
                  <div className="rounded-full bg-[#2EC4B6] p-2 text-white z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                  </div>
                </div>
                <div className="hidden md:order-3 md:block md:w-5/12"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Simple, Transparent Pricing</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">Choose the plan that works best for your mental wellness needs.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <Card className="border-2 border-gray-200">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Basic</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">Free</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#2EC4B6] mr-2 shrink-0" />
                    <span>Limited AI chatbot conversations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#2EC4B6] mr-2 shrink-0" />
                    <span>Basic mood tracking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#2EC4B6] mr-2 shrink-0" />
                    <span>General wellness resources</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/signup">Sign Up Free</Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* Premium Plan */}
            <Card className="border-2 border-[#2EC4B6] shadow-lg relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#2EC4B6] text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Premium</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">$9.99</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#2EC4B6] mr-2 shrink-0" />
                    <span>Unlimited AI conversations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#2EC4B6] mr-2 shrink-0" />
                    <span>Advanced mood tracking and insights</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#2EC4B6] mr-2 shrink-0" />
                    <span>Personalized recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#2EC4B6] mr-2 shrink-0" />
                    <span>Progress reports</span>
                  </li>
                </ul>
                <Button className="w-full bg-[#2EC4B6] hover:bg-teal-600" asChild>
                  <Link to="/signup">Start Premium</Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* Family Plan */}
            <Card className="border-2 border-gray-200">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Family</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">$24.99</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#2EC4B6] mr-2 shrink-0" />
                    <span>All Premium features</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#2EC4B6] mr-2 shrink-0" />
                    <span>Up to 5 family member accounts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#2EC4B6] mr-2 shrink-0" />
                    <span>Family wellness insights</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#2EC4B6] mr-2 shrink-0" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/signup">Choose Family Plan</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#E9F7F6]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Mental Wellness Journey Today</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of individuals who are experiencing better mental wellbeing with Aaiena's AI-powered support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-[#2EC4B6] hover:bg-teal-600" asChild>
              <Link to="/signup">Sign Up Free</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SolutionsIndividuals;
