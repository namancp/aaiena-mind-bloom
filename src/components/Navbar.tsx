
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-teal-500">Aaiena</span>
          <span className="ml-2 text-xs text-muted-foreground">A Unit of Sankshit Group</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-teal-500">Home</Link>
          <Link to="/about" className="text-sm font-medium hover:text-teal-500">About</Link>
          <Link to="/chatbot" className="text-sm font-medium hover:text-teal-500">AI Chatbot</Link>
          <Link to="/checkin" className="text-sm font-medium hover:text-teal-500">Daily Check-In</Link>
          <Link to="/solutions" className="text-sm font-medium hover:text-teal-500">Solutions</Link>
          <Link to="/testimonials" className="text-sm font-medium hover:text-teal-500">Testimonials</Link>
          <Link to="/smart-sizing" className="text-sm font-medium hover:text-teal-500">Smart Sizing</Link>
          <Link to="/contact" className="text-sm font-medium hover:text-teal-500">Contact</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" asChild>
            <Link to="/login">Login</Link>
          </Button>
          <Button className="bg-teal-500 hover:bg-teal-600" asChild>
            <Link to="/signup">Sign Up</Link>
          </Button>
          
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-6">
                <Link to="/" className="text-lg font-medium hover:text-teal-500">Home</Link>
                <Link to="/about" className="text-lg font-medium hover:text-teal-500">About</Link>
                <Link to="/chatbot" className="text-lg font-medium hover:text-teal-500">AI Chatbot</Link>
                <Link to="/checkin" className="text-lg font-medium hover:text-teal-500">Daily Check-In</Link>
                <Link to="/solutions" className="text-lg font-medium hover:text-teal-500">Solutions</Link>
                <Link to="/testimonials" className="text-lg font-medium hover:text-teal-500">Testimonials</Link>
                <Link to="/smart-sizing" className="text-lg font-medium hover:text-teal-500">Smart Sizing</Link>
                <Link to="/contact" className="text-lg font-medium hover:text-teal-500">Contact</Link>

                <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
                  <Button variant="outline" asChild className="w-full">
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button className="bg-teal-500 hover:bg-teal-600 w-full" asChild>
                    <Link to="/signup">Sign Up</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
