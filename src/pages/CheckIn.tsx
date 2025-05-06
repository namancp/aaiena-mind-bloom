
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";

const emotions = [
  { name: "Happy", emoji: "😊", color: "bg-yellow-100 border-yellow-400" },
  { name: "Calm", emoji: "😌", color: "bg-blue-100 border-blue-400" },
  { name: "Excited", emoji: "😃", color: "bg-green-100 border-green-400" },
  { name: "Sad", emoji: "😢", color: "bg-indigo-100 border-indigo-400" },
  { name: "Anxious", emoji: "😰", color: "bg-purple-100 border-purple-400" },
  { name: "Frustrated", emoji: "😤", color: "bg-red-100 border-red-400" },
  { name: "Tired", emoji: "😴", color: "bg-gray-100 border-gray-400" },
  { name: "Overwhelmed", emoji: "😵", color: "bg-pink-100 border-pink-400" },
];

const CheckIn = () => {
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [intensityValue, setIntensityValue] = useState([5]);
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (selectedEmotion) {
      console.log({
        emotion: selectedEmotion,
        intensity: intensityValue[0],
        notes,
      });
      setIsSubmitted(true);
    }
  };

  const resetForm = () => {
    setSelectedEmotion(null);
    setIntensityValue([5]);
    setNotes("");
    setIsSubmitted(false);
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-[#E9F7F6] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Daily Mental Health Check-In</h1>
            <p className="text-lg text-gray-700 mb-8">
              Take a moment to reflect on how you're feeling today. Regular check-ins help you track your mental well-being over time.
            </p>
          </div>
        </div>
      </section>

      {/* Check-In Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                {!isSubmitted ? (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">How are you feeling right now?</h2>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {emotions.map((emotion) => (
                          <button
                            key={emotion.name}
                            onClick={() => setSelectedEmotion(emotion)}
                            className={`p-4 rounded-lg border-2 transition-all ${
                              selectedEmotion?.name === emotion.name
                                ? `${emotion.color} border-opacity-100 transform scale-105`
                                : "border-transparent hover:bg-gray-50"
                            }`}
                          >
                            <div className="text-4xl mb-2">{emotion.emoji}</div>
                            <div className="font-medium">{emotion.name}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {selectedEmotion && (
                      <div className="animate-fade-in">
                        <h3 className="text-xl font-bold mb-3">
                          How intense is this feeling?
                        </h3>
                        <div className="px-4">
                          <div className="flex justify-between text-sm text-gray-500 mb-2">
                            <span>Mild</span>
                            <span>Moderate</span>
                            <span>Intense</span>
                          </div>
                          <Slider
                            defaultValue={[5]}
                            max={10}
                            step={1}
                            value={intensityValue}
                            onValueChange={setIntensityValue}
                            className="py-4"
                          />
                          <div className="text-center text-lg font-medium mt-2">
                            {intensityValue[0]}/10
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedEmotion && (
                      <div className="animate-fade-in">
                        <h3 className="text-xl font-bold mb-3">Any additional thoughts?</h3>
                        <Textarea
                          placeholder="Optional: Note what might be causing these feelings or any other reflections..."
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          className="min-h-[100px]"
                        />
                      </div>
                    )}

                    <div className="pt-4">
                      <Button 
                        onClick={handleSubmit}
                        disabled={!selectedEmotion}
                        className="w-full bg-[#2EC4B6] hover:bg-teal-600"
                        size="lg"
                      >
                        Submit Check-In
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center space-y-6 py-8">
                    <div className="text-6xl mb-4">✅</div>
                    <h2 className="text-2xl font-bold">Check-In Completed!</h2>
                    <p className="text-lg text-gray-600">
                      Thank you for taking the time to check in with yourself today. Your entry has been recorded.
                    </p>
                    
                    <div className="bg-gray-50 p-4 rounded-lg mx-auto max-w-md">
                      <h3 className="font-medium mb-2">Your Mood Summary:</h3>
                      <div className="flex items-center justify-center mb-2">
                        <span className="text-4xl mr-3">{selectedEmotion.emoji}</span>
                        <span className="text-xl font-medium">{selectedEmotion.name}</span>
                      </div>
                      <p>Intensity: {intensityValue[0]}/10</p>
                    </div>
                    
                    <div className="pt-4">
                      <Button 
                        onClick={resetForm}
                        className="bg-[#2EC4B6] hover:bg-teal-600"
                      >
                        Start New Check-In
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <div className="mt-8 p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Benefits of Regular Check-Ins</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#2EC4B6] mr-2">✓</span>
                  <span>Increases self-awareness of your emotional patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2EC4B6] mr-2">✓</span>
                  <span>Helps identify triggers that affect your mental state</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2EC4B6] mr-2">✓</span>
                  <span>Provides data to track your mental wellness journey over time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2EC4B6] mr-2">✓</span>
                  <span>Enables our AI to offer more personalized recommendations</span>
                </li>
              </ul>
              
              <div className="mt-6 text-center">
                <p className="mb-4">Create an account to save your check-in history and receive personalized insights</p>
                <Button className="bg-[#2EC4B6] hover:bg-teal-600" asChild>
                  <Link to="/signup">Sign Up Free</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CheckIn;
