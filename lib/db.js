import firebase from 'firebase/app'
import 'firebase/firestore'

export function loadFirebase() {
  try{
    // Initialize Firebase
    let config = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGEING_SENDER_ID
    };
    firebase.initializeApp(config);
    const settings =
    firebase.firestore().settings(settings)
    console.log ("firebase MIGHT work!")
  } catch (error) {
    if (!/already exists/.test(error.message)){
      console.log ("firebase not works!")
    }
  }
  return firebase  
}
