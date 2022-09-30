export const firebaseConfig = {
  apiKey: process.env.REACT_APP_GFB_KEY as string,
  authDomain: process.env.REACT_APP_GFB_DOMAIN as string,
  projectId: process.env.REACT_APP_GFB_PROJECT_ID as string,
  storageBucket: process.env.REACT_APP_GFB_BUCKET as string,
  messagingSenderId: process.env.REACT_APP_GFB_SENDER_ID as string,
  appId: process.env.REACT_APP_GFB_APP_ID as string,
}
