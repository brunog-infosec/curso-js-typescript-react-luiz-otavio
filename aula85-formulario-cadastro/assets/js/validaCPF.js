class ValidaCpf {
    constructor(cpfEnviado) {
      Object.defineProperty(this, "cpfLimpo", {
        writable: false,
        enumerable: false,
        configurable: false,
        value: cpfEnviado.replace(/\D+/g, ""),
      });
    }
  
    isSequence() {
      return this.cpfLimpo[0].repeat(11) === this.cpfLimpo;
    }
  
    geraNovoCpf() {
      const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
      const digito1 = ValidaCpf.geraDigito(cpfSemDigitos);
      const digito2 = ValidaCpf.geraDigito(cpfSemDigitos + digito1);
      this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }
  
    static geraDigito(cpfSemDigitos) {
      let total = 0;
      let reverso = cpfSemDigitos.length + 1;
      for (let stringNumerica of cpfSemDigitos) {
        total += reverso * Number(stringNumerica);
        reverso--;
      }
  
      const digito = 11 - (total % 11);
      return digito <= 9 ? String(digito) : "0"; // Se for menor que 9, retorna o digito, caso contrário retorna 0
    }
  
    valida() {
      if (!this.cpfLimpo) return false;
      if (typeof this.cpfLimpo !== "string") return false;
      if (this.cpfLimpo.length !== 11) return false;
      if (this.isSequence()) return false;
      this.geraNovoCpf();
      console.log(this.novoCPF);
      return this.novoCPF === this.cpfLimpo;
    }
  }
  
//   let validaCpf = new ValidaCpf("362.720.158-28");
//   validaCpf = new ValidaCpf("999.999.999-99")
  
//   if (validaCpf.valida()) {
//     console.log("CPF Válido");
//   } else {
//     console.log("Cpf Inválido");
//   }
  