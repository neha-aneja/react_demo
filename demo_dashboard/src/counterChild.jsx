import React from 'react';

const CounterChild = ({ count }) => {
  console.log('Child component rendered');
  return <p>Child Component Count: {count}</p>;
};

export default React.memo(CounterChild);
