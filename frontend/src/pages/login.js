// import { useState } from "react";
// import { useRouter } from "next/router";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import '../styles/login.css';
import UserService from '../services/UserService';

export default function Login() {
  const [currUsername, setUsername] = useState("");

  const handleChange = (username) => {
    setUsername(username.target.value);
    // console.log(currUsername)
  };

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/profile`; 
    navigate(path);
  }

  const handleSubmit = () => {
    let newUser = {username: currUsername};
    try {
      UserService.addUser(newUser);
    } catch (error) {
      console.log("here")
      routeChange()
    }
    
  }
  

  return (
    <div class="bucket">
      <h1 class="header">Stock Tracker</h1>
      <div class = "filler"></div>
      <div class="container">
        <div>
          <input type="text" id="input" class="Input-text" onChange={handleChange} placeholder="Username" />
          <button class="button-38" onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </div>
  );
}