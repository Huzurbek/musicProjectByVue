import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

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
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistance error ${error.code}`);
});

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
