import React from 'react'
import {AiOutlineStock} from 'react-icons/ai'
import { IconContext } from "react-icons";
import '../styles/sidebar.css'


// const tickers = [
//     {name: "TSLA"},
//     {name: "AAPL"},
//     {name: "QQQ"},
//     {name: "VOO"},
//     {name: "SPX"}
// ]

const SideBar = (temp) => {
    const tickersObject = Object.values(temp);
    const tickers = tickersObject[0]

    function renderTickers(){
        const output = tickers.map(function(ticker){
            return (
            <span key={ticker}>
                <div 
                    className='ticker'
                    key={ticker}
                    tabIndex={ticker}
                >
                    {ticker}
                </div>
            </span> 
            )
        })
        return output
    }

    return ( 
        <div className="shell">
            <span className="watchlist">
                Watchlist
            </span>
            <IconContext.Provider value={{color: '#13a818', size: 72}}>
                 <AiOutlineStock />
            </IconContext.Provider>
            <hr class="line" size="100" width="90%"/>

            {renderTickers()}
        </div>
    );
}

export default SideBar;