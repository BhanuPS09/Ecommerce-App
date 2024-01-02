import { useState, createContext, useEffect } from "react"

const addCartItem = (cardItems, itemtoadd) => {

    const itemFound = cardItems.find((elem) => {
        return (elem.id === itemtoadd.id);

    });

    if (itemFound) {
        return (cardItems.map((element) => {
            if (element.id === itemtoadd.id) {
                return ({ ...element, quantity: element.quantity + 1 });
            }
            else {
                return (element);
            }
        }));

    } else {
        return ([...cardItems, { ...itemtoadd, quantity: 1 }]);
    }


}

const removeCardItems = (cardItems, carditemtoremove) => {

    const itemFound = cardItems.find((elem) => {
        return (elem.id === carditemtoremove.id);

    });

    if (itemFound.quantity === 1) {
        return (
            cardItems.filter((elem) => {
                return (elem.id !== itemFound.id);

            })
        );
    }


    return (cardItems.map((elem) => {
        if (elem.id === itemFound.id) {
            return ({ ...elem, quantity: elem.quantity - 1 });
        }
        else {
            return (elem);

        }

    }));

}

const clearItemFromCart = (cardItems, cartitemtoclear) => {
    return (
        cardItems.filter((elem) => {
            return (elem.id !== cartitemtoclear.id);

        })
    );


}

export const cartContext = createContext({
    isCartOpen: false,
    changeCart: () => { },
    cardItems: [],
    addItem: () => { },
    removeItem: () => { },
    cardQuantity: 0,
    clearCart: () => { },
    cartTotal:0
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, changeCart] = useState(false);
    const [cardItems, addItemToCart] = useState([]);
    const [cardQuantity, changeQuantity] = useState(0);
    const [cartTotal,changeTotal]=useState(0);

    useEffect(() => {
        const newCartTotal = cardItems.reduce(
            (total, item) => total + item.quantity * item.price, 0
        );

        changeTotal(newCartTotal);

    }, [cardItems]);


    const addItem = (itemtoadd) => {
        changeQuantity(cardQuantity + 1);
        addItemToCart(addCartItem(cardItems, itemtoadd));
    }

    const removeItem = (carditemtoremove) => {
        changeQuantity(cardQuantity - 1);
        addItemToCart(removeCardItems(cardItems, carditemtoremove));
    }

    const clearCart = (item) => {
        changeQuantity(cardQuantity - item.quantity);
        addItemToCart(clearItemFromCart(cardItems, item));
    }


    const value = { isCartOpen, changeCart, cardItems, addItem, cardQuantity, removeItem, clearCart ,cartTotal};
    return (
        <cartContext.Provider value={value}>
            {children}
        </cartContext.Provider>);
}
