//E os exemplos a seguir mostram como colocar um script (inline) dentro do <script>elemento.

alert("Hello World!");

// //Substituição do módulo.
// <script type="module" src="main.js"></script>
// <script nomodule src="fallback.js"></script>

//Variáveis ​​são contêineres que armazenam valores. Você começa declarando uma variável 
//com a palavra- letchave, seguida do nome que você dá à variável:
let MinhaVariavel1;

//JavaScript diferencia maiúsculas de minúsculas. Isso significa myVariablenão é o mesmo que myvariable. Se você tiver problemas em seu código, verifique o caso!
//Depois de declarar uma variável, você pode atribuir um valor a ela:
MinhaVariavel1 = "Bob";

//Além disso, você pode fazer essas duas operações na mesma linha:
let MinhaVariavel2 = "Bob";

//Depois de atribuir um valor a uma variável, você pode alterá-lo posteriormente no código:
let MinhaVariavel3 = "Bob";
MinhaVariavel3 = "Steve";

//EXEMPLOS
// sequência de texto conhecida como string. Para indicar que o valor é uma string, coloque-o entre aspas simples.                                 
let MinhaVariavel4 = 'Bob';
//NUMERO                                   
let MinhaVariavel5 = 10;     
//BOLEANO   Este é um valor Verdadeiro/Falso
let MinhaVariavel6 = true;     

//Variedade	Esta é uma estrutura que permite armazenar vários valores em uma única referência.
let MinhaVariavel7 = [1,'Bob','Steve',10];

//Consulte cada membro do array assim:
MinhaVariavel7[0], MinhaVariavel7[1];

//JavaScript é um objeto e pode ser armazenado em uma variável. Tenha isso em mente enquanto aprende.
let MinhaVariavel8 = document.querySelector('h1');