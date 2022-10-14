import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "./export.js"; 
import { app } from "./config-firebase.js"
import { getFirestore, doc, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

export function createUser(email, senha){
const auth = getAuth(app)
  return createUserWithEmailAndPassword(auth, email, senha) 
}

export function loginUser(email, senha){
  const auth = getAuth(app)
  return signInWithEmailAndPassword(auth, email, senha)
}

export async function test(text){
  const db = getFirestore(app)

  try {
  const postRef = collection(db, "posts")
    await setDoc(doc(postRef, "INFO"), {
      text: text
    })
      console.log("Document written with ID: ", postRef.id);
    } 
    catch (e) {
        console.error("Error adding document: ", e);

    }
};
  /*try {
    const docRef = await addDoc(collection(db, "posts"), {
      text: "Hello World"
    });
      console.log("Document written with ID: ", docRef.id);
  } 
  catch (e) {
      console.error("Error adding document: ", e);
  }*/


/*
export function authStateChanged(){
  console.log("entrou na função")
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("state on changed")
      let uid = user.uid;
      location.hash = "#feed"
      console.log(uid)
      // ...
    }
    else {
      // ...
    }
  });
}
*/