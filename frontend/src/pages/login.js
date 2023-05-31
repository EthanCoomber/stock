// import { useState } from "react";
// import { useRouter } from "next/router";
import '../styles/login.css';

export default function Login() {
  

  return (
    <div class="bucket">
      <h1 class="header">Stock View</h1>
      <div class = "filler"></div>
      <div class="container">
        <div>
          <input type="text" id="input" class="Input-text" placeholder="Username" />
         </div>
      </div>
    </div>
  );
}