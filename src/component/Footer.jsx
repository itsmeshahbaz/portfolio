'use client'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-8 px-4 mt-20">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">

          {/* Left: Copyright */}
          <p className="text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} M. Shahbaz. All rights reserved.
          </p>

          {/* Middle: Contact Info */}
          <div className="text-sm text-center sm:text-left">
            <p>Email: <a href="mailto:shahbaz@example.com" className="text-amber-400 hover:underline">mshahbaz4283@gmail.com</a></p>
            <p>Phone: <a href="tel:+923001234567" className="text-amber-400 hover:underline">+92 319 4573046</a></p>
          </div>

          {/* Right: Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://web.facebook.com/shahbaz4283/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/shahbaz__mughal1/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/shahbaz-mughal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
