import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCegRsMcYAWHDMSHEdOjnbeGjVGNivhtfo",
  authDomain: "digital-sea9.firebaseapp.com",
  projectId: "digital-sea9",
  storageBucket: "digital-sea9.appspot.com",
  messagingSenderId: "699862607036",
  appId: "1:699862607036:web:4ffcf768181f7b8e171cb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;