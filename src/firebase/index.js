import firebase from "firebase/app";
import "firebase/storage";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyD2_Ww5mf2mEskOQMa6IYVK6URF9GqMbUE",
  authDomain: "quickstart-1571266618401.firebaseapp.com",
  databaseURL: "https://quickstart-1571266618401.firebaseio.com",
  projectId: "quickstart-1571266618401",
  storageBucket: "quickstart-1571266618401.appspot.com",
  messagingSenderId: "496997080126",
  appId: "1:496997080126:web:8caa4fb9ce5e4204df456f",
  measurementId: "G-72E4NBCF0G"
};
firebase.initializeApp(config);

const storage = firebase.storage();

export { storage, firebase as default };