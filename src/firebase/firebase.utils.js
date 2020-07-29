import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBo_USm0IWvHXtVcHam-tf6KOY87_2dNWg",
  authDomain: "zuri-db.firebaseapp.com",
  databaseURL: "https://zuri-db.firebaseio.com",
  projectId: "zuri-db",
  storageBucket: "zuri-db.appspot.com",
  messagingSenderId: "50622504388",
  appId: "1:50622504388:web:4cb462f4775d7bbe935891",
  measurementId: "G-8PJ2GXQPH6",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
