// REACT_APP_FIREBASE_API_KEY = AIzaSyCcSDI7_U2z-5Vn_VP4dnwEKKvr3srQSQI
// REACT_APP_FIREBASE_AUTH_DOMAIN = tourism-website-ea194.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID = tourism-website-ea194
// REACT_APP_FIREBASE_STORAGE_BUCKET = tourism-website-ea194.appspot.com
// REACT_APP_FIREBASE_MESSAGING_SENDER_ID = 1098222544366
// REACT_APP_FIREBASE_APP_ID = 1:1098222544366:web:a4ec877b4feea4b25b9aff

// const firebaseConfig = {
//   apiKey: "AIzaSyDXYeQzihsyAdlPD8PI_RXIxULBx-SXKr8",
//   authDomain: "tourism-website-2.firebaseapp.com",
//   projectId: "tourism-website-2",
//   storageBucket: "tourism-website-2.appspot.com",
//   messagingSenderId: "109513073853",
//   appId: "1:109513073853:web:96c1883ef9c44bb3f2c3d4"
// };
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};
  export default firebaseConfig;