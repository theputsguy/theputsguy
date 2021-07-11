import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvUND_2_kNHIdK1rn9-S7ETaD2MKdwa2o",
  authDomain: "the-puts-guy.firebaseapp.com",
  projectId: "the-puts-guy",
  storageBucket: "the-puts-guy.appspot.com",
  messagingSenderId: "104669449145",
  appId: "1:104669449145:web:1740d17c8e706984794468",
  measurementId: "G-31GRRDKQ72",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
