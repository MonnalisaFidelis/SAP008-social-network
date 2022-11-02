import { loginUser, loginGoogle} from "../lib/index.js";

export default () => {
    const container = document.createElement('div');

    const template = `
        <section class="content">
            <div class= "create">  
                <div class="title">
                    <img src="./img/logo.png">
                    <div class="logo">
                        <h1>MCMR</h1>
                        <h3>Meu Corpo Minhas Regras</h3>
                    </div>
                </div>
                <h2>Entre ou crie uma conta</h2>
            </div>
            <!-- DIV DO CAMPO DE ENTRAR -->
            <div class = "home">
                <div class="container">
                    <h1 class="descricao-entrar">Entrar</h1>
                    <button class="link-google" id="btn-google"><i class="fa-brands fa-google"></i> Entrar com o Google</button>
                    <p class="descricao-ou">ou</p>
                    <form class="user-login">
                            <label>E-mail</label>
                            <input type="email" class="email-login" id="email" "name="email" placeholder="user@gmail.com"/>
                            <div class="linha-horizontal"></div> 
                            <div><label>Senha</label></div>
                            <input type="password" class="senha-login" id="senha" name="password" placeholder="Senha" />
                            <div class="linha-horizontal"></div>
                            <div class= "btn-enter">
                            <input type="submit" class="btn-entrar" id="btn-entrar" value="Entrar">
                            </div>
                    </form>
                </div>
                <a href="#register" class="link-nova-conta">Nova Conta</a>
            </div>
        </section> 
    `;
    container.innerHTML = template;
    const btnLogin = container.querySelector("#btn-entrar")
    const email = container.querySelector("#email")
    const password = container.querySelector("#senha")
    const btnGoogle = container.querySelector("#btn-google")

    btnGoogle.addEventListener("click", (e) => {
        e.preventDefault()
        console.log("google ok")
        loginGoogle()
    })

    btnLogin.addEventListener("click", (e) => {
        e.preventDefault()
        console.log("submeter o form")
        console.log(email.value)
        console.log(password.value)
        loginUser(email.value, password.value)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log("logou")
                console.log(user)
                location.hash = "#feed"
                //authStateChanged(user)
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            });
        
    })

    return container;
}
