function getValue() {
    var valor = document.getElementById('nome').value;
    document.getElementById('result').innerHTML = "Bem vindo, " + valor + "!";
}

function removeValue() {
    document.getElementById("nome").value = "";
    document.getElementById('result').innerHTML = " ";
    
}