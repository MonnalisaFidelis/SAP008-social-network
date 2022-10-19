export default (posts) => {
    console.log(posts);
    const container = document.createElement("div");
    const template = posts.map(post => {
        return `
        <div class="post">
            <h4>@user</h4>
            <p>${post.text}</p>
            <div class="action">
                <input type="checkbox" value="">
                <input type="button" value="Comentários">
            </div>
        </div>
    `;
    }).join("");

    container.innerHTML = template;
    const postArea = document.getElementById("post-area");

    postArea.innerHTML = "";
    postArea.appendChild(container);
}