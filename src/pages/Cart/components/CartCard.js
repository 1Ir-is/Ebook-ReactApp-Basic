import React from 'react'
import { Link } from 'react-router-dom'


export const CartCard = () => {
  return (
    <div className='flex flex-wrap justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5'>
        <div className='flex'>
            <Link>
                <img className='w-32 rounded' src="" alt="name" />
            </Link>
            <div>
                <Link>
                    <p className='text-lg ml-2 dark:text-slate-200'>NAME</p>
                </Link>
                <button className='text-base ml-2 mt-2 text-rose-400'>Remove</button>
            </div>
        </div>
        <div className='text-lg m-2 dark:text-slate-200'>
            <span>$100</span>
        </div>
    </div>
  )
}
