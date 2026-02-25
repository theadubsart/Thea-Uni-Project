// Firebase Configuration
// Get these values from your Firebase Console
// https://console.firebase.google.com

  const firebaseConfig = {
    apiKey: "AIzaSyBTPdCjSOXaiT6pHHDnzPOyrGSn66lp-5U",
    authDomain: "haiku-archive.firebaseapp.com",
    databaseURL: "https://haiku-archive-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "haiku-archive",
    storageBucket: "haiku-archive.firebasestorage.app",
    messagingSenderId: "673415323438",
    appId: "1:673415323438:web:4ac4441f816fe4c32664bf"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const ARCHIVE_REF = database.ref("archive");
