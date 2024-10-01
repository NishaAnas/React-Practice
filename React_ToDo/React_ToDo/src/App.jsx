import React, { useState } from "react";
import "./App.css";

// The main App component
const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Function to get current date and time
  const getCurrentDateTime = () => {
    const current = new Date();
    return current.toLocaleString();
  };

  // Function to handle adding new tasks
  const addTodo = () => {
    if (inputValue.trim()) {
      const newTodo = {
        text: inputValue,
        completed: false,
        dateTime: getCurrentDateTime(),
      };
        setTodos([...todos, newTodo]);

      setInputValue("");
    }
  };

  // Function to handle toggling task completion
  const markAsCompleted = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: true } : todo
    );
    setTodos(newTodos);
  };

  // Function to delete a task
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>{getCurrentDateTime()}</h1>
      <h2>To-Do App</h2>

      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add or Edit a task"
        />
        <button onClick={addTodo}>
          Add Task
        </button>
      </div>

      <h3>Active Tasks</h3>
      <ul>
        {todos
          .filter((todo) => !todo.completed)
          .map((todo, index) => (
            <li key={index} className="not-completed">
              <div>
                <span>{todo.text}</span>
                <small>{todo.dateTime}</small>
              </div>
              <div className="action-icons">
                <span
                  className="material-icons"
                  onClick={() => markAsCompleted(index)}
                >
                  check_circle
                </span>
                <span
                  className="material-icons"
                  onClick={() => deleteTodo(index)}
                >
                  delete
                </span>
              </div>
            </li>
          ))}
      </ul>

      <h3>Completed Tasks</h3>
      <ul>
        {todos
          .filter((todo) => todo.completed)
          .map((todo, index) => (
            <li key={index} className="completed">
              <div>
                <span>{todo.text}</span>
                <small>{todo.dateTime}</small>
              </div>
              <div className="action-icons">
                <span className="material-icons" style={{ color: "#888" }}>
                  check_circle
                </span>
                <span
                  className="material-icons"
                  onClick={() => deleteTodo(index)}
                >
                  delete
                </span>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};




export default App;