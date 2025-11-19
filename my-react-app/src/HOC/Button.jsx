import React from "react";
import withCounter from "./WithCounter";
function Button({ count, onIncrease }) {
  return (
    <>
      <button onClick={onIncrease}>Button {count}</button>
    </>
  );
}

export default withCounter(Button, 1);
