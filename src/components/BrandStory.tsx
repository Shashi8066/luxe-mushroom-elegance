
import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory: React.FC = () => {
  return (
    <section className="luxe-section bg-luxe-green text-luxe-white py-24 md:py-32">
      <div className="luxe-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-xs tracking-widest uppercase text-luxe-gold mb-2 block">
              Our Philosophy
            </span>
            <h2 className="luxe-heading text-3xl md:text-4xl lg:text-5xl mb-6">
              A Commitment to Exceptional Quality
            </h2>
            <div className="space-y-6 text-luxe-white/80">
              <p>
                At Luxe Mushroom, our journey begins with a simple yet profound commitment: to cultivate the finest mushrooms through methods that honor nature's wisdom while embracing modern precision.
              </p>
              <p>
                Our cultivation process preserves each variety's distinct character and nutritional profile. We grow our mushrooms in carefully controlled environments that mimic their natural habitats, ensuring optimal growth conditions without chemical interventions.
              </p>
              <p>
                Every mushroom is harvested at peak maturity, when its flavor profile and nutritional benefits are most pronounced. This meticulous timing is what distinguishes our products from conventional alternatives.
              </p>
            </div>
            <div className="mt-8">
              <Link to="/process" className="luxe-button bg-luxe-white text-luxe-green hover:bg-luxe-white/90">
                Discover Our Process
              </Link>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform lg:translate-x-12">
              <img 
                src="https://images.unsplash.com/photo-1558435186-dafcc31be638?q=80&w=1887&auto=format&fit=crop" 
                alt="Mushroom cultivation" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-1/4 -left-8 w-3/4 h-1/2 bg-luxe-gold/20 rounded-2xl hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
