// import React from 'react'

// const Title = ({text1, text2}) => {
//   return (
//     <div className='inline-flex gap-2 items-center mb-3'>
//        <p className='w-8 sm:w-12 h-[2px] bg-gray-500'></p>
//        <p className='text-gray-500'>{text1} <span className='text-gray-700 font-medium'>{text2}</span></p>
//        <p className='w-8 sm:w-12 h-[2px] bg-gray-500'></p>
//     </div>
//   )
// }

// export default Title


import React from 'react'

const Title = ({ text1, text2 }) => {
  return (
    <div className="flex items-center justify-center w-full px-4 gap-4 mb-3">
      <div className="h-[2px] bg-gray-300 flex-grow"></div>
      <p className="text-blue-900 whitespace-nowrap font-serif">
        {text1} <span className="text-blue-900 font-medium font-serif">{text2}</span>
      </p>
      <div className="h-[2px] bg-gray-300 flex-grow"></div>
    </div>
  )
}

export default Title
