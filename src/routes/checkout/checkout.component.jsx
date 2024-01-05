import "./checkout.styles.scss";
import { useContext } from "react";
import { cartContext } from "../../components/context/cart.context";
import { CheckOutItems } from "../../components/checkout-items/checkout-items.component";
import { Button } from "../../components/buttons/buttons.component";
import { loadStripe } from "@stripe/stripe-js";

export const CheckOut = () => {
  const { cardItems, addItem, removeItem, cartTotal } = useContext(cartContext);

  const handlePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51OUPnwSAYSJ7aA7rJmrb0B69cGou15txyCJJROiGwwgrdpgcvvmPLGUb2CIi4aj7LMqZYuSa9pJkyzjJJA3BSOS400DsNxtt4U"
    );

    const body = {
      products: cardItems,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch("https://ecomm-server-bhanups09.onrender.com/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();


    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };

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
        return <CheckOutItems key={items.id} cartItem={items} />;
      })}

      <span className="total">Total :{cartTotal}</span>
      <Button buttonType="google" onClick={handlePayment}>
        CheckOut
      </Button>
    </div>
  );
};
