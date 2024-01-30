import React, { useEffect, useRef } from "react";

function UseRefHook() {
  const useRef1 = useRef("");
  const useRef2 = useRef("");

  useEffect(() => {
    useRef1.current.focus();
  }, []);

  const handleKeyPress = (e) => {
    e.preventDefault();
    console.log("123456", e);
    if (e.key === "Enter") {
      useRef2.current.focus();
    }
  };
  return (
    <div className="pt-16 flex justify-center">
      <input
        ref={useRef1}
        type="text"
        name="firstName"
        placeholder="First Name"
        className="border pl-2"
        onKeyDown={handleKeyPress}
      />
      <input
        type="text"
        ref={useRef2}
        name="lastName"
        placeholder="Last Name"
        className="border pl-2"
      />
    </div>
  );
}

export default UseRefHook;
