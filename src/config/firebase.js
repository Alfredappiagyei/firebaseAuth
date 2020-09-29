import firebase from 'firebase';
import 'firebase/firestore';

const firebaseconfig = {
    apiKey: "AIzaSyBRTwWbthSqYBk7aNKAtmNOkrcC1ESiQ6M",
    authDomain: "selfproject-7a32d.firebaseapp.com",
    databaseURL:  "https://selfproject-7a32d.firebaseio.com",
    projectId:  "selfproject-7a32d",
    storageBucket: "selfproject-7a32d.appspot.com",
    messagingSenderId:  "1047689642807",
    appId:  "1:1047689642807:web:64e903fbd8d6cd62d050b2"
}

firebase.initializeApp(firebaseconfig);
firebase.firestore();

export default firebase;



 