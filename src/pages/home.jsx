import React from 'react';
import Hero from '../components/home/hero';
import Trust from '../components/home/trust';
import Bestsell from '../components/home/bestsell';
import OwnBy from '../components/home/ownby';
import Collection from '../components/home/collection';
import Reviews from '../components/home/reviews';
import CTA from '../components/home/cta';

const Home = () => {
  return (
    <div className="bg-[#faf9f6]">
      <main>
        <Hero />
        
        <Bestsell />
        <OwnBy />
        <Collection />
        <Reviews />
        <Trust />
        <CTA />
      </main>
    </div>
  );
};

export default Home;