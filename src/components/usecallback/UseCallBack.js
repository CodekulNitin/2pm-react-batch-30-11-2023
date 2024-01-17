import React from 'react'

function UseCallBack() {
    console.log("callback component");
  return (
    <div>UseCallBack</div>
  )
}

export default React.memo(UseCallBack)