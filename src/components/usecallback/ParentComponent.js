import React, { useState, useCallback } from "react";
import UseCallBack from "./UseCallBack";
import Count from "./Count";
import Button from "./Button";

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [salary, setSalary] = useState(5000);

  const handleIncrementCount = () => {
    setCount(count + 1);
  };

  const handleIncrementSalary = () => {
    setSalary(salary + 1000);
  };

  const isEven = () => {
    let i = 0;
    return count % 2 === 0;
  };

  return (
    <div className="text-center">
      <UseCallBack />
      <Count count={count} text="Count" />
      <span>{isEven() ? "even" : "odd"}</span>
      <Button onClick={handleIncrementCount}>Count +</Button>
      <Count count={salary} text="Salary" />
      <Button onClick={handleIncrementSalary}>Salary +</Button>
    </div>
  );
}

export default React.memo(ParentComponent);
