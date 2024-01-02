import "./category.styles.scss";
import { useParams } from "react-router-dom";
import { categoriesContext } from "../../components/context/categories.context";
import { useContext, useState, useEffect, Fragment } from "react";
import { ProductCard } from "../../components/product-card/product-card.component";

export const Category = () => {
  const { category } = useParams();
  const { categoriesState } = useContext(categoriesContext);
  const [products, setProducts] = useState(categoriesState[category]);

  useEffect(() => {
    setProducts(categoriesState[category]);
  }, [category, categoriesState]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((element) => {
            return <ProductCard key={element.id} data={element} />;
          })}
      </div>
    </Fragment>
  );
};
