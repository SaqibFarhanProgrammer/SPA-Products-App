// LargeEcommerceFooter.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Top: brand + CTA */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-black font-bold text-lg">
              EM
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                EchoMerce
              </h2>
              <p className="mt-1 text-gray-300 max-w-xl">
                Trendy collections • Fast delivery • Hassle-free returns — shop
                the best, right now.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="text-sm text-gray-300">Download our app</div>
            <div className="flex gap-3">
              {/* App badge placeholders */}
              <a
                href="#"
                className="flex items-center gap-3 border border-gray-700 rounded-lg px-4 py-2"
                aria-label="Download on App Store"
              >
                <div className="w-8 h-8 bg-gray-800 rounded-md flex items-center justify-center text-sm">
                  
                </div>
                <div className="text-left text-white">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 border border-gray-700 rounded-lg px-4 py-2"
                aria-label="Get it on Google Play"
              >
                <div className="w-8 h-8 bg-gray-800 rounded-md flex items-center justify-center text-sm">
                  ▣
                </div>
                <div className="text-left text-white">
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Middle: multi-column mega links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
          {/* Column 1 - Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-[#0040ff]">
                  Women
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0040ff]">
                  Men
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0040ff]">
                  Kids
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0040ff]">
                  Footwear
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0040ff]">
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 - Shop by */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Shop by</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-[#0040ff]">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0040ff]">
                  Top Brands
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0040ff]">
                  Offers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0040ff]">
                  Seasonal Sale
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Customer care */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Care</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-[#0040ff]">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0040ff]">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0040ff]">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0040ff]">
                  Track Order
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter + social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay in the loop</h4>
            <p className="text-sm text-gray-300">
              Subscribe and get 10% off your first order + exclusive updates.
            </p>

            <form className="mt-4 flex gap-2 max-w-md">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-l-lg px-4 py-3 bg-gray-900 text-white placeholder-gray-500 border border-gray-700 focus:outline-none"
              />
              <button className="rounded-r-lg px-5 py-3 bg-white text-black font-semibold hover:opacity-90">
                Subscribe
              </button>
            </form>

            <div className="mt-6">
              <div className="text-sm text-gray-300 mb-2">Follow us</div>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="p-2 rounded-md border border-gray-800 hover:bg-gray-900"
                >
                  {/* svg icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.99H7.898v-2.888h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.888h-2.33V21.878C18.343 21.128 22 16.991 22 12z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="p-2 rounded-md border border-gray-800 hover:bg-gray-900"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.5A4.5 4.5 0 1 0 16.5 13 4.505 4.505 0 0 0 12 8.5zM18.5 6a1 1 0 1 0 1 1 1 1 0 0 0-1-1z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="p-2 rounded-md border border-gray-800 hover:bg-gray-900"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 5.924c-.64.283-1.327.474-2.048.56a3.577 3.577 0 0 0 1.57-1.97 7.12 7.12 0 0 1-2.265.866A3.56 3.56 0 0 0 12.06 8.2a10.1 10.1 0 0 1-7.33-3.713 3.56 3.56 0 0 0 1.102 4.751 3.522 3.522 0 0 1-1.61-.445v.045c0 1.73 1.23 3.172 2.865 3.498a3.6 3.6 0 0 1-1.604.06c.452 1.415 1.762 2.445 3.313 2.473A7.134 7.134 0 0 1 3 18.407 10.08 10.08 0 0 0 8.8 20.5c6.54 0 10.12-5.42 10.12-10.12v-.46A7.23 7.23 0 0 0 22 5.924z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: legal + payments */}
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} EchoMerce. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <nav className="flex gap-4 text-sm text-gray-300">
              <a href="#" className="hover:text-[#0040ff]">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#0040ff]">
                Terms
              </a>
              <a href="#" className="hover:text-[#0040ff]">
                Contact
              </a>
            </nav>

            <div className="flex items-center gap-2">
              {/* Payment placeholders */}
              <div className="w-10 h-6 bg-gray-800 rounded-sm flex items-center justify-center text-xs">
                VISA
              </div>
              <div className="w-10 h-6 bg-gray-800 rounded-sm flex items-center justify-center text-xs">
                MC
              </div>
              <div className="w-10 h-6 bg-gray-800 rounded-sm flex items-center justify-center text-xs">
                PP
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
