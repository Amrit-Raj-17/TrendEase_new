// import React from 'react'
// import {assets} from '../../src/assets/frontend_assets/assets'
// function OurPolicy() {
//   return (
//     <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700 '>
//       <div>
//         <img src={assets.exchange_icon} alt="" className='w-12 m-auto mb-5'/>
//         <p className='font-serif font-semibold'>Easy Exchange Policy</p>
//         <p className='text-gray-400'>We offer hassle free exchange policy</p>
//       </div>

//       <div>
//         <img src={assets.quality_icon} alt="" className='w-12 m-auto mb-5'/>
//         <p className='font-serif font-semibold'>7 Days Return Policy</p>
//         <p className='text-gray-400'>We provide 7 days free return policy</p>
//       </div>

//       <div>
//         <img src={assets.support_img} alt="" className='w-12 m-auto mb-5'/>
//         <p className='font-serif font-semibold'>Best customer support</p>
//         <p className='text-gray-400'>We provide 24/7 customer support</p>
//       </div>
//     </div>
//   )
// }

// export default OurPolicy

import React from 'react'
import { assets } from '../../src/assets/frontend_assets/assets'

function OurPolicy() {
  return (
    <div className='bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 py-16 px-6'>
      <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center text-xs sm:text-sm md:text-base text-gray-700'>
        
        <div>
          <img
            src={assets.exchange_icon}
            alt=""
            className='w-12 m-auto mb-5 bg-white p-2 rounded-full shadow-md'
          />
          <p className='font-serif font-semibold text-indigo-800 mb-1'>
            Easy Exchange Policy
          </p>
          <p className='text-gray-600'>We offer hassle free exchange policy</p>
        </div>

        <div>
          <img
            src={assets.quality_icon}
            alt=""
            className='w-12 m-auto mb-5 bg-white p-2 rounded-full shadow-md'
          />
          <p className='font-serif font-semibold text-indigo-800 mb-1'>
            7 Days Return Policy
          </p>
          <p className='text-gray-600'>We provide 7 days free return policy</p>
        </div>

        <div>
          <img
            src={assets.support_img}
            alt=""
            className='w-12 m-auto mb-5 bg-white p-2 rounded-full shadow-md'
          />
          <p className='font-serif font-semibold text-indigo-800 mb-1'>
            Best Customer Support
          </p>
          <p className='text-gray-600'>We provide 24/7 customer support</p>
        </div>

      </div>
    </div>
  )
}

export default OurPolicy
