import React from 'react'
import {AiOutlineStock} from 'react-icons/ai'

//Min 1:34:00

const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize'
const isActiveStyle = 'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize'

const SideBar = () => {
    return ( 
        <div className='flex flex-col justify-between bg-blue h-full overflow-y min-w-210'>
            <div className='flex flex-col'>
                <div className='flex flex-col gap-5'>
                    <div className={( {isActive} ) => isActive ? isActiveStyle : isNotActiveStyle}>
                        <AiOutlineStock />
                        Hello
                    </div>

                </div>
                
            </div>

            
        </div>
    );
}

export default SideBar;