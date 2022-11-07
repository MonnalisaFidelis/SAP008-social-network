import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile} from "./export.js"; 
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
export function createUser(name, email, senha){
const auth = getAuth(app);
  return createUserWithEmailAndPassword(auth, email, senha) 
    .then(() => updateProfile(auth.currentUser, {
      displayName: name, 
    }));
}

//função de login com Google
export function loginGoogle(){
  const provider = new GoogleAuthProvider(); 
  const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
}

// função de login do usuário
export function loginUser(email, senha){
  const auth = getAuth(app)
  return signInWithEmailAndPassword(auth, email, senha)
}

// função para adicionar itens no banco
export async function createPost(text){
  const db = getFirestore(app)
  const auth = getAuth(app)

  try {
    const postRef = collection(db, "posts")
    const docRef = await addDoc(postRef, {
      name: auth.currentUser.displayName,
      author: auth.currentUser.uid,
      text: text,
      like: 0,
    })
    console.log("Document written with ID: ", docRef.id);
  } 
  catch (e) {
    console.error("Error adding document: ", e);
  }
};

// função like
export async function likePost(postId){
  const db = getFirestore(app)
  const docRef = doc(db, "posts", postId);
  await updateDoc(docRef, {
    "like": 1,  
  });
};

// função editar o post
export async function editPost(postId, textEdit){
  const db = getFirestore(app)
  const docRef = doc(db, "posts", postId);
  await updateDoc(docRef, {
    "text": textEdit,
  });
}
// função para deletar o post
export async function deletePost(postId){
  console.log(postId);
  const db = getFirestore(app)
  await deleteDoc(doc(db, "posts", postId));
  console.log('deletou')
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