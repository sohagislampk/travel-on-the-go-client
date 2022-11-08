// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDyenWMvOQ8wlgRNp8N5w-oIYniM0PR09c",
    authDomain: "travel-on-the-go-a11.firebaseapp.com",
    projectId: "travel-on-the-go-a11",
    storageBucket: "travel-on-the-go-a11.appspot.com",
    messagingSenderId: "403392901601",
    appId: "1:403392901601:web:194e25c14406a8ba7b62a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;