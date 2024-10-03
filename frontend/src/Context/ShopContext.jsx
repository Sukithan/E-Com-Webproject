import { createContext, useEffect, useState } from "react";
import { products,productCategoriesOne,productCategoriesTwo,productCategoriesThree, productCategoriesFour,productCategoriesFive,productCategoriesSix,productCategoriesSeven,productCategoriesEight,productCategoriesNine,productCategoriesTen, } from '../assets/assets'; 
import {toast} from "react-toastify"

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const [cartItems,setCartItems] = useState({});
    const currency = "$";
    const delivery_fee = 10;

    const addToCart = async (itemId) => {

        if(true){
            toast.error("You have Selected");
        }

        let cartData = { ...cartItems };
    
        if (cartData[itemId]) {
            cartData[itemId] += 1;
        } else {
            cartData[itemId] = 1;
        }
    
        setCartItems(cartData);
    };

    const getCartCount = async () => {
        let count = 0; 
        let cartData = { ...cartItems }; 
        count = Object.values(cartData).reduce((acc, qty) => acc + qty, 0); // Sum all quantities
        return count;
    };
    
    // useEffect(() => {
    //     const updateCartCount = async () => {
    //         const count = await getCartCount();
    //         console.log(count);
    //     };
    //     updateCartCount();
    // }, [cartItems]);    
    

    // useEffect(() => {
    //     console.log(cartItems);
    // },[addToCart])
    

    const value = {
        products,
        currency,
        delivery_fee,
        productCategoriesOne,
        productCategoriesTwo,
        productCategoriesThree,
        productCategoriesFour,
        productCategoriesFive,
        productCategoriesSix,
        productCategoriesSeven,
        productCategoriesEight,
        productCategoriesNine,
        productCategoriesTen,
        addToCart,
        cartItems,
        getCartCount,

    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
