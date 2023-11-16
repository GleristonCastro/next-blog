// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: 'blog-ca7be.firebaseapp.com',
  projectId: 'blog-ca7be',
  storageBucket: 'blog-ca7be.appspot.com',
  messagingSenderId: '969072613666',
  appId: '1:969072613666:web:7a67e38d98c00b91eead7b'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);