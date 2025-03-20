function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (valor > this.saldo) {
    console.log("Saldo insuficiente");
    this.verSaldo();
    return;
  }
  this.saldo -= valor;
  return this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  return this.verSaldo();
};

Conta.prototype.verSaldo = function () {
  console.log(
    `Ag/C: ${this.agencia}/${this.conta} | Saldo: R$ ${this.saldo.toFixed(2)}`
  );
};

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
  if (valor > this.saldo + this.limite) {
    console.log(`Saldo Insuficiente: R$${this.saldo}`);
    return;
  }
  this.saldo -= valor;
  return this.verSaldo();
};

function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const conta1 = new Conta(11, 22, 100);
conta1.depositar(50);
conta1.sacar(150);
conta1.sacar(1);

const cc = new ContaCorrente(11, 33, 0, 100);
cc.depositar(50);
cc.sacar(100);
cc.sacar(50);
cc.sacar(1);

const cp = new ContaPoupanca(12,24, 0);
cp.depositar(10)
cp.depositar(20)
cp.sacar(30)
cp.sacar(1)