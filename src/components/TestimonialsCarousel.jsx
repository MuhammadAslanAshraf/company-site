'use client';

import React, { useState, useEffect } from 'react';
import icon from '../assets/react.svg'

const testimonials = [
  {
    name: 'Scott',
    title: 'Founder, Aurora',
    quote:
      '"Cogent Labs have been absolutely incredible to work with. They are highly professional, extremely prompt, and bring a diverse range of skill sets to the table."',
    imageId: icon,
  },
  {
    name: 'Emma',
    title: 'CEO, TechFlow',
    quote:
      '"Working with the team transformed our product development process. Their expertise in GenAI and clean execution is unmatched — highly recommended!"',
    imageId: icon,
  },
  {
    name: 'Michael',
    title: 'Founder, NovaScale',
    quote:
      '"Exceptional professionalism and deep technical knowledge. They delivered exactly what we needed, faster than expected, and with great communication."',
    imageId: icon,
  },
  {
    name: 'Sarah',
    title: 'CTO, InnovateHub',
    quote:
      '"The Cogent Labs team brought creativity and precision to every step. Their full-stack capabilities and AI integration skills are top-tier."',
    imageId: icon,
  },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with second card as center
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Create a circular array for infinite loop effect
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];
  const startIndex = testimonials.length; // Start from the first set

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  // Handle infinite loop reset
  useEffect(() => {
    if (!isTransitioning) return;

    const timer = setTimeout(() => {
      setIsTransitioning(false);
      
      // Reset to middle set when reaching edges
      if (currentIndex <= 0) {
        setCurrentIndex(testimonials.length);
      } else if (currentIndex >= testimonials.length * 2) {
        setCurrentIndex(testimonials.length - 1);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex, isTransitioning, testimonials.length]);

  return (
    <div className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden ">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12 md:mb-16">
          What Our Clients Say
        </h2>
      <div className="-ml-60 max-w-7xl px-6 lg:px-8 ">
        

        {/* Carousel container */}
        <div className="relative -mx-4 md:-mx-8">
          {/* Cards wrapper */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ 
              transform: `translateX(calc(-${(currentIndex) * 33.333}% + 33.333%))`,
            }}
          >
            {extendedTestimonials.map((testimonial, idx) => {
              // Determine if card is in center position
              const isCenter = idx === currentIndex + 1 || 
                              (currentIndex === testimonials.length - 1 && idx === testimonials.length * 2) ||
                              (currentIndex === 0 && idx === testimonials.length - 1);
              
              // Determine if card is visible (3 cards max)
              const isVisible = Math.abs(idx - (currentIndex + 1)) <= 1;

              return (
                <div
                  key={`${testimonial.name}-${idx}`}
                  className={`
                    min-w-[33.333%] px-4 md:px-8 
                    transition-all duration-500
                    ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                  `}
                >
                  <div className={`
                    w-full max-w-md
                    rounded-2xl overflow-hidden
                    border transition-all duration-500
                    ${isCenter 
                      ? 'border-indigo-200 bg-white shadow-2xl scale-105 opacity-100' 
                      : 'border-gray-200 bg-gray-50/80 shadow-md opacity-40 blur-[1px]'
                    }
                    flex flex-col md:flex-row
                    hover:shadow-xl
                  `}
                  >
                    {/* Left Image */}
                    <div className="md:w-1/3 bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-6">
                      <img
                        src={testimonial.imageId}
                        alt={testimonial.name}
                        className="w-20 h-20 md:w-24 md:h-24 rounded-full  "
                      />
                    </div>

                    {/* Right Content */}
                    <div className="md:w-2/3 p-6 flex flex-col justify-center">
                      <blockquote className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 line-clamp-4">
                        {testimonial.quote}
                      </blockquote>

                      <div>
                        <p className="text-lg font-bold text-gray-900">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
       
             <div className="flex justify-around mt-10 space-x-3">
              <div className='flex gap-10'>
                 <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="
               -translate-y-1/2 
              z-20 w-12 h-12 md:w-14 md:h-14 
              flex items-center justify-center 
              bg-gradient-to-r from-indigo-600 to-purple-600  
              text-white rounded-full 
              shadow-xl transition-all duration-300 
              hover:scale-110 active:scale-95
              disabled:opacity-50 disabled:cursor-not-allowed
              disabled:hover:scale-100
            "
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
             <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="
            -translate-y-1/2 
              z-20 w-12 h-12 md:w-14 md:h-14 
              flex items-center justify-center 
              bg-gradient-to-r from-indigo-600 to-purple-600 
              text-white rounded-full 
              shadow-xl transition-all duration-300 
              hover:scale-110 active:scale-95
              disabled:opacity-50 disabled:cursor-not-allowed
              disabled:hover:scale-100 
            "
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          </div>
          <div>
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (isTransitioning) return;
                  setIsTransitioning(true);
                  setCurrentIndex(idx);
                }}
                className={`
                  h-2 rounded-full transition-all duration-300 ml-1
                  ${idx === (currentIndex % testimonials.length) 
                    ? 'w-8 bg-indigo-600' 
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }
                `}
              />
            ))}
            </div>
            
          </div>
    </div>
  );
}