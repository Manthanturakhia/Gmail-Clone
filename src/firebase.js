import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCIO1lSPWv-zy2MUGoPos9vGat9dISuzL4",
    authDomain: "clone-e3a29.firebaseapp.com",
    projectId: "clone-e3a29",
    storageBucket: "clone-e3a29.appspot.com",
    messagingSenderId: "72942882666",
    appId: "1:72942882666:web:3dc08ad9003f426e1f1f13",
    measurementId: "G-ZWB70PHYDY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebaseApp.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {db,auth,provider};