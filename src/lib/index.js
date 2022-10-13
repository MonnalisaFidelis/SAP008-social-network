import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./export.js"; 
import { app } from "./config-firebase.js"
import { getFirestore, doc, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

export function createUser(email, senha){
const auth = getAuth(app)
  return createUserWithEmailAndPassword(auth, email, senha) 
}

export function loginUser(email, senha) {
  const auth = getAuth(app)
  return signInWithEmailAndPassword(auth, email, senha)
}

export async function test(){
  const db = getFirestore(app)

  try {
  const docRef = await addDoc(collection(db, "posts"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
}