function valor(elemento) {
    document.getElementById("result").value+=elemento;
}

function calcular() {
     valor1=document.getElementById("result").value;
     document.getElementById("result").value=eval(valor1);
}