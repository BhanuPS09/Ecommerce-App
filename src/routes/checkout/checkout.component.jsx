import "./checkout.styles.scss";
import { useContext } from "react";
import { cartContext } from "../../components/context/cart.context";
import { CheckOutItems } from "../../components/checkout-items/checkout-items.component";


export const CheckOut = () => {
    const { cardItems, addItem, removeItem, cartTotal } = useContext(cartContext);
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>

                <div className="header-block">
                    <span>Description</span>
                </div>

                <div className="header-block">
                    <span>Quantity</span>

                </div>

                <div className="header-block">
                    <span>Price</span>
                </div>

                <div className="header-block">
                    <span>Remove</span>
                </div>

            </div>

            {cardItems.map((items) => {
                return (
                    < CheckOutItems key={items.id} cartItem={items} />
                );

            })}

            <span className="total">Total :{cartTotal}</span>


        </div>
    );
}