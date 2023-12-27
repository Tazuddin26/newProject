import { IonIcon, IonMenu, IonMenuButton, } from "@ionic/react";
import { trashOutline, createOutline, barcodeOutline, qrCodeOutline } from "ionicons/icons";
import { GoPlus } from "react-icons/go";
import { TbScale } from "react-icons/tb";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Tbutton from "./TopButton";

function Plist({ id, name, model, supplier, salePrice, costPrice, image }) {
    const navigate = useNavigate();
    const deleteData = () => {
        fetch('http://localhost:3001/' + id, {
            method: 'DELETE'
        })
            .then((response) => {
                navigate("/");
            });
    }
    return (
        <div>
            <table className=" w-full h-[6%] ml-0 border">
                <tr className="bg-green-300 border-b border-l-2 hover:bg-green-100 hover:scale-105 cursor-pointer duration-300">
                    <td className="py-3 px-6 text-white ">{id}</td>
                    <td className="w-[16%] ml-2 text-center">{name}</td>
                    <td className="w-[15%]">{model}</td>
                    <td className="w-[15%] ">{supplier}</td>
                    <td className="w-[12%] ">{salePrice}</td>
                    <td className="w-[12%] ">{costPrice}</td>
                    <td className="w-[15%] ">{image}</td>
                    <div className="w-full h-[10%] p-3">
                        <td className=" text-xl text-center ">
                            <button
                                type="button"
                                onClick={deleteData}
                                className=' py-0 px-2 shadow-lg text-white bg-red-600 hover:bg-red-400'
                            > <IonIcon icon={trashOutline} className=''></IonIcon>
                            </button>
                        </td>
                        <td className=" text-xl text-center">
                            <Link to={"/"}
                                className=" py-0 px-1 shadow-lg text-2xl bg-green-500 hover:bg-green-400" >
                                <IonIcon icon={qrCodeOutline} className=''></IonIcon>
                            </Link>
                        </td>
                        <td className=" text-xl text-center">
                            <Link to={"/"} className=" py-0 px-1 shadow-lg text-2xl bg-amber-400 hover:bg-amber-300" >
                                <IonIcon icon={barcodeOutline} className='text-white'></IonIcon>
                            </Link>
                        </td>
                        <td className="  text-white text-xl text-center">
                            <Link to={"/" + (id + "/edit")} className=" py-0 px-1 shadow-lg text-2xl bg-cyan-400 hover:bg-cyan-300" >
                                <IonIcon icon={createOutline} className=''></IonIcon>
                            </Link>
                        </td>

                    </div>
                </tr>
            </table>
        </div >
    )
};

function ProductList() {
    const [value, setValue] = useState('');
    useEffect(() => {
        fetch('http://localhost:3001/addp/',)
            .then((response) => response.json())
            .then((data) => {
                const pData = data.map(product => <Plist
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
                   
                    <Tbutton name="Sale" className="w-[6%] h-[50%] ml-36 hover:bg-green-500 "
                    />
                    <Tbutton name="Customer Receive" className="w-[12%] h-[50%] hover:bg-green-500"
                    />
                    <Tbutton name="Supplier Payment" className="w-[12%] h-[50%] hover:bg-green-500"
                    />
                    <Tbutton name="Purchase" className="w-[10%] h-[50%] hover:bg-green-500"
                    />
                    {/* <MdWarningAmber size = "3rem" className/> */}
                    <div className="w-[20%] h-full flex justify-end ml-24">
                        <Link to='/sales'> <button type="button" className="w-full h-[50%] text-sm font-bold text-white mt-4 
                         border bg-green-600 hover:bg-green-500 flex rounded-sm">
                            {/* <IonIcon icon={add} ></IonIcon> */}
                            <GoPlus className="text-md mt-2.5 text-base align-text-bottom" />
                            <p className="text-md p-2">POS Sale</p>

                        </button></Link>
                    </div>
                </div>

                <div className="w-[98%] h-[80%] first-letter:shadow-lg mt-8 ml-4 border border-gray-300 bg-gray-800">
                    <div className="w-full h-[10%] border-b flex border-gray-300 col-span-8 ">
                        <div className="absolute -top-0.4 -left-0.4 border-l-4px] border-l-transparent border-t-[20px] border-t-green-600 
                            border-r-[20px] border-r-transparent">
                        </div>
                        <span className="ml-4 p-4 text-lg font-bold font-mono text-white ">Manage Product</span>
                        <div className="w-[80%] h-full flex  justify-end">
                            <Link to='/add'> <button type="button" className="w-full h-[60%] text-sm font-bold text-white mt-4  bg-sky-500
                                             hover:shadow-sky-300/50 hover:bg-sky-400 flex rounded-sm">
                                {/* <IonIcon icon={add} ></IonIcon> */}
                                <GoPlus className="text-md mt-2.5 " />
                                <p className="text-md p-2">Add Product</p>

                            </button></Link>
                        </div>
                    </div>
                    <div className="w-full h-[8%]">
                        <button className=" w-[5%] h-[70%] border bg-green-500 text-sm text-white hover:text-black hover:bg-gray-300 mt-2">Copy</button>
                        <button className=" w-[5%] h-[70%] border bg-green-500 text-sm text-white hover:text-black hover:bg-gray-300 mt-2">Excel</button>
                        <button className=" w-[5%] h-[70%] border bg-green-500 text-sm text-white hover:text-black hover:bg-gray-300 mt-2">PDF</button>
                        <button className=" w-[5%] h-[70%] border bg-green-500 text-sm text-white hover:text-black hover:bg-gray-300 mt-2">Print</button>

                    </div>
                    <div className="w-full h-full ">
                        <div className="w-full h-full ">
                            <table className=" border w-full h-[6%] text-gray-600 ml-0 ">
                                <thead className="bg-green-500 text-white">
                                <tr>
                                    <th className="py-4 px-6 uppercase font-semibold text-sm">SL.</th>
                                    <th className="py-4 px-6 uppercase font-semibold text-sm">Product Name</th>
                                    <th className="py-4 px-6 uppercase font-semibold text-sm">Product Model</th>
                                    <th className="py-4 px-6 uppercase font-semibold text-sm">Supplier Name</th>
                                    <th className="py-4 px-6 uppercase font-semibold text-sm">Price</th>
                                    <th className="py-4 px-6 uppercase font-semibold text-sm">Supplier Price</th>
                                    <th className="py-4 px-6 uppercase font-semibold text-sm">Image</th>
                                    <th className="py-4 px-6 uppercase font-semibold text-sm">Action</th>
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

export default ProductList;
