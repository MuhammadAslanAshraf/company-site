// src/components/CompareSection.jsx
import React from 'react';

const compareData = [
  {
    title: 'Cogent',
    features: [
      { label: 'Speed', value: '<250ms median response time' },
      { label: 'Scalability', value: 'Build for 10x of your expected traffic' },
      { label: 'User Experience', value: 'Built by In-house experts' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Daily Active Users', value: '1M+ users across all projects' },
    ],
  },
  {
    title: 'The Others',
    features: [
      { label: 'Speed', value: 'NoneNo promises' },
      { label: 'Scalability', value: 'Build for 1x of your expected traffic' },
      { label: 'User Experience', value: 'Outsourced or Unavailable' },
      { label: 'Uptime', value: '??' },
      { label: 'Daily Active Users', value: 'Thousands (at max)' },
    ],
  },
];

export default function CompareSection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-sm text-gray-500 uppercase">Compare Cogent</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          What makes us better than the rest?
        </h2>
        <p className="mt-2 text-gray-600">Built for execution, not experimentation.</p>
      </div>

      {/* Comparison Cards */}
      <div className="relative  mx-auto flex flex-col md:flex-row  overflow-hidden max-w-5xl">
        {/* Left Card */}
        <div className="w-full md:w-1/2 p-8 text-white space-y-4 max-w-3xl bg-black rounded-xl mr-3">
          <h3 className="text-xl font-semibold">{compareData[0].title}</h3>
          {compareData[0].features.map((f, i) => (
            <div key={i} className="border-b border-white/20 pb-2">
              <p className="text-gray-400 text-sm">{f.label}</p>
              <p className="text-white">{f.value}</p>
            </div>
          ))}
        </div>

        {/* VS Box */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="bg-white text-black font-bold rounded-full px-6 py-3 shadow-lg z-10">
            VS
          </div>
        </div>

        {/* Right Card */}
        <div className="w-full md:w-1/2 p-8 text-white space-y-4 max-w-3xl bg-black rounded-xl">
          <h3 className="text-xl font-semibold">{compareData[1].title}</h3>
          {compareData[1].features.map((f, i) => (
            <div key={i} className="border-b border-white/20 pb-2">
              <p className="text-gray-400 text-sm">{f.label}</p>
              <p className="text-white">{f.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-8 max-w-5xl mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl py-8 px-6 flex flex-col md:flex-row items-center justify-center gap-10 text-white">
        <h3 className="text-xl font-semibold mb-4 md:mb-0">You in?</h3>
        <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition-transform">
          Get in Touch
        </button>
      </div>
    </section>
  );
}