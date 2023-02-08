import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
import UserComponent from './components/UserComponent';

function App() {
  const [currTicker, setTicker] = useState("");

  const handleChange = (event) => {
    // 👇 Get input value from "event"
    setTicker(event.target.value);
  };

  useEffect(() => {
    console.log("testing input")
    console.log(currTicker)
  }, [currTicker]);

  return (
    <div className="App">
        <UserComponent />
        <div className="form__group field">
          <input type="input" className="form__field" onChange={handleChange} placeholder="Name" name="name" id='name' required />
          <label htmlFor="name" className="form__label">Add Ticker</label>
        </div>
    </div>
  );
}

export default App;