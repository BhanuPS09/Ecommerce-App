import { Button } from "../buttons/buttons.component";
import "./cart-dropdown.styles.scss";
import { CardItem } from "../card-item/card-item";
import { useContext } from "react";
import { cartContext } from "../context/cart.context";
import { useNavigate ,Link} from "react-router-dom";

export const DropDown = () => {
    const { cardItems } = useContext(cartContext);
    const navigate = useNavigate();
    const navigation = () => {
        return (navigate("/checkout"));

    }

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cardItems.map((element) => {
                    return (<CardItem key={element.id} selectedItem={element} />);
                })}
                <Button onClick={navigation}>GO TO CHECKOUT</Button>
            </div>
        </div>
    );
}