
function soma() {
    var valor1 = document.getElementById("valor1").value
    console.log(valor1)
    var valor2 = document.getElementById("valor2").value
    console.log(valor2)
    var somaTotal = (parseInt(valor1) + parseInt(valor2)) / 2

  

    if (valor1 && valor2) {
        document.getElementById("valorMedia").innerHTML = "A sua média foi: " + somaTotal
        console.log("Soma total " + somaTotal)
    }

    }


   

