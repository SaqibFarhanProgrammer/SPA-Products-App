import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-zinc-950 border-b-1 border-zinc-500   p-1 shadow-sm text-white">
      {/* Navbar Start (Mobile Menu Button + Logo) */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>

          {/* Mobile Menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li><a>Home</a></li>

            <li>
              <details>
                <summary>Products</summary>
                <ul className="p-2">
                  <li><a>New Arrivals</a></li>
                  <li><a>Best Sellers</a></li>
                  <li><a>On Sale</a></li>
                  <li><a>All Products</a></li>
                </ul>
              </details>
            </li>

            <li>
              <details>
                <summary>Categories</summary>
                <ul className="p-2">
                  <li><a>Electronics</a></li>
                  <li><a>Fashion</a></li>
                  <li><a>Jewelry</a></li>
                  <li><a>Home & Kitchen</a></li>
                  <li><a>Sports</a></li>
                </ul>
              </details>
            </li>

            <li><a>Deals</a></li>
            <li><a>Gift Cards</a></li>
            <li><a>Blog</a></li>
            <li><a>About Us</a></li>
            <li><a>Contact</a></li>
            <li><a>My Account</a></li>
            <li><a>Cart (0)</a></li>
          </ul>
        </div>

        {/* Logo */}
        <a className="btn btn-ghost text-xl">My E-commerce</a>
      </div>

      {/* Navbar Center (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Home</a></li>

          <li>
            <details>
              <summary>Products</summary>
              <ul className="p-2">
                <li><a>New Arrivals</a></li>
                <li><a>Best Sellers</a></li>
                <li><a>On Sale</a></li>
                <li><a>All Products</a></li>
              </ul>
            </details>
          </li>

          <li>
            <details>
              <summary>Categories</summary>
              <ul className="p-2">
                <li><a>Electronics</a></li>
                <li><a>Fashion</a></li>
                <li><a>Jewelry</a></li>
                <li><a>Home & Kitchen</a></li>
                <li><a>Sports</a></li>
              </ul>
            </details>
          </li>

          <li><a>Deals</a></li>
          <li><a>Gift Cards</a></li>
          <li><a>Blog</a></li>
          <li><a>About Us</a></li>
          <li><a>Contact</a></li>
          <li><a>My Account</a></li>
          <li><a>Cart (0)</a></li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
