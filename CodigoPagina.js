
function soma() {
    var valor1 = document.getElementById("valor1").value
    console.log(valor1)
    var valor2 = document.getElementById("valor2").value
    console.log(valor2)
    var valor3 = document.getElementById("valor3").value
    console.log(valor3)
    var valor4 = document.getElementById("valor4").value
    console.log(valor4)
    var somaInicial =  (parseInt(valor1)) + (parseInt(valor2))
    var somaInicial2 = (parseInt(valor3)) + (parseInt(valor4))
    var somaTotal = (somaInicial + somaInicial2) / 4
    var nome = document.getElementById("nome").value


    if (valor1 && valor2 && valor3 && valor4) {
        document.getElementById("valorMedia").innerHTML = "Parabéns " + nome + " a sua média foi: "  + somaTotal
        console.log(somaTotal)
    }

    }


   

