import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  getFirestore,
  doc,
  getDocs,
  query,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  increment,
} from './firebase.js';

import { app } from './configuration.js';

export async function getPosts() {
  const db = getFirestore(app);
  const q = query(collection(db, 'posts')); // query = pesquisa

  const querySnapshot = await getDocs(q);
  const posts = [];
  // eslint-disable-next-line no-shadow
  querySnapshot.forEach((doc) => {
    posts.push({ id: doc.id, ...doc.data() });
  });
  return posts;
}

// função de criação de usuário
export function createUser(name, email, senha) {
  const auth = getAuth(app);
  createUserWithEmailAndPassword(auth, email, senha)
    .then(() => updateProfile(auth.currentUser, {
      displayName: name,
    }));
}

// função de login com Google
export function loginGoogle() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then(() => {
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // const user = result.user;
    }).catch(() => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // const email = error.customData.email;
      // const credential = GoogleAuthProvider.credentialFromError(error);
    });
}

// função de login do usuário
export function loginUser(email, senha) {
  const auth = getAuth(app);
  return signInWithEmailAndPassword(auth, email, senha);
}

// função para adicionar itens no banco
export async function createPost(txt) {
  const db = getFirestore(app);
  const auth = getAuth(app);

  try {
    const postRef = collection(db, 'posts');
    const docRef = await addDoc(postRef, {
      name: auth.currentUser.displayName,
      author: auth.currentUser.uid,
      text: txt,
      like: [],
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

// função like
export async function likePost(postId) {
  const db = getFirestore(app);
  const docRef = doc(db, 'posts', postId);
  await updateDoc(docRef, {
    like: increment(1),
  });
}

// função editar o post
export async function editPost(postId, textEdit) {
  const db = getFirestore(app);
  const docRef = doc(db, 'posts', postId);
  await updateDoc(docRef, {
    text: textEdit,
  });
}
// função para deletar o post
export async function deletePost(postId) {
  console.log(postId);
  const db = getFirestore(app);
  await deleteDoc(doc(db, 'posts', postId));
}

// função para manter o usuário logado
export function userStateChanged(callback) {
  const auth = getAuth(app);
  onAuthStateChanged(auth, callback);
}

// função para deslogar o usuário
export function userStateLogout() {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
    })
    .catch(() => {
    });
}
