//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista[0]);
//console.log(lista.toString()[0]);
//console.log(lista.join(" - "));

/*var fruta = {nome:"maça", cor:"vermelha"};

console.log(fruta.nome);
alert(fruta.cor);*/

//var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];

//console.log(frutas.nome);
//alert(frutas[1].nome);

/*var idade = prompt("Qual é sua idade");

if(idade >= 18){
    alert("Maior de idade.");
}else{
    alert("Menor de idade.")
};*/

/*var count = 0;
while(count <= 5){
    console.log(count);
    count++;
}*/

/*for(var i = 0; i <= 5; i++){
    console.log(i);
}*/

/*var count = 0;
do
{
  console.log(count);
  count++;  
}
while(count <= 5);*/

/*var data = new Date();
alert(data.getDate());
alert(data.getHours());
alert(data.getMinutes());*/

/*var nome = "Alex Vieira";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mando!"
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.replace("Japão", "Brasil").toUpperCase());
//alert(frase.replace("Japão", "Brasil"));*/

/* function soma(n1, n2){
    return n1 + n2;
}

function validarIdade(idade){

    var validar;

    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }

    return validar;
}

//alert(soma(5, 10));
var idade = prompt("Qual é a sua idade");
console.log(validarIdade(idade)); */

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!<b>";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://www.shoptime.com.br/");
    //window.location.href = "https://www.shoptime.com.br/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    //alert("trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse!";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
    elemento.innerHTML = "Passe o mouse aqui!";
}

function load(){
    alert("página carregada!");
}

function funcaochange(elemento){
    console.log(elemento.value);
}
