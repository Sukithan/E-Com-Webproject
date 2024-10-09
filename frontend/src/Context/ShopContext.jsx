import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { products, productCategoriesOne, productCategoriesTwo, productCategoriesThree, productCategoriesFour, productCategoriesFive, productCategoriesSix, productCategoriesSeven, productCategoriesEight, productCategoriesNine, productCategoriesTen } from '../assets/assets'; 
import { productsItems } from "../assets/assets2";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const currency = "$";
    const delivery_fee = 10;

    // Load cart from localStorage
    useEffect(() => {
        const storedCart = localStorage.getItem('cartItems');
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (itemId, variant) => {
        toast.success("You have Selected");

        let cartData = { ...cartItems };

        // Create unique key based on item ID and variant
        const itemKey = `${itemId}-${variant.color}-${variant.size}`;
        if (cartData[itemKey]) {
            cartData[itemKey].qty += 1; // Increment quantity
        } else {
            cartData[itemKey] = { qty: 1, variant }; // Add new item with variant
        }

        setCartItems(cartData);
        console.log('Current cart items:', cartData); // Debug log
    };    

    const getCartCount = () => {
        let count = 0; 
        let cartData = { ...cartItems }; 
        count = Object.values(cartData).reduce((acc, item) => acc + item.qty, 0); 
        return count;
    };

    const incrementCartItem = (itemKey) => {
        let cartData = { ...cartItems };
        if (cartData[itemKey]) {
            cartData[itemKey].qty += 1; // Increment quantity
        }
        setCartItems(cartData);
    };

    const decrementCartItem = (itemKey) => {
        let cartData = { ...cartItems };
        if (cartData[itemKey] && cartData[itemKey].qty > 1) {
            cartData[itemKey].qty -= 1; // Decrement quantity
        }
        setCartItems(cartData);
    };

    const removeCartItem = (itemKey) => {
        let cartData = { ...cartItems };
        delete cartData[itemKey]; 
        setCartItems(cartData); 
    };

    const buyCartItem = (itemKey) => {
        let cartData = { ...cartItems };
        const item = cartData[itemKey];
        delete cartData[itemKey]; 
        setCartItems(cartData);
        alert(`Bought ${item.variant.color} ${item.variant.size} of ${itemKey}`); 
    };
    
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
