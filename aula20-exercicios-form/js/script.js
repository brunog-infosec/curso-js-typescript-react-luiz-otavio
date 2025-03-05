//Escopo de função
function meuEscopo() {
  const form = document.querySelector(".form"); //Selecionando nosso formulário
  const resultado = document.querySelector(".resultado"); //Selecionando a div onde será exibido o resultado

  const pessoas = []; //Array para armazenar os dados dos usuários

  //Função para prevenir o comportamento padrão do formulário
  function receiveDataForm(e) {
    e.preventDefault();
    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    //Adicionando os dados do usuário no array
    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    });
    //Exibindo os dados do usuário na tela
    resultado.innerHTML += `<p>Nome: ${nome.value} ${sobrenome.value} Peso: ${peso.value} Altura: ${altura.value}</p>`;
    console.log(pessoas);
  };

  form.addEventListener("submit", receiveDataForm);
};

meuEscopo();
