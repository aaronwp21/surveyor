import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA64nP898116OydcVWFfO6ywRvehJePQ4o',
  authDomain: 'surveyor-3619c.firebaseapp.com',
  projectId: 'surveyor-3619c',
  storageBucket: 'surveyor-3619c.appspot.com',
  messagingSenderId: '915171199863',
  appId: '1:915171199863:web:c5d38d042ec1446ee5ef72',
  measurementId: 'G-KSLRK6X4TW',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
