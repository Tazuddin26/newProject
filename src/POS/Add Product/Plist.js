import React from "react";
import { useEffect, useState } from "react";
import { IonIcon, IonMenu, IonMenuButton, } from "@ionic/react";
import { trashOutline, createOutline, barcodeOutline, qrCodeOutline } from "ionicons/icons";
import { GoPlus } from "react-icons/go";
import { useNavigate, Link } from "react-router-dom";
import { Location } from "react-router-dom";
import Tbutton from "./TopButton";
function Plist() {
    const navigate = useNavigate();
    const [value, setValue] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/addp/',)
            .then((response) => response.json())
            .then(data => {
                setValue(data);
            })
    }, [])
    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure you want to delete');
        if (confirm) {
            fetch('http://localhost:3001/' + id, {
                method: 'DELETE'
            })
                .then((response) => {
                    navigate("/");
                    // Location.reload();
                });

        }
    }
    return (
        <div className="w-screen h-screen bg-blue-200">
            <h1>List</h1>
            <div className="w-[80%] shadow overflow-hidden  border-b border-gray-200 rounded ml-40 p-4">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className=" py-4 px-6 uppercase font-semibold text-sm">SL.</th>
                            <th className=" py-3 px-4 uppercase font-semibold text-sm">Product Name</th>
                            <th className=" py-3 px-4 uppercase font-semibold text-sm">Product Model</th>
                            <th className=" py-3 px-4 uppercase font-semibold text-sm">Supplier Name</th>
                            <th className=" py-3 px-4 uppercase font-semibold text-sm">Price</th>
                            <th className=" py-3 px-4 uppercase font-semibold text-sm">Supplier Price</th>
                            <th className=" py-3 px-4 uppercase font-semibold text-sm">Image</th>
                            <th className=" py-3 px-4 uppercase font-semibold text-sm">Category</th>
                            <th className=" py-3 px-4 uppercase font-semibold text-sm">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {value.map((d, i) => (
                            <tr key={i} className='bg-gray-100 border-b border-l-2 '>
                                <td className="py-4 px-6">{d.id}</td>
                                <td className="py-4 px-6">{d.name}</td>
                                <td className="py-4 px-6">{d.model}</td>
                                <td className="py-4 px-6">{d.supplier}</td>
                                <td className="py-4 px-6">{d.salePrice}</td>
                                <td className="py-4 px-6">{d.costPrice}</td>
                                <td className="py-4 px-6">{d.image}</td>
                                <td className="py-4 px-6">{d.category}</td>
                                <td className=" text-xl text-center ">

                                    <button
                                        type="button"
                                        onClick={e => handleDelete(d.id)}
                                        className=' py-0 px-2 shadow-lg text-white bg-red-600 hover:bg-red-400'
                                    > <IonIcon icon={trashOutline} className=''></IonIcon>
                                    </button>
                                    <Link to={"/"}
                                        className=" py-0 px-1 shadow-lg text-2xl bg-green-500 hover:bg-green-400" >
                                        <IonIcon icon={qrCodeOutline} className=''></IonIcon>
                                    </Link>
                                    <Link to={"/"} className=" py-0 px-1 shadow-lg text-2xl bg-amber-400 hover:bg-amber-300" >
                                        <IonIcon icon={barcodeOutline} className='text-white'></IonIcon>
                                    </Link>
                                    <Link to={"/" + (d.id + "/edit")} className=" py-0 px-1 shadow-lg text-2xl bg-cyan-400 hover:bg-cyan-300" >
                                    <IonIcon icon={createOutline} className=''></IonIcon>
                                </Link>
                            </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
        </div >
    )

};
export default Plist;