import { createContext, useState, useEffect } from "react";
// import {SHOP_DATA} from "../../shop-data.js";
import { getCategoriesAndDocuments } from "../../firebase/firebase.db";

export const categoriesContext = createContext({});

export const Categories = ({ children }) => {
    const [categoriesState, changeCategoriesState] = useState({});
    const value = { categoriesState, changeCategoriesState };

    // useEffect(()=>{
    //     addCollectionAndDocument("categories",SHOP_DATA);
    // },[]);

    useEffect(() => {
        const getCategoryMap = async () => {
            const categoryMap = await getCategoriesAndDocuments('categories');
            console.log(categoryMap);
            changeCategoriesState(categoryMap);
        }

        getCategoryMap();

    }, []);

    return (<categoriesContext.Provider value={value}>
        {children}
    </categoriesContext.Provider>);
} 