// import { useState } from "react";
// import { useRouter } from "next/router";
import { useNavigate } from "react-router-dom";
import '../styles/login.css';

export default function Login() {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/profile`; 
    navigate(path);
  }
  

  return (
    <div class="bucket">
      <h1 class="header">Stock Tracker</h1>
      <div class = "filler"></div>
      <div class="container">
        <div>
          <input type="text" id="input" class="Input-text" placeholder="Username" />
          <button class="button-38" onClick={routeChange}>Login</button>
        </div>
      </div>
    </div>
  );
}