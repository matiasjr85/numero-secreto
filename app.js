alert('Bem vindo ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//
while (chute != numeroSecreto) {
   chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

   if (numeroSecreto == chute) {
    break;

} else {
    if (numeroSecreto > chute) {
        alert(`O numero secreto e maior que ${chute}`);
    } else {
        alert(`O numero secreto e menor que ${chute}`);
    }
    tentativas++;
}
}

let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert (`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavratentativa}.`);
//if (tentativas > 1) {
//    alert (`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
//
//} else {
//    alert (`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
//}

