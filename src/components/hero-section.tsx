
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="home" className="relative w-full py-20 md:py-28 lg:py-36 hero-bg-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-gray-900 dark:text-white">
              <span className="text-farm-green dark:text-green-400">Fresh</span> from Farm to Factory
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              Transforming milk procurement and transportation with IoT technology
              across West Bengal and beyond.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Button size="lg" className="bg-farm-green hover:bg-green-700 text-white">
                Learn More
              </Button>
              <Button size="lg" variant="outline" className="border-farm-green text-farm-green hover:bg-farm-green/10 dark:border-green-500 dark:text-green-400 dark:hover:bg-green-900/20">
                Contact Us
              </Button>
            </div>
            <div className="pt-6">
              <p className="font-medium text-farm-green dark:text-green-400">West Bengal's leading dairy innovation</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">"A Glass Half Empty, But Our Vision is Full"</p>
            </div>
          </div>
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-full rounded-xl overflow-hidden shadow-xl animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=1200&q=80"
              alt="Dairy Farm with Cows"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
