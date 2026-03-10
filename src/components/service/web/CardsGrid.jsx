import React from "react";
import { Youtube, Globe, ExternalLink } from "lucide-react";
const CardsGrid = () => {
  return (
    <div className="min-h-screen bg-white p-6 md:p-12 ">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-4xl font-light text-gray-800">
          If a Human Can Do It Online — So Can Our AI <br />Agent
        </h1>
      </div>

      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1 */}
                  <div className="group w-full h-84 perspective">
            <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
              {/* FRONT SIDE */}
              <div className="absolute w-full h-full backface-hidden bg-gray-700 rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col justify-center items-center gap-10">
                <div className="text-gray-300 font-mono text-sm md:text-4xl">
                  01
                </div>
                <div className="text-white font-semibold text-sm sm:text-4xl uppercase tracking-wider">
                  FinTech
                </div>
                <p className="text-gray-300 text-lg md:text-xl font-medium leading-tight text-center">
                  Human-like deep research in complex industry
                </p>
              </div>
              {/* BACK SIDE */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gray-700 rounded-2xl p-8 flex flex-col justify-center gap-4">

                <ul className="text-white text-sm space-y-3">

                  <li>
                    <a
                      href="https://www.youtube.com/watch?v=JupfvYWTz5E"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-yellow-300 transition"
                    >
                      <Youtube size={18} />
                      Owner Video - Fintech Website 
                      <ExternalLink size={14} className="ml-auto opacity-70" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://everetics.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-yellow-300 transition"
                    >
                      <Globe size={18} />
                      Everetics - Fintech Website 
                      <ExternalLink size={14} className="ml-auto opacity-70" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.yumyumvideos.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-yellow-300 transition"
                    >
                      <Globe size={18} />
                      YumYum Videos - Fintech Website 
                      <ExternalLink size={14} className="ml-auto opacity-70" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://devverx.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-yellow-300 transition"
                    >
                      <Globe size={18} />
                      Devverx - Fintech Website
                      <ExternalLink size={14} className="ml-auto opacity-70" />
                    </a>
                  </li>

                </ul>

                <button className="mt-6  flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-sm shadow-lg hover:scale-105 transition-all duration-300">
                  Get FinTect Web Site
                </button>

              </div>
            </div>
          </div>


          {/* ✅ Card 2 (ONLY IMAGE) */}
          <div className="bg-black rounded-2xl p-8 shadow-sm border border-gray-100 
                          hover:shadow-md transition-all duration-300 
                          flex justify-center items-center h-84">

            <img
              src="https://cdn.prod.website-files.com/68244de84102b0b2107ee628/68244de84102b0b2107ee6ea_photo-square-21.webp"
              alt="React Icon"
              className="h-82 object-contain"

            />
          </div>


          {/* Card 3 */}
                  <div className="group w-full h-84 perspective">
            <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
              {/* FRONT SIDE */}
              <div className="absolute w-full h-full backface-hidden bg-gray-700 rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col justify-center items-center gap-10">
                <div className="text-gray-300 font-mono text-sm md:text-4xl">
                  01
                </div>
                <div className="text-white font-semibold text-sm sm:text-4xl uppercase tracking-wider">
                  FinTech
                </div>
                <p className="text-gray-300 text-lg md:text-xl font-medium leading-tight text-center">
                  Human-like deep research in complex industry
                </p>
              </div>
              {/* BACK SIDE */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gray-700 rounded-2xl p-8 flex flex-col justify-center gap-4">

                <ul className="text-white text-sm space-y-3">

                  <li>
                    <a
                      href="https://www.youtube.com/watch?v=JupfvYWTz5E"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-yellow-300 transition"
                    >
                      <Youtube size={18} />
                      Owner Video - Fintech Website 
                      <ExternalLink size={14} className="ml-auto opacity-70" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://everetics.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-yellow-300 transition"
                    >
                      <Globe size={18} />
                      Everetics - Fintech Website 
                      <ExternalLink size={14} className="ml-auto opacity-70" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.yumyumvideos.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-yellow-300 transition"
                    >
                      <Globe size={18} />
                      YumYum Videos - Fintech Website 
                      <ExternalLink size={14} className="ml-auto opacity-70" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://devverx.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-yellow-300 transition"
                    >
                      <Globe size={18} />
                      Devverx - Fintech Website
                      <ExternalLink size={14} className="ml-auto opacity-70" />
                    </a>
                  </li>

                </ul>

                <button className="mt-6  flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-sm shadow-lg hover:scale-105 transition-all duration-300">
                  Get FinTect Web Site
                </button>

              </div>
            </div>
          </div>

          {/* Card 4 */}
              <div className="group w-full h-84 perspective">
            <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
              {/* FRONT SIDE */}
              <div className="absolute w-full h-full backface-hidden bg-gray-700 rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col justify-center items-center gap-10">
                <div className="text-gray-300 font-mono text-sm md:text-4xl">
                  01
                </div>
                <div className="text-white font-semibold text-sm sm:text-4xl uppercase tracking-wider">
                  FinTech
                </div>
                <p className="text-gray-300 text-lg md:text-xl font-medium leading-tight text-center">
                  Human-like deep research in complex industry
                </p>
              </div>
              {/* BACK SIDE */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gray-700 rounded-2xl p-8 flex flex-col justify-center gap-4">

                <ul className="text-white text-sm space-y-3">

                  <li>
                    <a
                      href="https://www.youtube.com/watch?v=JupfvYWTz5E"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-yellow-300 transition"
                    >
                      <Youtube size={18} />
                      Owner Video - Fintech Website 
                      <ExternalLink size={14} className="ml-auto opacity-70" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://everetics.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-yellow-300 transition"
                    >
                      <Globe size={18} />
                      Everetics - Fintech Website 
                      <ExternalLink size={14} className="ml-auto opacity-70" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.yumyumvideos.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-yellow-300 transition"
                    >
                      <Globe size={18} />
                      YumYum Videos - Fintech Website 
                      <ExternalLink size={14} className="ml-auto opacity-70" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://devverx.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-yellow-300 transition"
                    >
                      <Globe size={18} />
                      Devverx - Fintech Website
                      <ExternalLink size={14} className="ml-auto opacity-70" />
                    </a>
                  </li>

                </ul>

                <button className="mt-6  flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-sm shadow-lg hover:scale-105 transition-all duration-300">
                  Get FinTect Web Site
                </button>

              </div>
            </div>
          </div>

          {/* Card 5 */}
        <div className="group w-full h-84 perspective">
            <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
              {/* FRONT SIDE */}
              <div className="absolute w-full h-full backface-hidden bg-gray-700 rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col justify-center items-center gap-10">
                <div className="text-gray-300 font-mono text-sm md:text-4xl">
                  01
                </div>
                <div className="text-white font-semibold text-sm sm:text-4xl uppercase tracking-wider">
                  FinTech
                </div>
                <p className="text-gray-300 text-lg md:text-xl font-medium leading-tight text-center">
                  Human-like deep research in complex industry
                </p>
              </div>
              {/* BACK SIDE */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gray-700 rounded-2xl p-8 flex flex-col justify-center gap-4">

                <ul className="text-white text-sm space-y-3">

                  <li>
                    <a
                      href="https://www.youtube.com/watch?v=JupfvYWTz5E"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-yellow-300 transition"
                    >
                      <Youtube size={18} />
                      Owner Video - Fintech Website 
                      <ExternalLink size={14} className="ml-auto opacity-70" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://everetics.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-yellow-300 transition"
                    >
                      <Globe size={18} />
                      Everetics - Fintech Website 
                      <ExternalLink size={14} className="ml-auto opacity-70" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.yumyumvideos.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-yellow-300 transition"
                    >
                      <Globe size={18} />
                      YumYum Videos - Fintech Website 
                      <ExternalLink size={14} className="ml-auto opacity-70" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://devverx.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-yellow-300 transition"
                    >
                      <Globe size={18} />
                      Devverx - Fintech Website
                      <ExternalLink size={14} className="ml-auto opacity-70" />
                    </a>
                  </li>

                </ul>

                <button className="mt-6  flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-sm shadow-lg hover:scale-105 transition-all duration-300">
                  Get FinTect Web Site
                </button>

              </div>
            </div>
          </div>

          {/* Card 6 */}
              <div className="group w-full h-84 perspective">
            <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
              {/* FRONT SIDE */}
              <div className="absolute w-full h-full backface-hidden bg-gray-700 rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col justify-center items-center gap-10">
                <div className="text-gray-300 font-mono text-sm md:text-4xl">
                  01
                </div>
                <div className="text-white font-semibold text-sm sm:text-4xl uppercase tracking-wider">
                  FinTech
                </div>
                <p className="text-gray-300 text-lg md:text-xl font-medium leading-tight text-center">
                  Human-like deep research in complex industry
                </p>
              </div>
              {/* BACK SIDE */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gray-700 rounded-2xl p-8 flex flex-col justify-center gap-4">

                <ul className="text-white text-sm space-y-3">

                  <li>
                    <a
                      href="https://www.youtube.com/watch?v=JupfvYWTz5E"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-yellow-300 transition"
                    >
                      <Youtube size={18} />
                      Owner Video - Fintech Website 
                      <ExternalLink size={14} className="ml-auto opacity-70" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://everetics.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-yellow-300 transition"
                    >
                      <Globe size={18} />
                      Everetics - Fintech Website 
                      <ExternalLink size={14} className="ml-auto opacity-70" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.yumyumvideos.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-yellow-300 transition"
                    >
                      <Globe size={18} />
                      YumYum Videos - Fintech Website 
                      <ExternalLink size={14} className="ml-auto opacity-70" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://devverx.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-yellow-300 transition"
                    >
                      <Globe size={18} />
                      Devverx - Fintech Website
                      <ExternalLink size={14} className="ml-auto opacity-70" />
                    </a>
                  </li>

                </ul>

                <button className="mt-6  flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-sm shadow-lg hover:scale-105 transition-all duration-300">
                  Get FinTect Web Site
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CardsGrid;