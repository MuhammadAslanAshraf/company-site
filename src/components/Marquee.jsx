import React from 'react'
import icon from '../assets/react.svg'
const Marquee = () => {
  return (
   <div className="w-full overflow-hidden bg-gray-700 py-6 relative my-20">
        <div className="marquee-track flex">

          {/* Content Group */}
          <div className="marquee-group flex items-center">
            <img src={icon} className="w-10 h-10 mx-4" />
            <span className="text-white text-3xl font-semibold mx-6 whitespace-nowrap">
              Just Absolute Results. No Ifs. No Buts.
            </span>
          </div>

          {/* Duplicate 1 */}
          <div className="marquee-group flex items-center">
            <img src={icon} className="w-10 h-10 mx-4" />
            <span className="text-white text-3xl font-semibold mx-6 whitespace-nowrap">
              Just Absolute Results. No Ifs. No Buts.
            </span>
          </div>

          {/* Duplicate 2 (extra safety) */}
          <div className="marquee-group flex items-center">
            <img src={icon} className="w-10 h-10 mx-4" />
            <span className="text-white text-3xl font-semibold mx-6 whitespace-nowrap">
              Just Absolute Results. No Ifs. No Buts.
            </span>
          </div>

        </div>

        <style>
          {`
      .marquee-track {
        width: max-content;
        animation: marquee 18s linear infinite;
      }

      @keyframes marquee {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-33.333%);
        }
      }
    `}
        </style>
      </div>
  )
}

export default Marquee
