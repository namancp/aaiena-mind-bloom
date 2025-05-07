
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check if the current path matches a given path
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between py-2">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="text-2xl font-bold text-teal-500">Aaiena</span>
          <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">A Unit of Sankshit Group</span>
        </Link>
        
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <Link to="/" className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive('/') ? 'text-teal-500 bg-teal-50' : 'hover:text-teal-500 hover:bg-teal-50/50'}`}>
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/about" className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive('/about') ? 'text-teal-500 bg-teal-50' : 'hover:text-teal-500 hover:bg-teal-50/50'}`}>
                About
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={`text-sm font-medium ${isActive('/solutions') || isActive('/solutions/individuals') || isActive('/solutions/clinics') || isActive('/solutions/employers') ? 'text-teal-500' : ''}`}>
                Solutions
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px]">
                  <Link to="/solutions" className="block px-4 py-2 hover:bg-teal-50 rounded-md transition-colors">
                    <div className="text-sm font-medium">All Solutions</div>
                    <p className="text-xs text-muted-foreground">Overview of our mental wellness offerings</p>
                  </Link>
                  <Link to="/solutions/individuals" className="block px-4 py-2 hover:bg-teal-50 rounded-md transition-colors">
                    <div className="text-sm font-medium">For Individuals</div>
                    <p className="text-xs text-muted-foreground">Personal mental wellness journey</p>
                  </Link>
                  <Link to="/solutions/clinics" className="block px-4 py-2 hover:bg-teal-50 rounded-md transition-colors">
                    <div className="text-sm font-medium">For Clinics</div>
                    <p className="text-xs text-muted-foreground">Enhance therapeutic outcomes</p>
                  </Link>
                  <Link to="/solutions/employers" className="block px-4 py-2 hover:bg-teal-50 rounded-md transition-colors">
                    <div className="text-sm font-medium">For Employers</div>
                    <p className="text-xs text-muted-foreground">Foster workplace wellness</p>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/chatbot" className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive('/chatbot') ? 'text-teal-500 bg-teal-50' : 'hover:text-teal-500 hover:bg-teal-50/50'}`}>
                AI Chatbot
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/checkin" className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive('/checkin') ? 'text-teal-500 bg-teal-50' : 'hover:text-teal-500 hover:bg-teal-50/50'}`}>
                Daily Check-In
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/testimonials" className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive('/testimonials') ? 'text-teal-500 bg-teal-50' : 'hover:text-teal-500 hover:bg-teal-50/50'}`}>
                Testimonials
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/smart-sizing" className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive('/smart-sizing') ? 'text-teal-500 bg-teal-50' : 'hover:text-teal-500 hover:bg-teal-50/50'}`}>
                Smart Sizing
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contact" className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive('/contact') ? 'text-teal-500 bg-teal-50' : 'hover:text-teal-500 hover:bg-teal-50/50'}`}>
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="font-medium hidden md:flex" asChild>
            <Link to="/login">Login</Link>
          </Button>
          <Button 
            size="sm" 
            className="bg-teal-500 hover:bg-teal-600 text-white shadow-sm hidden md:flex font-medium" 
            asChild
          >
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
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <div className="flex flex-col gap-6 mt-6">
                <Link to="/" className="flex items-center mb-6">
                  <span className="text-2xl font-bold text-teal-500">Aaiena</span>
                  <span className="ml-2 text-xs text-muted-foreground">A Unit of Sankshit Group</span>
                </Link>
                
                <nav className="flex flex-col gap-2">
                  <Link 
                    to="/" 
                    className={`px-4 py-2 text-base font-medium rounded-md transition-colors ${isActive('/') ? 'text-teal-500 bg-teal-50' : 'hover:text-teal-500 hover:bg-teal-50/50'}`}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/about" 
                    className={`px-4 py-2 text-base font-medium rounded-md transition-colors ${isActive('/about') ? 'text-teal-500 bg-teal-50' : 'hover:text-teal-500 hover:bg-teal-50/50'}`}
                  >
                    About
                  </Link>
                  <Link 
                    to="/chatbot" 
                    className={`px-4 py-2 text-base font-medium rounded-md transition-colors ${isActive('/chatbot') ? 'text-teal-500 bg-teal-50' : 'hover:text-teal-500 hover:bg-teal-50/50'}`}
                  >
                    AI Chatbot
                  </Link>
                  <Link 
                    to="/checkin" 
                    className={`px-4 py-2 text-base font-medium rounded-md transition-colors ${isActive('/checkin') ? 'text-teal-500 bg-teal-50' : 'hover:text-teal-500 hover:bg-teal-50/50'}`}
                  >
                    Daily Check-In
                  </Link>
                  
                  <div className="px-4 py-2 text-base font-medium">
                    Solutions
                  </div>
                  <div className="pl-4 flex flex-col gap-1">
                    <Link 
                      to="/solutions" 
                      className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${isActive('/solutions') ? 'text-teal-500 bg-teal-50' : 'hover:text-teal-500 hover:bg-teal-50/50'}`}
                    >
                      All Solutions
                    </Link>
                    <Link 
                      to="/solutions/individuals" 
                      className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${isActive('/solutions/individuals') ? 'text-teal-500 bg-teal-50' : 'hover:text-teal-500 hover:bg-teal-50/50'}`}
                    >
                      For Individuals
                    </Link>
                    <Link 
                      to="/solutions/clinics" 
                      className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${isActive('/solutions/clinics') ? 'text-teal-500 bg-teal-50' : 'hover:text-teal-500 hover:bg-teal-50/50'}`}
                    >
                      For Clinics
                    </Link>
                    <Link 
                      to="/solutions/employers" 
                      className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${isActive('/solutions/employers') ? 'text-teal-500 bg-teal-50' : 'hover:text-teal-500 hover:bg-teal-50/50'}`}
                    >
                      For Employers
                    </Link>
                  </div>
                  
                  <Link 
                    to="/testimonials" 
                    className={`px-4 py-2 text-base font-medium rounded-md transition-colors ${isActive('/testimonials') ? 'text-teal-500 bg-teal-50' : 'hover:text-teal-500 hover:bg-teal-50/50'}`}
                  >
                    Testimonials
                  </Link>
                  <Link 
                    to="/smart-sizing" 
                    className={`px-4 py-2 text-base font-medium rounded-md transition-colors ${isActive('/smart-sizing') ? 'text-teal-500 bg-teal-50' : 'hover:text-teal-500 hover:bg-teal-50/50'}`}
                  >
                    Smart Sizing
                  </Link>
                  <Link 
                    to="/contact" 
                    className={`px-4 py-2 text-base font-medium rounded-md transition-colors ${isActive('/contact') ? 'text-teal-500 bg-teal-50' : 'hover:text-teal-500 hover:bg-teal-50/50'}`}
                  >
                    Contact
                  </Link>
                </nav>

                <div className="flex flex-col gap-3 mt-4 pt-4 border-t">
                  <Button variant="outline" className="w-full justify-center" asChild>
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button className="w-full bg-teal-500 hover:bg-teal-600 justify-center" asChild>
                    <Link to="/signup">Sign Up</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
