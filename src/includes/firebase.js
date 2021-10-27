import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC3Ecl7ee0vMEoHHXigeV-EFMMUVuugToM',
  authDomain: 'music-abf57.firebaseapp.com',
  projectId: 'music-abf57',
  storageBucket: 'music-abf57.appspot.com',
  appId: '1:386371389566:web:8ccb19013496108ec0f02f',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection('users');

export {
  auth,
  db,
  usersCollection,
};
