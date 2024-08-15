import { Link } from "react-router-dom";
import { Rating } from "./Rating";

export const ProductCard = ({ product }) => {

    const { id, name, overview, price, rating, poster, image_local, best_seller } = product;

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
        <Link to={`/products/${id}`} className='relative'>
        { best_seller &&
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
        }
            <img src={image_local} alt={name} className='rounded-t-lg w-full h-64'/>
        </Link>
        <div className='p-5'>
            <Link to={`/products/${id}`}>
                <h5 className='
                    mb-2
                    text-2xl
                    font-bold
                    tracking-tight
                    text-gray-900
                    dark:text-white
                '>
                    {name}
                </h5>
            </Link>
            <p className='
                text-justify
                mb-3
                font-normal
                text-gray-700
                dark:text-gray-400
            '>
                {overview}
            </p>
            <div className='flex items-center my-2'>
                <Rating rating={rating} />

            </div>

            <p className='flex justify-between items-center'>
                <span className='text-2xl dark:text-gray-200'>
                    <span>$</span><span>{price}</span>
                </span>
                <button className='inline-flex bg-blue-700 hover:bg-blue-800 rounded-lg text-white py-2 px-3 text-center font-medium items-center'>Add To Cart <i className="ml-2 bi bi-plus-lg"></i></button>
                {/* <button className='inline-flex bg-red-600 hover:bg-red-800 rounded-lg text-white py-2 px-3 text-center font-medium items-center'>Remove Item <i className="ml-2 bi bi-trash3-fill"></i></button> */}
            </p>
        </div>
    </div>
  )
}
