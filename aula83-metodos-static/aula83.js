class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  //Método de Instância
  aumentarVolume() {
    this.volume += 2;
  }

  diminuirVolume() {
    this.volume -= 2;
  }

  //metodo estático - como se fosse uma função fora da classe
  static soma(x, y) {
    return x + y;
  }
}

const controle1 = new ControleRemoto("LG");
const controle2 = new ControleRemoto("Samsung");

controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1.volume)


controle2.diminuirVolume();
controle2.diminuirVolume();
console.log(controle2.volume)


//Métodos estáticos são somente acessados pela Classe
console.log(ControleRemoto.soma(10, 10));
