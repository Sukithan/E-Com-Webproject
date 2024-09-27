import { createContext } from "react";
import { products,productCategoriesOne,productCategoriesTwo,productCategoriesThree, productCategoriesFour,productCategoriesFive,productCategoriesSix,productCategoriesSeven,productCategoriesEight,productCategoriesNine,productCategoriesTen, } from '../assets/assets'; 

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = "$";
    const delivery_fee = 10;

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
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
