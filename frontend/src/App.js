import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
import UserComponent from './components/UserComponent';
import UserService from './services/UserService';

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
        
        <span>
          <div className="form__group field">
            <input type="input" className="form__field" onChange={handleChange} placeholder="Add" name="add" id='add' required />
            <label htmlFor="add" className="form__label">Add Ticker</label>
          </div>
        </span>
        <button onClick={() => {UserService.addTicker(currTicker, 1)}}>Submit</button>

        <span>
          <div className="form__group field">
            <input type="input" className="form__field_delete" onChange={handleChange} placeholder="Add" name="add" id='add' required />
            <label htmlFor="add" className="form__label_delete">Add Ticker</label>
          </div>
        </span>
        <button onClick={() => {UserService.deleteTicker(currTicker, 1)}}>Submit</button>
        
    </div>
  );
}

export default App;