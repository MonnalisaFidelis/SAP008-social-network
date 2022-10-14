import post from '../components/post.js';
import { test } from '../lib/index.js';

export default () => {
    const container = document.createElement('div'); 

    const template = `
        <h1> Feed </h1>
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

    const textPost = container.querySelector('#text-post');
    const btnPost = container.querySelector('#btn-post');

    btnPost.addEventListener('click', (e) => {
        post(textPost.value);
        test(textPost.value);
})
    return container;
};