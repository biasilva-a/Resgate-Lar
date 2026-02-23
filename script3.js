
/* script3.js - Lógica do Chat */
const btnUpload = document.getElementById('btnUpload');
const fileInput = document.getElementById('fileInput');
const btnEnviarEmail = document.getElementById('btnEnviarEmail');
const btnRestart = document.getElementById('btnRestart');

// Passos do Chat
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');

// 1. Ação de Upload
btnUpload.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
        step1.classList.remove('active');
        step2.classList.add('active');
    }
});

// 2. Ação de E-mail
btnEnviarEmail.addEventListener('click', () => {
    const email = document.getElementById('userEmail').value;
    if (email.includes('@')) {
        document.getElementById('displayEmail').innerText = email;
        step2.classList.remove('active');
        step3.classList.add('active');
    } else {
        alert("Digite um e-mail válido!");
    }
});

// 3. Voltar pro index3.html (Sair do chat)
btnRestart.addEventListener('click', () => {
    window.location.href = "inicio.html";
});