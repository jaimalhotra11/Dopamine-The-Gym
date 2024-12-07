import React from 'react';
import AboutHero from '../components/AboutHero';
import CoreValues from '../components/CoreValues';
import OurStory from '../components/OurStory';
import LeadershipTeam from '../components/LeadershipTeam';
import Achievements from '../components/Achievements';
import Testimonials from '../components/Testimonials';

export default function About() {
  return (
    <div className="pt-16">
      <AboutHero />
      <CoreValues />
      <OurStory />
      <LeadershipTeam />
      <Achievements />
      <Testimonials />
    </div>
  );
}