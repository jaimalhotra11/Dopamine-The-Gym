import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import VirtualTour from '../components/VirtualTour';
import SuccessStories from '../components/SuccessStories';
import ClassSchedule from '../components/ClassSchedule';

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <VirtualTour />
      <ClassSchedule />
      <SuccessStories />
    </div>
  );
}