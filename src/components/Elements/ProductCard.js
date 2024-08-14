import React from 'react'
import logo from '../../assets/images/hero.avif' 

export const ProductCard = () => {
  return (
    <div className='
        m-3
        max-w-sm
        bg-white
        rounded-lg
        border 
        border-gray-200
        shadow-md
        dark:bg-gray-800
        dark:border-gray-700
    '>
        <a href="" className='relative'>
            <span className='
                absolute
                top-4
                left-2
                px-2
                bg-orange-500
                bg-opacity-90
                text-white
                rounded    
            '>
                Best Seller
            </span>
            <img src={logo} alt="" className='rounded-t-lg w-full h-64'/>
        </a>
        <div className='p-5'>
            <a href="">
                <h5 className='
                    mb-2
                    text-2xl
                    font-bold
                    tracking-tight
                    text-gray-900
                    dark:text-white
                '>
                    Java Course
                </h5>
            </a>
            <p className='
                text-justify
                mb-3
                font-normal
                text-gray-700
                dark:text-gray-400
            '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid sit molestiae dolores. Tempora quis officiis unde!</p>
            <div className='flex items-center my-2'>
                <i className="bi bi-star-fill text-yellow-500 mr-1"></i>
                <i className="bi bi-star-fill text-yellow-500 mr-1"></i>
                <i className="bi bi-star-fill text-yellow-500 mr-1"></i>
                <i className="bi bi-star-fill text-yellow-500 mr-1"></i>
                <i className="bi bi-star-fill text-yellow-500 mr-1"></i>
            </div>

            <p className='flex justify-between items-center'>
                <span className='text-2xl dark:text-gray-200'>
                    <span>$</span><span>29</span>
                </span>
                <button className='inline-flex bg-blue-700 hover:bg-blue-800 rounded-lg text-white py-2 px-3 text-center font-medium items-center'>Add To Cart <i className="ml-2 bi bi-plus-lg"></i></button>
                {/* <button className='inline-flex bg-red-600 hover:bg-red-800 rounded-lg text-white py-2 px-3 text-center font-medium items-center'>Remove Item <i className="ml-2 bi bi-trash3-fill"></i></button> */}
            </p>
        </div>
    </div>
  )
}
