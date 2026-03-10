// src/components/layout/Header.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
// import { PopupModal } from "react-calendly";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  // const [open, setOpen] = useState(false)
  const toggleServices = () => setServicesOpen(prev => !prev);
  const MotionLink = motion(Link);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Framer Motion Variants
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * i, duration: 0.5 }
    })
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${isScrolled
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/60 shadow-2xl shadow-black/30'
          : 'bg-transparent pt-5'}
      `}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 relative group"
            initial="hidden"
            animate="visible"
            variants={logoVariants}
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-600/30 via-purple-600/20 to-cyan-500/10 blur-xl group-hover:blur-2xl transition-all duration-700" />
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full relative z-10 drop-shadow-[0_0_12px_rgba(99,102,241,0.7)] group-hover:drop-shadow-[0_0_24px_rgba(99,102,241,0.9)] transition-all duration-500"
                fill="none"
              >
                <defs>
                  <linearGradient id="xeroneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="50%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
                <path
                  d="M50 5 L95 27.5 L95 72.5 L50 95 L5 72.5 L5 27.5 Z"
                  stroke="url(#xeroneGrad)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-70 group-hover:opacity-100 transition-opacity duration-700"
                />
                <path
                  d="M25 25 L75 75 M75 25 L25 75"
                  stroke="white"
                  strokeWidth="10"
                  strokeLinecap="round"
                  className="drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
                />
                <circle cx="50" cy="50" r="4" fill="white" className="animate-pulse" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
                Xerone
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10 relative">
            {/* Manual Nav Links */}
            <MotionLink
              to="/"
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              className="relative text-sm font-bold transition-all duration-300 text-slate-400 hover:text-blue-900"
            >
              Home
            </MotionLink>

            <MotionLink
              to="/about"
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              className="relative text-sm font-bold transition-all duration-300 text-slate-400 hover:text-blue-900"
            >
              About
            </MotionLink>

            {/* Services Dropdown */}
            <div className="relative">
              <span
                onClick={toggleServices}
                className="relative text-sm font-bold transition-all duration-300 text-slate-400 hover:text-blue-900 cursor-pointer flex items-center gap-1"
              >
                Services
                <ChevronDown size={14} className={`${servicesOpen ? 'rotate-180' : 'rotate-0'} transition-transform`} />
              </span>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-white shadow-lg rounded-md z-50">
                  <Link
                    to="/web-mobile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                    onClick={() => setServicesOpen(false)}
                  >
                    Web/Mobile Applications
                  </Link>
                  <Link
                    to="/generative-ai"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                    onClick={() => setServicesOpen(false)}
                  >
                    Generative AI
                  </Link>
                </div>
              )}
            </div>

            <MotionLink
              to="/projects"
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              className="relative text-sm font-bold transition-all duration-300 text-slate-400 hover:text-blue-900"
            >
              Projects
            </MotionLink>

            <MotionLink
              to="/case-studies"
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              className="relative text-sm font-bold transition-all duration-300 text-slate-400 hover:text-blue-900"
            >
              Case Studies
            </MotionLink>

            <MotionLink
              to="/contact"
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              className="relative text-sm font-bold transition-all duration-300 text-slate-400 hover:text-blue-900"
            >
              Contact
            </MotionLink>
          </nav>

          {/* CTA + Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <a
              href="https://calendly.com/muhammadaslan4013/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-indigo-600 text-white rounded-full"
            >
              Book a Call
            </a>
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setOpen(true)}
              className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-sm shadow-lg shadow-indigo-900/30 hover:shadow-indigo-700/50 transition-all duration-300"
            >
              Book a Call
              <ChevronDown size={16} className="opacity-80" />
            </motion.button>
            <PopupModal
              url="https://calendly.com/muhammadaslan4013/30min"
              open={open}
              onModalClose={() => setOpen(false)}
              rootElement={document.getElementById("root")}
            /> */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="lg:hidden overflow-hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/60"
          >
            {/* Add mobile nav links here */}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}