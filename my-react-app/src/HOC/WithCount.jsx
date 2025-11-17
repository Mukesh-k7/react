import { useState } from 'react';

const withCounter = (WrappedComponent, increment) => {
  return function WithCounter(props) {
    const [count, setCount] = useState(0);

    const handleIncrement = () =>{
        setCount(count + increment)
    }

    return (
      <WrappedComponent
        count={count}
        onIncrement={handleIncrement}
        {...props}
      />
    );
  };
}

export default withCounter;