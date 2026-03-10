import React from 'react'
const GenerativeAICard = () => {
  return (
     <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 lg:px-8 lg:pt-24 lg:pb-24">
        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left Side - Image + Card */}
          <div className="flex flex-col w-full lg:w-1/2">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/50" data-aos="fade-right">
              <img
                src="https://cdn.prod.website-files.com/68244de84102b0b2107ee628/683597484d0ee90dbf243a5e_Rider.webp"
                alt="Young team building AI agents"
                className="w-full h-auto aspect-[4/3] lg:aspect-[5/4] brightness-[0.98]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            {/* Card (Image ke niche) */}
            <div className="pt-6 lg:pt-3" data-aos="fade-up">
              <div className="inline-block rounded-2xl bg-gradient-to-r from-blue-400 via-orange-300 to-red-500 p-0.5">
                <div className=" rounded-xl px-8 py-4 md:px-4 md:w-[600px] md:py-6 flex flex-col md:flex-row items-center gap-6 md:justify-between">
                  <div className="text-center md:text-left">
                    <div className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
                      80<span className="text-4xl md:text-5xl">%</span>
                    </div>
                    <p className="mt-2 text-lg md:text-xl font-medium text-gray-700">
                      Reduction in reliance
                      on human support
                    </p>
                  </div>
                  <button
                    className="
              px-10 py-5 md:px-10 md:py-4 
              bg-gray-900 hover:bg-gray-800 
              text-white text-xl md:text-2xl 
              font-semibold rounded-full 
              transition-all duration-300 
              shadow-lg shadow-gray-900/25 
              hover:shadow-xl hover:shadow-gray-900/35 
              active:scale-95
              whitespace-nowrap
            "
                  >
                    Book a Call
                  </button>

                </div>
              </div>
            </div>

          </div>
          {/* Right Side - Text Content */}
          <div className="w-full lg:w-1/2  text-center lg:text-left" data-aos="fade-left">
            <p className="text-xg  md:text-xl font-bold text-indigo-600 tracking-wide uppercase lg:py-6">
              Generative AI
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              Build AI Agents That
              <span className="text-gray-900">Work</span> – Not Just
              <span className="text-gray-900">Demos</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-2xl md:py-6">
              We audit your systems, uncover high-leverage use cases, and

              deploy AI agents that deliver <span className="font-semibold">measurable</span> results.
            </p>
          </div>
        </div>
      </div>
  )
}

export default GenerativeAICard
