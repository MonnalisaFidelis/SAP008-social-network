import { loginUser } from "../lib/index.js";

const main = document.querySelector('#root');
export default () => {
    const container = document.createElement('div');

    const template = `
        <section class="content">
            <div class="title">
                <div class="logo">
                    <h1>MCMR</h1>
                    <h3>Meu Corpo Minhas Regras</h3>
                </div>
                <img src="./img/logo.png">
            </div>
            <h2>Entre ou crie uma conta</h2>
            <!-- DIV DO CAMPO DE ENTRAR -->
            <div class="container">
                <h1 class="descricao-entrar">Entrar</h1>
                <a href="#google" class="link-google"><i class="fa-brands fa-google"></i> Entrar com o Google</a>
                <p class="descricao-ou">ou</p>
                <form class="user-login">
                        <label>E-mail</label>
                        <input type="email" class="email-login" id="email" "name="email" placeholder="user@gmail.com"/>
                        <div class="linha-horizontal"></div> 
                        <div><label>Senha</label></div>
                        <input type="password" class="senha-login" id="senha" name="password" placeholder="Senha" />
                        <div class="linha-horizontal"></div>
                        <input type="submit" class="btn-entrar" id="btn-entrar" value="Entrar">
                </form>
            </div>
                <a href="#register" class="link-nova-conta">Nova Conta</a>
            
        </section> 
    `;
    container.innerHTML = template;
    const btn = container.querySelector("#btn-entrar")
    const email = container.querySelector("#email")
    const password = container.querySelector("#senha")
    btn.addEventListener("click", (e) => {
        e.preventDefault()
        console.log("submeter o form")
        console.log(email.value)
        console.log(password.value)
        loginUser(email.value, password.value)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log("Logou")
                location.hash = "#feed"
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            });
    })
    return container;
}