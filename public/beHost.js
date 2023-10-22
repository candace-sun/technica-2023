const onBackButtonEvent = (e) => {

  e.preventDefault();var currentLocation = window.location.pathname;

  history.push('${currentLocation}/mypage/new')};

  useEffect(() => {window.addEventListener('popstate', onBackButtonEvent);return () => {window.removeEventListener('popstate', onBackButtonEvent);

  };}, [])

// this is the part where we do the log in hopefully.

// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
  
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });

import { getDatabase, connectDatabaseEmulator } from "firebase/database";

const db = getDatabase();
if (location.hostname === "localhost") {
  // Point to the RTDB emulator running on localhost.
  connectDatabaseEmulator(db, "127.0.0.1", 9000);
} 

// google sign in

// import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

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
connectAuthEmulator(auth, "http://127.0.0.1:9099");
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

getElementById('google-sign-in').addEventListener('click', signInWithGoogle())

function signInWithGoogle() {
  // console.log("Hello, World!");
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
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

  // getRedirectResult(auth)
  // .then((result) => {
  //   // This gives you a Google Access Token. You can use it to access Google APIs.
  //   const credential = GoogleAuthProvider.credentialFromResult(result);
  //   const token = credential.accessToken;

  //   // The signed-in user info.
  //   const user = result.user;
  //   // IdP data available using getAdditionalUserInfo(result)
  //   // ...
  // }).catch((error) => {
  //   // Handle Errors here.
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // The email of the user's account used.
  //   const email = error.customData.email;
  //   // The AuthCredential type that was used.
  //   const credential = GoogleAuthProvider.credentialFromError(error);
  //   // ...
  // });
}


// function writeUserData(userId, name, email, ingredients, price, start, end) {
//   const db = getDatabase();
//   set(ref(db, 'hosts/' + userId), {
//     name: name,
//     email: email,
//     ingredients : ingredients,
//     price: price,
//     start: start,
//     end: end
//   });
// }