
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const testimonials = [
  {
    id: 1,
    name: "Sarah J.",
    role: "Individual User",
    image: "/placeholder.svg",
    quote: "Aaiena's AI chatbot has become my daily mental wellness companion. It helps me track my moods and provides practical suggestions when I'm feeling overwhelmed. The most impressive part is how it remembers our previous conversations and adapts to my needs.",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    role: "Clinical Psychologist",
    image: "/placeholder.svg",
    quote: "As a therapist, I've found Aaiena to be an excellent supplementary tool for my patients between sessions. The data insights help me better understand their patterns, and patients appreciate having support available 24/7. It's strengthened the therapeutic alliance.",
  },
  {
    id: 3,
    name: "Amanda Rodriguez",
    role: "HR Director, Tech Company",
    image: "/placeholder.svg",
    quote: "Implementing Aaiena across our organization has transformed our approach to employee wellness. The anonymous insights have helped us identify and address workplace stressors, and our team members appreciate having a safe space to check in about their mental health.",
  },
  {
    id: 4,
    name: "James K.",
    role: "Student",
    image: "/placeholder.svg",
    quote: "College was really stressing me out, and I didn't have time to see a therapist regularly. Aaiena has helped me manage my anxiety with daily check-ins and coping strategies. It's like having a supportive friend in my pocket at all times.",
  },
  {
    id: 5,
    name: "Dr. Priya Sharma",
    role: "Psychiatrist",
    image: "/placeholder.svg",
    quote: "I've recommended Aaiena to many of my patients as a complement to their treatment. The AI is impressively sophisticated in how it handles emotional conversations, and the mood tracking provides valuable data that helps inform our sessions.",
  },
  {
    id: 6,
    name: "Robert Williams",
    role: "CEO, Healthcare Startup",
    image: "/placeholder.svg",
    quote: "Our company has seen tangible improvements in productivity and reduced absenteeism since providing Aaiena to our employees. The platform's anonymized data has allowed us to make informed decisions about workplace wellness initiatives.",
  },
  {
    id: 7,
    name: "Erin T.",
    role: "Parent",
    image: "/placeholder.svg",
    quote: "As a busy mom of three, I often neglect my own mental health. Aaiena has given me a way to check in with myself and practice self-care in small moments throughout my day. The personalized suggestions really feel tailored to my situation.",
  },
  {
    id: 8,
    name: "Marcus J.",
    role: "Remote Worker",
    image: "/placeholder.svg",
    quote: "Working remotely can be isolating, and Aaiena has become an important part of maintaining my mental wellbeing. The daily check-ins and conversations help me stay grounded, and I've learned valuable techniques for managing stress.",
  },
  {
    id: 9,
    name: "Lisa Chen",
    role: "Wellness Director",
    image: "/placeholder.svg",
    quote: "From an implementation standpoint, Aaiena has been one of the smoothest wellness solutions we've rolled out. The team was responsive, and our employees found the platform intuitive and genuinely helpful. The ROI has been clear in our employee satisfaction metrics.",
  },
];

const Testimonials = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-[#E9F7F6] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Stories of Transformation</h1>
            <p className="text-lg text-gray-700 mb-8">
              Hear from individuals, therapists, and organizations who have experienced the positive impact of Aaiena's AI-powered mental wellness solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-[#2EC4B6] text-white p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 -mt-8 -mr-8 bg-teal-400 rounded-full opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 -mb-6 -ml-6 bg-teal-400 rounded-full opacity-20"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-white flex-shrink-0">
                <img 
                  src="/placeholder.svg" 
                  alt="Featured Testimonial" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div>
                <svg className="h-12 w-12 text-white opacity-30 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <blockquote className="text-xl md:text-2xl mb-4">
                  Aaiena has transformed how our clinic delivers mental health care. The AI assistant provides continuous support between sessions, and patients report feeling more connected to their treatment journey. It's a game-changer for therapeutic outcomes.
                </blockquote>
                <div className="font-bold text-lg">Dr. Elizabeth Warren</div>
                <div className="opacity-80">Clinical Director, Wellspring Mental Health Center</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Testimonial Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                  
                  <div className="mb-4 flex-grow">
                    <svg className="h-6 w-6 text-[#2EC4B6] opacity-50 mb-2" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-gray-700">{testimonial.quote}</p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Video Stories</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Watch these short videos to hear directly from people whose lives have been impacted by Aaiena.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video bg-gray-200 relative">
                  <img 
                    src="/placeholder.svg" 
                    alt={`Video thumbnail ${index}`} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full bg-white/80 p-4 hover:bg-white transition-colors cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2EC4B6]"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold mb-1">User Success Story {index}</h3>
                  <p className="text-sm text-gray-500">2:45 minutes</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Your Story */}
      <section className="py-16 bg-[#E9F7F6]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Share Your Story</h2>
            <p className="text-gray-700 mb-8">
              Has Aaiena made a difference in your life or organization? We'd love to hear about your experience and potentially feature it on our website.
            </p>
            <Button size="lg" className="bg-[#2EC4B6] hover:bg-teal-600" asChild>
              <Link to="/contact">Submit Your Testimonial</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2EC4B6] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Aaiena for Yourself?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of individuals and organizations that have transformed their approach to mental wellness with Aaiena.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-[#2EC4B6] hover:bg-gray-100" asChild>
              <Link to="/signup">Get Started Free</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
              <Link to="/chatbot">Try the AI Chatbot</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Testimonials;
