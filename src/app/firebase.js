import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCeBE69oNA4VhwaHQr8DGif_VgF8FF0QF0",
  authDomain: "slackclone-e4844.firebaseapp.com",
  projectId: "slackclone-e4844",
  storageBucket: "slackclone-e4844.appspot.com",
  messagingSenderId: "41428163869",
  appId: "1:41428163869:web:3b93847008d23fa2f2d5f4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, provider, auth };
