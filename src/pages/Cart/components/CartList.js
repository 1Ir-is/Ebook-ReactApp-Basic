import React from 'react';
import { CartCard } from './CartCard'; 

export const CartList = () => {
  return (
    <>
        <section className='text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8'>
            <p>My Cart</p>
        </section>

        <section>
            <CartCard />
            <CartCard />
            <CartCard />
        </section>

        <section className="max-w-4xl m-auto">
            <div className='flex flex-col p-2 border-b dark:border-slate-700 text-lg dark:text-slate-100'>
                <p className='flex justify-between my-2 text-2xl'>
                    <span className='font-semibold'>Total Amount:</span>
                    <span>$100</span>
                </p>
            </div>
            <div className='text-right my-5'>
                <button type='button' className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-base px-7 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700'>
                    PLACE ORDER <i className='bi bi-arrow-right'></i>
                </button>
            </div>
        </section>
    </>
  )
}
