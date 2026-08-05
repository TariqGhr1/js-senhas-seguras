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