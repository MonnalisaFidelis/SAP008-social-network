import post from '../components/post.js';
import { createPost, getPosts, userStateChanged, userStateLogout, writeNewPost } from '../lib/index.js';

export default () => {
    const container = document.createElement('div'); 

    const template = `
        <h1> Feed </h1>
        <button id="btn-logout"><i class="fa-solid fa-right-from-bracket"></i></button>
        <section class="feed-container" id="feed-container">
            <div class="novo-post">
            <label for="text-post">Novo Post:</label>
            <textarea id="text-post" name="story" rows="5" cols="33"></textarea>
            <button class="btn-post" id="btn-post"><i class="fa-solid fa-plus"></i></button>
            </div>
            <div id="post-area">
            </div>
        </section>
    `;
    container.innerHTML = template; 

    const btnLogout = container.querySelector('#btn-logout')
    const textPost = container.querySelector('#text-post');
    const btnPost = container.querySelector('#btn-post');


    btnPost.addEventListener('click', async (e) => {
        await createPost(textPost.value);
        const posts = await getPosts();
        post(posts)
    })

    async function listPosts(){
        const posts = await getPosts();
        post(posts)
    }

    listPosts();

    btnLogout.addEventListener('click', (e) => {
        console.log("deslogou")
        userStateLogout(userStateChanged);
    })

    return container;
};