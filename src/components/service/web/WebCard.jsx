import React from 'react'

const WebCard = () => {
  return (
    <div className="relative mx-auto max-w-7xl px-6  pb-24 lg:px-8  lg:pb-32">
      {/* Main content */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-12 items-center">
        {/* left Side - Text Content */}
        <div className="w-full lg:w-1/2  text-center lg:text-left">
          <p className="text-lg  md:text-lg   lg:py-6">
            Welcome to Xerone
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            Your Competitor Isn’t {" "}
            <span className="text-gray-900">Smarter</span> – Their AI Agent Is
            {/* <span className="text-gray-900">Demos</span> */}
          </h1>
          <p className="text-sm md:text-2xl text-gray-700 leading-relaxed  md:py-6">
            We specialize in practical AI agents that deliver real-world results, measurable and undeniable.
          </p>
          <button
            className="
              px-10 py-5 md:px-10 md:py-4 
              bg-gray-900 hover:bg-gray-800 
              text-white text-lg md:text-2xl 
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
        {/* Right Side - Image + Card */}
        <div className="flex flex-col w-full lg:w-1/2">
          {/* Image */}
          <div className=" overflow-hidden shadow-2xl shadow-gray-200/50 md:flex gap-4">

            <img
              src="https://cdn.prod.website-files.com/68244de84102b0b2107ee628/683597484d0ee90dbf243a5e_Rider.webp"
              alt="Young team building AI agents"
              className="md:w-1/2 h-98 aspect-[4/3] object-cover brightness-[0.98] rounded-2xl"
            />

            <p className="md:w-1/2  aspect-[4/3] object-cover brightness-[0.98] bg-gray-700 rounded-2xl p-5 text-gray-400 text-3xl mt-4 md:mt-0">
              <span className='text-3xl font-bold text-white '>93% Projects</span>
              <br /> delivered on time and on budget</p>

          </div>
          {/* Card (Image ke niche) */}
          <div className="pt-2 flex justify-center">
            {/* Gradient Border */}
            <div className="rounded-2xl bg-gradient-to-r from-orange-500 via-red-500 to-purple-700 p-6 w-full  ">

              {/* Inner Card */}
              <div className="relative bg-gray-200 rounded-2xl p-8 ">

                {/* Main Content */}
                <div>
                  <h1 className="text-[50px] md:text-[70px] font-serif text-red-600 leading-none">
                    78%
                  </h1>

                  <p className=" text-xl md:text-2xl font-semibold text-gray-900 max-w-3xl">
                    companies are using AI in at least one business function.
                  </p>
                </div>

                {/* Bottom Source Bar */}
                <div className=" bg-red-600 text-white text-right px-2 py-3 rounded-tl-xl rounded-br-xl text-sm md:text-base mt-6">
                  Source: McKinsey & Company
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default WebCard
