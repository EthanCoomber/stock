import React from 'react'
import {AiOutlineStock} from 'react-icons/ai'
import { IconContext } from "react-icons";
import '../styles/sidebar.css'

//Min 1:34:00

const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize'
const isActiveStyle = 'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize'

const SideBar = () => {
    return ( 
        <div className='shell'>
            <div className=''>
                <div className=''>
                    <div className={( {isActive} ) => isActive ? isActiveStyle : isNotActiveStyle}>
                        Stocks
                        <IconContext.Provider value={{color: 'green', size: 42}}>
                            <AiOutlineStock />
                        </IconContext.Provider>
                        
                    </div>

                </div>
                
            </div>

            
        </div>
    );
}

export default SideBar;