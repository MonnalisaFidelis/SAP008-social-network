import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "./export.js"; 
import { app } from "./config-firebase.js"
import { getFirestore, doc, getDocs, query, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { getDatabase, ref, child, push, update } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";

export async function getPosts(){
  const db = getFirestore(app)
  const q = query(collection(db, "posts")); // query = pesquisa

  const querySnapshot = await getDocs(q);
  const posts = []
  querySnapshot.forEach((doc) => {
      posts.push({id: doc.id, ...doc.data()});
  });
  return posts;
}

// função de criação de usuário
export function createUser(email, senha){
const auth = getAuth(app)
  return createUserWithEmailAndPassword(auth, email, senha) 
}

// função de login do usuário
export function loginUser(email, senha){
  const auth = getAuth(app)
  return signInWithEmailAndPassword(auth, email, senha)
}

// função para adicionar itens no banco
export async function createPost(text){
  const db = getFirestore(app)

  try {
    const postRef = collection(db, "posts")
    const docRef = await addDoc(postRef, {
      text: text
    })
    console.log("Document written with ID: ", docRef.id);
  } 
  catch (e) {
    console.error("Error adding document: ", e);
  }
};

// função para manter o usuário logado
export function userStateChanged(callback){
  console.log("vai ficar logado");
    const auth = getAuth(app);
    onAuthStateChanged(auth, callback);
}

// função para deslogar o usuário
export function userStateLogout(callback){
  const auth = getAuth();
  signOut(auth).then(() => {
  }).catch((error) => {
  });
}

export function writeNewPost(uid, username, picture, title, body) {
  const db = getDatabase();

  // A post entry.
  const postData = {
    author: username,
    uid: uid,
    body: body,
    title: title,
    starCount: 0,
    authorPic: picture
  };

  const newPostKey = push(child(ref(db), 'posts')).key;

  const updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return update(ref(db), updates);
}
