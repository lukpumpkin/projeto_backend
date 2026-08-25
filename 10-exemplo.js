function func(x, y) {
  return x + y;
}
let soma = func(6, 7);
console.log("Soma: " + soma);

let subtracao = function(x, y) {
  return x - y;
};
console.log("Subtração: " + subtracao(6, 7));

let multiplicacao = (x, y) => { return x * y; };
console.log("Multiplicação: " + multiplicacao(6, 7));

let divisao = (x, y) => x / y;
console.log("Divisão: " + divisao(6, 7).toFixed(3));