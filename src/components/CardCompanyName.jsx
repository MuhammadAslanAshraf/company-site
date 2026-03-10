import React from 'react'

const CardCompanyName = () => {
	return (

		<section className="py-16 ">
			<div className="max-w-6xl mx-auto px-6">

				{/* Heading */}
				<h2 className="text-4xl font-semibold text-center mb-20 tracking-wide">
					TRUSTED CLIENTS AND PARTNERS
				</h2>

				{/* Grid */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">

					{/* Card */}
					{[
						"Blabble.",
						"Maxab",
						"NHS",
						"Narratize",
						"Aurora",
						"Boosted",
						"Options Depth",
						"Unicef",
					].map((item, index) => (
						<div
							key={index}
							className="flex items-center justify-center 
                     h-64 bg-gray-300 rounded-xl 
                     transition-all duration-500 ease-in-out
                     opacity-40 hover:opacity-100 hover:bg-gray-300"
						>
							<span className="text-5xl font-semibold text-gray-900 text-center">
								{item}
							</span>
						</div>
					))}

				</div>
			</div>
		</section>

	)
}

export default CardCompanyName
