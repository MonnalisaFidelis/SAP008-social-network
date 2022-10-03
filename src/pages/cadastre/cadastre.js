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
            <h2>Crie uma conta</h2>
            <!-- DIV DO CAMPO DE ENTRAR -->
            <div class="container">
                <h1>Cadastre-se</h1>
                <form class="user-data">
                    <label for="email">E-mail</label>
                    <input type="text" class="email" placeholder="user@gmail.com">
                    <hr>
                    <label for="nome">Nome</label>
                    <input type="text" class="nome" placeholder="Lorem">
                    <hr>
                    <label for="sobrenome">Sobrenome</label>
                    <input type="text" class="sobrenome" placeholder="Ipsum">
                    <hr>
                    <label for="senha">Senha</label>
                    <input type="password" class="senha" placeholder="*****"> 
                    <hr>
                </form>
                <div class="user-info">
                    <div class=btn-m>
                        <input type="radio" id="medica" name="user-info" value="medica">
                        <label for="medica">Sou Médica</label>
                    </div>
                    <div class=btn-p>
                        <input type="radio" id="paciente" name="user-info" value="paciente">
                        <label for="paciente">Sou paciente</label>
                    </div>
                </div>
                <input type="submit" class="btn-entrar" id="btn-entrar" value="Entrar">
            </div>

            <a href= "#retornar" class="retornar"><i class="fa-solid fa-arrow-left"></i></a>
        </section>  
    `;
    container.innerHTML = template;

    return container;

}