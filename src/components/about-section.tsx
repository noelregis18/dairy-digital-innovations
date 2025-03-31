export function AboutSection() {
  return <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              The Perfect Storm: Rising Demand & Shrinking Supply
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              At Advent Dairy Farms, we're addressing the constant demand for unadulterated milk across West Bengal and India. With milk production in India reaching 239.30 million tonnes during 2023-24, we're positioned at the forefront of this growing industry.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Our commitment to innovation, quality, and sustainability drives everything we do - from our IoT-enabled farm management to our renewable energy investments. We're not just producing milk; we're revolutionizing the dairy industry in India.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative animate-fade-in">
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl">
              <img alt="Dairy Farm Landscape" className="w-full h-full object-cover" src="/lovable-uploads/a352f364-8f96-4e49-9854-ae73473ec7bb.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>;
}