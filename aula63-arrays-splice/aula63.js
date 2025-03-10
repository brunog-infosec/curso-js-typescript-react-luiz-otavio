const nomes = [
  "Ana",
  "Carlos",
  "Maria",
  "Pedro",
  "João",
  "Luiza",
  "Fernanda",
  "Rafael",
  "Juliana",
  "Ricardo",
];

// Utilização básica do splice -> .splice(indice, quantidade de elementos a remover, elemento 1 adicionar,
// elemento2 adicionar, elemento 3 adicionar, elemento4)

// pega o elemento do indice 0 e remove 2 elementos após
const removidos = nomes.splice(0, 2); 
console.log(removidos); // [ 'Ana', 'Carlos' ]

// A partir do indice 3, não remove nenhum elemento, e adiciona o elemento 'Luiz'
const adicionados = nomes.splice(3,0,'Luiz')
console.log(adicionados)
// no indice 3, remove 2 elementos, e adiciona Luiz e Marcos
const adicionados2 = nomes.splice(3,2,'Luiz','Marcos')

// Removendo o último elemento (pop)
nomes.splice(-1,1)

// Removendo o primeiro elemento (shift)
nomes.splice(0,1)

// Adiciona um ultimo elemento (push)
nomes.splice(nomes.length,0,'Adicionado')

// Adiciona no primeiro elemento (unshift)
nomes.splice(0,0,'Carlos')

console.log(nomes)