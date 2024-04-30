/* Var
// Seção de Declarações das variáveis
    nota1, nota2, media: real
    nome: caracter
    passou: logico
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   passou := falso
    escreval ("Digita o nome do aluno: ")
    leia (nome)
   escreval ("Digita a nota 01 do aluno: ")
    leia (nota1)
    escreval ("Digita a nota 02 do aluno: ")
   leia (nota2)
   media := (nota1 + nota2) / 2
   
   //bicondicional quando a duas condicoes

   se media >= 50 entao
      passou := verdadeiro
   fimse
   
   se ( passou ) && ( media >=50 || media <= 70) entao
      escreval ("Aprovado: " , nome)
   senao
        escreval ("Reprovado: " , nome)
   fimse */

   var nome, nota1, nota2, passou;

   passou = false;
   nome = prompt("digite o nome do aluno: ")
nota1 = prompt("digite a nota 1 do aluno: ")
nota2 = prompt("digite a nota 2 do aluno: ")

media = (parseInt(nota1) + parseInt(nota2)) / 2;

if (media >= 50) 
   passou = true;

if(passou && (media >= 70 && media <= 90))
   alert("Aprovado"+ ""media)
else {
    alert(" reprovado " + media + nome)
}