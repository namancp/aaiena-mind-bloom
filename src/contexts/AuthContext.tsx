
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

// Define the user type
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl?: string;
}

// Define the context shape
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  loginWithFacebook: () => Promise<void>;
  logout: () => void;
  updateUserProfile: (data: Partial<User>) => void;
}

// Create context with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create provider component
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Check for existing user session on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("aaiena_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse stored user data:", error);
        localStorage.removeItem("aaiena_user");
      }
    }
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    // Simulate authentication process
    try {
      // Generate a fake user - in a real app, this would come from your backend
      const newUser = {
        id: Math.random().toString(36).substr(2, 9),
        firstName: email.split('@')[0].split('.').map(name => 
          name.charAt(0).toUpperCase() + name.slice(1)
        ).join(' '),
        lastName: "",
        email: email,
      };
      
      // Save user to state and localStorage
      setUser(newUser);
      localStorage.setItem("aaiena_user", JSON.stringify(newUser));
      
      toast({
        title: "Login Successful",
        description: `Welcome back, ${newUser.firstName}!`,
      });
    } catch (error) {
      console.error("Login failed:", error);
      toast({
        title: "Login Failed",
        description: "Please check your credentials and try again.",
        variant: "destructive",
      });
      throw error;
    }
  };
  
  // Login with Google
  const loginWithGoogle = async () => {
    try {
      // Simulate Google authentication
      const newUser = {
        id: Math.random().toString(36).substr(2, 9),
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        avatarUrl: "https://i.pravatar.cc/150?u=johndoe",
      };
      
      setUser(newUser);
      localStorage.setItem("aaiena_user", JSON.stringify(newUser));
      
      toast({
        title: "Google Login Successful",
        description: `Welcome, ${newUser.firstName} ${newUser.lastName}!`,
      });
      
      navigate("/dashboard");
    } catch (error) {
      console.error("Google login failed:", error);
      toast({
        title: "Google Login Failed",
        description: "An error occurred during Google authentication.",
        variant: "destructive",
      });
      throw error;
    }
  };
  
  // Login with Facebook
  const loginWithFacebook = async () => {
    try {
      // Simulate Facebook authentication
      const newUser = {
        id: Math.random().toString(36).substr(2, 9),
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        avatarUrl: "https://i.pravatar.cc/150?u=janesmith",
      };
      
      setUser(newUser);
      localStorage.setItem("aaiena_user", JSON.stringify(newUser));
      
      toast({
        title: "Facebook Login Successful",
        description: `Welcome, ${newUser.firstName} ${newUser.lastName}!`,
      });
      
      navigate("/dashboard");
    } catch (error) {
      console.error("Facebook login failed:", error);
      toast({
        title: "Facebook Login Failed",
        description: "An error occurred during Facebook authentication.",
        variant: "destructive",
      });
      throw error;
    }
  };
  
  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("aaiena_user");
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate("/");
  };
  
  // Update user profile
  const updateUserProfile = (data: Partial<User>) => {
    if (!user) return;
    
    const updatedUser = { ...user, ...data };
    setUser(updatedUser);
    localStorage.setItem("aaiena_user", JSON.stringify(updatedUser));
  };
  
  const value = {
    user,
    isAuthenticated: !!user,
    login,
    loginWithGoogle,
    loginWithFacebook,
    logout,
    updateUserProfile,
  };
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Create a hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
