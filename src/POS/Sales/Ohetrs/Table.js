// import React from "react";
// import { useState } from "react";
// //import ImageB from "./Image";
// import { Link, Router } from "react-router-dom";

// function ImageButton1() {
//     const [abc, setAbc] = useState(false);
//     const [buttons, setButtons] = useState([{
//         id: 1,
//         title: 'BackPack',
//         imge: '/ImageButton/bag.jpeg',
//         //link: '/company'
//         count: 0,
//     },
//     {
//         id: 2,
//         title: 'Travel Bag',
//         imge: '/ImageButton/bag2.jpeg',
//         //link: '/'
//         count: 0,
//     },
//     {
//         id: 3,
//         title: 'Choco',
//         imge: '/ImageButton/choco.jpeg',
//         //link: '/company/buttonbar'
//         count: 0
//     },
//     ])
//     const handleButtonClick =(id) =>{
//         const updatedButtons = buttons.map((button)=>{
//             if(button.id === id){
//                 return{...button, count:button.count + 1};
//             }
//             return button;

//         })
//         setButtons(updatedButtons);
//         setAbc(!abc);

//         }

//     return (
//         <div className="w-[95%] h-[70%]">
//             <div className="w-full h-full mt-8  hover:select-text ">
//                 {buttons.map((button) => (
//                         <button className={`w-[15%] h-[20%] ml-4 mt-2 border shadow-lg shadow-gray-500 rounded-lg
//                         hover:border-spacing-1 transition hover:scale-95 ${(abc === true)? button.count : button.id } `}
//                         key = {button.id}
//                             onClick={() => handleButtonClick(button.id)}> 
//                              <img src={button.imge} alt={button.title} className='w-full h-full rounded-lg'></img>
//                              <span className="text-sm font-bold my-6">{button.id}</span>
//                              <span className="text-sm font-bold my-6">{button.title}</span>
//                              <span className="text-sm font-bold ">({button.count})</span>
//                         </button>      
//                 ))}
//             </div>

//         </div>
//     )
// }

// export default ImageButton1;