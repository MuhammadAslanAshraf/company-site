import React from 'react'

const ResultCard = () => {
  return (
         <section className="bg-[#f4f4f4] py-20">
        <div className=" w-full px-6 flex flex-col justify-center items-center">

          <p className="text-center text-gray-500 text-sm tracking-wide">
            Here’s How It Works
          </p>

          <h2 className="text-center text-4xl md:text-5xl font-semibold text-gray-900 mt-4 leading-tight">
            A Rapid, Results-Focused <br className="hidden md:block" />
            Build Process
          </h2>

          <div className="flex gap-8 mt-16">

            {/* Card */}
            {["Step 1", "Step 2", "Step 3"].map((step, i) => (
              <div key={i} className="relative group">

                {/* Animated Border Layer */}
                <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r 
                          from-blue-500 via-purple-500 to-pink-500 
                          opacity-0 group-hover:opacity-100 
                          blur-sm transition duration-500"></div>

                {/* Main Card */}
                <div className="relative bg-white rounded-2xl p-8 shadow-md transition duration-300 group-hover:-translate-y-2 h-72 w-98">
                  <div className='flex'>
                    {/* <img src="" alt="a" /> */}
                    <p className="text-gray-400 text-sm">{step}</p>
                  </div>
                  <h3 className="text-xl font-semibold mt-2 text-gray-900">
                    {i === 0 && "Discovery Sprint & Blueprint"}
                    {i === 1 && "Design & Build Sprints"}
                    {i === 2 && "Launch, Measure, Iterate"}
                  </h3>


                  <p className="text-gray-600 mt-4 leading-relaxed">
                    {i === 0 &&
                      "1-week immersion to unpack objectives, map user flows and lock the feature playbook."}
                    {i === 1 &&
                      "High-fidelity UI + iterative code pushes with pixel-perfect screens and tested APIs."}
                    {i === 2 &&
                      "Cloud deploy, KPI tracking and continuous improvements for compounding ROI."}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    
  )
}

export default ResultCard
