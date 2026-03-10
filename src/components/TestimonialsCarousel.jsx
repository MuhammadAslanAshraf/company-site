'use client';

import React, { useState } from 'react';
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="py-16 md:py-20 bg-gray-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12 md:mb-16">
          What Our Clients Say
        </h2>

        {/* Carousel container */}
        <div className="relative">

          {/* Cards wrapper */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 70}%)` }}
          >
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="min-w-[50%] px-4 md:px-8 flex justify-center"
              >
                <div className={`
                  w-full max-w-2xl
                  rounded-xl overflow-hidden
                  border border-gray-200
                  bg-white
                  flex flex-col md:flex-row
                  shadow-md hover:shadow-xl
                  transition-all duration-500
                  hover:scale-[1.02]
                `}
                >
                  {/* Left Image */}
                  <div className="md:w-1/3 bg-gray-100 flex items-center justify-center p-6">
                    <img
                      src={testimonial.imageId}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full"
                    />
                  </div>

                  {/* Right Content */}
                  <div className="md:w-2/3 p-6 flex flex-col justify-center">
                    <blockquote className="text-base text-gray-700 leading-relaxed mb-4">
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
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="
              absolute left-0 md:left-4 top-1/2 -translate-y-1/2 
              z-10 w-14 h-14 md:w-16 md:h-16 
              flex items-center justify-center 
          bg-gradient-to-r from-indigo-600 to-purple-600  
              text-white rounded-full 
              shadow-lg transition-all duration-300 
              hover:scale-110 active:scale-95
            "
          >
            <svg
              className="w-8 h-8 md:w-10 md:h-10"
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

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="
              absolute right-0 md:right-4 top-1/2 -translate-y-1/2 
              z-10 w-14 h-14 md:w-16 md:h-16 
              flex items-center justify-center 
              bg-gradient-to-r from-indigo-600 to-purple-600 
              text-white rounded-full 
              shadow-xl transition-all duration-300 
              hover:scale-110 active:scale-95
            "
          >
            <svg
              className="w-8 h-8 md:w-10 md:h-10"
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

          {/* Dots */}
          <div className="flex justify-center mt-10 space-x-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300
                ${idx === currentIndex ? 'bg-black w-8' : 'bg-gray-400'}`}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}