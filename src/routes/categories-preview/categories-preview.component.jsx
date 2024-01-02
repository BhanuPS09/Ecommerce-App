import { categoriesContext } from "../../components/context/categories.context";
import { Fragment, useContext } from "react";
import { CategoryPreview } from "../../components/category-preview/category-preview.component";

export const CategoriesPreview = () => {

    const { categoriesState } = useContext(categoriesContext);
    return (
        <Fragment>
            {Object.keys(categoriesState).map((title) => {
                const products = categoriesState[title];
                return (
                    <CategoryPreview key={title} title={title} products={products} />

                );


            })}
        </Fragment>
    );
}