import {
  // getPosts,
  createUser,
  loginUser,
  userStateChanged,
  // loginGoogle,
} from '../src/lib/index.js';

import {
  // getDocs,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  // signInWithPopup,
} from '../src/lib/firebase.js';

jest.mock('../src/lib/firebase.js');

describe('createUser', () => {
  it('deve criar um usuário', () => {
    const email = 'uvapassa@gmail.com';
    const password = '123456';
    createUser('uvapassa', email, password);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });
});

describe('loginUser', () => {
  it('confirma se está logando com e-mail e senha', () => {
    const email = 'uvapassa@gmail.com';
    const password = '123456';
    loginUser(email, password);
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(undefined, email, password);
  });
});

describe('userStateChanged', () => {
  it('a função deve manter o usuário logado', () => {
    userStateChanged();
    expect(onAuthStateChanged).toHaveBeenCalledTimes(1);
  });
});

/* describe('loginGoogle', () => {
  it('a função deve permitir que o usuário faça login usando uma conta google', () => {
    loginGoogle();
    expect(signInWithPopup).toHaveBeenCalledTimes(1);
  });
}); */

/* describe('getPosts', () => {
  it('a função deve pegar todos os posts', async () => {
    expect(getPosts).toHaveBeenCalledTimes(1);
    expect(getDocs).toHaveBeenCalledWith(undefined);
  });
}); */
