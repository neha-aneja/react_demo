import React, { useTransition, useDeferredValue } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from './counterSlice';

const CounterTest = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [isPending, startTransition] = useTransition();
  const deferredCount = useDeferredValue(count);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2 data-testid='counter-value'>Counter: {deferredCount}</h2>
      {isPending && <p>Updating...</p>}
      <button onClick={() => startTransition(() => dispatch(increment()))}>
        Increment
      </button>
      <button onClick={() => startTransition(() => dispatch(decrement()))}>
        Decrement
      </button>
      <button onClick={() => startTransition(() => dispatch(reset()))}>
        Reset
      </button>
    </div>
  );
};

export default CounterTest;
