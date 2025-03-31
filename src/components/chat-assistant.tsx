
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
      // This is a mock response - in a real application, you'd call an API
      const responses = [
        "I'd be happy to tell you more about our IoT technology for dairy farming!",
        "Our farm uses 100% renewable energy, which helps reduce operational costs.",
        "Each cow wears a digital band that tracks health metrics, milk production, and consumption patterns.",
        "We have locations in several districts across West Bengal.",
        "Feel free to visit our farm or contact us directly for more information!",
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: randomResponse },
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
            <div className="p-4 h-[calc(100%-120px)] overflow-y-auto flex flex-col">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    "mb-3 max-w-[80%] p-3 rounded-lg",
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
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
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
