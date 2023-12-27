import { useEffect, useState } from "react";


function CartList({ cart }) {

    const [CART, setCART] = useState([]);
    useEffect(() =>{
        setCART(cart)
    },[cart])

    return (
        <div>
            {CART?.map((cartItem, cartIndex) => {
                return (
                    <div>
                         {/* <table className=" border-green-600 w-full h-[8%] text-blue-500 ml-0 ">
                       <tbody>
                            <tr className="border-2">
                                <td className="text-sm boder-2 py-3 px-3">{cartItem.name}</td>
                                <td className="text-sm border-2">Batch No</td>
                                <td className=" text-sm border-2">Avg.Qnty.</td>
                                <td className=" text-sm border-2">{cartItem.quantity}</td>
                                <td className=" text-sm border-2">Rate</td>
                                <td className="text-sm border-2">Dis %</td>
                                <td className=" text-sm border-2">Vat %</td>
                                <td className=" text-sm border-2"> 
                                 {CART.map(item => item.salePrice * item.quantity)
                                    .reduce((total, value) =>  total + value,0)}
                                </td>
                    
                                <td className=" text-sm border-2">Action</td>
                            </tr>                          
                            </tbody>
                    </table> */}
                        <img src={`/product/${cartItem.sku}.jpeg`} width={100} />
                        <span></span>
                        <span className="ml-2">{cartItem.salePrice}</span>
                        <button className="border w-[3%] ml-4 bg-red-600"
                        onClick={()=>{
                            const _CART = CART.map((item,index) =>{
                                return cartIndex === index ? {...item, quantity: item.quantity > 0 
                                   ? item.quantity -1 : 0} : item
                            })
                            setCART(_CART)
                        }}
                        >-</button>
                        <span className="ml-2 mr-2">{cartItem.quantity}</span>
                        <button className="border w-[3%] bg-green-600"
                        onClick={()=>{
                            const _CART = CART.map((item,index) =>{
                                return cartIndex === index ? {...item, quantity: item.quantity +1} : item
                               
                            })
                            setCART(_CART)
                            
                        }}
                        >+</button>
                        <span>BDT {cartItem.salePrice * cartItem.quantity}</span>
                        
                    </div>
                   
                )
               
            })}
           
            <p> Total Amount :<span>{CART.map(item => item.salePrice * item.quantity)
                    .reduce((total, value) =>  total + value,0)}</span>
                 /-
                 
            </p>
            
        </div>
    )
console.log(NaN);
    
};

export default CartList;
// export default function Ecart({ cart }) {
    
    
//     return (
//         <div>
//             {
//                 cart.map((cartItem, cartIndex) => {
//                     return (
//                         <div className="flex">
                           
//                                 <img src={`/product/${cartItem.sku}.jpeg`} width={60} />
//                                 <div className="w-[7%] ">
//                                 <span>{cartItem.name}</span>
//                                 </div>
//                                 <span className="ml-2">{cartItem.salePrice}</span>
                                
//                                 <button className="border w-[8%] h-[6%] ml-4 bg-red-600">

//                                 -</button>
//                                 <span className="ml-2">{cartItem.quantity}</span>
//                                 <button className="border w-[8%] h-[6%]  bg-green-600">
                                
//                         +</button>
                           
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }