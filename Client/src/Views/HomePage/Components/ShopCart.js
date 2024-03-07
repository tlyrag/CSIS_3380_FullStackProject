import React from 'react';

const ShopCart = (props) => {
    console.log('cartProduct:', props.cartProduct);

    return (
        <div>
            <h1>Your Shopping Cart</h1>
            <ul>
                {props.cartProduct.map((item, index) => (
                    <li key={index}>
                        <p>{item.product.title}</p>
                        <p>Price: ₹{item.product.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        {/* Add any additional information you want to display */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShopCart;