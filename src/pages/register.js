import { createUser } from '../lib/index.js';

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
                <h2>Crie uma conta</h2>
            </div>
            <!-- DIV DO CAMPO DE ENTRAR -->
            <div class = "home">
                <div class="container">
                <h1>Cadastre-se</h1>
                <form class="user-data">
                    <label for="email">E-mail</label>
                    <input type="email" class="email" id="email" placeholder="user@gmail.com">
                    <hr>
                    <label for="username">Nome ou Apelido</label>
                    <input type="text" class="username" id="username" placeholder="Dra Camila">
                    <hr>
                    <label for="senha">Senha</label>
                    <input type="password" class="senha"  id="senha" placeholder="*****"> 
                    <hr>
                    <input type="submit" class="btn-entrar" id="btn-entrar" value="Entrar">
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
            </div>
            <a href="#login" class="retornar"><i class="fa-solid fa-arrow-left"></i></a>
            </div>
        </section>  
    `;
  container.innerHTML = template;

  const btn = container.querySelector('#btn-entrar');
  const email = container.querySelector('#email');
  const username = container.querySelector('#username');
  const password = container.querySelector('#senha');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('submeter o form');
    console.log(email.value);
    console.log(username.value);
    console.log(password.value);
    createUser(username.value, email.value, password.value)
      .then((user) => {
        console.log(user);
        alert('Seu cadastro foi realizado com sucesso!');
      })
      .catch(() => {
        alert('Falha ao cadastrar');
      });
  });
  return container;
};
