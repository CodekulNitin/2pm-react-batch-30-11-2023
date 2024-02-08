import { TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";

function GetImagesFromLocalApi() {
  const [localData, setLocalData] = useState([]);
  const [incrementOne, setIncrementOne] = useState(0);
  const [incrementTwo, setIncrementTwo] = useState(0);
  let name = "";
  //   useEffect(() => {
  //     axios.get("https://jsonplaceholder.typicode.com/posts/").then((response) => {
  //       console.log("response", response);
  //       setLocalData(response.data);
  //     });
  //   }, []);
  console.log("localData", name);

  const handleIncrementOne = () => {
    setIncrementOne(incrementOne + 1);
  };

  const handleIncrementTwo = () => {
    setIncrementTwo(incrementTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return incrementOne % 2 === 0;
  }, [incrementOne]);

  return (
    <div className="pt-16">
      <div className="flex space-x-10">
        {/* <h1>{list.title}</h1> */}
        <button onClick={handleIncrementOne}>
          CounterOne - {incrementOne}
        </button>
        <button onClick={handleIncrementTwo}>
          CounterTwo - {incrementTwo}
        </button>
      </div>
      <TextField
        label="Pin Code"
        onChange={(e) => {
          axios
            .get(`https://api.postalpincode.in/pincode/${e.target.value}`)
            .then((response) => {
              console.log("12345", response);
            });
        }}
      />
      {isEven ? "Even" : "Odd"}
    </div>
  );
}

export default GetImagesFromLocalApi;
