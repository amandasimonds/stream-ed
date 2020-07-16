import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
// eslint-disable-next-line
import dotenv from "dotenv";

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: "stream-ed-2",
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.RECT_APP_MESSUREMENT_ID,
};

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);

    this.auth = firebase.auth();
    this.db = firebase.database();
  }
  createStreamUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  signInStreamUser = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  resetPassword = (password) => this.auth.currentUser.resetPassword(password);

  userSignOut = () => this.auth.signOut();

  user = (uid) => this.db.ref(`users/${uid}`);

  users = () => this.db.ref("users");
}

export default Firebase;
