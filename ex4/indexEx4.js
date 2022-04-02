class Pedidos {
  constructor(numeroPedido, nomeCliente) {
    this.numeroPedido = numeroPedido;
    this.dataPedido = (new Date().toLocaleDateString());
    this.estaPago = false;
    this.listaProdutos = [];
    this.nomeCliente = nomeCliente;
  }
}
