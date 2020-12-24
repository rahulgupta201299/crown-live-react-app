import React from 'react'
import {connect} from 'react-redux'
import './CartDropDown.scss'
import { withRouter} from 'react-router-dom'
import CartItem from '../cart-item/CartItem'
import {toggleCartHidden} from '../redux/cart/cart-actions'
import {selectCartItems, selectCartItemsCount} from '../redux/cart/cart-selector'
import CustomButton from '../customButton/customButton'
function CartDropdown({cartItems,history,dispatch}) {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length?
                   ( cartItems.map(cartItem=><CartItem key={cartItem.id} item={cartItem} />)):
                   (<span className="empty-message">Your cart is empty</span>)
                }
            </div>
            <CustomButton onClick={()=>{
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps=(state)=>({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown)
)