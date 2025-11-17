import React from "react";
import withCounter from "./WithCount";

function Button({count, onIncrement}) {
  return (
    <>
      <button onClick={onIncrement}>
        Button {count}
      </button>
    </>
  );
};

export default withCounter(Button, 1);
