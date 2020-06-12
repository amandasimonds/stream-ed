import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyA7ofpAsbveL7UsfaObz4x8096MJHKQbPc",
  authDomain: "stream-ed-2.firebaseapp.com",
  databaseURL: "https://stream-ed-2.firebaseio.com",
  projectId: "stream-ed-2",
  storageBucket: "stream-ed-2.appspot.com",
  messagingSenderId: "183145365345",
  appId: "1:183145365345:web:c4252dc015321ec1150f20",
  measurementId: "G-W4YDFVC31X",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, role } = user;
    try {
      await userRef.set({
        displayName,
        email,
        role,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};
