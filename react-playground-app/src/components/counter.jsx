import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const [rangeValue, setRangeValue] = useState(5);

  const date = new Date("July 20 2030");
  date.setDate(date.getDate() + count);

  function handleMinusCount() {
    setCount((c) => c - rangeValue);
  }

  function handlePlusCount() {
    setCount((c) => c + rangeValue);
  }

  function handleRangeChange(e) {
    setRangeValue(e.target.value);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={rangeValue}
          onChange={handleRangeChange}
        />

        <span> Increment By {rangeValue} </span>
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
