import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyAkzRepjIoqBO5JnhcawlCgrpkIjsJEKtk',
  authDomain: 'crwn-clothing-deb4c.firebaseapp.com',
  projectId: 'crwn-clothing-deb4c',
  storageBucket: 'crwn-clothing-deb4c.appspot.com',
  messagingSenderId: '1030915162512',
  appId: '1:1030915162512:web:7476a15894aba9d05f7315',
  measurementId: 'G-TV7SKNRFKM',
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  console.log(firestore.doc('users/1238asdf98asfd'))
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
