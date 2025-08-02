import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context/ShopContext';
import {useParams} from 'react-router-dom'
import { assets } from '../../assets/frontend_assets/assets';
import RelatedProduct from '../RelatedProduct';

function Product() {

  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {

    products.map((item)=>{
      if(item._id === productId){
        setProductData(item);
        setImage(item.image[0])
        return null;
      }
    })

  }

  useEffect(()=>{
     fetchProductData();
  },[productId,products])


  return productData ? (
    <>
      <div className='border-t-2 pt-10 pb-10 transition-opacity ease-in duration-500 opacity-100 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 font-serif px-10'>
        {/* Product Data */}
        <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
  
          {/* Product Images */}
          <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
            <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
              {
                productData.image.map((item, index) => (
                  <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer transition-all duration-500 ease-in-out hover:scale-105 hover:opacity-90' alt="" />
                ))
              }
            </div>
            <div className='w-full sm:w-[80%]'>
              <img className='w-full h-auto transition-all duration-500 ease-in-out hover:scale-105 hover:opacity-90' src={image} alt="" />
            </div>
          </div>
  
          {/* Product Info */}
          <div className='flex-1'>
            <h1 className='font-bold text-2xl mt-2 text-indigo-900'>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-2'>
              <img src={assets.star_icon} alt="" className='w-3.5' />
              <img src={assets.star_icon} alt="" className='w-3.5' />
              <img src={assets.star_icon} alt="" className='w-3.5' />
              <img src={assets.star_icon} alt="" className='w-3.5' />
              <img src={assets.star_dull_icon} alt="" className='w-3.5' />
              <p className='pl-2'>(52)</p>
            </div>
            <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
              <p>Select size</p>
              <div className='flex gap-2'>
                 {productData.sizes.map((item, index)=>(
                  <button onClick={()=>setSize(item)} className={`border-2 py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
                 ))}
              </div>
            </div>
            <button onClick={()=>addToCart(productData._id, size)} className='bg-[#FC466B] text-white px-8 py-3 text-sm active:bg-[#94BBE9]'>ADD TO CART</button>
            {/* <hr className='mt-8 sm:w-4/5'/> */}
            <div className='text-sm text-gray-600 mt-5 flex flex-col gap-1'>
              <p>100% Original product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days</p>
           </div>
          </div>
        </div>
      </div>

      {/* Description & Review Section */}
       <div className='py-20 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 font-serif px-5'>
            <div className='flex'>
              <b className='border px-5 py-3 text-sm'>Description</b>
              <b className='border px-5 py-3 text-sm'>Reviews (52)</b>
            </div>
            <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
              <p>Welcome to TrendEase — Your One-Stop Fashion Destination!</p>
              <p>At TrendEase, we bring you the latest styles in women’s fashion, curated with quality, comfort, and elegance in mind. Whether you're looking for everyday essentials or stylish party wear, our diverse collection offers something for every mood and occasion.<br/>
                ✨ Handpicked products <br/>
                🚚 Fast and reliable shipping <br/>
                🔄 Easy returns and exchanges <br/>
                🛒 Secure checkout <br/>
                We’re committed to making online shopping simple, enjoyable, and satisfying for every customer.
              </p>
            </div>
       </div>
       {/* display related products*/}
        <RelatedProduct category={productData.category} subCategory={productData.subCategory} emotion={productData.emotion}/>

    </>
  ) : (
    <div className='opacity-0'></div>
  );
  
}

export default Product;