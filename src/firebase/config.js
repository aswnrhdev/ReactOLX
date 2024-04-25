import firebase from 'firebase'
import 'firebase/auth'

import 'firebase/firebase'

import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA3xYThYFcA6QrL82oXBPlgazb6F4XREF0",
    authDomain: "reactolx1.firebaseapp.com",
    projectId: "reactolx1",
    storageBucket: "reactolx1.appspot.com",
    messagingSenderId: "449589124796",
    appId: "1:449589124796:web:7ea62e7b9a94969d73bab9",
    measurementId: "G-2HHV4KT7T9"
  };

export default firebase.initializeApp(firebaseConfig)