/**
 * Tem a função de pausar o código em um determinado local
 * Por Exemplo: Preciso que a função me entregue 3 valores,
 * Um valor para cada chamada da função automaticamente.
 * lazy Evaluation: avaliação preguiçosa -> Bom para perfomance do programa
 * Pois nunca vai te entregar todos valores de uma vez.
 */

function* geradora1() {
  yield "Valor 1"; // pausa a execução e retorna a string
  yield "Valor 2";
  yield "Valor 3";
}

const g1 = geradora1();
//console.log(g1); // Object [Generator] {}
//console.log(g1.next().value); // Valor 1 -> mostra o valor da primeira chamada
//console.log(g1.next().value); // Valor 2 -> mostra o valor da segunda chamada
//console.log(g1.next().value); // Valor 3 -> mostra o valor da terceira chamada

// Dentro do método Next(), teremos o retorno de um objeto com atributo: value, done
// No value é o que pedimos para o yield retornar,
// No done é um valor booleano que diz true, caso terminou a execução do gerador
// O done irá retornar true somente após a última execução do último yield

/* Retorna o valor do yield a cada execução
 * Muito útil para quando percorrer um arquivo grande, streaming de dados ou
 * quando não queremos sobrecarregar a memória do nosso programa
 */

// Podemos fazer a iteração da função com for:
for (let valor of g1) {
  console.log(valor);
}

//Podemos também fazer um gerador infinito -> porém com cuidado

function* geradora2() {
  let i = 0;
  while (true) {
    yield i;
    i++;
  }
}

const g2 = geradora2();
console.log(g2.next().value); // 0
console.log(g2.next().value); // 1
console.log(g2.next().value); // 2
console.log(g2.next().value); // 3
console.log(g2.next().value); // 4

// Função Geradora que delega função pra outra geradora
function* geradora3() {
  yield 0;
  yield 1;
  yield 2;
}

function* geradora4() {
  yield* geradora3();
  yield 3;
  yield 4;
  yield 5;
}

const g4 = geradora4();
// Delegando parte da tarefa e chamando os valores
for (let valor of g4) {
  console.log(valor); // 0-1-2-3-4-5
}

// Exemplificando uso num sistema onde uma função executa 1 tarefa separada
function* geradora5() {
  yield function () {
    console.log("Vim do yield 1");
  };

  // retorna e não continua pro próximo yield
  return function () {
    console.log("Vim do Return");
  };

  // ....

  yield function () {
    console.log("Vim do yield 2");
  };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;

func1(); // Vim do yield 1
func2(); // Vim do yield 2
func3(); // Vim do Return
