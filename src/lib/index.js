import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./export.js"; 
import app from "./config-firebase.js"

export function createUser(email, senha){
const auth = getAuth(app)
  return createUserWithEmailAndPassword(auth, email, senha) 
}

export function loginUser(email, senha) {
  const auth = getAuth(app)
  return signInWithEmailAndPassword(auth, email, senha)
}