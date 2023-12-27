import React, { useContext } from "react";
import { NewContext } from "./NewContext";

function MyContext() {
  const cardData = useContext(NewContext);
  console.log("cardData", cardData);
  return (
    <div>
      {cardData.map((value) => {
        return <>{value.CardName}</>;
      })}
    </div>
  );
}

export default MyContext;
