import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(0);

  const date = new Date("July 20 2030");
  date.setDate(date.getDate() + count);

  function handleIncrement() {
    setIncrement((c) => c + 1);
  }

  function handleDecrement() {
    setIncrement((c) => c - 1);
  }

  function handleMinusCount() {
    setCount((c) => c - increment);
  }

  function handlePlusCount() {
    setCount((c) => c + increment);
  }

  return (
    <div>
      <div>
        <button onClick={handleDecrement}>Decrement</button>
        <span> Increment By {increment} </span>
        <button onClick={handleIncrement}>Increment</button>
      </div>
      <button onClick={handleMinusCount}>Decrement</button>
      <span>Count By {count}</span>
      <button onClick={handlePlusCount}>Increment</button>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
