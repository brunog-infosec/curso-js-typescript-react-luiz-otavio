const form = document.getElementById("imcForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const peso = parseFloat(event.target.querySelector("#input-peso").value);
  const altura = parseFloat(event.target.querySelector("#input-altura").value);

    if(!peso) {
        setResultado('Peso invalido', false);
        return;
    }

    if(!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso,altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc})`;

    setResultado(msg,true);
});

function getNivelImc(imc) {
    const nivel = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau I', 'Obesidade Grau II', 'Obesidade grau III'];
    if (imc < 18.5) return nivel[0]
    if (imc <= 24.9) return nivel[1]
    if (imc <= 29.9) return nivel[2]
    if (imc <= 34.9) return nivel[3]
    if (imc <= 39.9) return nivel[4]
    if (imc > 40) return nivel[5]
};

function getImc (peso,altura) {
    const imc = peso /altura ** 2;
    return imc.toFixed(2);
}

function criaParagrafo () {
    const p = document.createElement('p');
    return p;
    
}

function setResultado(msg, isValid){
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = '';

    const p = criaParagrafo();

    if (isValid) {
        p.classList.add('active');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p)
}

//     elementoResultado.classList.add("active");
//     elementoResultado.innerText = `Seu IMC é ${imc} => ${resultado}`;
//     limparDados();
//   } else {
//     elementoResultado.classList.add("bad");
//     document.getElementById("resultado").innerText =
//       "Por favor, insira valores válidos.";
//     limparDados();
//   }
//   function limparDados() {
//     setInterval(() => {
//       elementoResultado.innerText = "";
//       elementoResultado.classList.remove("active");
//       elementoResultado .classList.remove("bad");
//     }, 10000);
//   }
// });
