import React from 'react';
import { CartCard } from './CartCard'; 

export const CartList = () => {
  return (
    <>
        <section>
            <p>My Cart</p>
        </section>

        <section>
            <CartCard />
            <CartCard />
            <CartCard />
        </section>
    </>
  )
}
