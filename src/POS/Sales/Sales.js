import {
  IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenu, IonMenuButton,
  IonPage, IonTitle, IonToolbar,
} from "@ionic/react";
import { addOutline, searchOutline } from "ionicons/icons";
import { Formik, Field } from "formik";
import * as Yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import Button from "./Button";
import ImageButton from "./ButtonImage";
import ProductSearchInput from "./search";
const inputClass1 = "w-full h-[50%] ml-4 p-2 border shadow-lg shadow-gray-400 rounded-md border-x-green-600 hover:border-y-green-700"
const inputClass2 = " w-full h-[75%] p-2 ml-8 border shadow-lg shadow-gray-400 rounded-md border-x-green-600  hover:border-y-green-700"
const inputClass3 = " w-[50%] mt-2 p-2 text-end border shadow-lg shadow-gray-400 rounded-md border-x-green-600  hover:border-y-green-700"
const inputDivClass2 = "w-full h-[10%] mb-4 "
// const INPUT = (name, placeholder, handleChange, handleBlur, values, touched, errors) =>
//   <div className={inputDivClass2}>
//     <input
//       className={inputClass3}
//       type='text'
//       name={name}
//       placeholder={placeholder}
//       value={values[name]}
//       onChange={handleChange}
//       onBlur={handleBlur}
//     />
//   </div>

const TicketSchema = Yup.object().shape({
  from: Yup.string()
    // .min(3, 'Journey must be at least 3 characters')
    // .max(50, 'Too Long!')
    .required('* Required'),
  to: Yup.string()
    // .min(3, 'Destination must be at least 3 characters')
    // .max(50, 'Too Long!')
    .required('* Required'),
  price: Yup.number()
    // .min(400, 'Price must be at least 400')
    // .max(10000, 'Too Long!')
    .required('* Required'),
  // inStock: Yup.number()
  //     .min(1, 'Stock must be at least 1')
  //     .max(1000, 'Too Long!')
  //     .required('Required'),
  // config: Yup.string()
  //     .min(20, 'Configuration must be at least 20 characters')
  //     .max(50, 'Too Long!')
  //     .required('Required'),
});
const Form = ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
  <div className="w-screen h-screen bg-gray-100">
    <div className="w-[96%] h-[10%] border bg-white rounded-md ml-6 shadow-md shadow-gray-400">
      <button className="w-[8%] h-[50%] border bg-lime-500 rounded-md hover:bg-lime-600 shadow-lg
         shadow-green-700 flex mt-3 p-2 ml-20 text-sm font-bold ">
        <span className="text-justify ml-2 ">Today Sale</span>
      </button>
    </div>
    <form onSubmit={handleSubmit} className='w-full h-full flex flex-col'>
      <div className="w-full h-full flex rounded-lg  drop-shadow-2xl shadow-stone-700">
        <div className="w-[15%] h-full">
          <Button name="Electronics" className="" />
          <Button name="Crockeries" className=" " />
          <Button name="Chocolate" className=" " />
          <Button name="Travel" className=" " />
          <Button name="Home Decor" className=" " />
          <Button name="Accessories" className="" />
          <Button name="Chips" className=" " />
          <Button name="Beverage" className="" />
          <Button name="Fruit" className=" " />
          <Button name="Frozen " className="" />
        </div>
        <div className="w-[50%] h-full">
          <div className='w-full h-[10%] flex'>
            <div className="w-[70%] h-[56%] mt-4 mr-10 flex">
              {/* <input
                className={inputClass1}
                type='search'
                name='search'
                placeholder="Search Product"
                value={values.search}
                onChange={handleChange}
                onBlur={handleBlur}
              />
               <button className="w-[20%] border-2 rounded-r-md bg-lime-500 hover:shadow-lime-400/50 shadow-lg">
                <IonIcon icon={searchOutline} className='text-2xl text-white'></IonIcon>
              </button> */}
              <ProductSearchInput />
            </div>
            <div className="w-[55%] h-[75%] mt-4 mr-20 ">
              <select
                className={inputClass2}
                type='text'
                name="pName"
                placeholder="Select Option"
                value={values.pName}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option>Select Option</option>
                <option>BackPack</option>
                <option>Chocolate</option>
                <option>Cycle Light</option>
                <option>Kitchen Knif</option>
              </select>
            </div>
          </div>
          <div className="w-full h-full overflow-auto ">
            <ImageButton />
          </div>
        </div>
        <div className="w-[50%] h-[65%]">
          <div className='w-full flex h-[20%]'>
            <div className="w-[40%] mt-4 ">
              <input
                className={inputClass1}
                type='text'
                name='barcode'
                placeholder="Barcode Or QR code"
                value={values.barCode}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <span className="text-red-600 ml-10">
                {touched.barCode && errors.barCode}
              </span>
            </div>
            <div className="w-[50%] h-[55%] mt-4 flex">
              <input
                className={inputClass2}
                type='text'
                name="Cname"
                placeholder="Customer Name"
                value={values.Cname}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <button
                onClick={handleSubmit}
                className="w-[20%] h-[71%] rounded-r-md bg-lime-500 hover:shadow-lime-400/50 shadow-lg">
                <IonIcon icon={addOutline} className='text-2xl mt-2 text-white'></IonIcon>
              </button>
              <span className="text-red-600 ml-10">
                {touched.Cname && errors.Cname}
              </span>

            </div>
          </div>
          <div className="w-[80%]">
            <table className="w-full border border-stone-600">
            </table>
          </div>
          <div className="w-full h-[80%] flex border-b border-black ">
            <div className="w-[30%] h-full flex flex-col ">
              <span className="font-bold mb-4 mt-5 text-end">Unit Price :</span>
              <span className="font-bold mb-4 mt-5 text-end">Sale Discount :</span>
              <span className="font-bold mb-4 mt-5 text-end">Quantity :</span>
              <span className="font-bold mb-4 mt-5 text-end">VAT & Tax :</span>
              <span className="font-bold mb-4 mt-5 text-end">Grand Total:</span>
              <span className="font-bold mb-4 mt-5 text-end">Previous Due:</span>
            </div>
            <div className="w-[60%] h-full ">
              <div className="w-full h-[10%] mb-6">
                <input
                  className={inputClass3}
                  type='text'
                  name="uPrice"
                  placeholder="0.00"
                  value={values.uPrice}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="w-full h-[10%] mb-4">
                <input
                  className={inputClass3}
                  type='text'
                  name="sDiscount"
                  placeholder="0.00"
                  value={values.sDiscount}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="w-full h-[10%] mb-4  ">
                <input
                  className={inputClass3}
                  type='text'
                  name="quantity"
                  placeholder="0.00"
                  value={values.quantity}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="w-full h-[10%] mb-4  ">
                <input
                  className={inputClass3}
                  type='text'
                  name="vat"
                  placeholder="0.00"
                  value={values.vat}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="w-full h-[10%] mb-4  ">
                <input
                  className={inputClass3}
                  type='text'
                  name="tAmount"
                  placeholder="0.00"
                  value={values.tAmount}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="w-full h-[10%] mb-4 ">
                <input
                  className={inputClass3}
                  type='text'
                  name="due"
                  placeholder="0.00"
                  value={values.due}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </form>
  </div>
)
const iValue = {
  search: '',
  pName : '',
  barCode: '',
  Cname: '', 
  uPrice: '',
  sDiscount: '',
  quantity: '',
  vat: '',
  tAmount: '',
  due: '',
}
function Sales() {
  const navigate = useNavigate();
  const onSubmit = (values, { setSubmitting }) => {
    fetch('http//:localhost:3001/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        navigate('/');
        alert(JSON.stringify(values, null, 2))
        setSubmitting(false);
      });
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
  );
}

export default Sales;