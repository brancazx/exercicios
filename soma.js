function somar() {
    const num1= parseFloat(document.getElementById("numero1").value);
    const num2= parseFloat(document.getElementById("numero2").value);
    const soma = num1 + num2;
    document.getElementById("resultado").textContent = "A soma e:" + soma;
}

function multiplicar() {
    const num1= parseFloat(document.getElementById("numero3").value);
    const num2= parseFloat(document.getElementById("numero4").value);
    const m = num1 * num2;
    document.getElementById("resultado1").textContent = "A soma e:" + m;
}

function dividir() {
    const num1= parseFloat(document.getElementById("numero5").value);
    const num2= parseFloat(document.getElementById("numero6").value);

    const d = num1 / num2;
    document.getElementById("resultado2").textContent = "A soma e:" + d;
}

function subtrair() {
    const num1= parseFloat(document.getElementById("numero7").value);
    const num2= parseFloat(document.getElementById("numero8").value);

    const sub = num1 - num2;
    document.getElementById("resultado3").textContent = "A soma e:" + sub;
}



