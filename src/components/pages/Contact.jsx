import React from "react";
import {
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Linkedin
} from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-[#f3f3f3] py-30 px-6">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-6xl font-black mb-8">
            Let’s Connect! <span>👋</span>
          </h1>

          <p className="text-lg leading-relaxed mb-6">
            We are a <b>leading animated explainer video company</b> that helps
            brands connect with people through tailor-made video content.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            <b>
              Trusted by global brands like Google, Amazon, McKesson, and
              Thermo Fisher
            </b>
            , we also proudly support startups and Fortune 500 companies alike.
          </p>

          <p className="text-lg leading-relaxed mb-10">
            Let’s talk about your project – whatever the challenge, we’re here
            to create a solution.{" "}
            <b>Fill out the form and let’s bring your ideas to life!</b>
          </p>

          <div className="mb-6 font-semibold text-lg">Follow us</div>

          {/* Social Icons */}
          <div className="flex gap-2 mb-16">
            <Facebook size={40} className=" bg-black text-white hover:bg-amber-700 p-2 rounded-full"/>
            <Twitter size={40} className="bg-black  hover:bg-amber-700 text-white p-2 rounded-full"/>
            <Youtube size={40} className="bg-black  hover:bg-amber-700 text-white p-2 rounded-full"/>
            <Instagram size={40} className="bg-black  hover:bg-amber-700 text-white p-2 rounded-full"/>
            <Linkedin size={40} className="bg-black  hover:bg-amber-700 text-white p-2 rounded-full"/>
          </div>

          {/* Email */}
          <div>
            <div className="font-semibold mb-2">Email us</div>
            <a
              href="mailto:alex@yumyumvideos.com"
              className="text-gray-700 underline"
            >
              alex@yumyumvideos.com
            </a>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div>

          {/* ROW */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">

            <div className="relative">
              <label className="absolute -top-3 left-4 bg-[#f3f3f3] px-2 text-sm font-semibold">
                FIRST NAME<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Type your first name"
                className="w-full border border-gray-400 rounded-lg px-5 py-6 bg-transparent"
              />
            </div>

            <div className="relative">
              <label className="absolute -top-3 left-4 bg-[#f3f3f3] px-2 text-sm font-semibold">
                LAST NAME<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Type your last name"
                className="w-full border border-gray-400 rounded-lg px-5 py-6 bg-transparent"
              />
            </div>

          </div>

          {/* EMAIL */}
          <div className="relative mb-6">
            <label className="absolute -top-3 left-4 bg-[#f3f3f3] px-2 text-sm font-semibold">
              EMAIL<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Type your email"
              className="w-full border border-gray-400 rounded-lg px-5 py-6 bg-transparent"
            />
          </div>

          {/* ROW */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">

            <div className="relative">
              <label className="absolute -top-3 left-4 bg-[#f3f3f3] px-2 text-sm font-semibold">
                BUDGET<span className="text-red-500">*</span>
              </label>
              <select className="w-full border border-gray-400 rounded-lg px-5 py-6 bg-transparent">
                <option>Select Budget</option>
                <option>$1000 - $5000</option>
                <option>$5000 - $10000</option>
                <option>$10000+</option>
              </select>
            </div>

            <div className="relative">
              <label className="absolute -top-3 left-4 bg-[#f3f3f3] px-2 text-sm font-semibold">
                INDUSTRY<span className="text-red-500">*</span>
              </label>
              <select className="w-full border border-gray-400 rounded-lg px-5 py-6 bg-transparent">
                <option>Select Industry</option>
                <option>Technology</option>
                <option>Ecommerce</option>
                <option>Healthcare</option>
              </select>
            </div>

          </div>

          {/* TEXTAREA */}
          <div className="relative mb-10">
            <label className="absolute -top-3 left-4 bg-[#f3f3f3] px-2 text-sm font-semibold">
              TELL US ABOUT YOUR VIDEO NEEDS
              <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="5"
              className="w-full border border-gray-400 rounded-lg px-5 py-6 bg-transparent"
            ></textarea>
          </div>

          {/* BUTTON */}
          <button className="w-full bg-[#ff5a2f] text-white py-5 rounded-full text-lg font-semibold hover:bg-[#ff4a1f] transition">
            Submit
          </button>

        </div>
      </div>
    </div>
  );
}