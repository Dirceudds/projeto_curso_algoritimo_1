/*escreval ("Digita o nome do aluno: ")
leia (nome)
escreval ("Digita a nota 01 do aluno: ")
leia (nota1)
escreval ("Digita a nota 02 do aluno: ")
leia (nota2)
media := (nota1 + nota2) / 2

se media >= 50 entao
escreval ("Aprovado: " , nome)
senao
escreval ("Reprovado: " , nome)
fimse*/

var nome, media, nota1, nota2;
nome = prompt("digite o nome do aluno: ")
nota1 = prompt("digite a nota 1 do aluno: ")
nota2 = prompt("digite a nota 2 do aluno: ")

media = (parseInt(nota1) + parseInt(nota2)) / 2;

if (media >= 50) {
    alert(nome + " aprovado " + media);

}
else {
    alert(" reprovado " + media + nome)
}