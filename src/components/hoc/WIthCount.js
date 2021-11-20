import { useState } from 'react';

const WithCount = (WrappedComponent, incrementValue) => {
  const UpdatedComopnent = (props) => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
      setCount((count) => count + incrementValue);
    };
    return (
      <WrappedComponent
        incrementCount={incrementCount}
        count={count}
        {...props}
      />
    );
  };
  return UpdatedComopnent;
};

export default WithCount;
