import React from 'react';
//import logo from './logo.svg';
import './App.css';
import UserComponent from './components/UserComponent';

function App() {
  return (
    <div className="App">
        <UserComponent />
        <div className="form__group field">
          <input type="input" className="form__field" placeholder="Name" name="name" id='name' required />
          <label htmlFor="name" className="form__label">Add Ticker</label>
        </div>
    </div>
  );
}

export default App;