import React, { useState, useEffect } from 'react';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries} from 'react-vis';
import '../node_modules/react-vis/dist/style.css';

//import logo from './logo.svg';
import './App.css';
import UserComponent from './components/UserComponent';
import UserService from './services/UserService';
import StockService from './services/StockService';
//import GraphComponent from './components/GraphComponent';

function App() {
  const [currTicker, setTicker] = useState("");
  const [currGraphTick, setGraphTick] = useState("");
  const [pr, setPr] = useState([]);

  const handleChange = (event) => {
    setTicker(event.target.value);
  };

  const handleGraphChange = (event) => {
    setGraphTick(event.target.value);
  }

  let prices = [];
  let counter = 1;
  async function api_request(ticker, sdate, edate) {

    let fetched = await StockService.getData(ticker, sdate, edate);

    //console.log(fetched);

    fetched.forEach(element => {
      prices.push({x: counter, y: element.open})
      counter++;
    });
    
    console.log(prices);
    setPr([...prices])

    return prices
  }

  //console.log(finalData)

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
        {/* <GraphComponent data={prices}/> */}
        <XYPlot width={500} height={500}>
          <HorizontalGridLines style={{stroke: '#B7E9ED'}} />
          <VerticalGridLines style={{stroke: '#B7E9ED'}} />
          <XAxis
            title="X Axis"
            style={{
              line: {stroke: '#ADDDE1'},
              ticks: {stroke: '#ADDDE1'},
              text: {stroke: 'none', fontWeight: 600}
            }}
          />
          <YAxis title="Y Axis" />
          <LineSeries
            className="first-series"
            // data = {[{x: 1, y: 3}, {x: 2, y: 5}, {x: 3, y: 15}, {x: 4, y: 12}]}
            data={pr}
            style={{
              strokeLinejoin: 'round',
              strokeWidth: 4,
            }}
          />
          </XYPlot>
       {/* {vis} */}
        
    </div>
  );
}

export default App;