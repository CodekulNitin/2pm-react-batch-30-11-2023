import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { NewContext } from "../contextapi/NewContext";

function DataPassingUsingProps(props) {
  const [postData, setPostData] = useState([]);
  const cardData = useContext(NewContext)

  return (
    <div className="grid grid-cols-3 gap-2">
      {/* <div>
        <img
          src="https://demos.onepagelove.com/html/stage/images/event-banner.jpg"
          className="h-full"
        />
      </div> */}
      <div className="grid grid-cols-2 col-span-2 gap-3">
        {cardData.map((value, index) => {
          return (
            <div className=" flex  justify-between border gap-2">
              <div>
                <h3>{value.CardName}</h3>
                {/* <h5>{value.body}</h5> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DataPassingUsingProps;
