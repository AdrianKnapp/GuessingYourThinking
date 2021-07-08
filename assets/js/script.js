function apertei() {
    document.getElementById("cor").className = 'newbutton'
}
function soltei() {
    document.getElementById("cor").className = 'button'
}
function calcular() {
    if(document.getElementById("resultado").value == "") {
<<<<<<< HEAD
        alert("Preencha com o resultado dos seus cálculos.")
=======
        alert("Preencha com o resultado dos seus c�lculos.")
>>>>>>> 5483e2a (Segundo commit)
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