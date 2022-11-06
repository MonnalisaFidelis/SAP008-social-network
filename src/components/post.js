import { getPosts, deletePost, likePost } from '../lib/index.js';

export default (posts, text) => {
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
                        <!--<input type="checkbox" class="btn-like" id="btn-like" data-id="${post.id}" data-author="${post.author}">-->
                        <button type= "button"  class="btn-like" id="btn-like"  data-author="${post.author}"><i class="fa-solid fa-heart" data-id="${post.id}" data-like="${post.like}"></i></button>
                        <span class="counter-like">${post.like}</span>
                    </div>
                    <div class="post-actions">
                    <button type="button" class="btn-edit" id="btn-edit"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button type="button" class="btn-delete" id="btn-delete"><i class="fa-solid fa-trash-can" data-id="${post.id}"></i></button>
                    </div>
                </div>
            </div>
        `;
    }).join("");

    container.innerHTML = template;
    const postArea = document.getElementById('post-area');
    postArea.innerHTML = "";
    postArea.appendChild(container);

    const btnLike = document.querySelectorAll('.btn-like');
    const btnDelete = document.querySelectorAll('.btn-delete'); // id é unico

    console.log(btnLike);
    btnLike.forEach((element)=> {
        element.addEventListener('click', (e) => {
            const postId = e.target.dataset.id;
            const postLike = e.target.dataset.like;
            let like= 0;
            if(postLike>=0){
                like=like+1
            }
            console.log("deu like");
            console.log(postId);

            likePost(postId, like);
        })
    })



    console.log(btnDelete);
    btnDelete.forEach((element)=> {
        element.addEventListener('click', (e) => {
            const postId = e.target.dataset.id;
            deletePost(postId);
            
        })
    })

   /* btnLike.addEventListener('change', (e) => {
        const postId = e.target.dataset.id;
        const userId = e.target.dataset.author;
        if (btnLike.checked) {
            document.getElementById('campo').value = ''
            console.log("true", postId); // modificar a array do doc (arrayuni)
            console.log(userId);
        }
    })*/
}
