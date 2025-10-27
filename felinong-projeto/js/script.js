// ------------------- Script principal -------------------

// Seleciona a tag <main> e o alerta
const main = document.querySelector('main');
const alerta = document.getElementById('alerta');

// ===================== Função para exibir templates =====================
function mostrarTemplate(nomeTemplate) {
    if (!templates[nomeTemplate]) {
        console.warn('Template não encontrado:', nomeTemplate);
        nomeTemplate = 'inicio';
    }

    main.innerHTML = templates[nomeTemplate];

    // Inicializa formulário de cadastro, se existir
    if (nomeTemplate === 'cadastro') {
        initCadastroForm();
    }
}

function mostrarAlerta(mensagem, cor = '#4CAF50') {
    const alerta = document.getElementById('alerta');
    alerta.textContent = mensagem;
    alerta.style.backgroundColor = cor;
    alerta.classList.add('visivel');

    setTimeout(() => alerta.classList.remove('visivel'), 4000); // desaparece suavemente
}



// ===================== Inicializa formulário de cadastro =====================
function initCadastroForm() {
    const novoForm = document.getElementById('cadastroForm');
    if (!novoForm) return;

    // Máscara CPF
    const cpf = novoForm.querySelector('#cpf');
    if (cpf) {
        cpf.addEventListener('input', () => {
            let v = cpf.value.replace(/\D/g, '');
            v = v.replace(/(\d{3})(\d)/, '$1.$2');
            v = v.replace(/(\d{3})(\d)/, '$1.$2');
            v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            cpf.value = v;
        });
    }

    // Máscara telefone
    const telefone = novoForm.querySelector('#telefone');
    if (telefone) {
        telefone.addEventListener('input', () => {
            let v = telefone.value.replace(/\D/g, '');
            v = v.replace(/^(\d{2})(\d)/g, '($1) $2');
            v = v.replace(/(\d{5})(\d{4})$/, '$1-$2');
            telefone.value = v;
        });
    }

    // Máscara CEP
    const cep = novoForm.querySelector('#cep');
    if (cep) {
        cep.addEventListener('input', () => {
            let v = cep.value.replace(/\D/g, '');
            v = v.replace(/(\d{5})(\d)/, '$1-$2');
            cep.value = v;
        });
    }

    // Envio do formulário
    novoForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = novoForm.querySelector('#email').value;
        if (!email.includes('@')) {
            mostrarAlerta('Digite um e-mail válido!', '#ff4d4d');
            return;
        }

        const dados = {
            nome: novoForm.querySelector('#nome').value,
            email: email,
            cpf: cpf.value,
            telefone: telefone.value,
            cep: cep.value,
            endereco: novoForm.querySelector('#endereco').value,
            cidade: novoForm.querySelector('#cidade').value,
            estado: novoForm.querySelector('#estado').value,
            nascimento: novoForm.querySelector('#nascimento').value
        };

        // Salva no localStorage
        localStorage.setItem('cadastroUsuario', JSON.stringify(dados));

        // Mostra alerta
        mostrarAlerta('✅ Cadastro enviado com sucesso! Obrigado por se juntar à FELINONG 🐾');

        // Reseta o formulário
        novoForm.reset();

        // Recarrega o template apenas após o alerta desaparecer (4s)
        setTimeout(() => {
            mostrarTemplate(location.hash.replace('#','') || 'cadastro');
        }, 4000);
    });
}

// ===================== Event delegation: botões dentro do main =====================
main.addEventListener('click', (e) => {
    const botao = e.target.closest('.acao-botao');
    if (botao) {
        mostrarTemplate('cadastro');
    }
});

// ===================== Navegação via links do header =====================
window.addEventListener('hashchange', () => {
    const hash = location.hash.replace('#', '') || 'inicio';
    mostrarTemplate(hash);
});

// ===================== Inicializa SPA ao carregar =====================
window.addEventListener('load', () => {
    const hash = location.hash.replace('#', '') || 'inicio';
    mostrarTemplate(hash);
});
