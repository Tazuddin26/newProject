import React from 'react'
import Main from './Main';
export default function Product(props) {
  const { product } = props
  //const [pdata,setPdata] = useState('');
  return (
    <div className='w-full h-full flex'>Product
      <div className='w-[25%] h-[20%]'>
        <img className='w-[90%] h-[80%]' src={`/product/${props.sku}.jpeg`} ></img>
        <a>{props.name}</a>
        <b className='text-xl'>{props.salePrice}</b>
      </div>
      

      
    </div>
  )
};
