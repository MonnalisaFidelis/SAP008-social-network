import { getPosts, deletePost, likePost, editPost } from '../lib/index.js';

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
                    <button type="button" class="btn-edit" id="btn-edit"><i class="fa-solid fa-pen-to-square" data-id="${post.id}"></i></button>
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
    const btnEdit = document.querySelectorAll('.btn-edit');
    const btnDelete = document.querySelectorAll('.btn-delete'); // id é unico

    console.log(btnLike);
    btnLike.forEach((element) => {
        element.addEventListener('click', (e) => {
            const postId = e.target.dataset.id;
            const postLike = e.target.dataset.like;
            console.log(postLike)
            console.log("deu like");
            console.log(postId);

            likePost(postId)
            .then((result) => {
                document.location.reload(true);
            }).catch((error) => {
                console.log("deu ruim")
            });
        })
    })

    //editar
    console.log(btnEdit)
    btnEdit.forEach((element) => {
        element.addEventListener('click', (e) => {
            const postId = e.target.dataset.id;
            const textEdit = prompt("Edite seu post")
            console.log("editar")
            console.log(textEdit)

            editPost(postId, textEdit)
            .then((result) => {
                document.location.reload(true);
            }).catch((error) => {
                console.log("deu ruim no edit")
            });
        })
    })

    //deletar
    console.log(btnDelete);
    btnDelete.forEach((element) => {
        element.addEventListener('click', (e) => {
            const postId = e.target.dataset.id;
            deletePost(postId)
            .then((result) => {
                document.location.reload(true);
            }).catch((error) => {
                console.log("deu ruim no delete")
            });
        })
    })
}
