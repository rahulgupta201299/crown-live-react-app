import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config={
    apiKey: "AIzaSyCY7ns-IURO1cWu9BYCVA1Au8zckchC5AM",
    authDomain: "crwn-db-1de4a.firebaseapp.com",
    databaseURL: "https://crwn-db-1de4a.firebaseio.com",
    projectId: "crwn-db-1de4a",
    storageBucket: "crwn-db-1de4a.appspot.com",
    messagingSenderId: "87222769610",
    appId: "1:87222769610:web:bc27167e32aecbf251e133",
    measurementId: "G-EQXL6PW7BS"
  }

  export const createUserProfileDocument= async (userAuth, additionalData)=>{
      if(!userAuth) return ;

      const userRef=firestore.doc(`users/${userAuth.uid}`)

      const snapShot=await userRef.get()


      if(!snapShot.exists){
          const {displayName,email}=userAuth
          const createAt=new Date()
          try{
              await userRef.set({
                  displayName,
                  email,
                  createAt,
                  ...additionalData
              })
          }catch(error){
              console.log('error creating user',error.message)
          }
      }
      return userRef
  }
  firebase.initializeApp(config)

  export const auth=firebase.auth();
  export const firestore=firebase.firestore()

  const provider=new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle=()=>auth.signInWithPopup(provider)

  export default firebase;