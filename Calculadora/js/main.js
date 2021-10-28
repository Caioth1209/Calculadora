var memoria;
var operador;
var visor = document.getElementById('visor');


function numeroClicado(valor) {
    visor.value += valor;
}

function limpar() {
    visor.value = "";
    memoria = 0;
}

function operacao(oper) {
    operador = oper;
    memoria = visor.value;
    visor.value = '';
}

function soma(valor1, valor2){
    visor.value = (valor1 + valor2)
}

function subtracao(valor1, valor2){   
    visor.value = (valor1 - valor2)
}

function produto(valor1, valor2) {
    visor.value = (valor1 * valor2)    
}

function divisao(valor1, valor2) {

    if (valor1 == 0) {
        alert('não é possível dividir o zero');
    } else {
        visor.value = (valor1 / valor2)
    }
}

function porcentagem() {

   let valor = Number(visor.value)

   if (memoria == 0 || operador == "*" || operador == "/"){
        visor.value = (valor / 100)
    } else {
       visor.value = (memoria * (valor / 100))
    }
}

function raiz(){
    let valor = Number(visor.value)
    visor.value = Math.sqrt((valor))
}

function fatorial() {
    let valor = Number(visor.value)
    let fatorial = 1;

    for(let i = 1; i <= valor; i++){

        fatorial *= i;
        visor.value = fatorial
    }
}

function ponto(){   

    if(visor.value == ""){
        visor.value = 0 + ".";
    } else {
        if(visor.value == 0){
            visor.value += ".";
        } 
    }
}

function calcula() {
    valor1 = Number(memoria)
    valor2 = Number(visor.value)
    
    switch (operador) {
        
        case "+":
            soma(valor1, valor2)
            break;
            
        case "-":
            subtracao(valor1, valor2)
        break;

        case "*":
            produto(valor1, valor2)
        break;

        case "/":
            divisao(valor1, valor2)
        break;
    }

}