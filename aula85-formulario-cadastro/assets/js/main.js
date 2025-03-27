class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector(".formulario");

    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener("submit", (el) => {
      this.handleSubmit(el);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Formulario não enviado");
    const validFields = this.checkFields();
    const validPasswords = this.checkPasswords();

    if(validFields && validPasswords) {
        alert('Formulário Enviado');
        this.formulario.submit();
    }
  }

  checkPasswords(){
    let valid = true;
    const senha = this.formulario.querySelector('.senha');
    const repetirSenha = this.formulario.querySelector('.repetir-senha');

    if(senha.value !== repetirSenha.value) {
        this.createError(senha, 'Campos senha e repetir senha precisam ser iguais');
        this.createError(repetirSenha, 'Campos senha e repetir senha precisam ser iguais');
        valid = false;
    }

    if(senha.value.length < 6 || senha.value.length > 12) {
        valid = false;
        this.createError(senha, 'Campos senha precisa conter entre 6 e 12 caracteres');
    }


    return valid;
  }

  checkFields() {
    let valid = true;

    //remove as mensagens para de erro para não ficarem duplicadas
    for (let errorText of this.formulario.querySelectorAll(".error-text")) {
      errorText.remove();
    }

    for (let field of this.formulario.querySelectorAll(".validar")) {
      // Checa se o valor enviado está em branco
      if (!field.value) {
        const label = field.previousElementSibling.innerText;

        this.createError(field, `Campo "${label}" não pode estar em branco`);
        valid = false;
      }

      //Checa CPF
      if (field.classList.contains("cpf")) {
        if (!this.validaCPF(field)) valid = false;
      }

      //Checa Usuário
      if (field.classList.contains("usuario")) {
        if (!this.validaUsuario(field)) valid = false;
      }
    }
    return valid;
  }

  validaUsuario(field) {
    const usuario = field.value;
    let valid = true;
    if (usuario.length < 3 || usuario.length > 12) {
      this.createError(field, "Usuário precisa ter entre 3 e 12 caracteres");
      valid = false;
    }

    if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
        this.createError(field, "Nome de Usuário precisa conter apenas letras ou números");
        valid = false;
      }

    return true;
  }

  validaCPF(field) {
    const cpf = new ValidaCpf(field.value);
    if (!cpf.valida()) {
      this.createError(field, "CPF inválido");
      return false;
    }
    return true;
  }

  createError(field, msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("error-text");
    field.insertAdjacentElement("afterend", div);
  }
}

const valida = new ValidaFormulario();
