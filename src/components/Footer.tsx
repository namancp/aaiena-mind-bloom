
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Aaiena</h3>
            <p className="mb-4">A Unit of Sankshit Group</p>
            <p>Redefining mental wellness through empathetic AI technology.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-teal-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-teal-400">About Us</Link></li>
              <li><Link to="/chatbot" className="hover:text-teal-400">AI Chatbot</Link></li>
              <li><Link to="/solutions" className="hover:text-teal-400">Solutions</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="hover:text-teal-400">Blog</Link></li>
              <li><Link to="/faq" className="hover:text-teal-400">FAQ</Link></li>
              <li><Link to="/smart-sizing" className="hover:text-teal-400">Smart Sizing</Link></li>
              <li><Link to="/privacy" className="hover:text-teal-400">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>Email: info@aaiena.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li><Link to="/contact" className="hover:text-teal-400">Contact Form</Link></li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" aria-label="Facebook" className="hover:text-teal-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-teal-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-teal-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-teal-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Aaiena. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
