import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function increment(e) {
    setCount((prev) => {
      return prev + 1
    })
  }

  function decrement(e) {
    setCount((prev) => {
      return prev - 1
    })
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <span> </span>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
