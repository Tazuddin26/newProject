// import React, { useState } from 'react';
// import ImageButton1 from "../POS/Sales/ButtonImage";
// function ButtonCounter() {
//   const [buttons, setButtons] = useState([
//     { id: 1, count: 0 },
//     { id: 2, count: 0 },
//     { id: 3, count: 0 },
//   ]);

//   const handleButtonClick = (id) => {
//     const updatedButtons = buttons.map((button) => {
//       if (button.id === id) {
//         return { ...button, count: button.count + 1 };
//       }
//       return button;
//     });

//     setButtons(updatedButtons);
//   };

//   return (
//     <div>
//       {buttons.map((button) => (
//         <button key={button.id} onClick={() => handleButtonClick(button.id)} className='border bg-blue-400'>
//           Button {button.id} ({button.count})
//         </button>
//       ))}
//       <ImageButton1/>
//     </div>
//   );
// }

// export default ButtonCounter;
