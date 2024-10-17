import { createContext } from "react";
import { productsItems } from "../../public/assets/assets2";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = "$";
    const delivery_fee = 10;
    const value = {
        // products,
        currency,
        delivery_fee,
        productsItems,
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
