import { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  // State variables
  const [count, setCount] = useState(1);
  const [user, setUser] = useState(null);

  // Fetch user data when count changes
  useEffect(() => {

    const fetchJson = async () => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${count}`);
      setUser(response.data);
    };

    fetchJson();
  }, [count]);

  // Functions to increment and decrement count
  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      {user && <ProfileCard user={user} />}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

// ProfileCard component to display user information
const ProfileCard = ({ user }) => {
  return (
    <div className="profile-card">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
    </div>
  );
};
