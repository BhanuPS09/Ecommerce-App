import { ReactComponent as ShoppingCart } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { useContext } from "react";
import { cartContext } from "../context/cart.context";

export const CartIcon = () => {

    const { isCartOpen, changeCart ,cardQuantity} = useContext(cartContext);

    const toggle = () => {
        if (isCartOpen === false) {
            changeCart(true);
        }
        else {
            changeCart(false);
        }
    }

    return (
        <div className="cart-icon-container" onClick={toggle}>
            <ShoppingCart className="shopping-icon" />
            <span className="item-count">{cardQuantity}</span>
        </div>

    );
}