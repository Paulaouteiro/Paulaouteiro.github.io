function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validarCPF(cpf) {
    const regex = /^\d{11}$/;
    return regex.test(cpf);
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (!validarEmail(email)) {
        alert('Por favor, insira um email válido.');
        event.preventDefault();
    }

    if (senha.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres.');
        event.preventDefault();
    }
});

document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const cpf = document.getElementById('cpf').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const emailCadastro = document.getElementById('emailCadastro').value;
    const senhaCadastro = document.getElementById('senhaCadastro').value;

    if (nome.length < 2) {
        alert('Por favor, insira um nome válido.');
        event.preventDefault();
    }

    if (telefone.length < 10) {
        alert('Por favor, insira um telefone válido.');
        event.preventDefault();
    }

    if (!validarCPF(cpf)) {
        alert('Por favor, insira um CPF válido.');
        event.preventDefault();
    }

    if (!validarEmail(emailCadastro)) {
        alert('Por favor, insira um email válido.');
        event.preventDefault();
    }

    if (senhaCadastro.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres.');
        event.preventDefault();
    }
});