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
    this.numeroPedido = numeroPedido;
    this.dataPedido = (new Date().toLocaleDateString());
    this.estaPago = false;
    this.listaProdutos = [];
    this.nomeCliente = nomeCliente;
  }
  adicionarProduto(item) {
    return this.listaProdutos.push(item)
  }
}
