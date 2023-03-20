import { IonIcon, IonMenu, IonMenuButton, } from "@ionic/react";
import { trashOutline, createOutline, barcodeOutline, qrCodeOutline } from "ionicons/icons";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Tbutton from "./TopButton";

function Slist({ id, name, model, supplier, salePrice, costPrice, image }) {
    return (
        <div  className="w-full h-full">
            <table className=" border-collapse border w-full h-[6%]">
                <tbody>
                    <tr >
                        <td className=" border border-slate-600">{id}</td>
                        <td className=" border border-slate-600">{name}</td>
                        <td className=" border border-slate-600">{model}</td>
                        <td className=" border border-slate-600">{supplier}</td>
                        <td className=" border border-slate-600">{salePrice}</td>
                        <td className=" border border-slate-600">{costPrice}</td>
                        <td className=" border border-slate-600">{image}</td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
};

function StockList() {
    const [value, setValue] = useState('');
    useEffect(() => {
        fetch('http://localhost:3001/addp/',)
            .then((response) => response.json())
            .then((data) => {
                const pData = data.map(product => <Slist
                    id={product.id}
                    name={product.name}
                    model={product.model}
                    supplier={product.supplier}
                    salePrice={product.salePrice}
                    costPrice={product.costPrice}
                    image={product.image}
                    action={product.action}
                />)
                setValue(pData);
            });
    }, [])
    return (
        <div className="w-screen h-screen" >
            <div className="w-full h-full bg-gray-100 ">
                <div className="w-full h-[10%] shadow-lg flex bg-white ">
                    {/* <IoAppsOutline size="3rem" className="mt-2 text-gray-300 font-light cursor-pointer"/> */}
                    <Tbutton name="Sale" className="w-[6%] h-[50%] ml-36 hover:bg-green-500 text-xl"
                    />
                    <Tbutton name="Customer Receive" className="w-[12%] h-[50%] hover:bg-green-500"
                    />
                    <Tbutton name="Supplier Payment" className="w-[12%] h-[50%] hover:bg-green-500"
                    />
                    <Tbutton name="Purchase" className="w-[10%] h-[50%] hover:bg-green-500"
                    />
                    {/* <MdWarningAmber size = "3rem" className/> */}
                </div>
                <div className="w-[98%] h-[80%] bg-white first-letter:shadow-lg mt-8 ml-4 border border-gray-300 ">
                    <div className="w-full h-[10%] border-b flex border-gray-300 col-span-8 ">
                        <div className="absolute -top-0.4 -left-0.4 border-l-4px] border-l-transparent border-t-[20px] border-t-green-600 
                            border-r-[20px] border-r-transparent">
                        </div>
                        <span className="ml-4 p-4 text-lg font-bold font-mono text-gray-700 ">Manage Product</span>
                    </div>
                    <div className="w-full h-full ">
                        <div className="w-full h-full ">
                        <table className=" border-collapse border w-full h-[6%]">
                                <thead>
                                    <tr>
                                        <th className="w-[5%] border-r border-slate-300">SL.</th>
                                        <th className="w-[10%] border-r border-slate-300">Product Name</th>
                                        <th className="w-[10%] border-r border-slate-300">Product Model</th>
                                        <th className="w-[10%] border-r border-slate-300">Sale Price</th>
                                        <th className="w-[10%] border-r border-slate-300">Purchase Price</th>
                                        <th className="w-[10%] border-r border-slate-300">Supplier Name</th>
                                        <th className="w-[8%] border-r border-slate-300">In Qnty.</th>
                                        <th className="w-[8%] border-r border-slate-300">Out Qnty.</th>
                                        <th className="w-[8%] border-r border-slate-300">Stock</th>
                                        <th className="w-[12%] border-r border-slate-300">Stock Sale Price</th>
                                        <th className="w-[12%] border-r border-slate-300">Stock Purchase Price</th>
                                    </tr>
                                </thead>
                            </table>
                            {value}
                            {/* <div className="w-[30%] h-[40%] mt-4 flex justify-start ml-8 ">
                                <button
                                    className="w-[25%] h-[40%] text-white font-bold  border shadow-lg shadow-gray-400  bg-sky-600
                                             hover:shadow-sky-400/50 hover:bg-sky-400"
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    Save
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StockList;
