import { useState } from 'react';
import ReactDOM from 'react-dom/client'
import './App.css';

const App = ()=> {
  // Declare state variable for count
  const [count, setCount] = useState(0);

  // Function to increment count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)