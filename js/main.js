/*
//java é tipagem dinâmica.
var nome = "Douglas Felipe";
var idade = 20;
var idade2 = 10;
var frase = "vasco o melhor time do mundo";

//alert(nome + " tem " +  idade + " anos"); //pop-up
//alert( idade + idade2);

console.log(nome); //usado para debugagem, quando o código chega até o console deu certo.
console.log(idade + idade2);
console.log(frase.replace("vasco", "Brasil")); //replace substituir a palavra.
alert(frase.toUpperCase());

var lista = ["maça" , "pêra" , "laranja"];
lista.pop(); //apaga o ultimo elemento da lista.
lista.push("uva"); //inclui elemento na lista.
console.log(lista);

console.log(lista.reverse()); //reverte a ordem das strings por exemplo.
console.log(lista.toString()); //deixa de ser um array p/ string.
console.log(lista.join('=')); 

var fruta = { nome:"maça", cor:"vermelha"} //dicionario. //objeto json
console.log(fruta.cor);
alert(fruta.nome); 

var frutas = [ { nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"} ] //lista de dicionarios.
console.log(frutas);
alert(frutas[1].nome); 

var idade = prompt("Qual a sua idade? "); //exibe uma pergunta para o usuário.

if(idade >= 18){
    alert("maior de idade");
}
else{
    alert("menor de idade");
}

 var count = 0;
 while (count <= 5){
     console.log(count);
     alert(count);
     count++;
 };

 console.error("mensagem de erro"); 

 var d = new Date();
 alert(d);*/

