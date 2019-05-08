import firebase from 'firebase/app'
import 'firebase/firestore'
if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyArj98taPLtYk86WqYnbIkSJGLlU0w4vmE',
    authDomain: 'camshorrorquiz.firebaseapp.com',
    databaseURL: 'https://camshorrorquiz.firebaseio.com',
    projectId: 'camshorrorquiz',
    storageBucket: 'camshorrorquiz.appspot.com',
    messagingSenderId: '271823232905'
  }
  firebase.initializeApp(config)
}
const fireDb = firebase.firestore()
export { fireDb }
