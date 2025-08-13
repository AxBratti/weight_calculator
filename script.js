document.getElementById('form-imc').addEventListener('submit', function(event) {
    event.preventDefault(); // impede o formulário de recarregar a página
    calcularpeso();
});

function calcularpeso(){
    // Captura os valores do inputs
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
   
    // Verifica se os valores sao validos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById('resultado').innerText = "Por favor, insira valores validos.";
        return;
    }
   
    //Calcula o IMC
    var imc = peso / (altura*altura);

    //Define a classificacao do IMC
    var classificacao = "";

    if (imc < 18.5){
        classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc < 34.9) {
        classificacao = "Obesidade grau 1";
    } else if (imc < 39.9) {
        classificacao = "Obesidade grau 2";
    } else {
        classificacao = "Obesidade grau 3 (morbida)";
    }
    
    // Exibe o resultado no <p id="resultado">
    document.getElementById('resultado').innerText =
    "seu IMC e:" + imc.toFixed(2) + " (" + classificacao + ")";
}