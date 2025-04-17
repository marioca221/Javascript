const prompt = require('prompt-sync')();

let n1 = prompt('Digite o 1 número:');
let n2 = prompt('Digite o 2 número:');

let soma = Number(n1) + Number(n2)
console.log(`A soma entre ${n1} e ${n2} e igual ${soma}!`);