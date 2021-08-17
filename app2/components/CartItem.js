
import React, { Component } from 'react';

class CartItem extends Component {
    render() {
        return (
            <div className="item">
                <div className="image">
                    <img src={this.props.cartItem.variant.images[1].url} alt="" />
                </div>

                <div className="description">
                    <span>{this.props.cartItem.name}</span>
                </div>

                <div className="item-price">${this.props.cartItem.discountedPricePerQuantity}</div>

                <div className="quantity">
                    <button className="plus-btn" type="button" name="button">
                        <span>-</span>
                    </button>
                    <input type="text" name="name" value={this.props.cartItem.quantity} readOnly />
                    <button className="minus-btn" type="button" name="button">
                        <span>+</span>
                    </button>
                </div>

                <div className="total-price">${this.props.cartItem.variant.price}</div>
            </div>

        )
    }
}

export default CartItem;
