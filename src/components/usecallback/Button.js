import React from "react";

function Button({ onClick, children, type }) {
  console.log("button component");
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className="bg-indigo-900 h-9 px-3 rounded text-white"
      >
        {children}
      </button>
    </div>
  );
}

export default React.memo(Button);
