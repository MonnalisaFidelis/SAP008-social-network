import {
  loginUser,
} from '../src/lib/index.js';

import {
  signInWithEmailAndPassword,
} from '../src/lib/firebase.js';

jest.mock('../src/lib/firebase.js');

describe('loginUser', () => {
  it('confirma se está logando com e-mail e senha', () => {
    const email = 'uvapassa@gmail.com';
    const password = '123456';
    loginUser(email, password);
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(undefined, email, password);
  });
});
