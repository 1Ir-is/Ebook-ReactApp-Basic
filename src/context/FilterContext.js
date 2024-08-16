import { createContext, useContext } from "react"

const filterInitialState = {
    productList: [],
    onInStock: false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null,
}

const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({children}) => {

    const value = {
        productList: [1]
    }

    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext);