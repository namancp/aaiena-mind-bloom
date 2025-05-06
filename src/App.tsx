
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Chatbot from "./pages/Chatbot";
import CheckIn from "./pages/CheckIn";
import Solutions from "./pages/Solutions";
import SolutionsIndividuals from "./pages/SolutionsIndividuals";
import SolutionsClinics from "./pages/SolutionsClinics";
import SolutionsEmployers from "./pages/SolutionsEmployers";
import Testimonials from "./pages/Testimonials";
import SmartSizing from "./pages/SmartSizing";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/checkin" element={<CheckIn />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/individuals" element={<SolutionsIndividuals />} />
          <Route path="/solutions/clinics" element={<SolutionsClinics />} />
          <Route path="/solutions/employers" element={<SolutionsEmployers />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/smart-sizing" element={<SmartSizing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
