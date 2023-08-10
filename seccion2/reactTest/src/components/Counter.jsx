import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        Click me to increment
      </button>
      <button
        onClick={() => setCount((count) => (count !== 0 ? count - 1 : 0))}
      >
        Click me to decrement
      </button>
      <h2>{count}</h2>
    </div>
  );
};

export default Counter;
