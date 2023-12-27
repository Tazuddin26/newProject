import React from 'react'
import Header from './Header'

export default function Basket(props) {
    return (
        <aside >
            <div className='ml-2 rounded-md' >
                <h2>Cart Item</h2>
                <Header></Header>
            </div>
        </aside>
    )
}
