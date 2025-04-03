fetch("pessoas.json")
  .then((resposta) => resposta.json())
  .then((json) => carregaElementosNaPagina(json));

// axios('pessoas.json')
//   .then(resposta => carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json) {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  let tableHeaders = ["Nome", "Idade", "Salario"];

  let tr = document.createElement("tr");
  thead.appendChild(tr);

  tableHeaders.forEach((header) => {
    let scoreHeader = document.createElement("th");
    scoreHeader.innerText = header;
    tr.appendChild(scoreHeader);
  });

  table.appendChild(thead);

  for (let pessoa of json) {
    const tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerHTML = pessoa.nome;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.innerHTML = pessoa.idade;
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.innerHTML = `R$ ${pessoa.salario.toFixed(2)}`
    tr.appendChild(td3);

    table.appendChild(tr);

    // const tableData = `<tr>
    // <td>${pessoa.nome}</td>
    // <td>${pessoa.idade}</td>
    // <td>${pessoa.email}</td>
    // </tr>
    // `
    // table.innerHTML += tableData;
  }

  const resultado = document.querySelector(".resultado");
  resultado.appendChild(table);
}
