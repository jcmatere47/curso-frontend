# Operadores

## Aritméticos: retornam o resultado de uma operação
+ somar
- subtrair 
* multiplicar 
/ dividir
% resto de divisão

## Comparadores matemáticos: teste lógico, retorno booleano(true/false)
< menor que
> maior que 
<= menor ou igual
>= maior ou igual 

## Comparadores Lógicos: teste lógico, retorno booleano
== igualdade entre sentenças(valor)
!= diferença entre sentenças(valor)
=== igualdade entre sentenças( valor e tipo)
!== diferença entre sentenças ( valor e tipo)

## Operadores de lógica e junção lógica
! NÃO(NOT)
&& E (AND)
|| OU (OR)

O sinal de exclamçaõ (!) é o operador NOT (não), utilizado para negar a sentença que vem na sequência. 

### Exemplos:
a != b // o valor de a é diferente de b
x !=== y // o valor e o tipo de x são diferentes
!a == b // o valor de a não é igual ao valor de b

### As condições lógicas são convertidas em números não binários:
true é equivalente a 1 
false é equivalente a 0

### Operador lógico de atribuição

Tem a capacidade de atribuir valor a uma variável a partir de uma condição lógica, economiza IF's

Exemplo:

var meuCarro = cor =="preto"? "preto" : "branco";

## If
if (...) {

}

## Else 
else {

}

exemplo: if (cor == "preto") {
    meuCarro = "preto";
    { else  }
    meuCarro ="cinza";
}

## Else if

*Exemplo
if (cor == "preto") {
 meuCarro = "preto";
 } else if (cor =="vermelho"){  
 } else if (cor =="amarelo"){
   meuCarro ="branco";
   } else { 
    meuCarro ="azul";
 }

 ## Switch 
 switch (cor) {
     case 'branco' : 
      meuCarro = 'branco'
      break;
     case 'vermelho':
      meuCarro = 'vermelho'
      break;
     case 'amarelo' :
      meuCarro = 'amarelo'
      break;
     default :
        console.log('não temos a cor desejada');
 }

## Cálculo média do aluno
...

var nota1 = 10;
var nota2 = 8;
var nota3 = 9;
var nota4 = 7;
var media =(nota1 + nota2 + nota3 + nota4) / 4;
if(media >= 8) {
    console.log("Aluno Aprovado")
} else {
    console.log("Aluno em recuperação")
}

## Laços de repetição

...
// fazer a revisão do carro aos 10km
var km;
var revisao = 10;

for(km = 0; km < revisao; km++){
    console.log("Pode rodar")
}

### Cálculo de média de alunos
var alunos = [
    [6, 7, 8, 6],
    [8, 5, 6, 8],
    [10, 6, 8, 7],
    [6, 6, 6, 6, 6]

]
var nota = 0;
for (var i = 0; i < alunos.length; i++){

    nota = 0
    notasAluno = alunos[i]
    console.log("Aluno: " + parseInt(i+1));
    console.log("Notas: " + notasAluno);

    for (c = 0; c < notasAluno.length; c++){
        nota += notasAluno[c];
    }

    media = nota / 4;

    if(media >= 7){
        resultado = "Aprovado!";
    } else {
        resultado = "Reprovado";
    }

    console.log("Media: " + media " - " + resultado);
}

## Funções
- Evitar repetição de código 
- Realizar chamadas dinâmicas de algoritmos

function calculoMedia ( notas ) {

    var soma = 0;
    for( c = 0; c < Notas.length; c++) {
        soma += notas[c];
        
    }

    media = soma / notas.length; // Recebe o tamanho das notas inseridas

    return media;
}

console.log("Média: " + calculoMedia([8, 8]))


## Funções Recursivas
