import "./category-preview.styles.scss";
import { ProductCard } from "../product-card/product-card.component";
import { Link } from "react-router-dom";

export const CategoryPreview = ({title, products}) => {


    return (
        <div className="category-preview-container">
            <h2>
                <span className="title"><Link to={title}>{title.toUpperCase()}</Link></span>
            </h2>
            <div className="preview">
                {
                    products.filter((_, index) => {
                        return (index < 4);

                    }).map((element) => {
                        return (<ProductCard key={element.id} data={element}></ProductCard>);
                    
                    })
                }

            </div>

        </div>
    );

}