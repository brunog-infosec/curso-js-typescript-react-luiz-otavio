const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const gerarMaisculas = () => String.fromCharCode(rand(65, 91));
const gerarMinusculas = () => String.fromCharCode(rand(97, 123));
const gerarNumeros = () => String.fromCharCode(rand(48, 58));
const simbolos = ",.;?~^][{}@#$%¨&*()_-=+";
const gerarSimbolos = () => simbolos[rand(0, simbolos.length)];

export default function gerarSenha(qtd, maisculas, minusculas, numeros, simbolos) {
  const senhaArray = [];
  qtd = Number(qtd);
  for (let i = 0; i < qtd; i++) {
    maisculas && senhaArray.push(gerarMaisculas());
    minusculas && senhaArray.push(gerarMinusculas());
    numeros && senhaArray.push(gerarNumeros());
    simbolos && senhaArray.push(gerarSimbolos());
  }

  return senhaArray.join("").slice(0, qtd);
}
