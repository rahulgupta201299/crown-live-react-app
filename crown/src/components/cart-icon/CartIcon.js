import React from 'react'
import './CartIcon.scss'
import {connect} from 'react-redux'
import {selectCartItems, selectCartItemsCount} from '../redux/cart/cart-selector'
import {toggleCartHidden} from '../redux/cart/cart-actions'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

function CartIcon({toggleCartHidden,itemCount}) {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
                <ShoppingIcon className="shopping-icon" />
                <span className="item-count">{itemCount}</span>
            </div>
    )
}

const mapDispatchToProps=dispatch=>({
    toggleCartHidden: ()=>dispatch(toggleCartHidden())
})

const mapStateToProps=(state)=>({
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)


/*const mapStateToProps=({cart:{cartItems}})=>({
    itemCount: cartItems.reduce((accumulatedQuantity,cartItem)=>accumulatedQuantity+cartItem.quantity,0)
})*/