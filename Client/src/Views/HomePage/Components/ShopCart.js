import React, { useState } from 'react';
import './ShopCart.css';

const ShopCart = (props) => {
    const [selectedShipping, setSelectedShipping] = useState("");

    
    const showCart = () => {
        props.setShowCart(false);
    }

    const handleShippingChange = (e) => {
        setSelectedShipping(e.target.value);
    };

    const handleIncrement = (index) => {
        const updatedCart = [...props.cartProduct];
        updatedCart[index].quantity += 1;
        props.setCartProduct(updatedCart);
    };

    const handleDecrement = (index) => {
        const updatedCart = [...props.cartProduct];
        if (updatedCart[index].quantity > 1) {
            updatedCart[index].quantity -= 1;
            props.setCartProduct(updatedCart);
        }
    };

    const handleDelete = (index) => {
        const updatedCart = [...props.cartProduct];
        updatedCart.splice(index, 1);
        props.setCartProduct(updatedCart);
    };

    const calculateTotal = () => {
        const subtotal = props.cartProduct.reduce((total, item) => total + item.product.price * item.quantity, 0);
        const shippingCost = selectedShipping === "standard" ? 5 : selectedShipping === "premium" ? 10 : 0;
        return subtotal + shippingCost;
    };

    return (
        <div className="cart-overlay">
            <div className="shop-card">
                <div className="row">
                    <div className="col-md-8 cart">
                        <div className="title">
                            <div className="row">
                                <div className="col">
                                    <h4>
                                        <b>Shopping Cart</b>
                                    </h4>
                                </div>
                                <div className="col align-self-center text-right text-muted">
                                    {props.cartProduct.length} items
                                </div>
                            </div>
                        </div>
                        {props.cartProduct.map((item, index) => (
                            <div key={index} className="row border-top border-bottom">
                                <div className="row main align-items-center">
                                    <div className="col-2">
                                        <img
                                            className="img-fluid"
                                            src={item.product.image}
                                            alt={item.product.title}
                                        />
                                    </div>
                                    <div className="col">
                                        <div className="row text-muted">{item.product.title}</div>
                                    </div>
                                    <div className="col">
                                        <button className="decrement" onClick={() => handleDecrement(index)}>
                                            -
                                        </button>
                                        <span className="border"> {item.quantity}</span>
                                        <button className="increment" onClick={() => handleIncrement(index)}>
                                            +
                                        </button>
                                    </div>
                                    <div className="col">
                                        $ {item.product.price * item.quantity}
                                        <button className="delete-element" onClick={() => handleDelete(index)}>
                                            &#10005;
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="back-to-shop">
                            <button className="text-muted" onClick={() => showCart()}>Back to shop</button>
                        </div>
                    </div>
                    <div className="col-md-4 summary">
                        <div>
                            <h5>
                                <b>Summary</b>
                            </h5>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col" style={{ paddingLeft: 0 }}>
                                ITEMS {props.cartProduct.length}
                            </div>
                            <div className="col text-right">
                                ${' '}
                                {props.cartProduct
                                    .reduce((total, item) => total + item.product.price * item.quantity, 0)
                                    .toFixed(2)}
                            </div>
                        </div>
                        <form>
                            <p>SHIPPING</p>
                            <select onChange={(e) => handleShippingChange(e)} value={selectedShipping}>
                                <option value="">Select Shipping</option>
                                <option value="standard">Standard Delivery - $5.00</option>
                                <option value="premium">Premium Delivery - $10.00</option>
                            </select>
                            <p>Promotion code</p>
                            <input id="code" placeholder="Enter your code" />
                        </form>
                        <div
                            className="row"
                            style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}
                        >
                            <div className="col">TOTAL PRICE</div>
                            <div className="col text-right">
                                $ {calculateTotal().toFixed(2)}
                            </div>
                        </div>
                        <button className="btn-checkout" style={{ borderColor: 'grey' }}>
                            CHECKOUT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopCart;

