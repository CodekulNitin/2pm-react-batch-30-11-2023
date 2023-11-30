import React from "react";

function Navbar() {
  return ( 
    <div className="flex justify-between p-5 shadow fixed w-full bg-[#F8F2E8]">
      <div>
        <h2>Skeema</h2>
      </div>
      <div>
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default Navbar;
