import App from "./App.svelte";

/* import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyB46uTCocuRUtdHtq9ZTDfoJIfuLPBZn7U",
  authDomain: "decent-envoy-310120.firebaseapp.com",
  projectId: "decent-envoy-310120",
  storageBucket: "decent-envoy-310120.appspot.com",
  messagingSenderId: "384170825402",
  appId: "1:384170825402:web:d5d0b780d1e662c4ad9483",
  measurementId: "G-TB8LVS01VY",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

setDoc(doc(db, "cities", "LA"), {
  name: "Los Angeles",
  state: "CA",
  country: "USA",
}).then(() => {
  console.log("Document successfully written!");
});
 */

export default new App({
  target: document.body,
});
