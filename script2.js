document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const emailInput = document.getElementById("E-mail");
  const senhaInput = document.getElementById("Senha");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const senha = senhaInput.value;
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuario = usuarios.find(
      (user) => user.email === email && user.senha === senha
    );

    if (usuario) {
      alert("Login bem-sucedido! Bem-vindo(a), " + usuario.nome);
      window.location.href = "index3.html"; 
    } else {

      alert("E-mail ou senha incorretos! Verifique seus dados.");
    }
  });
});