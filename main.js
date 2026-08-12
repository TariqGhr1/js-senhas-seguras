const numeroSenha = document.queryselector('.parametro-senha_texto');
const botoes = document.queryselectorAll('.parametro-senha_botoes');

let tamanhoSenha = 12;

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
    if (tamanhoSenha > 1 ) { 
        tamanhoSenha = tamanhoSenha - 1;
    }
    numeroSenha.text.content = tamanhoSenha;
}

function aumentaTamanho() {
    if (tamanhoSenha < 20 ) {
        tamanhoSenha = tamanhoSenha + 1;
    }
    numeroSenha.textContent = tamanhoSenha;
}

const campoSenha = document.querySelector('campo-senha');

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
geraSenha();

function geraSenha() {
    let senha = '';
    for(let i=0; i< tamanhoSenha; i++) {
        let numeroAleatorio = Math.random() * letrasMaiusculas.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + letrasMaiusculas[numeroAleatorio];
    }
    campoSenha.value = senha;
}