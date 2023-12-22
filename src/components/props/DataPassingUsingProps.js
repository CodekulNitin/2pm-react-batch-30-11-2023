import axios from "axios";
import React, { useEffect, useState } from "react";

function DataPassingUsingProps(props) {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log("response", response);
      setPostData(response.data);
    });
  }, []);
  console.log("postData", postData);
  return (
    <div className="grid grid-cols-3 gap-2">
      {/* <div>
        <img
          src="https://demos.onepagelove.com/html/stage/images/event-banner.jpg"
          className="h-full"
        />
      </div> */}
      <div className="grid grid-cols-2 col-span-2 gap-3">
        {postData.map((value, index) => {
          return (
            <div className=" flex  justify-between border gap-2">
              <div>
                <h3>{value.title}</h3>
                <h5>{value.body}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DataPassingUsingProps;
