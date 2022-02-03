import 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC9w4UHOclBol94wKiY-Vm4OfU1weEVgpc",
  authDomain: "netflix-clone-21fdf.firebaseapp.com",
  projectId: "netflix-clone-21fdf",
  storageBucket: "netflix-clone-21fdf.appspot.com",
  messagingSenderId: "696052804310",
  appId: "1:696052804310:web:d88f8481ff218ba4b3b777"
};

const app = initializeApp(firebaseConfig);

const auth=getAuth(app)

export {auth}
