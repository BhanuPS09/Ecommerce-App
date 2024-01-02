import "./cart-item.styles.scss";

export const CardItem = ({ selectedItem }) => {
    const { name, quantity, imageUrl, price } = selectedItem;
    return (
        <div className="cart-item-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity} x {price}</span>
            </div>
        </div>
    );

}