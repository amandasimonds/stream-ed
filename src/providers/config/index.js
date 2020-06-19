import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA7ofpAsbveL7UsfaObz4x8096MJHKQbPc",
  authDomain: "stream-ed-2.firebaseapp.com",
  databaseURL: "https://stream-ed-2.firebaseio.com",
  projectId: "stream-ed-2",
  storageBucket: "stream-ed-2.appspot.com",
  messagingSenderId: "183145365345",
  appId: "1:183145365345:web:c4252dc015321ec1150f20",
  measurementId: "G-W4YDFVC31X",
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
