import React, { useContext } from "react";
import { ListContext, UserContext } from "../../App";

function UseContextHook() {
  const userData = useContext(UserContext);
  const listData = useContext(ListContext);

  return (
    <div>
      {/* {userData}-{listData} */}
      <UserContext.Consumer>
        {(user) => {
          return (
            <>
              <ListContext.Consumer>
                {(list) => {
                  return (
                    <>
                      {user}-{list}
                    </>
                  );
                }}
              </ListContext.Consumer>
            </>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default UseContextHook;
