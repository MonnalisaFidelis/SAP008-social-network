import post from '../components/post.js';
import {
  createPost,
  getPosts,
  userStateChanged,
  userStateLogout,
} from '../lib/index.js';

export default () => {
  const container = document.createElement('div');

  const template = `
        <div class="feed-title">
            <h3>Feed</h3>
            <button id="btn-logout" class="btn-logout"><i class="fa-solid fa-right-from-bracket"></i></button>
        </div>
        <div class="feed-logo">
            <h1>MCMR</h1>
            <img src="../img/logo.png" alt="logo Meu Corpo Minhas Regras">
        </div>
        <section class="feed-container" id="feed-container">
            <div class="feed-novo-post">
                <textarea class="feed-text-box" id="text-post" placeholder="Escreva aqui um novo post..." name="story" rows="5" cols="33"></textarea>
                <button type="submit" class="feed-btn-post" id="btn-post"><i class="fa-solid fa-plus"></i></button>
            </div>
            <div id="post-area">
            </div>
        </section>
    `;
  container.innerHTML = template;

  const btnLogout = container.querySelector('#btn-logout');
  const textPost = container.querySelector('#text-post');
  const btnPost = container.querySelector('#btn-post');

  btnPost.addEventListener('click', async () => {
    if (textPost.value === '') {
      alert('Post vazio, por favor digite algo!');
    }
    await createPost(textPost.value);
    const posts = await getPosts();
    post(posts);
  });

  async function listPosts() {
    const posts = await getPosts();
    post(posts);
  }

  listPosts();

  btnLogout.addEventListener('click', () => {
    console.log('deslogou');
    userStateLogout(userStateChanged);
  });
  return container;
};
