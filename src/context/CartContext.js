import { createContext , useContext, useReducer } from "react";
import { cartReducers } from "../reducers";

const initialState = {
    cartList: [],
    total: 0
}

const CardContext = createContext(initialState);

export const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducers, initialState);

    function addToCart(product) {
        const updatedList = state.cartList.concat(product);
        const updatedTotal = state.total + product.price;

        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        })
    }

    function removeFromCart(product) {

        const updatedList = state.cartList.filter((item) => item.id !== product.id);
        const updatedTotal = state.total - product.price;

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        })
    }

    function clearCart() {
        dispatch({
            type: "CLEAR_CART",
            payload: {
                products: [],
                total: 0
            }
        })
    }


    const value =  {
        cartList: state.cartList,
        total: state.total,
        addToCart,
        removeFromCart,
        clearCart
    }

    return (
        <CardContext.Provider value={value}>
            {children}
        </CardContext.Provider>
    )
}

export const useCart = () => useContext(CardContext);