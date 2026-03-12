// Footer.tsx
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
export default function Footer() {
  return (
    <footer className="bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/60 shadow-2xl shadow-black/30 border-t ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        <div className="grid md:grid-cols-3  gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Zerone</h3>
            <p className="text-gray-300">
              Transforming ideas into innovative software solutions.
            </p>
          </div>
          <div className='md:ml-20'>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 ">Services</a></li>
              <li><a href="#" className="text-gray-300 ">Portfolio</a></li>
              <li><a href="#" className="text-gray-300 ">Contact</a></li>
            </ul>
          </div>
          <div >
            <h4 className="font-bold text-white mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                info@zerone.com
              </li>
              <li className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-2" />
                Silicon Valley, CA
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Zerone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}