class Produto {
  constructor(nome, preco, emEstoque, quantidade) {
    this.nome = nome,
      this.preco = preco,
      this.emEstoque = emEstoque,
      this.quantidade = quantidade;
  }
}

class Pedidos {
  constructor(numeroPedido, nomeCliente) {
    this.nomeCliente = nomeCliente;
    this.numeroPedido = numeroPedido;
    this.dataPedido = (new Date().toLocaleDateString());
    this.estaPago = false;
    this.listaProdutos = [];
  }

  adicionarProduto(item) {
    if (item instanceof Produto) {
      this.listaProdutos.push(item);
    }
  }

  calcularTotal() {
    let valorTotal = 0
    this.listaProdutos.forEach(produto => {
      valorTotal += (produto.quantidade * produto.preco);
    });
    return valorTotal;
  }
}

const item1 = new Produto("arroz", 3.19, true, 3);
const item2 = new Produto("feijao", 5.50, true, 2);
const item3 = new Produto("batata", 2.99, true, 1);
const item4 = new Produto("banana", 3.49, true, 0.5);
const item5 = new Produto("carne", 35.20, true, 1);
const pedido1 = new Pedidos(20220001, "Fernando",);
const pedido2 = new Pedidos(20220002, "Henrique");
pedido1.adicionarProduto(item1);
pedido1.adicionarProduto(item2);
pedido1.adicionarProduto(item3);
pedido2.adicionarProduto(item4);
pedido2.adicionarProduto(item5);
pedido1.listaProdutos.forEach(produto => {
  console.log(`Produto: ${produto.nome} | Valor un: ${produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} | Qtde do Pedido: ${produto.quantidade} | Total: ${(produto.preco * produto.quantidade).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
});
console.log(`Preço total do pedido do cliente ${pedido1.nomeCliente}:  ${pedido1.calcularTotal().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}\n`);

pedido2.listaProdutos.forEach(produto => {
  console.log(`Produto: ${produto.nome} | Valor un: ${produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} | Qtde do Pedido: ${produto.quantidade} | Total: ${(produto.preco * produto.quantidade).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
});
console.log(`Preço total do pedido do cliente ${pedido2.nomeCliente}: ${pedido2.calcularTotal().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);

