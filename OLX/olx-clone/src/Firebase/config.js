import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAosQ0wvpTVDyJ5r580naREDpb2WZ5xo08",
    authDomain: "olx-clone-fb36f.firebaseapp.com",
    projectId: "olx-clone-fb36f",
    storageBucket: "olx-clone-fb36f.appspot.com",
    messagingSenderId: "338838713822",
    appId: "1:338838713822:web:4bbd89d5d03df2010f994f",
    measurementId: "G-D96FL8WL1B"
};

export default firebase.initializeApp(firebaseConfig)