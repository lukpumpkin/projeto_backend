let vet = ['casa', "carro", true, 6.7, [1, 2, 3]]

console.log("1) Elementos do vetor:");
for (let i = 0; i < vet.length; i++) 
  console.log(`vet[${i}] = ${vet[i]}`);

console.log("\n2) Elementos do vetor:");
for (let elemento in vet)
  console.log(`vet[${elemento}] = ${vet[elemento]}`);

console.log("\n3) Elementos do vetor:");
let resultadoForEach = vet.forEach(function(elemento, indice) {
  console.log(`vet[${indice}] = ${elemento}`);
  return elemento += " alterado";
});
/*
 * resultado = undefined, pois .forEach() não retorna valor, 
 * apenas executa a função para cada elemento do vetor.
 */ 
console.log("resultado = " + resultadoForEach); 

console.log("\n4) Elementos do vetor:");
let resultadoMap = vet.map(function(elemento, indice) {
  console.log(`vet[${indice}] = ${elemento}`);
  return elemento += " alterado";
});
/*
 * resultado = casa alterado,carro alterado,true alterado,6.7 alterado,1,2,3 alterado, 
 * pois .map() executa a função para cada elemento do vetor eretorna valor.
 */ 
console.log("resultado = " + resultadoMap);