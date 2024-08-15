import React from 'react'
import image from '../../src/assets/images/hero.avif'

export const ProductDetail = () => {
  return (
    <main>
        <section>
            <h1 className='mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200'>The Complete Guide to Backend Development</h1>
            <p className='mb-5 text-lg text-center text-gray-900 dark:text-slate-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde quisquam magni vel eligendi nam.</p>
            <div className='flex flex-wrap justify-around'>
                <div className='max-w-xl my-3'>
                    <img className='rounded' src={image} alt="" />
                </div>
                <div className='max-w-xl my-3'>
                    <p className='text-3xl font-bold text-gray-900 dark:text-slate-200'>
                        <span className='mr-1'>$</span>
                        <span>29</span>
                    </p>
                    <p className='my-3'>
                        <span>
                            <i className='bi bi-star-fill text-yellow-500'></i>
                        </span>
                    </p>
                    <p className='my-4 select-none'>
                        <span className='font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2'>BEST SELLER</span>
                        <span className='font-semibold text-emerald-600 border bg-slate-100 rounded-lg px-3 py-1 mr-2'>INSTOCK</span>
                        <span className='font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2'>OUTSTOCK</span>
                        <span className='font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2'>7 MB</span>
                    </p>
                    <p className='my-3'>
                        <button className='inline-flex bg-blue-700 hover:bg-blue-800 rounded-lg text-white py-2 px-5 text-center font-medium items-center'>Add To Cart <i className="ml-2 bi bi-plus-lg"></i></button>
                        {/* <button className='inline-flex bg-red-600 hover:bg-red-800 rounded-lg text-white py-2 px-5 text-center font-medium items-center'>Remove Item <i className="ml-2 bi bi-trash3-fill"></i></button> */}
                    </p>
                    <p className='text-lg text-justify text-gray-900 dark:text-slate-200'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aut, vel ipsum maxime quam quia, quaerat tempore minus odio exercitationem illum et eos, quas ipsa aperiam magnam officiis libero expedita quo voluptas deleniti sit dolore? Praesentium tempora cumque facere consectetur quia, molestiae quam, accusamus eius corrupti laudantium aliquid! Tempore laudantium unde labore voluptates repellat, dignissimos aperiam ad ipsum laborum recusandae voluptatem non dolore. Reiciendis cum quo illum. Dolorem, molestiae corporis.
                    </p>
                </div>
            </div>
        </section>
    </main>
  )
}
