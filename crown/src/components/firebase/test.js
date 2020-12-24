import firebase from 'firebase/app'
import 'firebase/firestore'

const firestore=firebase.firestore()

firestore.collection('users').doc('zunPm2ZoLZZSueKoaIhD').collection('cartItems').doc('EX3T2Spi4jLSufX4gkbU')
firestore.doc('/users/zunPm2ZoLZZSueKoaIhD/cartItems/EX3T2Spi4jLSufX4gkbU')
firebase.collection('/users/zunPm2ZoLZZSueKoaIhD/cartItems')