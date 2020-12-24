import React from 'react'
import './Header.scss'
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import {auth} from '../firebase/firebase'
import CartIcon from '../cart-icon/CartIcon' 
import CartDropdown from '../cart-dropdown/CartDropdown'
function header({currentUser,hidden}) {
    const signout=()=>{
        auth.signOut()
        window.location.reload(false)
    }
    return (
        <div className="header">
            <Link className="logo-container" to="/">Logo</Link>
            <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/shop">CONTACT</Link>
            {
                currentUser?
                (<div className="option" onClick={signout}>SIGN OUT</div>)
                : (<Link className="option" to="/signIn">SIGN IN</Link>)
            }
            <CartIcon />
        </div>
        {
            hidden? <CartDropdown /> : null
        }
        </div>
    )
}

const mapStateToProps=({user: {currentUser},cart:{hidden}})=>({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(header)
