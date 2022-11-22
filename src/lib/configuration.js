import { initializeApp } from './firebase.js';

const firebaseConfig = {
  apiKey: 'AIzaSyAcDbrQ-2gSJU8Wx3PgzNm90FnTYIQFZmM',
  authDomain: 'meu-corpo-minhas-regras.firebaseapp.com',
  projectId: 'meu-corpo-minhas-regras',
  storageBucket: 'meu-corpo-minhas-regras.appspot.com',
  messagingSenderId: '550361094779',
  appId: '1:550361094779:web:a6d8ccdeea1e74da75a0de',
};

export const app = initializeApp(firebaseConfig);
