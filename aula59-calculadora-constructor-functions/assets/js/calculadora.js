// //Criando a função Constructor para Calculadora

function Calculadora() {
  const display = document.querySelector(".display");

  this.start = function () {
    getClickButtons();
    clear();
    getEnterKey();
  };

  const getClickButtons = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;

      if (el.classList.contains("btn-num")) addInputDisplay(el.innerText);
      if (el.classList.contains("btn-clear")) clear();
      if (el.classList.contains("btn-del")) del();
      if (el.classList.contains("btn-eq")) calculate();
    });
  };

  const getEnterKey = () => {
    display.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        calculate();
      }
    });
  };

  const addInputDisplay = (value) => (display.value += value);
  const clear = () => (display.value = "");
  const del = () => (display.value = display.value.slice(0, -1));
  const calculate = () => {
    const clearInput = display.value.replace(/[^\d\.\/\*\-\+\^\(\)e]/gi, "");
    let operation = clearInput;
    try {
      let result = eval(operation);

      if (result === 0) return (display.value = 0);
      if (!result) {
        alert("Conta inválida ou valor igual a zero!");
        clear();
        return;
      }

      display.value = String(result);
    } catch (e) {
      alert("Conta inválida");
      clear();
      return;
    }
  };
}

const calculadora = new Calculadora();
calculadora.start();
