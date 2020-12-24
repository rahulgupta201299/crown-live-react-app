import React, { Children } from 'react'
import './customButton.scss'
function customButton({children,isGoogleSignIn,inverted,...otherProps}) {
    return (
        <button className={`${inverted? 'inverted': ''} ${isGoogleSignIn? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default customButton
