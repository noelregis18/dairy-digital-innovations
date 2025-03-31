
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, X, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm the Advent Dairy Farms assistant. How can I help you today?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message to chat
    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    
    // Clear input
    setInput("");
    
    // Simulate assistant response
    setIsLoading(true);
    setTimeout(() => {
      // More detailed and realistic responses
      const userQuestion = input.toLowerCase();
      let aiResponse = "";
      
      if (userQuestion.includes("iot") || userQuestion.includes("technology")) {
        aiResponse = "Our IoT system uses digital bands attached to each cow that monitor vital health metrics, milk production, water consumption, and feeding patterns. The data syncs with our JioGauSamriddhi app, allowing real-time monitoring of our entire herd's health and productivity.";
      } else if (userQuestion.includes("farm") || userQuestion.includes("facility")) {
        aiResponse = "Our state-of-the-art farm features automated brushing machines for cow hygiene, sensor-activated water systems, cooling foggers for temperature regulation, and fully automated milking machines—all powered by renewable energy to minimize our environmental footprint.";
      } else if (userQuestion.includes("milk") || userQuestion.includes("production")) {
        aiResponse = "Advent Dairy Farms is addressing the growing demand for pure milk across West Bengal, which has seen a 9.76% growth rate—the highest in India. Our total production capacity is designed to contribute to India's 239.30 million tonnes annual milk production while maintaining the highest quality standards.";
      } else if (userQuestion.includes("cost") || userQuestion.includes("price")) {
        aiResponse = "Our pricing is competitive and based on quality tier, volume, and delivery frequency. We operate on a B2B model with customized pricing for different business needs. Please contact our sales team directly for a detailed quote tailored to your requirements.";
      } else if (userQuestion.includes("contact") || userQuestion.includes("reach")) {
        aiResponse = "You can reach us via email at noel.regis04@gmail.com, by phone at +91 7319546900, or by filling out the contact form on this website. Our farm is located in Asansol, West Bengal, India, and we welcome scheduled visits from potential business partners.";
      } else {
        aiResponse = "Thank you for your interest in Advent Dairy Farms! We're revolutionizing the dairy industry with IoT-enabled farm management, automated systems, and a commitment to quality and sustainability. How can I provide more specific information about our services or technology?";
      }
      
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: aiResponse },
      ]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      {/* Chat button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-farm-green hover:bg-green-700 text-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg"
        >
          <MessageCircle size={24} />
        </Button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div
          className={cn(
            "fixed right-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 z-50 border border-gray-200 dark:border-gray-700",
            isMinimized 
              ? "bottom-6 w-72 h-14" 
              : "bottom-6 w-80 sm:w-96 h-[500px] max-h-[calc(100vh-100px)]"
          )}
        >
          {/* Chat header */}
          <div className="bg-farm-green dark:bg-green-800 text-white p-3 flex justify-between items-center">
            <div className="flex items-center">
              <MessageCircle size={18} className="mr-2" />
              <h3 className="font-medium">Advent Dairy Assistant</h3>
            </div>
            <div className="flex">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-6 w-6 text-white hover:bg-green-700 hover:text-white mr-1 p-0" 
                onClick={() => setIsMinimized(!isMinimized)}
              >
                {isMinimized ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-6 w-6 text-white hover:bg-green-700 hover:text-white p-0" 
                onClick={() => setIsOpen(false)}
              >
                <X size={14} />
              </Button>
            </div>
          </div>

          {/* Chat messages */}
          {!isMinimized && (
            <div className="p-4 h-[calc(100%-110px)] overflow-y-auto flex flex-col">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    "mb-3 max-w-[80%] p-3 rounded-lg break-words",
                    message.role === "user"
                      ? "ml-auto bg-farm-green dark:bg-green-700 text-white rounded-br-none"
                      : "mr-auto bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-bl-none"
                  )}
                >
                  {message.content}
                </div>
              ))}
              {isLoading && (
                <div className="mr-auto bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg rounded-bl-none p-3 max-w-[80%] mb-3">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse"></div>
                    <div className="h-2 w-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                    <div className="h-2 w-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Chat input */}
          {!isMinimized && (
            <div className="p-3 border-t border-gray-200 dark:border-gray-700">
              <form onSubmit={handleSubmit} className="flex items-center">
                <Input
                  type="text"
                  placeholder="Type your message..."
                  value={input}
                  onChange={handleInputChange}
                  className="flex-1 mr-2"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={isLoading || !input.trim()}
                  className="bg-farm-green hover:bg-green-700 text-white"
                >
                  <Send size={18} />
                </Button>
              </form>
            </div>
          )}
        </div>
      )}
    </>
  );
}
