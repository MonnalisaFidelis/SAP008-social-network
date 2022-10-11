import { getAuth,  createUserWithEmailAndPassword } from "./export.js"; 
import app from "./config-firebase.js"

export function createUser(email, senha){
const auth = getAuth(app)
  return createUserWithEmailAndPassword(auth, email, senha) 
}