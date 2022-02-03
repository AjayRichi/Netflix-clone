import 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCcHfZktKdpVBQ003kes3HqNP8EWz8tp-0",
  authDomain: "netflix-clone-prod-2d755.firebaseapp.com",
  projectId: "netflix-clone-prod-2d755",
  storageBucket: "netflix-clone-prod-2d755.appspot.com",
  messagingSenderId: "477714537376",
  appId: "1:477714537376:web:d8f4a96e6b4a8f100d62c5"
};
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)

export {auth}
