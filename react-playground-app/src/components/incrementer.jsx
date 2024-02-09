import { useState } from 'react';

export default function Incrementer() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((c) => c + 1);
  }

  function handleDecrement() {
    setCount((c) => c - 1);
  }

  return (
    <div>
      <button onClick={handleDecrement}>Decrement</button>
      <span> Increment By {count} </span>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
