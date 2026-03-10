import React from 'react'
import BookCallButton from '../BookCallButton'

const HeroSections = () => {
	return (
		<div className="relative mx-auto max-w-7xl px-6  py-20 lg:px-8 ">
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
					<BookCallButton/>
				</div>
				{/* Right Side - Image + Card */}
				<div className="flex flex-col w-full lg:w-1/2">
					{/* Image */}
					<div className=" overflow-hidden shadow-2xl shadow-gray-200/50 md:flex gap-4">

						<img
							src="https://cdn.prod.website-files.com/68244de84102b0b2107ee628/683597484d0ee90dbf243a5e_Rider.webp"
							alt="Young team building AI agents"
							className="md:w-1/2 h-84 aspect-[4/3] object-cover brightness-[0.98] rounded-lg"
						/>

						<p className="md:w-1/2  aspect-[4/3] object-cover brightness-[0.98] bg-gray-700 rounded-lg p-5 text-gray-400 text-3xl mt-4 md:mt-0">
							<span className='text-3xl font-bold text-white '>93% Projects</span>
							<br /> delivered on time and on budget</p>
					</div>
					{/* Card (Image ke niche) */}
					<div className="pt-2 flex justify-center">
						{/* Gradient Border */}
						<div className="rounded-2xl bg-gray-700 p-6 w-full  ">
							{/* Bottom Source Bar */}
							<div className=" bg-gray-500 text-white text-center px-2 py-3 rounded-tl-xl rounded-br-xl text-sm md:text-base">
								Discover our custom-built AI agents in action
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeroSections
