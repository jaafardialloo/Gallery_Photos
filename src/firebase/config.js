import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBIwd2qo0AQlwqoigRRhRG3C2bV4y9SzcU",
  authDomain: "gallery-4d565.firebaseapp.com",
  databaseURL: "https://gallery-4d565.firebaseio.com",
  projectId: "gallery-4d565",
  storageBucket: "gallery-4d565.appspot.com",
  messagingSenderId: "606405299337",
  appId: "1:606405299337:web:89f66cb6acb7d88f818a58"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };