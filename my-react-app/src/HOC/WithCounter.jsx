import { useState } from "react";
import React from "react";

function WithCounter(WrappedComponent, increase) {
  return function EnhancedWithCount(props) {
    const [count, setCount] = useState(0);
    const onHandleIncrease = () => {
      setCount(count + increase);
    };
    return (
      <>
        <WrappedComponent count={count} onIncrease={onHandleIncrease} {...props} />
      </>
    );
  };
}

export default WithCounter;
