
import { useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send } from "lucide-react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm Aaiena's AI mental wellness assistant. How are you feeling today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      const botResponses = [
        "I understand how you're feeling. Would you like to talk more about that?",
        "Thank you for sharing. It's important to acknowledge your emotions. How long have you been feeling this way?",
        "I hear you. Taking time for yourself is essential. Would you like some suggestions for self-care activities?",
        "That sounds challenging. Remember that your feelings are valid, and it's okay to ask for help.",
        "I'm here to support you. What would be most helpful for you right now?",
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const botMessage = {
        id: Date.now() + 1,
        text: randomResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-[#E9F7F6] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet the AI Chatbot</h1>
            <p className="text-lg text-gray-700 mb-8">
              Your 24/7 companion for mental wellness support, offering empathetic conversation whenever you need it.
            </p>
          </div>
        </div>
      </section>

      {/* Chatbot Interface */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border rounded-lg shadow-lg overflow-hidden">
              <div className="bg-[#2EC4B6] text-white p-4">
                <h2 className="text-xl font-semibold">Aaiena AI Assistant</h2>
                <p className="text-sm opacity-90">Online and ready to chat</p>
              </div>
              
              <div className="h-[400px] overflow-y-auto p-4 bg-gray-50 flex flex-col space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === "user"
                          ? "bg-[#2EC4B6] text-white"
                          : "bg-white shadow"
                      }`}
                    >
                      <p>{message.text}</p>
                      <span className="text-xs opacity-70 block mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </span>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white rounded-lg p-3 shadow">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }}></div>
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-4 border-t bg-white">
                <div className="flex space-x-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Type your message here..."
                    className="flex-1"
                  />
                  <Button 
                    onClick={handleSendMessage} 
                    className="bg-[#2EC4B6] hover:bg-teal-600"
                  >
                    <Send className="h-5 w-5" />
                    <span className="sr-only">Send</span>
                  </Button>
                </div>
              </div>
            </Card>
            
            <div className="mt-8 p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">About Our AI Chatbot</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#2EC4B6] mr-2">✓</span>
                  <span>Available 24/7 for emotional support and mental health guidance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2EC4B6] mr-2">✓</span>
                  <span>Responds with empathy and understanding to your unique situation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2EC4B6] mr-2">✓</span>
                  <span>Offers evidence-based coping strategies and wellness exercises</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2EC4B6] mr-2">✓</span>
                  <span>Completely private and confidential conversations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2EC4B6] mr-2">✓</span>
                  <span>Not a replacement for professional help, but a valuable supplement</span>
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> In case of emergency or crisis, please contact emergency services immediately or call a mental health crisis hotline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready for a More Personalized Experience?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Create an account to save your chat history, track your progress, and receive more tailored support.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-[#2EC4B6] hover:bg-teal-600" asChild>
              <Link to="/signup">Create Free Account</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Chatbot;
