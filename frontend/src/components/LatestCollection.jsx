// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from './Title';
// import ProductItem from './ProductItem';

// function LatestCollection() {

//     const {products} = useContext(ShopContext);
//     const [latestProducts, setLatestProducts] = useState([]);

//     useEffect(()=>{
//        setLatestProducts(products.slice(0,10));
//     },[])
    
//   return (
//     <div className='my-10'>
//        <div className='text-center py-8 text-3xl'>
//             <Title text1={'LATEST'} text2={'COLLECTIONS'} />
//             <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Elevate your wardrobe with our handpicked collection of elegant, trendy, and timeless fashion.<br/>
//             Shop the latest styles crafted for every occasion and every you.</p>
//        </div>

//        {/* Rendering Products */}
//        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
//          {
//             latestProducts.map((item,index)=>(
//                 <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
//             ))
//          }
//        </div>


//     </div>
//   )
// }

// export default LatestCollection


import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'
import Slider from 'react-slick'

function LatestCollection() {
    const { products } = useContext(ShopContext)
    const [latestProducts, setLatestProducts] = useState([])

    useEffect(() => {
        setLatestProducts(products.slice(0, 5))
    }, [products])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, 
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }

    return (
        <div className='bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTIONS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 font-serif'>
                    Elevate your wardrobe with our handpicked collection of elegant, trendy, and timeless fashion.<br />
                    Shop the latest styles crafted for every occasion and every you.
                </p>
            </div>

            {/* Carousel Slider */}
            <div className="pb-8">
            <Slider {...settings}>
                {
                    latestProducts.map((item, index) => (
                        <div key={index} className="px-2"> {/* padding to space between items */}
                            <ProductItem
                                id={item._id}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                            />
                        </div>
                    ))
                }
            </Slider>
            </div>
            <style jsx>{`
                .slick-dots {
                    background-color: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(139, 92, 246, 0.1)) !important;
                    padding: 10px 20px !important;
                    border-radius: 25px !important;
                    margin: 20px auto 0 !important;
                    width: fit-content !important;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) !important;
                    position: relative !important;
                    bottom: 0 !important;
                }
                
                .slick-dots li button:before {
                    color: #9CA3AF !important;
                    font-size: 12px !important;
                }
                
                .slick-dots li.slick-active button:before {
                    color: #8B5CF6 !important;
                }
            `}</style>
        </div>
    )
}

export default LatestCollection


