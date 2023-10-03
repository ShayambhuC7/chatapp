import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABt8SnIVU3Okp-KUuSQVZz8q_GQEkwxDk",
  authDomain: "chatapp-f6d0f.firebaseapp.com",
  projectId: "chatapp-f6d0f",
  storageBucket: "chatapp-f6d0f.appspot.com",
  messagingSenderId: "923683502616",
  appId: "1:923683502616:web:ff120b949cc079b67da16d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const storage=getStorage(app);
export const db=getFirestore(app);