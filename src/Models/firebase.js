
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBeQ2HbUylKwLFWTtuaomRQK0UaO9rlcHk",
  authDomain: "employeemanagement-46e91.firebaseapp.com",
  projectId: "employeemanagement-46e91",
  storageBucket: "employeemanagement-46e91.appspot.com",
  messagingSenderId: "825989610980",
  appId: "1:825989610980:web:01013a7ee18d3d99849bf1"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    //console.log(user);
    return user;
  } catch (err) {
    return null;
  }
};
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};


export {
  auth,
  signInWithGoogle,
  signInWithEmailAndPassword,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};