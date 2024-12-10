import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD6H-ZZ2chF0ODEE92cUDG51kMRwUhaiVE",
  authDomain: "project-mobiledev.firebaseapp.com",
  projectId: "project-mobiledev",
  storageBucket: "project-mobiledev.firebasestorage.app",
  messagingSenderId: "932077719677",
  appId: "1:932077719677:web:071adf184498ec526c6114"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const firestore = getFirestore(app);