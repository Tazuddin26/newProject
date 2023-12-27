import React from 'react'

export default function Header(props) {
    return (
        <header>
            <div className='w-full h-full mt-3 flex'>

                <div className='w-full h-[15%] flex rounded-sm '>
                     <div className='w-[40%]'>
                        <h1 className='text-2xl text-left mt-10 ml-6 text-purple-800 font-serif cursor-pointer'onClick={()=>props.handleShow(false)}>Shopping Cart</h1>
                    </div>
                    <div className='w-[10%]'></div> 
                                        
                </div>
               <div className='w-[10%] text-end mt-10 ml-10 text-xl'>
                        <span href='#/cart' className='mr-2 hover:text-blue-600 hover:underline cursor-pointer'onClick={()=>props.handleShow(true)}>
                            Cart
                            <sup>{props.count}</sup>
                        </span>
                    </div>
            </div>
        </header>
    )
}
