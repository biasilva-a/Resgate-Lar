document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");

  const nomeInput = document.getElementById("Nome");
  const emailInput = document.getElementById("Email");
  const senhaInput = document.getElementById("Senha");
  const senha2Input = document.getElementById("Senha2");

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const listaContainer = document.createElement("ul");
  document.body.appendChild(listaContainer);

  function renderUsuarios() {
    listaContainer.innerHTML = "";
    usuarios.forEach((usuario, cadastro) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${usuario.nome}</strong><br>
        E-mail: ${usuario.email}<br>
        <button onclick="editar(${cadastro})">Editar</button>
        <button onclick="remover(${cadastro})">Remover</button>
      `;
      listaContainer.appendChild(li);
    });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim();
    const senha = senhaInput.value;
    const senha2 = senha2Input.value;

    if (senha !== senha2) {
      alert("As senhas não coincidem!");
      return;
    }

   
    const existeEmail = usuarios.some(usuario => usuario.email === email);
    if (existeEmail) {
      alert("Este e-mail já está cadastrado!");
      return;
    }

    const novoUsuario = { nome, email, senha };
    usuarios.push(novoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    form.reset();
    renderUsuarios();

    alert("Cadastro realizado com sucesso!");
    form.reset();

   window.location.href = "index3.html";

  });

  window.remover = function (cadastro) {
    usuarios.splice(cadastro, 1);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    renderUsuarios();
  };

  window.editar = function (cadastro) {
    const usuario = usuarios[cadastro];
    nomeInput.value = usuario.nome;
    emailInput.value = usuario.email;
    senhaInput.value = usuario.senha;
    senha2Input.value = usuario.senha;
    usuarios.splice(cadastro, 1);
    renderUsuarios();
  };

  renderUsuarios();

  });