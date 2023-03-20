 import {
    IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenu, IonMenuButton,
   IonPage, IonTitle, IonToolbar,
 } from "@ionic/react";
 import { addOutline, searchOutline } from "ionicons/icons";
// import React, { component, useState, useEffect } from "react";
// import { Formik, Field } from "formik";
// import * as Yup from 'yup';
// import { Link, useNavigate } from "react-router-dom";
// const inputClass1 = "w-full ml-4 p-2 border shadow-lg shadow-gray-400 rounded-md border-x-indigo-800 hover:border-y-indigo-800"

// function Search() {
//     const [value ,setValue] =useState([]);
//     const [searchValue, setSearchValue] =useState('');
 
//     useEffect(() => {
//         fetch(`http://localhost:3001/addp/${searchValue}`,)
//             .then((response) => response.json())
//             .then(data => setValue(data) );
//         //console.log(value)
//     }, []);
//     const handleChange =(e) => {
//         setSearchValue(e.target.value);
//     }
//     return (
       
//     <div>
//     <form  className='w-full h-full flex flex-col'>
//     <div className="w-[70%] h-[56%] mt-4 mr-10 flex">
//           <input
//             className={inputClass1}
//             type='text'
//             placeholder="Search Product"
//             value={searchValue} onChange={handleChange}          
//           />
//            <button className="w-[20%] border-2 rounded-r-md bg-lime-500 hover:shadow-lime-400/50 shadow-lg"           
//            >
//             <IonIcon icon={searchOutline} className='text-2xl text-white'></IonIcon>
//           </button>
//         </div>
//     </form>
// </div>
//     )
// }

// export default Search;

import React, { useState } from 'react';

function ProductSearchInput({ products, onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    onSearch(filteredProducts);
  };

  return (
    <div className="w-full h-full">
   <form  className='w-full h-full flex flex-col'>
    <div className="w-full h-[95%]  ml-14 flex">
          <input
             className="w-full ml-4 p-2 border shadow-lg shadow-gray-400 rounded-md border-x-green-600 hover:border-y-green-700"
             type='text'
             placeholder="Search Product"
             value={searchQuery} onChange={handleSearchInputChange}          
           />
           <button className="w-[20%] border-2 rounded-r-md bg-lime-500 hover:shadow-lime-400/50 shadow-lg" 
           onClick={handleSearch}          
            >
             <IonIcon icon={searchOutline} className='text-2xl mt-2 text-white'></IonIcon>
          </button>
         </div>
     </form> 
    </div>
  );
}

export default ProductSearchInput;