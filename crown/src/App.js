import React, { Component } from 'react'
import './css/App.css';
import {setCurrentUser} from './components/redux/user/user-actions'
import {connect} from 'react-redux'
import Homepage from './components/homepage/Homepage.js'
import {Switch,Route,Redirect} from 'react-router-dom'
import Shop from './components/shop/Shop'
import Header from './components/header/Header'
import SignIn from './components/signIn_component/signIn_component'
import Checkout from './components/checkout/Checkout'
import {auth,createUserProfileDocument} from './components/firebase/firebase'
const TopicDetail=(props)=>{
  return(
    <h1>Topic Detail: {props.match.params.topicID}</h1>
  )
}
class App extends Component {

  unsubscribeFromAuth=null;
  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef=await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot=>{
          this.props.setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
        })
      })
      }
      setCurrentUser(userAuth)
    })
  }
  
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
    <div>
      <Header />
      <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop" component={Shop} />
      <Route exact path="/checkout" component={Checkout} />
      <Route path="/signIn" render={()=> this.props.currentUser ? (<Redirect to="/" />): (<SignIn />)} />
      <Route path="/topics/:topicID" component={TopicDetail} />
      </Switch>
    </div>
  );
}
}
const mapStateToProps=({user})=>({
  currentUser: user.currentUser
})
const mapDispatchToProps=dispatch=>({
  setCurrentUser: user=>dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App)
