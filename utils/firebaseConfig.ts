import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID, // Es opcional si usas Analytics
};

// Verificar si ya existe una app inicializada
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

// Solo ejecutar getAnalytics en el cliente
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { auth, analytics };



//ESTE CODIGO ES DE LA DOCUMENTACION DE FIREBASE
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";


// const firebaseConfig = {
//   apiKey: "AIzaSyBvBPVdr7WdOuvw1idaFRnbBqWTBsR7Quo",
//   authDomain: "task-flow-a5b2f.firebaseapp.com",
//   projectId: "task-flow-a5b2f",
//   storageBucket: "task-flow-a5b2f.appspot.com",
//   messagingSenderId: "835349777666",
//   appId: "1:835349777666:web:d2e2a6dcc9b99890f7061b",
//   measurementId: "G-W4FDQ0H3DX"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// // Solo ejecutar getAnalytics en el cliente
// let analytics;
// if (typeof window !== 'undefined') {
//   analytics = getAnalytics(app);
// }

// export { auth, analytics };


