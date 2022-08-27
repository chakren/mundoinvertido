  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB0lGKQDC8395cgOJXZHDz7FzpzcTCq1Ko",
    authDomain: "projeto-teste-af2e6.firebaseapp.com",
    projectId: "projeto-teste-af2e6",
    storageBucket: "projeto-teste-af2e6.appspot.com",
    messagingSenderId: "898878815748",
    appId: "1:898878815748:web:80dea7d63561aa880c7f51"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  export default app