import React, { useState, useRef } from "react";
import "./App.css";

export default function App() {
  // State to manage the name input
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  // Handle input change
  const handleChange = (event) => {
    setName(event.target.value);
    setError(""); // Reset error when user types
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Validate input
    if (name.trim() === "") {
      setError("Name is required");
      inputRef.current.focus(); // Focus input if there's an error
      return;
    }

    // If validation passes, log name and reset input
    console.log("Submitted name:", name);
    setName(""); // Clear the input field
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Enter your name:</label>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          ref={inputRef} // Attach the ref to the input
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error message */}
    </div>
  );
}
