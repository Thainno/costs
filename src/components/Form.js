import { useState } from "react";

function Form() {
  function cadastrarUsuario(event) {
    event.preventDefault();
    console.log(`Usuário: ${name}, Senha: ${password}`);
  }

  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <h1>Meu cadastro:</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">Usuário</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Usuário"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Senha"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <input type="submit" placeholder="Cadastrar" />
        </div>
      </form>
    </div>
  );
}

export default Form;
