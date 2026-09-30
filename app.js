// Alriyad Karate Academy 2026
// Firebase initialization

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

console.log("Alriyad Karate Academy - Firebase connected successfully");
