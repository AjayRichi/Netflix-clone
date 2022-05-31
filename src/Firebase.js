import 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBdi4ZGNNsr1xNTLv6LrgddRH2_c0fBjFs",
  authDomain: "netflix-prod.firebaseapp.com",
  projectId: "netflix-prod",
  storageBucket: "netflix-prod.appspot.com",
  messagingSenderId: "294086324040",
  appId: "1:294086324040:web:7a941f953da5e232734d7d"
};

const app = initializeApp(firebaseConfig);

const auth=getAuth(app)

export {auth}
