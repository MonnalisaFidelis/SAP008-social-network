import { getAuth } from '../lib/export.js';
import { app } from '../lib/config-firebase.js';

const auth = getAuth(app);

export default (posts) => {
    console.log(posts);
    const container = document.createElement("div");
    container.setAttribute("class", "post-render");
    const template = posts.map(post => {
        return `
            <div class="post">
                <h4>@${post.name}</h4>
                <p>${post.text}</p>
                <div class="post-action">
                    <div class="post-like">
                        <input type="checkbox" class="btn-like" id="btn-like" data-id="${post.id}" data-author="${post.author}">
                        <span class="counter-like">13</span>
                    </div>
                    <button type="button" class="btn-delete" id="btn-delete" value=""><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
        `;
    }).join("");

    container.innerHTML = template;
    const postArea = document.getElementById('post-area');
    postArea.innerHTML = "";
    postArea.appendChild(container);

    const btnDelete = document.getElementById('btn-delete');

    btnDelete.addEventListener('click', (elem) => {
        console.log('deletou')
    })
    /*
    btnLike.addEventListener('change', (e) => {
        const postId = e.target.dataset.id;
        const userId = e.target.dataset.author;
        if(btnLike.checked){
            console.log("true", postId);
            console.log(userId);
        }
    })
    */
}
