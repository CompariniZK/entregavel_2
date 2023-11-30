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

let alunosCadastrados = []
let whilezin = true

function CadastrarAluno(nome2, idade2, nota2)
{
while(whilezin = true){
nome2 = prompt("Digite o nome do aluno da FEBEM:")
idade2 = parseInt(prompt("Digite a idade(apenas números): "))
nota2 = Number(prompt("Insira a nota do meliante: "))
let contador = 0

class FEBEM{

nome1;
idade1;
nota1;

constructor(nome1, idade1, nota1){

  this.nome1 = nome1
  this.idade1 = idade1
  this.nota1 = nota1



}
}

let fundacao = new FEBEM(nome2, idade2 , nota2)
alunosCadastrados[contador] = fundacao
contador++

let desejo = parseInt(prompt("Deseja parar de cadastrar? (1) SIM; (2) Não"))
if(desejo === 1){

  whilezin = false
  
}
}
}