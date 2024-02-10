import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [rangeValue, setRangeValue] = useState(1);
  const today = new Date();

  // Adjust the date based on count directly
  today.setDate(today.getDate() + count);

  function formatDate(date) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `${monthNames[monthIndex]} ${day} ${year}`;
  }

  function handleMinusCount() {
    setCount((c) => c - rangeValue);
  }

  function handlePlusCount() {
    setCount((c) => c + rangeValue);
  }

  function handleRangeChange(e) {
    setRangeValue(Math.abs(Number(e.target.value)));
  }

  function handleCountChange(e) {
    setCount(Math.abs(Number(e.target.value)));
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
      <button onClick={handleMinusCount}>-</button>
      <input type="number" value={count} onChange={handleCountChange} />

      <button onClick={handlePlusCount}>+</button>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{formatDate(today)}</span>
      </p>
    </div>
  );
}
