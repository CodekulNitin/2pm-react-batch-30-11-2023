import React from "react";

function Count({ count, text }) {
  console.log("count component", text);
  return (
    <div>
      {text} - {count}
    </div>
  );
}

export default React.memo(Count);
