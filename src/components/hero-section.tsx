import { Button } from "@/components/ui/button";
export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative w-full py-20 md:py-28 lg:py-36 hero-bg-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-gray-900 dark:text-white">
              <span className="text-farm-green dark:text-green-400">Advent Dairy Farms</span>: Fresh from Farm to Factory
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              Transforming milk procurement and transportation with IoT technology
              across West Bengal and beyond.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Button size="lg" className="bg-farm-green hover:bg-green-700 text-white" onClick={() => scrollToSection('stats')}>
                Learn More
              </Button>
              <Button size="lg" variant="outline" className="border-farm-green text-farm-green hover:bg-farm-green/10 dark:border-green-500 dark:text-green-400 dark:hover:bg-green-900/20" onClick={() => scrollToSection('contact')}>
                Contact Us
              </Button>
            </div>
            <div className="pt-6">
              <p className="font-medium text-farm-green dark:text-green-400">West Bengal's leading dairy innovation</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">"Milking The Best Moments!"</p>
            </div>
          </div>
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-full rounded-xl overflow-hidden shadow-xl animate-fade-in">
            <img alt="Jersey Cows on Farm" className="w-full h-full object-cover" src="/lovable-uploads/76cc4cf8-f62c-4c0c-9a4a-867fe5609f4c.jpg" />
            
          </div>
        </div>
      </div>
    </section>;
}