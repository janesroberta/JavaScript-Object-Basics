//Funções
//As funções são uma forma de empacotar a funcionalidade que você deseja reutilizar. É possível definir um corpo de código como uma função que é executada quando você chama o nome da função em seu código. Esta é uma boa alternativa para escrever repetidamente o mesmo código. Você já viu alguns usos de funções. Por exemplo:
let MinhaVariavel = document.querySelector("h1");

alert("hello!");

//Essas funções, document.querySelectore alert, são incorporadas ao navegador.
//Você também pode definir suas próprias funções. No próximo exemplo, criamos uma função simples que recebe dois números como argumentos e os multiplica:
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }
  //Tente executar isso no console; então teste com vários argumentos. Por exemplo:
  multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);

//Observação: a returninstrução informa ao navegador para retornar a resultvariável da função para que ela esteja disponível para uso. Isso é necessário porque as variáveis ​​definidas dentro das funções só estão disponíveis dentro dessas funções. Isso é chamado de escopo variável .
//exemplo mais óbvio é lidar com o evento click , que é acionado pelo navegador quando você clica em algo com o mouse. Para demonstrar isso, digite o seguinte em seu console e clique na página da Web atual:

document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });

  //A função que acabamos de passar addEventListener()aqui é chamada de função anônima , porque não tem nome. Existe uma maneira alternativa de escrever funções anônimas, que chamamos de função de seta . Uma função de seta usa () =>em vez de function ():
  document.querySelector("html").addEventListener("click", () => {
    alert("Ouch! Stop poking me!");
  });
//Adicionando um trocador de imagem
//Escolha uma imagem que deseja apresentar em seu site de exemplo. Idealmente, a imagem terá o mesmo tamanho da imagem que você adicionou anteriormente ou o mais próximo possível.
//Salve esta imagem em sua imagespasta.
//Renomeie a imagem firefox2.png .
//Adicione o seguinte código JavaScript ao seu main.jsarquivo
  const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

//Em index.html, adicione a seguinte linha antes do <script>elemento:
<button>Change user</button>
//Em main.js, coloque o seguinte código no final do arquivo, exatamente como está escrito. Isso leva referências ao novo botão e ao cabeçalho, armazenando cada uma das variáveis ​​internas:
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
//Adicione a seguinte função para definir a saudação personalizada. Isso não vai fazer nada ainda, mas isso vai mudar em breve.
function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
  //A setUserName()função contém uma prompt()função, que exibe uma caixa de diálogo semelhante a alert(). Essa prompt()função faz mais do que alert(),
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }
  //Esta primeira linha deste bloco utiliza o operador de negação (NOT lógico, representado pelo !) para verificar se o namedado existe. Caso contrário, a setUserName()função é executada para criá-lo. Se existir (ou seja, o usuário definiu um nome de usuário durante uma visita anterior), recuperamos o nome armazenado usando getItem()e definimos o textContentdo cabeçalho como uma string, mais o nome do usuário, como fizemos em setUserName().
  //Coloque este onclickmanipulador de eventos (abaixo) no botão
  meuButton.onclick = () => {
    setUserName();
  };
  //Um nome de usuário nulo?
  // Null é um valor especial em JavaScript que se refere à ausência de um valor
  //Para evitar esses problemas, você pode verificar se o usuário não digitou um nome em branco. Atualize sua setUserName()função para isso:
  function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }