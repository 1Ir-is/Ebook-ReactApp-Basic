import { createContext, useContext, useReducer } from "react";
import { filterReducers } from "../reducers";

const filterInitialState = {
    productList: [],
    onInStock: false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null,
}

const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({children}) => {

    const [state, dispatch] = useReducer(filterReducers, filterInitialState);

    function initialProductList(products) {
        dispatch({ 
            type: "PRODUCT_LIST", 
            payload: {
                products: products
            } 
        });
    }

    function bestSeller(products){
        return state.bestSellerOnly ? products.filter(product => product.best_seller === true) : products;
    }

    function inStock(products){
        return state.onlyInStock ? products.filter(product => product.in_stock === true) : products;
    }

    function sort(products) {
        if (state.sortBy === "lowtohigh") {
            return products.sort((a, b) => Number(a.price) - Number(b.price));
        }

        if (state.sortBy === "hightolow") { 
            return products.sort((a, b) => Number(b.price) - Number(a.price));
        }

        return products;
    }

    function rating(products) {
        if (state.ratings === "4STARSABOVE") {
            return products.filter((product) => product.rating >= 4);
        }

        if (state.ratings === "3STARSABOVE") {
            return products.filter((product) => product.rating >= 3);
        }

        if (state.ratings === "2STARSABOVE") {
            return products.filter((product) => product.rating >= 2);
        }

        if (state.ratings === "1STARABOVE") {
            return products.filter((product) => product.rating >= 1);
        }

        return products;
    }

    const filteredProducts = sort(rating(inStock(bestSeller(state.productList))));

    const value = {
        products: filteredProducts,
        initialProductList,
        state,
        dispatch
    }

    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext);