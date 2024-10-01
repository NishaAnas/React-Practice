import React from "react";
import ReactDOM, { createRoot } from 'react-dom/client'
import "./App.css";

// Sample data to be passed as prop
const data = [
  { id: 1, name: "Leanne Graham", email: "leannegraham@abc.com" },
  { id: 2, name: "Ervin Howell", email: "ervinhowell@abc.com" },
  { id: 3, name: "Clementine Bauch", email: "clementineb@abc.com" },
  { id: 4, name: "Patricia Lebsack", email: "patricia@abc.com" }
];

// ProfileCard component
const ProfileCard = ({ name, email }) => {
  return (
    <div className="profile__card">
      <h1>{name}</h1>
      <p>Email: {email}</p>
    </div>
  );
};

const App =()=>{
  return(
    <div>
      {
        data.map((profile)=>(
          <ProfileCard key={profile.id} name={profile.name} email={profile.email}/>
        ))
      }
    </div>
  )
}

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)