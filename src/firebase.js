import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAfJ1osoN6oHpZyO1-_TJ1TgPwbbcRhR3g",
  authDomain: "linkedin-clone-47ef7.firebaseapp.com",
  projectId: "linkedin-clone-47ef7",
  storageBucket: "linkedin-clone-47ef7.appspot.com",
  messagingSenderId: "639729609976",
  appId: "1:639729609976:web:9b6edb397bb818b4b6df0d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
