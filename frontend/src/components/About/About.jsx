// import React from 'react'
// import Title from '../Title'
// import NewsletterBox from '../NewsletterBox'
// import { assets } from '../../assets/frontend_assets/assets'
// function About() {
//   return (
//     <div>
//         <div className='text-2xl text-center pt-8 border-t'>
//            <Title text1={'ABOUT'} TEXT2={'US'}/>
//         </div>
//         <div className='my-10 flex flex-col md:flex-row gap-16'>
//           <img src={assets.about_img} alt="" className='w-full md:max-w-[450px]' />
//           <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
//               <p>hello</p>
//               <p>world</p>
//               <b className='text-gray-800'>Our Mission</b>
//               <p>mission</p>
//           </div>
//         </div>

//         <div className='text-4xl py-4'>
//              <Title text1={'WHY'} text2={'CHOOSE US'}/>
//         </div>

//         <div className='flex flex-col md:flex-row text-sm mb-20'>
//           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
//             <b>Quality Assurance:</b>
//             <p className='text-gray-600'>Some Text About Quality Assurance</p>
//           </div>
//           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
//             <b>Convenience:</b>
//             <p className='text-gray-600'>Some Text About Convenience</p>
//           </div>
//           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
//             <b>Exceptional Customer Service::</b>
//             <p className='text-gray-600'>Some Text About Exceptional Customer Service</p>
//           </div>
//         </div>
//         <NewsletterBox/>
//     </div>
    
//   )
// }

// export default About



import React from 'react'
import Title from '../Title'
import NewsletterBox from '../NewsletterBox'
import { assets } from '../../assets/frontend_assets/assets'

function About() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50'>
      {/* Header Section */}
      <div className='text-2xl text-center pt-10 pb-8 border-t border-gray-200'>
        <Title text1={'ABOUT'} text2={'US'}/>
        <p className='text-gray-600 mt-4 text-lg font-light'>Discover the story behind TrendEase</p>
      </div>

      {/* About Content */}
      <div className='my-10 flex flex-col md:flex-row gap-16 px-4 max-w-7xl mx-auto'>
        {/* Image Section */}
        <div className='relative group'>
          <div className='absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300'></div>
          <img 
            src={assets.about_img} 
            alt="Fashion collection" 
            className='relative w-full md:max-w-[450px] rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300' 
          />
        </div>

        {/* Content Section */}
        <div className='flex flex-col justify-center gap-8 md:w-2/4 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20'>
          <div className='space-y-6'>
            <p className='text-gray-700 text-lg leading-relaxed'>
              Welcome to <span className='font-bold text-purple-600'>TrendEase</span>, where fashion meets convenience. 
              We're passionate about bringing you the latest trends and timeless classics, all in one place.
            </p>
            
            <p className='text-gray-700 text-lg leading-relaxed'>
              Founded with the vision of making fashion accessible to everyone, TrendEase has grown from a small startup 
              to a trusted name in online fashion retail. We believe that style shouldn't be complicated – it should be easy, 
              enjoyable, and affordable.
            </p>

            <div className='bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center'>
                  <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'></path>
                  </svg>
                </div>
                <b className='text-xl text-gray-800'>Our Mission</b>
              </div>
              <p className='text-gray-700 leading-relaxed'>
                To revolutionize online fashion shopping by providing high-quality, trendy clothing at affordable prices, 
                while delivering exceptional customer service that makes every shopping experience memorable and effortless.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='text-4xl py-8 text-center px-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
        <p className='text-gray-600 mt-4 text-lg font-light'>What makes TrendEase special</p>
      </div>

      {/* Features Grid */}
      <div className='flex flex-col md:flex-row text-sm mb-20 gap-6 md:gap-0 px-4 max-w-7xl mx-auto'>
        {/* Quality Assurance */}
        <div className='bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl md:rounded-none md:rounded-l-2xl px-10 md:px-16 py-12 flex flex-col gap-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105'>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center'>
              <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd'></path>
              </svg>
            </div>
            <b className='text-xl text-gray-800'>Quality Assurance</b>
          </div>
          <p className='text-gray-600 leading-relaxed'>
            Every product in our collection undergoes rigorous quality checks. We partner with trusted manufacturers 
            and suppliers to ensure that each item meets our high standards for durability, comfort, and style.
          </p>
        </div>

        {/* Convenience */}
        <div className='bg-white/80 backdrop-blur-sm border border-white/20 px-10 md:px-16 py-12 flex flex-col gap-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105'>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center'>
              <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z' clipRule='evenodd'></path>
              </svg>
            </div>
            <b className='text-xl text-gray-800'>Convenience</b>
          </div>
          <p className='text-gray-600 leading-relaxed'>
            Shop anytime, anywhere with our user-friendly website and mobile app. Enjoy features like one-click ordering, 
            wishlist management, size guides, and fast checkout to make your shopping experience seamless.
          </p>
        </div>

        {/* Customer Service */}
        <div className='bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl md:rounded-none md:rounded-r-2xl px-10 md:px-16 py-12 flex flex-col gap-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105'>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center'>
              <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z' clipRule='evenodd'></path>
              </svg>
            </div>
            <b className='text-xl text-gray-800'>Exceptional Customer Service</b>
          </div>
          <p className='text-gray-600 leading-relaxed'>
            Our dedicated customer support team is available 24/7 to assist you. From product inquiries to order tracking, 
            returns, and exchanges, we're here to ensure your satisfaction at every step of your shopping journey.
          </p>
        </div>
      </div>

      {/* Statistics Section */}
      <div className='bg-gradient-to-r from-purple-600 to-pink-600 py-16 mb-20'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white'>
            <div className='space-y-2'>
              <div className='text-4xl font-bold'>10K+</div>
              <div className='text-lg opacity-90'>Happy Customers</div>
            </div>
            <div className='space-y-2'>
              <div className='text-4xl font-bold'>500+</div>
              <div className='text-lg opacity-90'>Products</div>
            </div>
            <div className='space-y-2'>
              <div className='text-4xl font-bold'>50+</div>
              <div className='text-lg opacity-90'>Brands</div>
            </div>
            <div className='space-y-2'>
              <div className='text-4xl font-bold'>99%</div>
              <div className='text-lg opacity-90'>Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default About