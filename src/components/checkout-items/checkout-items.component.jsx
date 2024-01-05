import "./checkout-item.styles.scss";
import { useContext } from "react";
import { cartContext } from "../context/cart.context";

export const CheckOutItems = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const { clearCart, addItem, removeItem } = useContext(cartContext);
    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div onClick={() => {
                    removeItem(cartItem);
                }} className="arrow">&#10094;</div>
                <span className="value">{quantity}</span>
                <div onClick={() => {
                    addItem(cartItem);
                }} className="arrow">&#10095;</div>
            </span>
            <span className="price"> <i class="ri-money-rupee-circle-line"></i>{price}</span>
            <div onClick={() => {
                clearCart(cartItem)
            }} className="remove-button">&#10005;</div>

        </div>
    );
}