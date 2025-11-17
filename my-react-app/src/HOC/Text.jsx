import React from "react";
import withCounter from "./WithCount";

function HoverCounter({count, onIncrement}) {
  return (
    <h2 onMouseOver={onIncrement}>
      Mukesh: {count}
    </h2>
  );
}

const enhancedComponent = withCounter(HoverCounter, 2);

export default enhancedComponent;
