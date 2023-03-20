import {
    IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenu, IonMenuButton,
    IonPage, IonTitle, IonToolbar,
} from "@ionic/react";
import { IonCheckbox, IonInput, IonItem, IonLabel, IonRange, IonSelect, IonSelectOption, IonToggle } from '@ionic/react';
import { IoAppsOutline } from "react-icons/io5";
import { MdWarningAmber } from "react-icons/md";
import React from "react";
import { Formik, Field } from "formik";
import Tbutton from "./TopButton";

const Form = ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
    <div className="w-screen h-screen">
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
            <div className="w-[95%] h-[35%] bg-white first-letter:shadow-lg mt-8 ml-10 border border-gray-300 ">
                <div className="w-full h-[22%] border-b flex border-gray-300 col-span-8 ">
                    <div className="absolute -top-0.4 -left-0.4 border-l-4px] border-l-transparent border-t-[20px]
                     border-t-green-600 border-r-[20px] border-r-transparent">
                    </div>
                    <span className="ml-4 p-4 text-lg font-bold font-mono text-gray-700 ">Add Category</span>
                </div>
                <div className="w-full h-full flex ">
                    <div className="w-[15%] h-full my-4 flex flex-col">
                        <span className="text-end ml-4 mb-4 mt-2  font-mono font-bold text-gray-700">Category Name :</span>
                        <span className="text-end ml-4 mb-4 mt-4 font-mono font-bold text-gray-700">Status :</span>
                    </div>
                    <div className="w-[80%] h-full ">
                        <div className="w-full h-full ">
                            <div className="w-[35%] mt-4 ml-4">
                                <input
                                    className="w-full ml-4 p-2 border shadow-lg shadow-gray-400   hover:border-green-600"
                                    type='text'
                                    name='text'
                                    placeholder="Category Name"
                                    value={values.Category}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <span className="text-red-600 ml-10">
                                    {touched.Category && errors.Category}
                                </span>
                            </div>
                            <div className="w-[35%] mt-4 ml-4 ">
                                <select
                                    className="w-full ml-4 p-2 border text-gray-400 shadow-lg shadow-gray-400  border-x-indigo-800
                                     hover:border-y-indigo-800"
                                    type='text'
                                    name='text'
                                    placeholder="Select Options"
                                    value={values.status}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                >
                                    <option value='text'>Select Option</option>
                                    <option value='text'>Active</option>
                                    <option value='text'>InActive</option>

                                </select>
                            </div>
                            <div className="w-[30%] h-[40%] mt-4 flex justify-start ml-8 ">
                                <button
                                    className="w-[25%] h-[40%] text-white font-bold  border shadow-lg shadow-gray-400  bg-sky-600
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
)
const iValue = {

    Category: '',
    status: '',

}
const AddCatagory = () => {
    //const navigate = useNavigate();  
    const onSubmit = (values, { setSubmitting }) => {
        // fetch(http/:localhost:3001/ {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(values),
        // })
        // .then((response) => {
        //     // navigate('/');
        //     alert(JSON.stringify(values, null, 2))
        //     setSubmitting(false);
        // });

    }
    return (
        <div>
            <Formik
                initialValues={iValue}
                //validationSchema={TicketSchema}
                component={Form}
                onSubmit={onSubmit}
            >
            </Formik>
        </div>
    )
}

export default AddCatagory;