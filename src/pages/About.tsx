
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0 w-full h-full z-0">
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ 
                backgroundImage: 'url(https://images.unsplash.com/photo-1581281664340-7d10b9127ed5?q=80&w=2070&auto=format&fit=crop)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxe-black to-transparent opacity-70" />
          </div>
          
          <div className="luxe-container relative z-10 h-full flex items-end pb-12">
            <div className="max-w-2xl mb-12">
              <span className="inline-block text-xs tracking-widest uppercase text-luxe-gold mb-4">
                Our Process
              </span>
              <h1 className="luxe-heading text-4xl md:text-5xl lg:text-6xl text-luxe-white mb-4">
                The Art and Science of Cultivation
              </h1>
              <p className="text-luxe-white/80 text-lg">
                Discover how we combine traditional wisdom with modern innovation to produce premium mushrooms.
              </p>
            </div>
          </div>
        </section>
        
        {/* Cultivation Process */}
        <section className="luxe-section">
          <div className="luxe-container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs tracking-widest uppercase text-luxe-gold mb-2 inline-block">
                Our Commitment
              </span>
              <h2 className="luxe-heading text-3xl md:text-4xl mb-6">
                Purity in Every Stage
              </h2>
              <p className="text-luxe-black/70 dark:text-luxe-white/70">
                At Luxe Mushroom, we believe in transparency from spore to store. Every step of our cultivation process is designed to honor the integrity of each mushroom variety while ensuring exceptional quality.
              </p>
            </div>
            
            <div className="space-y-24">
              {/* Step 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 animate-fade-in">
                  <span className="inline-block text-xs tracking-widest uppercase text-luxe-gold mb-4">
                    Step 01
                  </span>
                  <h3 className="luxe-heading text-2xl md:text-3xl mb-4">
                    Pristine Environments
                  </h3>
                  <p className="text-luxe-black/80 dark:text-luxe-white/80 mb-6">
                    Our cultivation begins in laboratory-grade clean rooms where we maintain exacting standards of cleanliness. This ensures that only the desired mushroom species develop, free from contaminants or unwanted organisms.
                  </p>
                  <p className="text-luxe-black/80 dark:text-luxe-white/80">
                    Every surface, tool, and substrate undergoes rigorous sterilization. Our team members follow strict protocols, wearing specialized garments to maintain the integrity of the growing environment.
                  </p>
                </div>
                <div className="order-1 lg:order-2 rounded-2xl overflow-hidden animate-fade-in">
                  <img 
                    src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=2127&auto=format&fit=crop" 
                    alt="Pristine laboratory environment" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="rounded-2xl overflow-hidden animate-fade-in">
                  <img 
                    src="https://images.unsplash.com/photo-1559825481-12a05cc00344?q=80&w=2070&auto=format&fit=crop" 
                    alt="Optimal growing conditions" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="animate-fade-in">
                  <span className="inline-block text-xs tracking-widest uppercase text-luxe-gold mb-4">
                    Step 02
                  </span>
                  <h3 className="luxe-heading text-2xl md:text-3xl mb-4">
                    Optimized Growth Conditions
                  </h3>
                  <p className="text-luxe-black/80 dark:text-luxe-white/80 mb-6">
                    Each mushroom variety requires specific conditions to thrive. We've developed precise environmental controls that mimic each species' natural habitat, from temperature and humidity to light exposure and air circulation.
                  </p>
                  <p className="text-luxe-black/80 dark:text-luxe-white/80">
                    Our sophisticated monitoring systems track these conditions around the clock, making micro-adjustments as needed to ensure optimal growth patterns. This attention to detail allows us to cultivate mushrooms with ideal texture, flavor, and nutritional profiles.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 animate-fade-in">
                  <span className="inline-block text-xs tracking-widest uppercase text-luxe-gold mb-4">
                    Step 03
                  </span>
                  <h3 className="luxe-heading text-2xl md:text-3xl mb-4">
                    Perfect Timing
                  </h3>
                  <p className="text-luxe-black/80 dark:text-luxe-white/80 mb-6">
                    Harvesting at precisely the right moment is crucial for both flavor and potency. Our experienced cultivators assess each mushroom individually, looking for specific indicators that signal peak maturity.
                  </p>
                  <p className="text-luxe-black/80 dark:text-luxe-white/80">
                    Unlike industrial operations that harvest en masse based on rigid schedules, we maintain the flexibility to accommodate natural variations in growth cycles. This patience results in mushrooms with fully developed flavor compounds and nutritional content.
                  </p>
                </div>
                <div className="order-1 lg:order-2 rounded-2xl overflow-hidden animate-fade-in">
                  <img 
                    src="https://images.unsplash.com/photo-1627556592933-ffe99c1cd9eb?q=80&w=1887&auto=format&fit=crop" 
                    alt="Perfect timing for harvest" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="rounded-2xl overflow-hidden animate-fade-in">
                  <img 
                    src="https://images.unsplash.com/photo-1473973916745-60839aebf06b?q=80&w=2070&auto=format&fit=crop" 
                    alt="Careful packaging and delivery" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="animate-fade-in">
                  <span className="inline-block text-xs tracking-widest uppercase text-luxe-gold mb-4">
                    Step 04
                  </span>
                  <h3 className="luxe-heading text-2xl md:text-3xl mb-4">
                    Preservation and Delivery
                  </h3>
                  <p className="text-luxe-black/80 dark:text-luxe-white/80 mb-6">
                    The journey from harvest to your table is handled with the same care as our cultivation process. Fresh mushrooms are carefully packaged in breathable, sustainable materials that maintain optimal humidity levels during transit.
                  </p>
                  <p className="text-luxe-black/80 dark:text-luxe-white/80">
                    For dried varieties, we use gentle dehydration methods that preserve both flavor and bioactive compounds. All products undergo quality testing before shipment, and we utilize temperature-controlled shipping to ensure they arrive in perfect condition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Sustainability Section */}
        <section className="luxe-section bg-luxe-cream dark:bg-luxe-black/20">
          <div className="luxe-container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs tracking-widest uppercase text-luxe-gold mb-2 inline-block">
                Our Responsibility
              </span>
              <h2 className="luxe-heading text-3xl md:text-4xl mb-6">
                Sustainable Practices
              </h2>
              <p className="text-luxe-black/70 dark:text-luxe-white/70">
                Our commitment to excellence extends beyond our products to encompass our impact on the planet. We've implemented comprehensive sustainability initiatives throughout our operation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-luxe-white dark:bg-luxe-black/40 rounded-xl p-8 animate-fade-in">
                <div className="h-12 w-12 rounded-full bg-luxe-gold/20 flex items-center justify-center mb-6">
                  <span className="text-luxe-gold text-xl">♲</span>
                </div>
                <h3 className="text-xl font-light mb-4">Circular Operations</h3>
                <p className="text-luxe-black/70 dark:text-luxe-white/70">
                  Our growing substrates are composed of sustainable, often upcycled materials. After harvest, spent substrate becomes nutrient-rich compost for local organic farms, creating a zero-waste cycle.
                </p>
              </div>
              
              <div className="bg-luxe-white dark:bg-luxe-black/40 rounded-xl p-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="h-12 w-12 rounded-full bg-luxe-gold/20 flex items-center justify-center mb-6">
                  <span className="text-luxe-gold text-xl">⚡</span>
                </div>
                <h3 className="text-xl font-light mb-4">Renewable Energy</h3>
                <p className="text-luxe-black/70 dark:text-luxe-white/70">
                  Our facilities are powered by 100% renewable energy sources. We've installed solar panels and implemented energy-efficient systems to minimize our carbon footprint.
                </p>
              </div>
              
              <div className="bg-luxe-white dark:bg-luxe-black/40 rounded-xl p-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
                <div className="h-12 w-12 rounded-full bg-luxe-gold/20 flex items-center justify-center mb-6">
                  <span className="text-luxe-gold text-xl">🌱</span>
                </div>
                <h3 className="text-xl font-light mb-4">Eco-Packaging</h3>
                <p className="text-luxe-black/70 dark:text-luxe-white/70">
                  All our packaging materials are either compostable or easily recyclable. We continue to innovate in this area, seeking new ways to reduce environmental impact without compromising product quality.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default About;
