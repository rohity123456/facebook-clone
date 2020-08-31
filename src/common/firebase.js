import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCDbjIP3lkg4x7gYfPD6BkwWikjiTX4L2U",
  authDomain: "facebook-reflection.firebaseapp.com",
  databaseURL: "https://facebook-reflection.firebaseio.com",
  projectId: "facebook-reflection",
  storageBucket: "facebook-reflection.appspot.com",
  messagingSenderId: "671352785470",
  appId: "1:671352785470:web:6e82d337a3a4646ab25f6f",
  measurementId: "G-7XW2DQDBPD",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
