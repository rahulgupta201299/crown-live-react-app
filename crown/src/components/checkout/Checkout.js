import React from 'react'
import './Checkout.scss'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartItems,selectCartTotal} from '../redux/cart/cart-selector'
import CheckoutItem from '../checkout-item/CheckoutItem'
import StripeButton from '../stripe-button/StripeButton'
function Checkout(props) {
    return (
        <div className="checkout-page">
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
            {
                props.cartItems.map(cartItem=>
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                    )
            }
            <div className="total">
                <span>TOTAL: Rs. {props.total}</span>
            </div>
            <StripeButton price={props.total} />
        </div>
    )
}

const mapStateToProps=createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})


export default connect(mapStateToProps)(Checkout)
