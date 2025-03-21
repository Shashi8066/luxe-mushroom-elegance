
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import BrandStory from '@/components/BrandStory';
import MushroomDishes from '@/components/MushroomDishes';
import CertificationBanner from '@/components/CertificationBanner';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedProducts />
        <BrandStory />
        <MushroomDishes />
        <CertificationBanner />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
