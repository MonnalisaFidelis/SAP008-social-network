export default (text) => {
    console.log(text);
    const container = document.createElement("div");

    const template = `
        <div class="post">
            <h4>@user</h4>
            <p>${text}</p>
            <div class="action">
                <input type="checkbox" value="">
                <input type="button" value="Comentários">
            </div>
        </div>
    `;

    container.innerHTML = template
    document.getElementById("post-area").appendChild(container);
}