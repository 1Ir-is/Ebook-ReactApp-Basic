import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export const OrderSuccess = ({ data }) => {
  const [paymentID, setPaymentID] = useState('');

  useEffect(() => {
    const generateID = () => {
      return Math.floor(100000000 + Math.random() * 900000000).toString(); // 9-digit random number
    };
    setPaymentID(generateID());
  }, []);

  return (
    <section className="text-xl text-center max-w-4xl mx-auto my-10 py-5 dark:text-slate-100 border dark:border-slate-700 rounded">
        <div className="my-5">
            <p className="bi bi-check-circle text-green-600 text-7xl mb-5"></p>
            <p>Thank you <span className='font-semibold'>{data.user.name}</span> for the order!</p>
            <p>Your Order ID: {data.id} </p>          
        </div>
        <div className="my-5">
            <p>Your order is confirmed.</p>
            <p>Please check your mail <span className='text-blue-600 dark:text-blue-400 cursor-pointer'>{data.user.email}</span> for the eBook.</p>
            <p className="my-5">Payment ID: {paymentID}</p>
        </div>
        <Link to="/products" type="button" className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">Continue Shopping <i className="ml-2 bi bi-cart"></i></Link>
    </section>
  );
};
