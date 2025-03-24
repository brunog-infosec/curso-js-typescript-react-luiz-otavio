class DispositivoEletronico {
  constructor(nome, ligado) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(this.nome + " está ligado");
      return;
    }
    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(this.nome + " está desligado");
      return;
    }
    this.ligado = false;
  }
}

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }
  ligar() {
    if (this.ligado) {
      console.log(`${this.modelo} está ligado`);
      return;
    }

    this.ligado = true;
  }
}

class Tablet extends DispositivoEletronico {
  constructor(nome, temWifi) {
    super(nome);
    this.temWifi = temWifi;
  }
}

const d1 = new DispositivoEletronico("Smartphone");
d1.ligar();
d1.ligar();
d1.desligar();
d1.desligar();

const s1 = new Smartphone("Samsung", "Branco", "S20");
s1.ligar();
console.log(s1.ligado);
s1.ligar();

const t1 = new Tablet("Ipad", true);

t1.ligar();
t1.ligar();
console.log(t1.temWifi);
