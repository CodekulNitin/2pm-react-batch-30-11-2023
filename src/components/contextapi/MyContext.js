import React, { useContext } from "react";
import { NewContext } from "./NewContext";

function MyContext() {
  const { text, setText } = useContext(NewContext);
  console.log("cardData", text);
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setText("Abc");
        }}
      >
        Show Text
      </button>
      {/* {cardData.map((value) => {
        return <>{value.CardName}</>;
      })} */}
    </div>
  );
}

export default MyContext;
