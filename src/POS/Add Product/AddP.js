import { GoPlus } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { Formik, Field } from "formik";
import Tbutton from "./TopButton";


const Form = ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
    <div className="w-screen h-screen">
        <form onSubmit={handleSubmit} className='w-full h-full '>
            <div className="w-full h-full">
                <div className="w-full h-[10%] shadow-lg flex bg-gray-800">
                    <div className="w-[80%] h-full">
                        <Tbutton name="Sale" className="w-[6%] h-[50%] hover:bg-green-500 text-xl"
                        />
                        <Tbutton name="Customer Receive" className="w-[15%] h-[50%] hover:bg-green-500"
                        />
                        <Tbutton name="Supplier Payment" className="w-[15%] h-[50%] hover:bg-green-500"
                        />
                        <Tbutton name="Purchase" className="w-[10%] h-[50%] hover:bg-green-500"
                        />

                        {/* <BsExclamationTriangle size = "2rem" className= "text-end "/> */}
                        {/* <MdWarningAmber size = "3rem" className/> */}
                    </div>
                    <div className="w-[20%] h-full flex ">
                        <Link to='/sales'> <button type="button" className="w-full h-[50%] text-sm font-bold text-white mt-4  border bg-green-600 hover:bg-green-500 flex">
                            {/* <IonIcon icon={add} ></IonIcon> */}
                            <GoPlus className="text-md mt-2.5 " />
                            <p className="text-md mt-2">POS Sale</p>

                        </button></Link>
                    </div>
                </div>
                <div className="w-[95%] h-[70%] bg-gray-800 first-letter:shadow-lg mt-8 ml-10 border border-gray-300 ">
                    <div className="w-full h-[11%] border-b flex border-gray-300 col-span-8 ">
                        <div className="absolute -top-0.4 -left-0.4 border-l-4px] border-l-transparent border-t-[20px]
                     border-t-green-600 border-r-[20px] border-r-transparent">
                        </div>
                        <span className="ml-4 p-3 text-lg font-mono text-white ">Add Product</span>
                    </div>
                    <div className="w-full h-full flex ">
                        <div className="w-[15%] h-full my-4 flex flex-col text-white">
                            <span className="text-start ml-4 mb-4 mt-2 ">Barcode/QR-code</span>
                            <span className="text-start ml-4 mb-4 mt-3">Product Name </span>
                            <span className="text-start ml-4 mb-4 mt-3">Category</span>
                            <span className="text-start ml-4 mb-4 mt-3">Sale Price</span>
                            <span className="text-start ml-4 mb-4 mt-3">Cost Price</span>
                            <span className="text-start ml-4 mb-4 mt-3">Image</span>
                            <span className="text-start ml-4 mb-4 mt-3">Supplier</span>
                        </div>
                        <div className="w-[80%] h-full flex  ">
                            <div className="w-full h-full ">
                                <div className="w-[97%] mt-2 ml-4">
                                    <input
                                        className="w-full ml-4 p-2 border shadow-gray-400 rounded-md border-x-indigo-800 hover:border-y-indigo-800"
                                        type='barcode'
                                        name='barcode'
                                        placeholder="Barcode/QR-code"
                                        value={values.barcode}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <span className="text-red-600 ml-10">
                                        {touched.barcode && errors.barcode}
                                    </span>

                                </div>

                                <div className="w-full h-full flex ">
                                    <div className="w-[90%] h-full ">
                                        <div className="w-[93%] mt-3 ml-4">
                                            <input
                                                className="w-full ml-4 p-2 border  shadow-gray-400 rounded-md border-x-indigo-800 hover:border-y-indigo-800"
                                                type='text'
                                                name='name'
                                                placeholder="Product Name"
                                                value={values.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <span className="text-red-600 ml-10">
                                                {touched.name && errors.name}
                                            </span>
                                        </div>
                                        <div className="w-[93%] mt-3 ml-4">
                                            <select
                                                className="w-full ml-4 p-2 border  shadow-gray-400 rounded-md border-x-indigo-800 hover:border-y-indigo-800"
                                                type='text'
                                                name='category'
                                                placeholder="Select Category"
                                                value={values.category}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            >
                                                <option className="text-gray-400">Select Category</option>
                                                <option>Electronic</option>
                                                <option>Travel</option>
                                                <option>Chocolet</option>
                                                <option>Flower</option>
                                                <option>abc</option>
                                            </select>
                                            <span className="text-red-600 ml-10">
                                                {touched.category && errors.category}
                                            </span>
                                        </div>
                                        <div className="w-[93%] mt-3 ml-4">
                                            <input
                                                className="w-full ml-4 p-2  text-end border  shadow-gray-400 rounded-md border-x-indigo-800 hover:border-y-indigo-800"
                                                type='text'
                                                name='salePrice'
                                                placeholder="0.00"
                                                value={values.salePrice}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <span className="text-red-600 ml-10">
                                                {touched.salePrice && errors.salePrice}
                                            </span>
                                        </div>
                                        <div className="w-[93%] mt-3 ml-4">
                                            <input
                                                className="w-full ml-4 p-2 border text-end  shadow-gray-400 rounded-md border-x-indigo-800 hover:border-y-indigo-800"
                                                type='text'
                                                name='costPrice'
                                                placeholder="0.00"
                                                value={values.costPrice}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <span className="text-red-600 ml-10">
                                                {touched.costPrice && errors.costPrice}
                                            </span>
                                        </div>
                                        <div className="w-[93%] mt-3 ml-4 ">
                                            <input
                                                className="w-full ml-4 p-2 border  shadow-gray-400 rounded-md border-x-indigo-800 hover:border-y-indigo-800"
                                                type="file"
                                                name='image'
                                                //placeholder="Search Product"
                                                value={values.image}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <span className="text-red-600 ml-10">
                                                {touched.image && errors.image}
                                            </span>
                                        </div>
                                        <div className="w-[93%] mt-3 ml-4 ">
                                            <select
                                                className="w-full ml-4 p-2 border  shadow-gray-400 rounded-md border-x-indigo-800 hover:border-y-indigo-800"
                                                type='text'
                                                name='supplier'
                                                placeholder="Select Options"
                                                value={values.supplier}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            >
                                                <option>Search Option</option>
                                                <option>a</option>
                                                <option>b</option>
                                                <option>c</option>
                                                <option>d</option>
                                            </select>
                                            <span className="text-red-600 ml-10">
                                                {touched.supplier && errors.supplier}
                                            </span>
                                        </div>
                                    </div>
                                    <div className=" w-[45%] h-full flex flex-col text-white">
                                        <span className="text-start ml-4 mb-4 mt-4">Serial No</span>
                                        <span className="text-start ml-4 mb-4 mt-4">Model No</span>
                                        <span className="text-start ml-4 mb-4 mt-4">Unit</span>
                                        <span className="text-start ml-4 mb-4 mt-4">Product VAT %</span>
                                        <span className="text-start ml-4 mb-4 mt-4">Product Details</span>
                                    </div>
                                    <div className="w-full h-full  mb-4">
                                        <div className="w-[93%] mt-3 ml-4 m-2">
                                            <input
                                                className="w-full ml-4 p-2 border  shadow-gray-400 rounded-md border-x-indigo-800 hover:border-y-indigo-800"
                                                type='text'
                                                name='sn'
                                                placeholder="Enter Serial Number"
                                                value={values.sn}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </div>
                                        <div className="w-[93%] mt-3 ml-4 ">
                                            <input
                                                className="w-full ml-4 p-2 border  shadow-gray-400 rounded-md border-x-indigo-800 hover:border-y-indigo-800"
                                                type='text'
                                                name='model'
                                                placeholder="Product Model Number"
                                                value={values.model}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </div>
                                        <div className="w-[93%] mt-3 ml-4 ">
                                            <select
                                                className="w-full ml-4 p-2 border shadow-gray-400 rounded-md border-x-indigo-800 hover:border-y-indigo-800"
                                                type='text'
                                                name='unit'
                                                placeholder="Select Options"
                                                value={values.unit}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            >
                                                <option>Select Options</option>
                                                <option>Pcs</option>
                                                <option>lbs</option>
                                                <option>Kg</option>
                                            </select>
                                        </div>
                                        <div className="w-[93%] mt-3 ml-4 ">
                                            <input
                                                className="w-full ml-4 p-2 border  shadow-gray-400 rounded-md border-x-indigo-800 hover:border-y-indigo-800"
                                                type='text'
                                                name='vat'
                                                placeholder="Product Vat %"
                                                value={values.vat}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </div>
                                        <div className="w-[93%] mt-3 ml-4  ">
                                            <textarea
                                                className="w-full h-[10%] ml-4 border shadow-gray-400 rounded-md border-x-indigo-800 hover:border-y-indigo-800"
                                                type='text'
                                                name='details'
                                                placeholder="Product Details"
                                                value={values.details}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </div>
                                        <div className="w-[93%] h-[20%] ml-32 mt-4 ">
                                            <button
                                                className="w-[20%] h-[40%] text-white font-bold ml-40 border shadow-lg shadow-gray-400 rounded-md bg-sky-600
                                             hover:shadow-sky-400/50 hover:bg-sky-400"
                                                type="submit"
                                                disabled={isSubmitting}
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </form>
    </div>
)
const iValue = {
    barcode: '',
    name: '',
    model: '',
    sn: '',
    category: '',
    unit: '',
    salePrice: '',
    costPrice: '',
    details: '',
    image: '',
    vat: '',
    supplier: '',
}

const AddProduct = () => {
    // const navigate = useNavigate();  
    const onSubmit = (values, { setSubmitting }) => {
        fetch('http://localhost:3001/addp/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
            .then((response) => {
                //  navigate('/');
                alert(JSON.stringify(values, null, 2))
                setSubmitting(false);
            });

    }
    return (
        <div>
            <Formik
                initialValues={iValue}
                component={Form}
                onSubmit={onSubmit}
            >
            </Formik>
        </div>

    )
}
export default AddProduct;