const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');

    // Teste se o retorno da função é um array.
    expect(typeof productDetails('algodao', 'luz').length).toBe('number');

    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('algodao', 'luz').length).toBe(2);

    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof productDetails('algodao', 'luz')[0]).toBe('object');
    expect(typeof productDetails('algodao', 'luz')[1]).toBe('object');

    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('algodao', 'luz')[0]!== productDetails('algodao', 'luz')[1]).toBeTruthy();

    // Teste se os dois productIds terminam com 123.
    expect(productDetails('algodao', 'luz')[0].details.productId === 'algodao123' && productDetails('algodao', 'luz')[1].details.productId === 'luz123').toBe(true);
  });
});