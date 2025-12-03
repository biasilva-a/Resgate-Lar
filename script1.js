document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const nomeInput = document.getElementById("Nome");
  const emailInput = document.getElementById("Email"); 
  const senhaInput = document.getElementById("Senha");
  const senha2Input = document.getElementById("Senha2");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim();
    const senha = senhaInput.value;
    const senha2 = senha2Input.value;
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    if (senha !== senha2) {
      alert("As senhas não coincidem!");
      return;
    }

    const existeEmail = usuarios.some((user) => user.email === email);
    if (existeEmail) {
      alert("Este e-mail já está cadastrado! Tente fazer login.");
      return;
    }

    const novoUsuario = { nome, email, senha };
    usuarios.push(novoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Cadastro realizado com sucesso! Você será redirecionado para a pagina principal.");
    form.reset();

    window.location.href = "index3.html"; 
  });
});