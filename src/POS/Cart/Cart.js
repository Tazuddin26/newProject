import ImageButton from "../Sales/ButtonImage";
import Basket from "./Basket";
import Header from "./Header";
import Main from "./Main";
import CartList from "./CartList";
import { useState, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";


function Cart() {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    console.log(cart);
    useEffect(() => {
        fetch('http://localhost:3001/addp/',)
            .then((response) => response.json())
            .then((value) => {

                setData(value)
            });
    }, [])
    const addToCart = (data) => {
        setCart([...cart, { ...data, quantity: 1 }])
    }
    const handleShow = (value1)=>{
        setShowCart(value1)
    }
    return (
        <div className="w-screen h-screen flex">
            {/* <div className='w-[5%] h-full'></div> */}
            <div className="w-full h-full">
            <div >
                    <Header 
                    count={cart.length}
                    handleShow ={handleShow}
                    ></Header>
                </div>
                {
                    showCart ?
                         <CartList cart={cart}></CartList> :
                     
                        <div className="w-full h-full mt-2 flex">
                            <div className="w-full h-full mt-2 flex">
                                <div className="w-[70%] h-[80%] bg-slate-200 rounded-md">
                                    <ImageButton data={data} addToCart={addToCart} ></ImageButton>
                                </div>
                            </div>
                        </div>
                }
                
            </div>
          
            {/* <div className='w-[5%] h-full'></div> */}
        </div>
    );
}
export default Cart;