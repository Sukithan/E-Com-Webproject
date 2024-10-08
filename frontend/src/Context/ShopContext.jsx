import { createContext, useEffect, useState } from "react";
import { products,productCategoriesOne,productCategoriesTwo,productCategoriesThree, productCategoriesFour,productCategoriesFive,productCategoriesSix,productCategoriesSeven,productCategoriesEight,productCategoriesNine,productCategoriesTen, } from '../assets/assets'; 
import {toast} from "react-toastify"
import {productsItems} from "../assets/assets2"

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const [cartItems,setCartItems] = useState({});
    const currency = "$";
    const delivery_fee = 10;

    const addToCart = async (itemId) => {
        if (true) {
            toast.error("You have Selected");
        }
    
        let cartData = { ...cartItems };
    
        if (cartData[itemId]) {
            cartData[itemId] += 1;
        } else {
            cartData[itemId] = 1;
        }
    
        setCartItems(cartData);
        console.log('Current cart items:', cartData); // Debug log
    };    

    const getCartCount = async () => {
        let count = 0; 
        let cartData = { ...cartItems }; 
        count = Object.values(cartData).reduce((acc, qty) => acc + qty, 0); 
        return count;
    };

    const incrementCartItem = (itemId) => {
        let cartData = { ...cartItems };
        if (cartData[itemId]) {
            cartData[itemId] += 1;
        }
        setCartItems(cartData);
    };

    const decrementCartItem = (itemId) => {
        let cartData = { ...cartItems };
        if (cartData[itemId] && cartData[itemId] > 1) {
            cartData[itemId] -= 1;
        }
        setCartItems(cartData);
    };

    const removeCartItem = (itemId) => {
        let cartData = { ...cartItems };
        delete cartData[itemId]; 
        setCartItems(cartData); 
    };

    const buyCartItem = (itemId) => {
        let cartData = { ...cartItems };
        delete cartData[itemId]; 
        setCartItems(cartData);
        alert(`Bought ${items.find(item => item._id === id).name}`); 
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
        productsItems,
        incrementCartItem,  
        decrementCartItem,
        removeCartItem,
        buyCartItem,

    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
