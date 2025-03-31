import { Monitor, Server, Battery, Cpu } from "lucide-react";
export function TechnologySection() {
  return <section id="technology" className="section-padding bg-farm-cream/50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Advanced Technology</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We leverage cutting-edge technology to ensure the highest quality milk production while maintaining animal welfare and environmental sustainability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {/* Left column - IoT System */}
          <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg animate-fade-in">
            <div className="flex items-center mb-6">
              <Monitor className="h-8 w-8 text-farm-green dark:text-green-400 mr-4" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">IoT Monitoring System</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our IoT system uses advanced tracking bands connected to the JioGauSamriddhi app to monitor each animal's:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="bg-farm-green/10 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-4 w-4 text-farm-green dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700 dark:text-gray-300">Daily milk production tracking</span>
              </li>
              <li className="flex items-start">
                <span className="bg-farm-green/10 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-4 w-4 text-farm-green dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700 dark:text-gray-300">Water consumption monitoring</span>
              </li>
              <li className="flex items-start">
                <span className="bg-farm-green/10 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-4 w-4 text-farm-green dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700 dark:text-gray-300">Feed intake measurement</span>
              </li>
              <li className="flex items-start">
                <span className="bg-farm-green/10 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-4 w-4 text-farm-green dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700 dark:text-gray-300">Real-time health metrics and early warning system</span>
              </li>
            </ul>
            <div className="mt-8 bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                "Our IoT system has increased milk yields by 15% while reducing health issues by 30%."
              </p>
            </div>
          </div>
          
          {/* Right column - Renewable Energy */}
          <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg animate-fade-in" style={{
          animationDelay: "200ms"
        }}>
            <div className="flex items-center mb-6">
              <Battery className="h-8 w-8 text-farm-green dark:text-green-400 mr-4" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Renewable Energy System</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our farms operate on 100% renewable energy, significantly reducing operational costs and environmental impact:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="bg-farm-green/10 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-4 w-4 text-farm-green dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700 dark:text-gray-300">Solar panels power all farm operations</span>
              </li>
              <li className="flex items-start">
                <span className="bg-farm-green/10 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-4 w-4 text-farm-green dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700 dark:text-gray-300">Biogas generation from farm waste</span>
              </li>
              <li className="flex items-start">
                <span className="bg-farm-green/10 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-4 w-4 text-farm-green dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700 dark:text-gray-300">Rainwater harvesting systems</span>
              </li>
              <li className="flex items-start">
                <span className="bg-farm-green/10 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-4 w-4 text-farm-green dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700 dark:text-gray-300">Energy-efficient equipment throughout the facility</span>
              </li>
            </ul>
            <div className="mt-8 bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                "Our renewable energy implementation has reduced operating costs by 40% compared to traditional dairy farms."
              </p>
            </div>
          </div>
        </div>

        {/* Image section for dairy automation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              
            </div>
            
            
          </div>
          <div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              
            </div>
            
            
          </div>
        </div>
      </div>
    </section>;
}