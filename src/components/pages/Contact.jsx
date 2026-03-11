import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Linkedin
} from "lucide-react";

export default function Contact() {

  const formRef = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
setLoading(true);
setStatus("");

    emailjs
      .sendForm(
        "service_lcthat4",   // replace
        "template_63n58wt",  // replace
        formRef.current,
        "GGdYrQzj1ADJlkcAx" // replace
      )
      .then(
        () => {
          setLoading(false);
          setStatus("Message sent successfully ✅");
          formRef.current.reset();
        },
        () => {
          setLoading(false);
          setStatus("Something went wrong ❌");
        }
      );
  };

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
          </p>

          <p className="text-lg leading-relaxed mb-10">
            Let’s talk about your project – whatever the challenge, we’re here
            to create a solution.
          </p>

          <div className="mb-6 font-semibold text-lg">Follow us</div>

          <div className="flex gap-2 mb-16">
            <Facebook size={40} className="bg-black text-white hover:bg-[#ff5a2f] p-2 rounded-full" />
            <Twitter size={40} className="bg-black text-white hover:bg-[#ff5a2f] p-2 rounded-full" />
            <Youtube size={40} className="bg-black text-white hover:bg-[#ff5a2f] p-2 rounded-full" />
            <Instagram size={40} className="bg-black text-white hover:bg-[#ff5a2f] p-2 rounded-full" />
            <Linkedin size={40} className="bg-black text-white hover:bg-[#ff5a2f] p-2 rounded-full" />
          </div>

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
        <form ref={formRef} onSubmit={sendEmail}>

          {/* FIRST NAME */}
          <div className="relative mb-6">
            <label className="absolute -top-3 left-4 bg-[#f3f3f3] px-2 text-sm font-semibold">
              FIRST NAME<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Type your first name"
              className="w-full border border-gray-400 rounded-lg px-5 py-6 bg-transparent focus:outline-none focus:border-[#ff5a2f]"
            />
          </div>

          {/* EMAIL */}
          <div className="relative mb-6">
            <label className="absolute -top-3 left-4 bg-[#f3f3f3] px-2 text-sm font-semibold">
              EMAIL<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Type your email"
              className="w-full border border-gray-400 rounded-lg px-5 py-6 bg-transparent focus:outline-none focus:border-[#ff5a2f]"
            />
          </div>

          {/* PHONE */}
          <div className="relative mb-6">
            <label className="absolute -top-3 left-4 bg-[#f3f3f3] px-2 text-sm font-semibold">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="phone"
              required
              placeholder="Type your Phone Number"
              className="w-full border border-gray-400 rounded-lg px-5 py-6 bg-transparent focus:outline-none focus:border-[#ff5a2f]"
            />
          </div>

          {/* MESSAGE */}
          <div className="relative mb-10">
            <label className="absolute -top-3 left-4 bg-[#f3f3f3] px-2 text-sm font-semibold">
              TELL US ABOUT YOUR VIDEO NEEDS
              <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="5"
              name="message"
              required
              className="w-full border border-gray-400 rounded-lg px-5 py-6 bg-transparent focus:outline-none focus:border-[#ff5a2f]"
            ></textarea>
          </div>

         <button
              type="submit"
              disabled={loading}
              className={`w-full bg-[#ff5a2f] text-white py-5 rounded-full text-lg font-semibold hover:bg-[#ff4a1f] transition flex justify-center items-center gap-2`}
            >
              {loading ? (
                <span className="loader border-4 border-white border-t-transparent rounded-full w-6 h-6 animate-spin"></span>
              ) : (
                "Submit"
              )}
            </button>

          {/* STATUS MESSAGE */}
            {status && (
              <p className={`text-center mt-4 ${status.includes("Error") ? "text-red-500" : "text-green-500"}`}>
                {status}
              </p>
            )}

        </form>

      </div>
    </div>
  );
}