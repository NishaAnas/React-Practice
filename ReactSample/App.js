import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// Child component
const Child = ({ msg, handleChild }) => {
    const [data, setData] = useState("");

    // Function to handle input change and send data to the parent
    const handleInputChange = (e) => {
        const value = e.target.value; // Get the input value
        setData(value); // Update local state
        handleChild(value); // Call the parent's function to send data up
    };

    return (
        <div>
            <input type="text" value={data} onChange={handleInputChange} />
            <h1>{msg}</h1>
        </div>
    );
};

// Parent component
const Parent = () => {
    const [childData, setChildData] = useState(""); // State to hold data from child

    // Function to handle data received from the child
    const handleChildData = (data) => {
        setChildData(data); // Update parent state with child data
    };

    return (
        <div>
            <h1>Data from Child: {childData}</h1> {/* Display child data */}
            <Child msg={"This is a message"} handleChild={handleChildData} /> {/* Pass function to child */}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Parent />);
