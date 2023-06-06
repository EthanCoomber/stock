import React from 'react'
import {AiOutlineStock} from 'react-icons/ai'
import { IconContext } from "react-icons";
import '../styles/sidebar.css'

//Min 1:34:00

const isNotActiveStyle = '.not-active'
const isActiveStyle = '.active'

const tickers = [
    {name: "TSLA"},
    {name: "AAPL"},
    {name: "QQQ"},
    {name: "VOO"},
    {name: "SPX"}
]

const SideBar = () => {
    return ( 
        <div className='shell'>
            <div className=''>
                <div className=''>
                    Stocks
                    <IconContext.Provider value={{color: 'green', size: 42}}>
                        <AiOutlineStock />
                    </IconContext.Provider>

                    {tickers.slice(0, tickers.length).map((ticker) => (
                        <div 
                            className={( {isActive} ) => isActive ? isActiveStyle : isNotActiveStyle}
                            key={ticker.name}
                        >
                            {ticker.name}
                        </div>
                    ))}

                </div>
                
            </div>

            
        </div>
    );
}

export default SideBar;