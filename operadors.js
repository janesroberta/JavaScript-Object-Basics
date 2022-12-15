//operadores

//Operador	Explicação	Símbolo(s)	
//Adição	Some dois números ou combine duas strings.
6 + 9;
'Hello ' + 'world!';

//Subtração, Multiplicação, Divisão	Eles fazem o que você esperaria que fizessem em matemática básica.
//[-,*,/]
9 - 3;
8 * 2; // multiplicar em JS é um asterisco
9 / 3;

//Atribuição	Como você já viu: isso atribui um valor a uma variável.
//=
let MinhaVariavel = 'Bob';

//Igualdade estrita	Isso executa um teste para ver se dois valores são iguais. Ele retorna um resultado true/ false(booleano).
//===
let MinhaVariavel1= 3;
MinhaVariavel === 4;

//Para "Not", a expressão básica é true, mas a comparação retorna falseporque a negamos:
let MinhaVariavel2 = 3;
!(MinhaVariavel === 3);

//"Does-not-equal" fornece basicamente o mesmo resultado com sintaxe diferente. Aqui estamos testando " myVariableNÃO é igual a 3". Isso retorna falseporque myVariableIS igual a 3:
let myVariable = 3;
myVariable !== 3;

//Condicionais
//Condicionais são estruturas de código usadas para testar se uma expressão retorna verdadeira ou não. Uma forma muito comum de condicionais é a if...elsedeclaração. 
//Por exemplo:
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}