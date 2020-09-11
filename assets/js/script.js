


function calcular() {
    if(document.getElementById("resultado").value == "") {
        alert("Preencha com o resultado dos seus cálculos.")
    } else {
        var resultado = parseInt(document.getElementById("resultado").value);

    var calc = resultado * 2 / 10;

    document.getElementById("adivinhei").innerHTML = calc;


    resetar();
    }
}

function resetar() {
    var resultado = parseInt(document.getElementById("resultado").value = "");
}