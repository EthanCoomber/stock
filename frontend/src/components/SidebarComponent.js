import React from 'react'
import {AiOutlineStock} from 'react-icons/ai'
import { IconContext } from "react-icons";
import '../styles/sidebar.css'
import { useState, useEffect } from 'react';

// const tickers = [
//     {name: "TSLA"},
//     {name: "AAPL"},
//     {name: "QQQ"},
//     {name: "VOO"},
//     {name: "SPX"}
// ]
  

const SideBar = (temp, setTicker) => {
    const tickersObject = Object.values(temp);
    const tickers = tickersObject[0]
    // const [tick, setTick] = useState("");
    
    // useEffect(() => {
    //     setTicker(tick)
    // }, [setTicker, tick]);

    function handleClick(ticker){
        console.log(ticker)
        // setTicker(ticker)
    }

    // const articleMap = sortedArticles.map((currentArticle) => (
    //     <li
    //       key={currentArticle.title}
    //       data-testid="title"
    //       onClick={() => setCurrentArticle(currentArticle)}
    //     >
    //       {currentArticle.title}
    //     </li>
    //   ));

    const tickerMap = tickers.map((ticker) => (
        <div
          key={ticker}
          data-testid="title"
          onClick={() => handleClick(ticker)}
        >
          {ticker}
        </div>
      ));

    // function renderTickers(){
    //     const output = tickers.map(function(ticker){
    //         return (
    //         <span key={ticker} >
    //             <div 
    //                 className='ticker'
    //                 key={ticker}
    //                 tabIndex={ticker}
    //                 onClick={() => handleClick(ticker)}
    //             >
    //                 {ticker}
    //             </div>
    //         </span> 
    //         )
    //     })
    //     return output
    // }

    return ( 
        <div className="shell">
            <span className="watchlist">
                Watchlist
            </span>
            <IconContext.Provider value={{color: '#13a818', size: 72}}>
                 <AiOutlineStock />
            </IconContext.Provider>
            <hr class="line" size="100" width="90%"/>

            {tickerMap}
        </div>
    );
}

export default SideBar;