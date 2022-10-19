import login from './pages/login.js';
import feed from './pages/feed.js';
import cadastre from './pages/register.js';
import {userStateChanged} from './lib/index.js'

const main = document.querySelector('#root');

function redirectAuthUser(user) {
    if (user) {
    window.location.hash = '#feed';
    } else {
    window.location.hash = '#login';
    }
}

const init = () => {
    window.addEventListener("hashchange", () => {
        main.innerHTML = " ";
        switch (window.location.hash) {
            case "#login":
                main.appendChild(login());
                break;
            case "#feed":
                main.appendChild(feed());
                break;
            case "#register":
                main.appendChild(cadastre());
                break;
            default:
                main.appendChild(login());
        }
    })
}

window.addEventListener("load", () => {
    //main.appendChild(login());
    userStateChanged(redirectAuthUser);
    init();
})  


