let obj = {
  'imovel': 'casa', 
  'veiculo': "carro", 
  'vendido': true, 
  'preco': 6.7, 
  'meses': [1, 2, 3]
};

for (let chave in obj) 
  console.log(chave + ": " + obj[chave]);

console.log('\n');

for (let chave of Object.keys(obj)) 
  console.log(chave + ": " + obj[chave]);