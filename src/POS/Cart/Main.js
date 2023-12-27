// import React, { useState, useEffect } from 'react'
// import Product from "./Product";
// import ImageButton from '../Sales/ButtonImage';

// export default function Main() {

//     const [cdata, setCdata] = useState('');
  

//     useEffect(() => {
//         fetch('http://localhost:3001/addp/',)
//             .then((response) => response.json())
//             .then((value) => {
//                 const data = value.map(product => <ImageButton
                    
//                     id={product.id}
//                     name={product.name}
//                     sku={product.sku}
//                     salePrice={product.salePrice}
                  

//                 />)
               
//                 setCdata(data)
//             });

//     }, [])
//     return (
//         <main>
//             <div className='w-full h-full flex'>
//                 <div className='w-full h-[70%] '>
//                     {cdata}
//                 </div>
//             </div>
//         </main>
//     )
// }
