let produto = 'feijão';

switch(produto) {
  case 'arroz':
    console.log('Produto: arroz. Preço: R$ 5,00');
    break;
  case 'feijão':
    console.log('Produto: feijão. Preço: R$ 8,00');
    break;
  default:
    console.log('Produto não encontrado');
}