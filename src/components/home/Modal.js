import React, { useState } from "react";

function Modal(props) {
  const [cardData, setCardData] = useState(props.data);
  console.log("cardTempData", props.data);

  return (
    <div className="border rounded h-[300px] w-[70%] p-3">
      <button
        className="border rounded p-1"
        onClick={() => {
          props.setOpenModal(false);
        }}
      >
        X
      </button>
      {props.data.map((cardName) => {
        return (
          <div className="shadow p-3 border rounded-xl bg-white ">
            <div className="flex justify-between">
              <h3>{cardName.srNo}</h3>
              <img src={cardName.icon} alt="image" />
            </div>
            <h3 className="my-3">{cardName.cardName}</h3>
            <p>{cardName.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Modal;
