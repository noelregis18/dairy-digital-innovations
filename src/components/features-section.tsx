
import { 
  Activity, 
  DropletIcon, 
  Leaf, 
  Milk, 
  Radio, 
  Timer, 
  Waves, 
  Wind 
} from "lucide-react";

const features = [
  {
    icon: <Radio className="h-10 w-10 text-farm-green dark:text-green-400" />,
    title: "IoT Tracking Bands",
    description: "Digital bands fastened to each animal's neck, connected to the JioGauSamriddhi app to monitor health, milk production, and consumption patterns."
  },
  {
    icon: <Waves className="h-10 w-10 text-farm-green dark:text-green-400" />,
    title: "Automatic Brusher Machines",
    description: "Self-activating brushers that automatically start rotating based on sensors from the animal's band for optimal cleanliness."
  },
  {
    icon: <DropletIcon className="h-10 w-10 text-farm-green dark:text-green-400" />,
    title: "Automated Water Systems",
    description: "Smart taps that automatically provide water when animals approach, based on signals from their IoT bands."
  },
  {
    icon: <Wind className="h-10 w-10 text-farm-green dark:text-green-400" />,
    title: "Climate Control Foggers",
    description: "Advanced foggers to maintain optimal temperature in the farm environment for animal comfort and productivity."
  },
  {
    icon: <Milk className="h-10 w-10 text-farm-green dark:text-green-400" />,
    title: "Automated Milking Systems",
    description: "State-of-the-art milking systems ensuring consistent quality and hygiene, maximizing milk yield and cow well-being."
  },
  {
    icon: <Leaf className="h-10 w-10 text-farm-green dark:text-green-400" />,
    title: "Renewable Energy",
    description: "The entire farm operates on renewable energy sources, reducing costs and environmental impact."
  },
  {
    icon: <Activity className="h-10 w-10 text-farm-green dark:text-green-400" />,
    title: "Health Monitoring",
    description: "Real-time health tracking of each animal to ensure early detection of issues and maintain optimal herd health."
  },
  {
    icon: <Timer className="h-10 w-10 text-farm-green dark:text-green-400" />,
    title: "Custom Feed Production",
    description: "In-house feed production to save costs while ensuring animals receive optimal nutrition."
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Innovative Features</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our state-of-the-art technology transforms traditional dairy farming into a smart, efficient, and sustainable operation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card flex flex-col items-center text-center animate-slide-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 rounded-full bg-farm-green/10 p-3">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
