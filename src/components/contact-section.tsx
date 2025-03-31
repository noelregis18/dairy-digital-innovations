
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { 
  Linkedin, 
  Github, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  Loader2
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          message: formData.message
        }
      });
      
      if (error) throw error;
      
      toast({
        title: "Message Sent!",
        description: "We'll get back to you soon.",
        variant: "default"
      });
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openGoogleMaps = () => {
    window.open("https://maps.google.com/?q=Asansol,West+Bengal,India", "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're always eager to learn and collaborate on new projects. Feel free to reach out to us!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Send us a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    className="w-full h-32"
                    disabled={isSubmitting}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-farm-green hover:bg-green-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </div>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-farm-green dark:text-green-400 mr-3 mt-1" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Location</p>
                  <button 
                    onClick={openGoogleMaps}
                    className="text-farm-green dark:text-green-400 hover:underline"
                  >
                    Asansol, West Bengal, India
                  </button>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-farm-green dark:text-green-400 mr-3 mt-1" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Email</p>
                  <a href="mailto:noel.regis04@gmail.com" className="text-farm-green dark:text-green-400 hover:underline">
                    noel.regis04@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-farm-green dark:text-green-400 mr-3 mt-1" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                  <a href="tel:+917319546900" className="text-farm-green dark:text-green-400 hover:underline">
                    +91 7319546900
                  </a>
                </div>
              </div>
              
              <div className="pt-8">
                <p className="font-medium text-gray-900 dark:text-white mb-4">Connect with us on social media</p>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/noel-regis-aa07081b1/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-farm-green text-white p-2 rounded-full hover:bg-green-700 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://github.com/noelregis18" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-farm-green text-white p-2 rounded-full hover:bg-green-700 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://x.com/NoelRegis8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-farm-green text-white p-2 rounded-full hover:bg-green-700 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
              
              <div className="pt-8">
                <a 
                  href="http://topmate.io/noel_regis" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-center bg-farm-green hover:bg-green-700 text-white py-3 px-6 rounded-lg transition-colors"
                >
                  Connect on Topmate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
