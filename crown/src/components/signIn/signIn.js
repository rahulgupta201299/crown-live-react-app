import React, { Component } from 'react'
import './signIn.scss'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../customButton/customButton'
import {signInWithGoogle,auth} from '../firebase/firebase'
export class signIn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: '',
             password: '',
             err: ''
        }
    }
    handleSubmit=async e=>{
        e.preventDefault()
        const {email,password}= this.state
        try{
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({email: '',password: ''})
        }catch(error){
            this.setState({err: error.message})
            console.log(error.message)
        }
    }
    handleChange=e=>{
        const {value,name}=e.target
        this.setState({[name]: value})
    }
    render() {
        const {err}=this.state
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span className="title">Sign in with your email and password</span>
                <p style={{color:"red"}}>{err}</p>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" label="email" type="email" value={this.state.email} handleChange={this.handleChange.bind(this)} required /> 
                    <FormInput name="password" label="password" type="password" value={this.state.password} handleChange={this.handleChange.bind(this)} required />
                    <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default signIn
