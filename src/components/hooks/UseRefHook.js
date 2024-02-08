import { TextField } from "@mui/material";
import React, { useEffect, useRef } from "react";

function UseRefHook() {
  const useRef1 = useRef("");
  const useRef2 = useRef("");
  const useRef3 = useRef("");

  useEffect(() => {
    useRef1.current.focus();
  }, []);

  const handleKeyPress = (e) => {
    console.log("123456", e);
    if (e.key === "Enter") {
      e.preventDefault();

      if (useRef3.current) {
        useRef3.current.focus();
      }
    }
  };
  return (
    <div className="pt-16 flex justify-center">
      <TextField
        inputRef={useRef1}
        type="text"
        name="firstName"
        placeholder="First Name"
        className="border pl-2"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (useRef2.current) {
              useRef2.current.focus();
            }
          }
        }}
      />
      <TextField
        type="text"
        inputRef={useRef2}
        name="lastName"
        placeholder="Last Name"
        className="border pl-2"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (useRef3.current) {
              useRef3.current.focus();
            }
          }
        }}
      />
      <TextField
        type="text"
        inputRef={useRef3}
        name="lastName"
        placeholder="Mobile Number"
        className="border pl-2"
      />
    </div>
  );
}

export default UseRefHook;
