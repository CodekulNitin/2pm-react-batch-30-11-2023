import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const tempObj = {
    FirstNam:"CodeKule"
  }
  return (
    <div className="pt-16 text-center">
      <button
        className="bg-indigo-900 text-white rounded px-3 h-9"
        onClick={() => {
          navigate("/",{state:tempObj});
        }}
      >
        Go Back
      </button>
    </div>
  );
}

export default About;
