import "./product-card.styles.scss";
import { Button } from "../buttons/buttons.component";
import { useContext } from "react";
import { cartContext } from "../context/cart.context";

export const ProductCard = ({ data }) => {
    const { name, imageUrl, price } = data;
    const { addItem } = useContext(cartContext);

    const addItemTo = () => {
        addItem(data);

    }

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType="inverted" onClick={addItemTo}> Add to card</Button>

        </div>

    );

}