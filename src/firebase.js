import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAz2mSzuxfThrErlyagRHevu1XYcKg6mv4",
  authDomain: "react-crud-11c65.firebaseapp.com",
  databaseURL: "https://react-crud-11c65.firebaseio.com",
  projectId: "react-crud-11c65",
  storageBucket: "react-crud-11c65.appspot.com",
  messagingSenderId: "296619432823",
  appId: "1:296619432823:web:c0e00afa8b34423fc29f72",
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
