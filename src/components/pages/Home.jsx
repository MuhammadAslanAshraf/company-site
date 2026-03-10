import React from 'react';
import Solutions from '../Solution';
import HeroSections from '../HeroSections';
import Marquee from '../Marquee';
import OurSuccess from '../OurSuccess';
import CardCompanyName from '../CardCompanyName';
import TestimonialsCarousel from '../TestimonialsCarousel';
import FAQSection from '../FAQItem';
export default function HeroSection() {
  return (
    <div className='my-20'>
      <HeroSections />
      <Marquee />
      <Solutions />
      <OurSuccess />
      <CardCompanyName />
      <TestimonialsCarousel />
      <FAQSection />
    </div>
  );
}