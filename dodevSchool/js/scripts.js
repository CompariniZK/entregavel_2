class Aluno{

  nome;
  idade;
  nota; 

  constructor(nome, idade, nota){
    this.nome = nome
    this.idade = idade
    this.nota = nota
  }

}

let alunosCadastrados = [];
let desejaContinuar;

function cadastrarAluno(nome, idade, nota){
  let aluno = new Aluno(nome,idade,nota);
  alunosCadastrados.push(aluno);
}

do{

  alert("FUNDAÇÃO FEBEM ROUBOU SE FERROU");
  let nome = prompt("Qual o nome do mal elemento?");
  let idade = parseInt ((prompt("Qual a idade do mal elemento?")))
  let nota = Number((prompt("Qual a nota do meliante?")));

  cadastrarAluno(nome, idade, nota);

  desejaContinuar = prompt("Digite S para continuar a cadastrar alunos e N para parar:");

}while(desejaContinuar != 'N');

function calcularMedia(alunosCadastrados) {
  let somaTotal = 0; 
  alunosCadastrados.forEach(aluno => {
    somaTotal += aluno.nota;
  });
  let media = somaTotal / alunosCadastrados.length;
  return media;
}

console.log(calcularMedia(alunosCadastrados));

function ordenaNota(alunos) {
  alunos.sort((a, b) => b.nota - a.nota);
}

function ordenaPorIdade(alunos){
  alunos.sort((a,b) => b.idade - a.idade);
}

function ordenaNome(alunos) {
  alunos.sort((a, b) => a.nome.localeCompare(b.nome));
}


ordenaNota(alunosCadastrados);
console.log('Alunos ordenados por notas:')
alunosCadastrados.forEach(alunoNaPosicao => {
  console.log(alunoNaPosicao.nome +" é " + alunoNaPosicao.nota)
})

ordenaPorIdade(alunosCadastrados);
console.log('Alunos ordenados por idade:');
alunosCadastrados.forEach(alunoNaPosicao => {
console.log(alunoNaPosicao.nome + " é " +  alunoNaPosicao.idade)
})

ordenaNome(alunosCadastrados);
console.log('Alunos ordenados por nome:');
alunosCadastrados.forEach(alunoNaPosicao => {
console.log(alunoNaPosicao.nome)
})