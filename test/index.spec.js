/*importamos la funcion que vamos a testear
import { myFunction } from '../src/lib/index';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});*/

import {
  loginUser
} from '../src/lib/index.js';
import {
  signInWithEmailAndPassword
} from '../src/lib/exports.js';

describe('loginUser', () => {
  it('a função deve permitir que o usuário faça login usando email e senha já cadastrados', () => {
    const email = 'uvapassa@hotmail.com';
    const password = '123456';
    loginUser(email, password);
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
    /*expect(signInWithEmailAndPassword).toHaveBeenCalledWith({
      currentUser: {
        uid: '123',
        displayName: 'nome',
      },
    }, email, password);*/
  });
});