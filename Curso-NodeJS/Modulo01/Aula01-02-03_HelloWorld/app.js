/* Node JS */

//Node JS -> Interpretador Javascript
//Com o Node, o JS não é mais APENAS interpretado apenas pelo browser, agora ele também é interpretado fora do browser, utilizando a engine V8
//Node é assíncrono, e utiliza a L.P Javascript


/* Executando */

//No CMD:
// > node -v (verificar a versão do node)
// > npm -v (verificar a versão do npm)
// > cd {diretorio que está o arquivo}
// > node {arquivo}   (para executar o arquivo)

//No terminal do VSCODE:
// instalar a extensão 'Node.js Exec'
// teclar 'f8'

console.log("Hello World!");

function soma(a, b){
    return a+b;
}

console.log(soma(10, 5));