import login from './pages/login.js';
import feed from './pages/feed.js';
import register from './pages/register.js';
import { userStateChanged } from './lib/index.js';

const main = document.querySelector('#root');

function redirectAuthUser(user) {
  if (user) {
    window.location.hash = '#feed';
  } else {
    window.location.hash = '#login';
  }
}

function init() {
  main.innerHTML = '';
  switch (window.location.hash) {
    case '#login':
      main.appendChild(login());
      break;
    case '#feed':
      main.appendChild(feed());
      break;
    case '#register':
      main.appendChild(register());
      break;
    default:
      main.appendChild(login());
  }
}

window.addEventListener('hashchange', init);

window.addEventListener('load', () => {
  init();
  userStateChanged(redirectAuthUser);
});
