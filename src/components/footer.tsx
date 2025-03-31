
import { Leaf } from "lucide-react";

export function Footer() {
  const openGoogleMaps = () => {
    window.open("https://maps.google.com/?q=Asansol,West+Bengal,India", "_blank");
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/877ee574-8fbd-4ef9-8aa1-51b66b320ef7.png" 
                alt="Advent Dairy Farms Logo" 
                className="h-10 w-auto mr-2" 
              />
              <h3 className="font-bold text-xl">Advent Dairy Farms</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming milk procurement and transportation with innovative IoT technology.
            </p>
            <p className="text-gray-400 text-sm">
              "Milking The Best Moments!"
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#technology" className="text-gray-400 hover:text-white transition-colors">Technology</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={openGoogleMaps} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Asansol, West Bengal, India
                </button>
              </li>
              <li><a href="mailto:noel.regis04@gmail.com" className="text-gray-400 hover:text-white transition-colors">noel.regis04@gmail.com</a></li>
              <li><a href="tel:+917319546900" className="text-gray-400 hover:text-white transition-colors">+91 7319546900</a></li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/noel-regis-aa07081b1/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a 
                href="https://github.com/noelregis18" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a 
                href="https://x.com/NoelRegis8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
            <div className="mt-4">
              <a 
                href="http://topmate.io/noel_regis" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Connect on Topmate
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Advent Dairy Farms. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
