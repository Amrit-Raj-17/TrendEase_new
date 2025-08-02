// import React from 'react'

// const onSubmitHandler = (event) =>{
//     event.preventDefault();
// }

// function NewsletterBox() {
//   return (
//     <div className='text-center'>
//          <p className='text-2xl font-medium text-gray-800 font-serif'>Subcribe now & get 20% off</p>
//          <p className='font-serif text-gray-400 mt-3'>Be the first to know about new arrivals, exclusive offers, and special discounts. We promise, no spam!
//          </p>
//          <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'><input className='w-full sm:flex-1 outline-none rounded-2xl' type="email" placeholder='Enter Your Email' required></input>
//          <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBCRIBE</button>
//          </form>
//     </div>
//   )
// }

// export default NewsletterBox


import React from 'react'

const onSubmitHandler = (event) => {
  event.preventDefault();
}

function NewsletterBox() {
  return (
    <div className='text-center bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 py-10 px-4 rounded-md shadow-md'>
      <p className='text-2xl font-medium text-indigo-800 font-serif'>
        Subcribe now & get 20% off
      </p>
      <p className='font-serif text-gray-600 mt-3'>
        Be the first to know about new arrivals, exclusive offers, and special discounts. We promise, no spam!
      </p>

      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-300 rounded-2xl bg-white pl-3 shadow-md'>
        <input
          className='w-full sm:flex-1 outline-none rounded-2xl py-3 px-4 text-gray-700'
          type="email"
          placeholder='Enter Your Email'
          required
        />
        <button
          type='submit'
          className='bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white text-xs px-6 py-3 rounded-r-2xl shadow-md transition'
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  )
}

export default NewsletterBox
