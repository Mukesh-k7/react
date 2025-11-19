import React from "react";
import withCounter from "./WithCounter";

const TextComponent = ({count, onIncrease}) =>{
  return(
    <>
    <h1 onMouseOver={onIncrease}>
      Mukesh Maurya: {count}
    </h1>
    </>
  )
}

export default withCounter(TextComponent, 2);