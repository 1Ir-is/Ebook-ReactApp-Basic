import React from 'react'
import { OrderSuccess } from './components/OrderSuccess';
import { OrderFail } from './components/OrderFail';
import { useLocation } from 'react-router-dom';
import { useTitle } from '../../hooks';

export const OrderPage = () => {
    useTitle("Order Status");
    const { state } = useLocation();
    return (
        <main>
            { state.status ? <OrderSuccess data = {state.data}/> : <OrderFail/>}
        </main>
    )
}
