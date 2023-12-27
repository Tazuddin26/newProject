import { useState, useEffect } from "react";
import {
    IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenu, IonMenuButton,
    IonPage, IonTitle, IonToolbar,
} from "@ionic/react";
import { addOutline, searchOutline } from "ionicons/icons";
import { Formik, Field } from "formik";
import * as Yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import Ecart from "./CartList";
import Header from "./Header";
import CartList from "./CartList";
const inputClass1 = "w-[90%] h-[30%] mt-2 ml-2 p-2 border shadow-lg shadow-gray-400 rounded-md border-x-green-600 hover:border-y-green-700"
const inputClass2 = " w-[90%] h-[60%] p-2 ml-2 border shadow-lg shadow-gray-400 rounded-md border-x-green-600  hover:border-y-green-700"
const inputClass3 = " w-[50%] mt-2 p-2 text-end border shadow-lg shadow-gray-400 rounded-md border-x-green-600  hover:border-y-green-700"
const inputDivClass2 = "w-full h-[10%] mb-4 "
export default function ExCart() {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);

    //const [count, setCount] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/addp/',)
            .then((response) => response.json())
            .then((value) => {

                setData(value)
            });
    }, [])
    const addToCart = (data) => {
        setCart([...cart, { ...data, quntity: 1 }])

    }
    const handleShow = (value1) => {
        setShowCart(value1)
    }


    // const handleButtonClick = (id) => {
    //     const uButton = data.map((cButton) => {
    //         if (cButton.id === id) {
    //             return { ...cButton, count: cButton.count + 1 }
    //         }
    //         return cButton;
    //     })
    //     setData(uButton);
    // }
    return (
        <div className="w-full h-full flex">
            <div className="w-[60%] h-full bg-green-100">
                <div className="w-full h-full mt-4 overflow-auto hover:select-text ">
                    {data.map((productItem, productIndex) => (
                        <button className="w-[13%] h-[28%] ml-4 border shadow-lg shadow-gray-500 rounded-lg"
                            onClick={() => addToCart(productItem) } 
                        >
                           
                            <img src={`/product/${productItem.sku}.jpeg`} className='w-full h-full hover:border-spacing-1 transition hover:scale-110'></img>
                            <p className="text-sm font-bold">{productItem.name} | {productItem.category}</p>
                            <p>BDT-{productItem.salePrice}Tk</p>
                            <sup></sup>
                            
                        </button>
                    ))}
                </div>
            </div>
            <div className="w-[40%] h-full">
                <div className="w-full flex justify-end " >
                    <Header
                        count={cart.length}
                        handleShow={handleShow}
                    ></Header>
                </div>
                <div className="w-[100%]">
                    <table className="table-auto border w-full h-[3%] text-gray-600 ml-0 ">
                        <thead className="">
                            <tr className="border-2">
                                <th className="text-sm boder-2 ">Item Info.</th>
                                <th className="text-sm border-2">Batch No</th>
                                <th className=" text-sm border-2">Avg.Qnty.</th>
                                <th className=" text-sm border-2">Qnty.</th>
                                <th className=" text-sm border-2">Rate</th>
                                <th className="text-sm border-2">Dis %</th>
                                <th className=" text-sm border-2">Vat %</th>
                                <th className=" text-sm border-2">Total</th>
                                <th className=" text-sm border-2">Action</th>
                            </tr>
                           
                        </thead>
                    </table>
                </div>
                {/* <Ecart cart={cart}></Ecart> */}
                <CartList cart = {cart}></CartList>
            </div>
            {/* {data.map((button) => (
                <button key={button.id} onClick={() => handleButtonClick(button.id)} >
                    Button ({button.count})
                    <img src={`/product/${button.sku}.jpeg`}/>
                </button>
            ))}
            <ImageButton1/> */}

        </div >
    )
};
