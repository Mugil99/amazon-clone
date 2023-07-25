// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app'
import { getAuth } from '@firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyA3PfmZbX8PrxLEt_w_Ke3oNW03xjfIC1o",
  authDomain: "clone-bf11c.firebaseapp.com",
  projectId: "clone-bf11c",
  storageBucket: "clone-bf11c.appspot.com",
  messagingSenderId: "247724335897",
  appId: "1:247724335897:web:e4a24bc3821aedd9d61b88",
  measurementId: "G-BL8C8GT8TG"
};

// Creates and initializes a FirebaseApp instance
const app = initializeApp(firebaseConfig);

// Returns the FirebaseAuth object for an App.
export const auth = getAuth(app);