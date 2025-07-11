import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const isPrime = (num) => {
    if (num < 2) return false;
         for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  return (
    <div>
      <h1>Welcome to Counter 2.0</h1>

      <div>
        <button
          onClick={() => setCount(count - 1)}
          data-testid="minusonebtn"
          disabled={count === 0}
        >
          -1
        </button>

        <button
          onClick={() => setCount(count + 1)}
          data-testid="plusonebtn"
        >
          +1
        </button>

        <div>
          <button
            onClick={() => setCount(0)}
            data-testid="resetbtn"
          >
            reset
          </button>
        </div>
      </div>

      <span data-testid="counter">{count}</span>

      <div>
        <span data-testid="odd-or-even">
          {count % 2 === 0 ? "Even" : "Odd"}
        </span>
        <br />
        <span data-testid="is-prime">
          {isPrime(count) ? "true" : "false"}
        </span>
      </div>
    </div>
  );
}

export default App;
