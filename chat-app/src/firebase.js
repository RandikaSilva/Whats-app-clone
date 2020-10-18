import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI_sMEvfU7_STrlGx0_Bx4tNdDa2IIeLs",
  authDomain: "chat-app-f7aca.firebaseapp.com",
  databaseURL: "https://chat-app-f7aca.firebaseio.com",
  projectId: "chat-app-f7aca",
  storageBucket: "chat-app-f7aca.appspot.com",
  messagingSenderId: "10044216789",
  appId: "1:10044216789:web:9aa969a3a4277d93d7195c",
  measurementId: "G-DQF5557KVD",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
