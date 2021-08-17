
import React, { Component } from 'react';
import CartItem from './CartItem';
import { cartData } from './cart.constants';

class Cart extends Component {
    render() {
        return (

            <div className="container">
                <div className="banner">
                    <img src="https://my.justine.co.za/mediamarket-za-jt/8806/j1491-justine-sample-shop-banner-v2_unq_3e14fbb2d55d4347a08ab954a6247f10.jpg" />
                </div>
                <div className="shopping-cart">
                    <span className="title">
                        <h3>Your Shopping Bag ({cartData.lineItems.length})</h3>
                        <button link="" className="add-to-cart-button">
                            Go to checkout
                        </button>
                    </span>
                    {cartData.lineItems.map((value, index) => {
                        return <div key={Date.now()}><CartItem cartItem={value} /></div>
                    })}
                    <span className="title">
                        <input type="text" name="name" placeholder="Enter promo code" className="apply-promo-text" />
                        <button link="" className="apply-promo-button">
                            Apply
                        </button>
                    </span>
                    <span className="sub-total-price">
                        <span className="sub-total-price-display"><div>Subtotal : ${cartData.totalPrice.centAmount / 100}</div></span>
                    </span>
                    <span className="title">
                        <a href="">Continue Shopping</a>
                        <button link="" className="add-to-cart-button">
                            Go to checkout
                        </button>
                    </span>
                </div>
            </div>
        )
    }
}

export default Cart;
