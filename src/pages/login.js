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
                        <input type="email" class="email-login" name="email" placeholder="user@gmail.com"/>
                        <div class="linha-horizontal"></div> 
                        <div><label>Senha</label></div>
                        <input type="password" class="senha-login" name="password" placeholder="Senha" />
                        <div class="linha-horizontal"></div>
                        <a href="#feed" class="link-entrar">Entrar</a>
                </form>
            </div>
                <a href= "#cadastre" class="link-nova-conta">Nova Conta</a>
            
        </section> 
    `;
    container.innerHTML = template;

    return container;

}