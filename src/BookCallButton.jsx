
import React from "react";
import { PopupModal } from "react-calendly";
import { useState } from "react";
import {ChevronDown } from 'lucide-react';
import { motion, } from 'framer-motion';
export default function BookCallButton() {

	const [open, setOpen] = useState(false)

	return (
		<>
<motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setOpen(true)}
              className=" md:flex items-center gap-2 px-10 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-sm shadow-lg shadow-indigo-900/30 hover:shadow-indigo-700/50 transition-all duration-300"
            >
              Book a Call
              {/* <ChevronDown size={16} className="opacity-80" /> */}
            </motion.button>

			<PopupModal
				url="https://calendly.com/muhammadaslan4013/30min"
				open={open}
				onModalClose={() => setOpen(false)}
				rootElement={document.getElementById("root")}
			/>
		</>
	)
}


// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { ChevronDown } from "lucide-react";

// export default function BookCallButton() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* Button to open modal */}
//       <button
//         // whileHover={{ scale: 1.05 }}
//         // whileTap={{ scale: 0.97 }}
//         onClick={() => setOpen(true)}
//         className="md:flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-sm shadow-lg shadow-indigo-900/30 hover:shadow-indigo-700/50 transition-all duration-300"
//       >
//         Book a Call
//         {/* <ChevronDown size={16} className="opacity-80" /> */}
//       </button>

//       {/* Custom Modal */}
//       {open && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
//           <div className="bg-white rounded-xl shadow-lg w-[90%] max-w-2xl p-6 relative">
//             {/* Close button */}
//             <button
//               onClick={() => setOpen(false)}
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 font-bold text-xl"
//             >
//               ×
//             </button>

//             {/* Custom heading/text */}
//             <h2 className="text-2xl font-bold mb-2">Schedule Your 30-Minute Call</h2>
//             <p className="mb-4 text-gray-600">
//               Please select a date and time below. Our team will contact you after booking.
//             </p>
//  <h2 className="text-2xl font-bold mb-2">Schedule Your 30-Minute Call</h2>
//             <p className="mb-4 text-gray-600">
//               Please select a date and time below. Our team will contact you after booking.
//             </p> <h2 className="text-2xl font-bold mb-2">Schedule Your 30-Minute Call</h2>
//             <p className="mb-4 text-gray-600">
//               Please select a date and time below. Our team will contact you after booking.
//             </p> <h2 className="text-2xl font-bold mb-2">Schedule Your 30-Minute Call</h2>
//             <p className="mb-4 text-gray-600">
//               Please select a date and time below. Our team will contact you after booking.
//             </p>
//             {/* Calendly iframe embed */}
//             <iframe
//               src="https://calendly.com/muhammadaslan4013/30min?embed_domain=localhost&embed_type=Inline"
//               width="100%"
//               height="600"
//               frameBorder="0"
//               scrolling="no"
//             ></iframe>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }