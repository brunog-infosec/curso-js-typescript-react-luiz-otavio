function recursiva(max) {
  console.log(max);
  if (max >= 10) return;
  max++;
  recursiva(max);
}

recursiva(0);

// Função recursiva é função que se chama de volta
// Importante: Você deve se preocupar quando ela para a execução
// Você também deve entender que ele tem um limite da pilha da execução
// Quando chegar nesse determinado limite ele não irá mais executar