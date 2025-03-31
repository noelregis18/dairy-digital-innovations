
export function StatsSection() {
  return (
    <section id="stats" className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">The Dairy Industry in Numbers</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            West Bengal has recorded the highest growth rate in milk production at 9.76% among Indian states.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Stat 1 */}
          <div className="bg-farm-cream dark:bg-gray-800 rounded-lg p-6 text-center animate-slide-in">
            <p className="text-4xl font-bold text-farm-green dark:text-green-400">9.76%</p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">Growth Rate in West Bengal</p>
          </div>
          
          {/* Stat 2 */}
          <div className="bg-farm-cream dark:bg-gray-800 rounded-lg p-6 text-center animate-slide-in" style={{ animationDelay: "100ms" }}>
            <p className="text-4xl font-bold text-farm-green dark:text-green-400">239.30M</p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">Tonnes of Milk in India (2023-24)</p>
          </div>
          
          {/* Stat 3 */}
          <div className="bg-farm-cream dark:bg-gray-800 rounded-lg p-6 text-center animate-slide-in" style={{ animationDelay: "200ms" }}>
            <p className="text-4xl font-bold text-farm-green dark:text-green-400">$232.23B</p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">Total Addressable Market in India</p>
          </div>
          
          {/* Stat 4 */}
          <div className="bg-farm-cream dark:bg-gray-800 rounded-lg p-6 text-center animate-slide-in" style={{ animationDelay: "300ms" }}>
            <p className="text-4xl font-bold text-farm-green dark:text-green-400">100%</p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">Commitment to Quality</p>
          </div>
        </div>
      </div>
    </section>
  );
}
