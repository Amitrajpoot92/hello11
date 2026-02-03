 import React from 'react';
import Hero from '../components/home/hero';
import CarAnimation from '../components/home/CarAnimation'; 
import Fleet from '../components/home/fleet';
import Features from '../components/home/features';
import Trust from '../components/home/trust'; // Naya component import kiya
import Booking from '../components/home/booking';

const Home = () => {
  return (
    <main className="bg-black">
      <Hero />
      <CarAnimation /> 
      <Fleet />
      <Features />
      <Trust /> {/* Booking se pehle Trust build karna better hai */}
      <Booking />
    </main>
  );
};

export default Home;