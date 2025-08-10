import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-[#f7f9ff]">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand / About */}
          <div>
            <h3 className="text-2xl font-bold">EchoMerce</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-300">
              Modern e‑commerce store — quality products, fast shipping, and
              great support.
            </p>
            <div className="flex gap-3 mt-4">
              {/* Simple social icons */}
              <a href="#" aria-label="Facebook" className="hover:opacity-80">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.99H7.898v-2.888h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.888h-2.33V21.878C18.343 21.128 22 16.991 22 12z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="hover:opacity-80">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 5.924c-.64.283-1.327.474-2.048.56a3.577 3.577 0 0 0 1.57-1.97 7.12 7.12 0 0 1-2.265.866A3.56 3.56 0 0 0 12.06 8.2a10.1 10.1 0 0 1-7.33-3.713 3.56 3.56 0 0 0 1.102 4.751 3.522 3.522 0 0 1-1.61-.445v.045c0 1.73 1.23 3.172 2.865 3.498a3.6 3.6 0 0 1-1.604.06c.452 1.415 1.762 2.445 3.313 2.473A7.134 7.134 0 0 1 3 18.407 10.08 10.08 0 0 0 8.8 20.5c6.54 0 10.12-5.42 10.12-10.12v-.46A7.23 7.23 0 0 0 22 5.924z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:opacity-80">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.5A4.5 4.5 0 1 0 16.5 13 4.505 4.505 0 0 0 12 8.5zM18.5 6a1 1 0 1 0 1 1 1 1 0 0 0-1-1z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-[#0040ff]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0040ff]">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0040ff]">
                  Collections
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0040ff]">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-3">Customer Service</h4>
            <ul className="space-y-2 text-sm text-gray-300">
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
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0040ff]">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-3">Join our newsletter</h4>
            <p className="text-sm text-gray-300">
              Get 10% off your first order — exclusive deals and new arrivals.
            </p>

            <form className="mt-4 flex max-w-md">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-l-lg px-4 py-2 bg-gray-800 text-[#f7f9ff] placeholder-gray-400 border border-gray-700 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-r-lg px-4 py-2 bg-white text-black font-semibold hover:opacity-90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} EchoMerce — All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <nav className="flex gap-3 text-sm text-gray-300">
              <a href="#" className="hover:text-[#0040ff]">
                Privacy
              </a>
              <a href="#" className="hover:text-[#0040ff]">
                Terms
              </a>
              <a href="#" className="hover:text-[#0040ff]">
                Sitemap
              </a>
            </nav>

            {/* Payment icons (simple placeholders) */}
            <div className="flex gap-2 items-center">
              <div className="w-8 h-5 bg-gray-700 rounded-sm flex items-center justify-center text-xs">
                V
              </div>
              <div className="w-8 h-5 bg-gray-700 rounded-sm flex items-center justify-center text-xs">
                M
              </div>
              <div className="w-8 h-5 bg-gray-700 rounded-sm flex items-center justify-center text-xs">
                P
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
