import React from 'react'
import {AiOutlineStock} from 'react-icons/ai'
import { IconContext } from "react-icons";
import '../styles/sidebar.css'
import { NavLink } from 'react-router-dom';

//Min 1:34:00

const isNotActiveStyle = '.isNot-active'
const isActiveStyle = '.isActive'

// {( {isActive} ) => isActive ? isActiveStyle : isNotActiveStyle}

const tickers = [
    {name: "TSLA"},
    {name: "AAPL"},
    {name: "QQQ"},
    {name: "VOO"},
    {name: "SPX"}
]

const SideBar = () => {
    return ( 
        <div className="shell">
            <span className="watchlist">
                Watchlist
            </span>
            <IconContext.Provider value={{color: '#13a818', size: 72}}>
                 <AiOutlineStock />
            </IconContext.Provider>
            <hr class="line" size="100" width="90%"/>

            {tickers.slice(0, tickers.length).map((ticker) => (
                <div 
                    className='ticker'
                    key={ticker.name}
                    tabIndex={ticker.name}
                >
                    {ticker.name}
                </div>
            ))}
        </div>
    );
}

export default SideBar;