import React from 'react'
import { motion } from "framer-motion";
const OurSuccess = () => {
  return (
     <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 lg:px-8 lg:pt-24 lg:pb-24">
        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        
          {/* Right Side - Text Content */}
          <div className="w-full lg:w-1/2  text-center lg:text-left">
            <p className="text-md md:text-lg font-bold text-gray-500 tracking-wide uppercase lg:py-6">
              Our success story
            </p>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 leading-tight">
              Streamlined Chughtai Lab's
            </h1>
            <p className="text-4xl  text-gray-500 leading-relaxed max-w-2xl pb-8">
         operations with scalable, intelligent solutions.
            </p>
              {/* Card (Image ke niche) */}
<div className="pt-6 lg:pt-3">
  <div className="inline-block rounded-2xl bg-gray-300 p-0.5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
    <div className="rounded-xl px-8 py-4 md:px-4 md:w-[600px] md:py-6 flex flex-col md:flex-row items-center gap-6 md:justify-between  transition-all duration-300">
      
      <div className="text-center md:text-left">
        <div className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
          30x increase in orders per annum
        </div>

        <p className="mt-2 text-lg md:text-2xl font-medium text-gray-500">
          Streamlined Chughtai Lab's logistics <br /> operations with AI-powered routing
        </p>
      </div>

    </div>
  </div>
</div>
          </div>
            {/* Left Side - Image + Card */}
          <div className="flex flex-col w-full lg:w-1/2">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/50">
              <img
                src="https://cdn.prod.website-files.com/68244de84102b0b2107ee628/683597484d0ee90dbf243a5e_Rider.webp"
                alt="Young team building AI agents"
                className="w-full h-auto aspect-[4/3] lg:aspect-[5/4] brightness-[0.98]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default OurSuccess
