import firebase from 'firebase/app'
import "firebase/firestore"
import "firebase/auth"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCeDoCAlZbxz-MSVhpEM9NYdvOuJDQ6mzg",
    authDomain: "ml-tool-f86ff.firebaseapp.com",
    projectId: "ml-tool-f86ff",
    storageBucket: "ml-tool-f86ff.appspot.com",
    messagingSenderId: "29854561708",
    appId: "1:29854561708:web:1a15bd86e08eb84eeaf609",
    measurementId: "G-DGYZWWKETH"
  };

firebase.initializeApp(firebaseConfig);

export default firebase; 