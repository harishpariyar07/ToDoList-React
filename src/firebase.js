import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAJUeenHnsbbPkAvjvcI363Wz_t34kUN1c",
  authDomain: "todo-list-react-752e9.firebaseapp.com",
  databaseURL: "https://todo-list-react-752e9-default-rtdb.firebaseio.com",
  projectId: "todo-list-react-752e9",
  storageBucket: "todo-list-react-752e9.appspot.com",
  messagingSenderId: "950656997091",
  appId: "1:950656997091:web:070397ecdb0d6fc49b57d6",
});

export { firebaseConfig as firebase };
