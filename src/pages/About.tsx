
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-[#E9F7F6] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Aaiena</h1>
            <p className="text-lg text-gray-700">
              Redefining mental wellness through empathetic AI technology.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="/placeholder.svg" 
                alt="Aaiena Team" 
                className="rounded-lg shadow-lg w-full" 
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Aaiena was founded with a simple yet powerful vision: to make mental health support accessible to everyone, everywhere, at any time.
              </p>
              <p className="text-gray-700 mb-4">
                As a unit of Sankshit Group, we combine decades of expertise in healthcare technology with cutting-edge AI to create solutions that truly understand human emotions and provide meaningful support.
              </p>
              <p className="text-gray-700 mb-4">
                Our name, "Aaiena," means mirror in Hindi, reflecting our mission to help people see themselves clearly and navigate their mental health journey with confidence and clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 mb-8">
              To democratize mental health support through AI-powered tools that are accessible, empathetic, and effective for everyone.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex flex-col items-center max-w-xs">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2EC4B6]"><path d="M22 12A10 10 0 1 1 12 2a10 10 0 0 1 10 10Z"/><circle cx="12" cy="12" r="4"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Accessibility</h3>
                <p className="text-gray-700 text-center">
                  Breaking barriers to mental health support regardless of location, time, or financial constraints.
                </p>
              </div>
              <div className="flex flex-col items-center max-w-xs">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2EC4B6]"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Empathy</h3>
                <p className="text-gray-700 text-center">
                  Creating AI that truly understands human emotions and responds with genuine care.
                </p>
              </div>
              <div className="flex flex-col items-center max-w-xs">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2EC4B6]"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Effectiveness</h3>
                <p className="text-gray-700 text-center">
                  Developing solutions backed by science that deliver measurable improvements in mental wellbeing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-full bg-gray-200 mb-4 overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt={`Team Member ${index}`} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="text-xl font-bold">Team Member {index}</h3>
                <p className="text-[#2EC4B6] mb-2">Position Title</p>
                <p className="text-gray-600 text-center text-sm">
                  Brief bio highlighting expertise and passion for mental health technology.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-[#2EC4B6] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us in Transforming Mental Wellness</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Be part of the mental health revolution. Experience how our AI-powered platform can support your wellness journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-[#2EC4B6] hover:bg-gray-100" asChild>
              <Link to="/chatbot">Try Our AI Chatbot</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:text-[#2EC4B6] hover:bg-white" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
