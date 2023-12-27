import React from "react";
import { useState,useEffect } from "react";
import ImageB from "./Image";
import { Link, Router } from "react-router-dom";

function ImageButton({ data, addToCart, cart }) {
    // const [image, setImage] = useState('');
    // const [CART, setCART] = useState([]);
    // useEffect(() => {
    //     setCART(cart)
    // }, [cart])
    return (
       
            

            <div className="w-[60%] h-[70%]">
                <div className="w-full h-full mt-4 overflow-auto hover:select-text ">
                    {data.map((productItem, productIndex) => (

                        <button className="w-[13%] h-[28%] ml-4 mt-14 border shadow-lg shadow-gray-500 rounded-lg
                        hover:border-spacing-1 transition hover:scale-110 "
                            onClick={() => addToCart(productItem)}>
                            <img src={`/product/${productItem.sku}.jpeg`} className='w-full h-full rounded-lg'></img>
                            <p className="text-sm font-bold">{productItem.name} | {productItem.category}</p>
                            <p>BDT-{productItem.salePrice}Tk</p>
                        </button>

                    ))}

                </div>

            </div>
      
    )
}

export default ImageButton;