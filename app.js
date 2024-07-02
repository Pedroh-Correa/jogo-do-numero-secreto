let listaDeNumerosSorteados = [];
let limiteDeNumerosSorteados = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto , "Brazilian Portuguese Female" , {rate:1.2})
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector("input").value;
    
    if (numeroSecreto == chute) {
        let palavraTentativa = tentativas > 1? " tentativas" : " tentativa";
        exibirTextoNaTela("h1", "Voce Acertou!");
        exibirTextoNaTela("p", "Voce descobriu o número secreto com " + tentativas + palavraTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } 
    else {
        if(numeroSecreto > chute){
            exibirTextoNaTela("h1", "Voce ainda nao acertou tente novamente");
            exibirTextoNaTela("p", "O número secreto é maior");
        }
        else{
            exibirTextoNaTela("h1", "Voce ainda nao acertou tente novamente");
            exibirTextoNaTela("p", "O número é menor");
        }
        tentativas += 1;
        limparCampo();
    }
}

function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do numero secreto");
    exibirTextoNaTela("p","Escolha um numero de 1 a 10" );

}

function gerarNumeroAleatorio() {
    let numeroSorteado = parseInt(Math.random() * limiteDeNumerosSorteados + 1);

    if (listaDeNumerosSorteados.length == limiteDeNumerosSorteados) {
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroSorteado)){
        return gerarNumeroAleatorio();
    }
    else{
        listaDeNumerosSorteados.push(numeroSorteado);
        console.log(listaDeNumerosSorteados);
        return numeroSorteado;
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = " ";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    exibirMensagemInicial();
    tentativas = 1;
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

