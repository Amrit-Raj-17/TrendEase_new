import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context/ShopContext'
import Product from '../Product/Product';
import { assets } from '../../assets/frontend_assets/assets';
import Title from '../Title';

function Cart() {
  const {products, currency, cartItems, updateQuantity} = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(()=>{
    const tempData = [];
    for(const items in cartItems){
      for(const item in cartItems[items]){
        if(cartItems[items][item] > 0){
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          })
        }
      }
    }
    //console.log(tempData);
    setCartData(tempData);
  },[cartItems])

  return (
    <div className='pt-10 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 font-serif px-5'>
      <div className='text-2xl pb-3'>
        <Title text1={'YOUR'} text2={'CART'}/>
      </div>

      <div>
        {
          cartData.map((item,index) =>{
            const productData = products.find((product)=> product._id === item._id);

            return(
              <div key={index} className='py-4 text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                    <img src={productData.image[0]} alt="" className='w-16 sm:w-20' />
                </div>
                <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                <div className='flex items-center gap-5 mt-2'>
                   <p>{currency}{productData.price}</p>
                   <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                   <input onChange={(e)=> e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size,Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={item.quantity} />
                  <img onClick={()=>updateQuantity(item._id, item.size, 0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" /> 
                  </div>
              </div>
            )
          })
        }       
        </div>
      
    </div>
  )
}

export default Cart