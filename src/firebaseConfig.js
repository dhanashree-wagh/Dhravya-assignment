import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCW3K5PNkHN2UT8RxLN3142A1cEr1d4jTU",
  authDomain: "admin-panel-52c39.firebaseapp.com",
  projectId: "admin-panel-52c39",
  storageBucket: "admin-panel-52c39.appspot.com",
  messagingSenderId: "134749745952",
  appId: "1:134749745952:web:c38ff75189026f386ddd45",
  measurementId: "G-5CN53RT8QL"
  };

  const app = initializeApp(firebaseConfig);

  export const storage = getStorage(app);
  export const db = getFirestore(app);
  export const auth =getAuth(app);