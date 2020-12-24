import React from 'react'
import './signIn_component.scss'
import SignIn from '../signIn/signIn'
import SignUp from '../signUp_component/signUp_component'
function signIn_component() {
    return (
        <div className="sign-in-out">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default signIn_component
