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

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapshot = await userRef.get()
  if (!snapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
