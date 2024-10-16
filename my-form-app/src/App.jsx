import React, { useState } from "react";

export default function App() {
  
  const [name, setName] = useState("");

  // Handle input change
  const handleChange = (event) => {
    setName(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log("Submitted name:", name);
    setName(""); 
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Enter your name:</label>
        <input
          type="text"
          value={name}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
