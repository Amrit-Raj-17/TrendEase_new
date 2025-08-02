// import React from 'react'
// import Title from '../Title'
// import { assets } from '../../assets/frontend_assets/assets'
// import NewsletterBox from '../NewsletterBox'

// function Contact() {
//   return (
//     <div>
//       <div className='text-center text-2xl pt-10 border-t'>
//          <Title text1={'CONTACT'} text2={'US'} />
//       </div>
//       <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
//         <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
//         <div className='flex flex-col justify-center items-start gap-6'>
//           <p className='font-semibold text-xl text-gray-600'>Store</p>
//           <p>College Street Market<br/>(Barnaparichaya) Gate No.2,<br/>Mahatma Gandhi Road<br/>Kolkata - 700007</p>
//           <div className='flex flex-col gap-2'>
//             <div className='flex items-center gap-2'>
//               <img className='w-[20px] h-[20px]' src={assets.tel_logo} alt="" />
//               <span>+91 33 2241 2812</span>
//             </div>
//             <div className='flex items-center gap-2'>
//               <img className='w-[20px] h-[20px]' src={assets.whatsapp_logo} alt="" />
//               <span>8001903821</span>
//             </div>
//             <div className='flex items-center gap-2'>
//               <img className='w-[20px] h-[20px]' src={assets.sms_logo} alt="" />
//               <span>info@TrendEase.com</span>
//             </div>
//           </div>
//           <p>Careers at TrendEase</p>
//           <p>Learn more about our teams and job opening.</p>
//           <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
//         </div>
//       </div>
//       <NewsletterBox/>
//     </div>
//   )
// }

// export default Contact



import React from 'react'
import Title from '../Title'
import { assets } from '../../assets/frontend_assets/assets'
import NewsletterBox from '../NewsletterBox'

function Contact() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 font-serif'>
      {/* Header Section */}
      <div className='text-center text-2xl pt-10 pb-8 border-t border-gray-200'>
         <Title text1={'CONTACT'} text2={'US'} />
         <p className='text-gray-600 mt-4 text-lg font-light'>We'd love to hear from you</p>
      </div>

      {/* Main Content */}
      <div className='my-10 flex flex-col justify-center md:flex-row gap-12 mb-28 px-4 max-w-7xl mx-auto'>
        {/* Image Section */}
        <div className='relative group'>
          <div className='absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300'></div>
          <img 
            className='relative w-full md:max-w-[480px] rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300' 
            src={assets.contact_img} 
            alt="Contact workspace" 
          />
        </div>

        {/* Contact Information */}
        <div className='flex flex-col justify-center items-start gap-8 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20'>
          {/* Store Section */}
          <div className='w-full'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center'>
                <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clipRule='evenodd'></path>
                </svg>
              </div>
              <p className='font-bold text-xl text-gray-800'>Store</p>
            </div>
            <div className='bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 border-l-4 border-blue-400'>
              <p className='text-gray-700 leading-relaxed'>
                College Street Market<br/>
                (Barnaparichaya) Gate No.2,<br/>
                Mahatma Gandhi Road<br/>
                <span className='font-semibold text-blue-600'>Kolkata - 700007</span>
              </p>
            </div>
          </div>

          {/* Contact Details */}
          <div className='flex flex-col gap-4 w-full'>
            <div className='flex items-center gap-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200 hover:shadow-md transition-shadow duration-300'>
              <div className='w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center'>
                <img className='w-5 h-5 filter brightness-0 invert' src={assets.tel_logo} alt="Phone" />
              </div>
              <span className='text-gray-700 font-medium'>+91 33 2241 2812</span>
            </div>
            
            <div className='flex items-center gap-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-4 border border-emerald-200 hover:shadow-md transition-shadow duration-300'>
              <div className='w-10 h-10 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center'>
                <img className='w-5 h-5 filter brightness-0 invert' src={assets.whatsapp_logo} alt="WhatsApp" />
              </div>
              <span className='text-gray-700 font-medium'>8001903821</span>
            </div>
            
            <div className='flex items-center gap-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200 hover:shadow-md transition-shadow duration-300'>
              <div className='w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center'>
                <img className='w-5 h-5 filter brightness-0 invert' src={assets.sms_logo} alt="Email" />
              </div>
              <span className='text-gray-700 font-medium'>info@TrendEase.com</span>
            </div>
          </div>

          {/* Careers Section */}
          <div className='w-full bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-200'>
            <div className='flex items-center gap-3 mb-3'>
              <div className='w-8 h-8 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full flex items-center justify-center'>
                <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-3a1 1 0 00-1 1v1h2V4a1 1 0 00-1-1zm4 8a1 1 0 100-2 1 1 0 000 2z' clipRule='evenodd'></path>
                </svg>
              </div>
              <p className='font-bold text-lg text-gray-800'>Careers at TrendEase</p>
            </div>
            <p className='text-gray-600 mb-4 leading-relaxed'>Learn more about our teams and job opening.</p>
            <button className='bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-indigo-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'>
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
      
      <NewsletterBox/>
    </div>
  )
}

export default Contact