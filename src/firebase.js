import firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA3U3dhNwqOvPT-Kk4f2-9InD_1AAM_Vh8",
    authDomain: "reels-c3ef1.firebaseapp.com",
    projectId: "reels-c3ef1",
    storageBucket: "reels-c3ef1.appspot.com",
    messagingSenderId: "605701078593",
    appId: "1:605701078593:web:f8ceb173999a372f7e90c0"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;