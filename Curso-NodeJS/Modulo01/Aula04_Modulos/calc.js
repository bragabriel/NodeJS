var SomaFunc = require("./func/somar");
//variável soma Func -> está recebendo tudo do módulo somar

var SubFunc = require("./func/subtrair");

var MultFunc = require("./func/multiplicar");

var DivFunc = require("./func/dividir");


console.log("Soma: " + SomaFunc(1, 2))
console.log("Subtração: " + SubFunc(10, 5))
console.log("Multiplicação: " + MultFunc(10, 10))
console.log("Divisão: "+ DivFunc(50, 2))


