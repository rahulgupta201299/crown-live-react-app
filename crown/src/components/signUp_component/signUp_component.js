import React, { Component } from 'react'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../customButton/customButton'
import './signUp_component.scss'
import { auth, createUserProfileDocument } from '../firebase/firebase'
export class signUp_component extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             displayName: '',
             email: '',
             password: '',
             confirmPassword: '',
             err: ''
        }
    }
     handleSubmit=async event =>{
         event.preventDefault()
         const {displayName,email,password,confirmPassword}=this.state
         if(password!==confirmPassword){
             alert("passwords don't match")
             return;
         }

         try{
             const {user} = await auth.createUserWithEmailAndPassword(email,password)

             createUserProfileDocument(user, {displayName});

             this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
             })
         }catch(error){
             this.setState({err: error.message})
             console.log(error)
         }
     }
     handleChange=e=>{
         const {name,value}=e.target
         this.setState({ [name]: value})
     }
    render() {
        const {displayName,email,password,confirmPassword,err}=this.state
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <p style={{color:"red"}}>{err}</p>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName" value={displayName} onChange={this.handleChange} label="Display Name" required />
                    <FormInput type="email" name="email" value={email} onChange={this.handleChange} label="email" required />
                    <FormInput type="password" name="password" value={password} onChange={this.handleChange} label="password" required />
                    <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} label="confirmPassword" required />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default signUp_component
