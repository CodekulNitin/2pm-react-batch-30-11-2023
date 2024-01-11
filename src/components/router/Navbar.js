import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="flex space-x-3 justify-end items-center px-6 p-2 bg-blue-200 fixed z-50 w-full">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">ContactUs</Link>
        <Link to="products">Products</Link>

      </nav>
    </div>
  );
}

export default Navbar;
