import React, { useState, useCallback, useMemo, lazy, Suspense } from 'react';

const CounterChild = lazy(() => import('./counterChild'));

const CounterHooks = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const computedValue = useMemo(() => {
    console.log('Computing...');
    return count * 10;
  }, [count]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>React Optimization Demo</h2>
      <h3>Count: {count}</h3>
      <h4>Computed Value: {computedValue}</h4>

      <button onClick={handleClick}>Increment</button>

      <Suspense fallback={<p>Loading...</p>}>
        <CounterChild count={count} />
      </Suspense>
    </div>
  );
};

export default CounterHooks;
