
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SmartSizing = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-[#E9F7F6] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Smart Sizing Solution</h1>
            <p className="text-lg text-gray-700 mb-4">
              Our original technology offering that revolutionized digital fitting rooms.
            </p>
            <div className="inline-block bg-gray-200 text-sm font-medium px-3 py-1 rounded-full">
              Legacy Product
            </div>
          </div>
        </div>
      </section>

      {/* About Smart Sizing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">The Original Aaiena Technology</h2>
              <p className="text-gray-700 mb-4">
                Aaiena's Smart Sizing solution was our first breakthrough technology, using computer vision and AI to provide accurate clothing size recommendations for online shoppers.
              </p>
              <p className="text-gray-700 mb-4">
                By simply uploading a photo, customers could receive precise size recommendations across hundreds of clothing brands, reducing returns by up to 40% and improving shopping confidence.
              </p>
              <p className="text-gray-700 mb-6">
                While our company has evolved to focus on mental health solutions, we continue to support our Smart Sizing technology for our existing retail partners.
              </p>
              <Button className="bg-[#2EC4B6] hover:bg-teal-600" asChild>
                <a href="#features">Learn More</a>
              </Button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/placeholder.svg" 
                alt="Smart Sizing Technology" 
                className="rounded-lg shadow-lg w-full" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Smart Sizing Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2EC4B6]"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Precision Measurement</h3>
              <p className="text-center text-gray-600">
                Computer vision technology captures accurate body measurements from a single photograph.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2EC4B6]"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Brand Database</h3>
              <p className="text-center text-gray-600">
                Comprehensive database of sizing metrics across thousands of fashion brands and styles.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2EC4B6]"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/></svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Retailer Integration</h3>
              <p className="text-center text-gray-600">
                Seamless API integration with e-commerce platforms for real-time size recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">FashionRetail Co.</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-500 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">5.0 Rating</span>
              </div>
              <p className="text-gray-700 mb-4">
                "Implementing Aaiena's Smart Sizing solution reduced our return rates by 38% and increased customer satisfaction scores by 27%. A game-changer for our online business."
              </p>
              <p className="text-sm font-medium">- Sarah Johnson, E-Commerce Director</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">StyleMakers Inc.</h3>
              <div className="flex items-center mb-3">
                <div className="text-yellow-500 flex">
                  {[1, 2, 3, 4].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  ))}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor" fillOpacity="0.3"/></svg>
                </div>
                <span className="ml-2 text-sm text-gray-600">4.5 Rating</span>
              </div>
              <p className="text-gray-700 mb-4">
                "Our customers love the confidence that comes with accurate size predictions. We've seen a 42% increase in first-time buyers completing purchases."
              </p>
              <p className="text-sm font-medium">- Michael Chen, Product Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Support */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Legacy Support Information</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            While Aaiena has evolved to focus on mental health solutions, we continue to provide support and maintenance for our existing Smart Sizing customers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="outline" className="text-white border-white hover:text-gray-800 hover:bg-white" asChild>
              <Link to="/contact">Contact Support</Link>
            </Button>
            <Button size="lg" className="bg-[#2EC4B6] hover:bg-teal-600" asChild>
              <Link to="/">Explore Our Mental Health Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SmartSizing;
