import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'

function Footer() {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 text-sm bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 font-serif px-4 py-8'>
          <div className='flex justify-center items-center'>
            <img src={assets.logo_2} alt="" className='pb-5 w-20 mx-5' />
            <p className='w-full md:w-2/3 text-gray-600 mx-5 font-serif'>Discover timeless elegance and modern style with TrendEase — where fashion meets tradition, and every outfit tells a story. </p>
          </div>
          <div>
            <p className='text-xl font-medium mb-5 text-indigo-800'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
               <li>Home</li>
               <li>About us</li>
               <li>Delivery</li>
               <li>Privecy policy</li>
            </ul>
          </div>
          <div>
            <p className='text-xl font-medium mb-5 text-indigo-800'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
               <li>+918001902345</li>
               <li>info@TrendEase.com</li>
            </ul>
          </div>
        </div>
        <div className='bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 font-serif'>
            <hr />
            <p className='py-5 text-sm text-center font-serif'>©2025 TrendEase.com - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer