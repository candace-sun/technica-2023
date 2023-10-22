// google sign in

import { getAuth, signInWithPopup, getRedirectResult, GoogleAuthProvider, connectAuthEmulator} from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js'
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js'

const firebaseConfig = {
  apiKey: "AIzaSyAtugtk7I6tSFdsbEHaDgqGtVSb8_Qcd3Q",
  authDomain: "technica-de047.firebaseapp.com",
  projectId: "technica-de047",
  storageBucket: "technica-de047.appspot.com",
  messagingSenderId: "545459061130",
  appId: "1:545459061130:web:7714e8cd90b81d1f1cc873"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

import { getDatabase, connectDatabaseEmulator } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js'

const db = getDatabase();
if (location.hostname === "localhost") {
  // Point to the RTDB emulator running on localhost.
  connectDatabaseEmulator(db, "127.0.0.1", 9000);
} 

connectAuthEmulator(auth, "http://127.0.0.1:9099");
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

document.getElementById('google-sign-in').addEventListener('click', signInWithGoogle);

function signInWithGoogle() {
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...

    // TODO
    // store sign in info into database
    // redirect them to the form page
    
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

  getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}