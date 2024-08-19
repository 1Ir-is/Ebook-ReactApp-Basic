import { createContext , useContext } from "react"

const initialState = {
    cartList: [],
    total: 0
}

const CardContext = createContext(initialState);

export const CartProvider = ({children}) => {

    const value =  {
        cartList: [],
        total: 0
    }

    return (
        <CardContext.Provider value={value}>
            {children}
        </CardContext.Provider>
    )
}

export const useCart = () => useContext(CardContext);