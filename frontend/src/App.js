import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
import UserComponent from './components/UserComponent';
import UserService from './services/UserService';
import StockService from './services/StockService';

function App() {
  const [currTicker, setTicker] = useState("");
  const [currGraphTick, setGraphTick] = useState("");

  const handleChange = (event) => {
    setTicker(event.target.value);
  };

  const handleGraphChange = (event) => {
    setGraphTick(event.target.value);
  }

  let data
  async function api_request(ticker, sdate, edate) {
    data = await StockService.getData(ticker, sdate, edate);

    let prices = [];

    console.log(data);

    data.forEach(element => prices.push(element.open));
    
    console.log(prices);
  }

  // useEffect(() => {
  //   console.log(data)
  // }, [data]);

  useEffect(() => {
    // console.log("testing input")
    // console.log(currTicker)
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
            <input type="input" className="form__field_delete" onChange={handleChange} placeholder="Delete" name="delete" id='delete' required />
            <label htmlFor="add" className="form__label_delete">Remove Ticker</label>
          </div>
        </span>
        <button className='button_delete' onClick={() => {UserService.deleteTicker(currTicker, 1)}}>Delete</button>

        <span>
          <div className="form__group field">
            <input type="input" className="form__field_graph" onChange={handleGraphChange} placeholder="Graph" name="graph" id='graph' required />
            <label htmlFor="add" className="form__label_graph">Generate Graph</label>
          </div>
        </span>
        <button className='button_graph' onClick={() => {api_request(currGraphTick, '2022-01-01','2022-07-01')}}>Generate</button>
        
    </div>
  );
}

export default App;