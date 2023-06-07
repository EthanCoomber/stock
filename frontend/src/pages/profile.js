import React, { useState, useEffect } from 'react';
//import { useRouter } from "next/router";
//useEffect
import '../../node_modules/react-vis/dist/style.css';

//import logo from './logo.svg';
import '../styles/profile.css';
// import UserComponent from '../components/UserComponent';
import UserService from '../services/UserService';
import StockService from '../services/StockService';
import GraphComponent from '../components/GraphComponent';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import SidebarComponent from '../components/SidebarComponent';

export default function Profile() {
  const [currTicker, setTicker] = useState("");
  const [currGraphTick, setGraphTick] = useState("");
  const [pr, setPr] = useState([]);
  const [id, setId] = useState();
  const [username, setUsername] = useState("");
  const [tickers, setTickers] = useState([]);
  const location = useLocation();
  let navigate = useNavigate(); 

  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }

  const handleChange = (ticker) => {
    setTicker(ticker);
  };

  const handleGraphChange = (event) => {
    setGraphTick(event.target.value);
  }

  function handleSubmitAdd(){
    // console.log(currTicker.target.value);
    UserService.addTicker(currTicker.target.value, id);
    setTicker("");
  }

  // const getUserInfo = () => {
  //   console.log(username)
  //   console.log(tickers)
  //   console.log(id)
  // }

  const setInformation = (user) => {
    setUsername(user.username)
    setTickers(user.tickers)
    setId(user.id)
  }

  useEffect(() => {
    async function fetchData(){
      let info = await UserService.getUserInfo(location.state.username)
      setInformation(info.data)
    }
    fetchData()
  }, [location]);

  let prices = [];
  let counter = 1;
  async function api_request(ticker, sdate, edate) {

    let fetched = await StockService.getData(ticker, sdate, edate);

    fetched.forEach(element => {
      prices.push({x: counter, y: element.open})
      counter++;
    });
    
    setPr([...prices])

    return prices
  }

  useEffect(() => {
    let prices = [];
    let counter = 1;
    async function fetchData(){
      let fetched = await StockService.getData('GOOG', '2022-01-01','2022-07-01');

      fetched.forEach(element => {
        prices.push({x: counter, y: element.open})
        counter++;
      });
      
      setPr([...prices])
    }
    fetchData()
  }, []);  

  return (
    <div className="App">
        {/* <UserComponent /> */}
        <div className="helloUser">
          Hello {username}
        </div>
        <h2 className="profHeader">
          Stock Tracker
        </h2>

        <hr className="mainHr" size="100" width="90%"></hr>
      
        <span>
          <div className="form__group field">
            <input type="input" className="form__field" onChange={handleChange} placeholder="Add" name="add" id='add' required />
            <label htmlFor="add" className="form__label">Add Ticker</label>
          </div>
        </span>
        <button class = 'reg_button' onClick={() => {handleSubmitAdd()}}>Submit</button>

        <span>
          <div className="form__group field">
            <input type="input" className="form__field_delete" onChange={handleChange} placeholder="Delete" name="delete" id='delete' required />
            <label htmlFor="add" className="form__label_delete" for="delete">Remove Ticker</label>
          </div>
        </span>
        <button class ='reg_button button_delete' onClick={() => {UserService.deleteTicker(currTicker.target.value, 1)}}>Delete</button>

        <span>
          <div className="form__group field">
            <input type="input" className="form__field_graph" onChange={handleGraphChange} placeholder="Graph" name="graph" id='graph' required />
            <label htmlFor="add" className="form__label_graph" for="graph">Generate Graph</label>
          </div>
        </span>
        <button class ='reg_button button_graph' onClick={() => {api_request(currGraphTick, '2022-01-01','2022-07-01')}}>Generate</button>
      
        <button class="button-38 button-2" onClick={routeChange}>Logout</button>
        {/* <button class="button-38 button-39" onClick={getUserInfo}>Get User Info</button> */}
        
        <SidebarComponent tickers={tickers}/>
        <GraphComponent data={pr}/>
    </div>
  );
}