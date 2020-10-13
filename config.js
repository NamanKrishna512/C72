import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyDsAHGOwHjBShrKyblXljkW7hfYCiYLkSA",
    authDomain: "book-library-715b9.firebaseapp.com",
    databaseURL: "https://book-library-715b9.firebaseio.com",
    projectId: "book-library-715b9",
    storageBucket: "book-library-715b9.appspot.com",
    messagingSenderId: "1016112750981",
    appId: "1:1016112750981:web:2c6d473c9fe7aaf75ea4ec"
  };
  firebase.initializeApp(firebaseConfig)

  export default firebase.firestore();