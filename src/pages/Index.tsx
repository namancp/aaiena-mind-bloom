
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Heart, Activity, Users, Building, Award } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-[#E9F7F6] py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                AI That Listens. <br />
                <span className="text-[#2EC4B6]">Mental Health</span> That Grows With You.
              </h1>
              <p className="text-lg mb-8 text-gray-700">
                Experience personalized mental wellness through our empathetic AI. Track your emotions, receive tailored suggestions, and take control of your mental health journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#2EC4B6] hover:bg-teal-600" size="lg" asChild>
                  <Link to="/checkin">Start Your Check-In</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/chatbot">Meet the AI Chatbot</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="/980f4f9f-92bf-41e4-9cae-23e2be54fc7e.png" 
                alt="Compassionate AI Mental Health Support" 
                className="w-full max-w-md rounded-lg shadow-xl" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-teal-100 rounded-full">
                    <MessageCircle className="h-8 w-8 text-[#2EC4B6]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">AI Chatbot</h3>
                <p className="text-center text-gray-600">
                  Conversational support available 24/7. Our AI listens, responds with empathy, and guides your wellness journey.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-teal-100 rounded-full">
                    <Activity className="h-8 w-8 text-[#2EC4B6]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Daily Check-In</h3>
                <p className="text-center text-gray-600">
                  Track your emotional state with our interactive mood tracker and build a detailed picture of your mental wellness over time.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-teal-100 rounded-full">
                    <Heart className="h-8 w-8 text-[#2EC4B6]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Personalized Suggestions</h3>
                <p className="text-center text-gray-600">
                  Receive tailored recommendations for breathing exercises, journaling prompts, and wellness activities based on your needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Solutions For Everyone</h2>
          <p className="text-lg text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Our AI-powered mental health platform adapts to various needs across different settings.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:translate-y-[-5px]">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-teal-100 rounded-full">
                    <Users className="h-8 w-8 text-[#2EC4B6]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">For Individuals</h3>
                <p className="text-center text-gray-600 mb-4">
                  Private check-ins, personalized support, and progress tracking for your mental wellness journey.
                </p>
                <div className="flex justify-center">
                  <Button className="bg-[#2EC4B6] hover:bg-teal-600" asChild>
                    <Link to="/solutions/individuals">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:translate-y-[-5px]">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-teal-100 rounded-full">
                    <Award className="h-8 w-8 text-[#2EC4B6]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">For Clinics</h3>
                <p className="text-center text-gray-600 mb-4">
                  Pre-session AI tools, patient progress monitoring, and integrated insights for healthcare providers.
                </p>
                <div className="flex justify-center">
                  <Button className="bg-[#2EC4B6] hover:bg-teal-600" asChild>
                    <Link to="/solutions/clinics">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:translate-y-[-5px]">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-teal-100 rounded-full">
                    <Building className="h-8 w-8 text-[#2EC4B6]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">For Employers</h3>
                <p className="text-center text-gray-600 mb-4">
                  Team-wide wellness initiatives, anonymous aggregate insights, and workplace mental health support.
                </p>
                <div className="flex justify-center">
                  <Button className="bg-[#2EC4B6] hover:bg-teal-600" asChild>
                    <Link to="/solutions/employers">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2EC4B6] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Mental Wellness?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Join thousands of users who have improved their mental well-being with our AI-powered platform. Start your journey today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="outline" className="text-white border-white hover:text-[#2EC4B6] hover:bg-white" asChild>
              <Link to="/signup">Sign Up Free</Link>
            </Button>
            <Button size="lg" className="bg-white text-[#2EC4B6] hover:bg-gray-100" asChild>
              <Link to="/chatbot">Try AI Chatbot</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
