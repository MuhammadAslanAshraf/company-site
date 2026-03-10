// SolutionsSection.tsx
import React from 'react';

export default function Solution() {
  return (
    <div className=" bg-white">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16 lg:mb-20">
          <div className="inline-block  px-6 py-3 rounded-lg ">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              What solution do you need
            </h2>
          </div>

          <p className="text-xl md:text-2xl text-gray-700  font-medium">
            Shaping Your Digital Journey for Success
          </p>
        </div>

        {/* Two-column cards layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6">
          {/* Left: Generative AI */}
          <div className="group bg-gray-50 rounded-2xl border border-gray-200 shadow-sm 
                transition-all duration-500 ease-in-out
                hover:shadow-2xl hover:-translate-y-2">

            {/* Image Section */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-3 
                  py-6 rounded-t-2xl
                  transition-all duration-500 ease-in-out
                  hover:bg-gradient-to-r from-blue-400 via-orange-300 to-red-500">

              <img
                src="https://cdn.prod.website-files.com/68244de84102b0b2107ee6cb/683ee31303a63aa548f2b073_gen-ai.svg"
                alt=""
                className="w-64 transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>

            {/* Content Section */}
            <div className="p-8 transition-all duration-500">
              <h3 className="text-3xl md:text-xl font-bold text-left text-gray-900 mb-2 
                   transition-colors duration-500 group-hover:text-amber-600">
                Generative AI
              </h3>

              <p className="text-lg md:text-sm text-gray-700 leading-relaxed text-left 
                  transition-colors duration-500 group-hover:text-gray-900">
                Falling behind in the AI race? We help you move from confusion to
                execution. Discover what GenAI can do for your business.
              </p>
            </div>

          </div>

          {/* Right: Web/Mobile Development */}
          <div className="group bg-gray-50 rounded-2xl border border-gray-200 shadow-sm 
                transition-all duration-500 ease-in-out
                hover:shadow-2xl hover:-translate-y-2">

            {/* Image Section */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-3 
                  py-6 rounded-t-2xl
                  transition-all duration-500 ease-in-out
                  hover:bg-gradient-to-r from-blue-400 via-orange-300 to-red-500">

              <img
                src="https://cdn.prod.website-files.com/68244de84102b0b2107ee6cb/683ee31303a63aa548f2b073_gen-ai.svg"
                alt=""
                className="w-64 transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>

            {/* Content Section */}
            <div className="p-8 transition-all duration-500">
              <h3 className="text-3xl md:text-xl font-bold text-left text-gray-900 mb-2 
                   transition-colors duration-500 group-hover:text-amber-600">
                Generative AI
              </h3>

              <p className="text-lg md:text-sm text-gray-700 leading-relaxed text-left 
                  transition-colors duration-500 group-hover:text-gray-900">
                Falling behind in the AI race? We help you move from confusion to
                execution. Discover what GenAI can do for your business.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}