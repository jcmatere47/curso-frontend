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
