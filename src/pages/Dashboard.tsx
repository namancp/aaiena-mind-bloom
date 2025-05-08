
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Activity, Heart, Calendar, User, Settings, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

const Dashboard = () => {
  const { toast } = useToast();
  const { user, logout } = useAuth();
  const [moodHistory] = useState([
    { date: "May 5", mood: "Happy", intensity: 8 },
    { date: "May 4", mood: "Anxious", intensity: 6 },
    { date: "May 3", mood: "Calm", intensity: 7 },
    { date: "May 2", mood: "Tired", intensity: 5 },
    { date: "May 1", mood: "Excited", intensity: 9 },
  ]);

  const handleCheckIn = () => {
    toast({
      title: "Daily Check-In",
      description: "Starting your daily mental health check-in.",
    });
  };

  const getMoodEmoji = (mood) => {
    switch(mood) {
      case "Happy": return "😊";
      case "Anxious": return "😰";
      case "Calm": return "😌";
      case "Tired": return "😴";
      case "Excited": return "😃";
      default: return "😐";
    }
  };

  // Helper function to get user's full name or first name
  const getUserName = () => {
    if (!user) return "User";
    
    if (user.firstName && user.lastName) {
      return `${user.firstName} ${user.lastName}`;
    } else if (user.firstName) {
      return user.firstName;
    } else {
      return user.email.split('@')[0];
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col bg-white border-r">
        <div className="p-6 border-b">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-[#2EC4B6]">Aaiena</span>
          </Link>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            <li>
              <Link to="/dashboard" className="flex items-center px-3 py-2 text-gray-900 rounded-md bg-gray-100">
                <Activity className="mr-3 h-5 w-5 text-[#2EC4B6]" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/checkin" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                <Heart className="mr-3 h-5 w-5" />
                <span>Daily Check-In</span>
              </Link>
            </li>
            <li>
              <Link to="/chatbot" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                <MessageCircle className="mr-3 h-5 w-5" />
                <span>AI Chat</span>
              </Link>
            </li>
            <li>
              <Link to="/history" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                <Calendar className="mr-3 h-5 w-5" />
                <span>History</span>
              </Link>
            </li>
            <li>
              <Link to="/profile" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                <User className="mr-3 h-5 w-5" />
                <span>Profile</span>
              </Link>
            </li>
            <li>
              <Link to="/settings" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                <Settings className="mr-3 h-5 w-5" />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t">
          <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50" onClick={logout}>
            <LogOut className="mr-3 h-5 w-5" />
            <span>Logout</span>
          </Button>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b z-10">
        <div className="flex items-center justify-between p-4">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-[#2EC4B6]">Aaiena</span>
          </Link>
          <Button variant="outline" size="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 md:p-8 p-4 pt-20 md:pt-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Welcome back, {getUserName()}!</h1>
          <p className="text-gray-600">Here's an overview of your mental wellness journey.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Current Streak</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">5 Days</div>
              <p className="text-sm text-gray-500">Keep up the good work!</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Wellness Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#2EC4B6]">78/100</div>
              <p className="text-sm text-gray-500">Improved by 5 points this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">AI Chat Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">12</div>
              <p className="text-sm text-gray-500">Last session: 2 hours ago</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Daily Check-In</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="mb-2">You haven't checked in today yet</p>
                  <p className="text-sm text-gray-500">Record how you're feeling today to track your mental health journey.</p>
                </div>
                <Button className="bg-[#2EC4B6] hover:bg-teal-600" onClick={handleCheckIn} asChild>
                  <Link to="/checkin">Start Check-In</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>AI Assistant</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="mb-2">Need someone to talk to?</p>
                  <p className="text-sm text-gray-500">Our AI assistant is available 24/7 to support your mental wellness.</p>
                </div>
                <Button className="bg-[#2EC4B6] hover:bg-teal-600" asChild>
                  <Link to="/chatbot">Start Chat</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Mood History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {moodHistory.map((entry, index) => (
                <div key={index} className="flex items-center p-2 border rounded-lg">
                  <div className="text-2xl mr-3">{getMoodEmoji(entry.mood)}</div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="font-medium">{entry.mood}</span>
                      <span className="text-gray-500 text-sm">{entry.date}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div 
                        className="bg-[#2EC4B6] h-2 rounded-full" 
                        style={{ width: `${entry.intensity * 10}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Intensity: {entry.intensity}/10</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Button variant="outline" asChild>
                <Link to="/history">View Full History</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
