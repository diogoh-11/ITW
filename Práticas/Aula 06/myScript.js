var op1 = document.getElementById("op1");
var op2 = document.getElementById("op2");
var res = document.getElementById("res");
var operacao = "+";

function getOperacao() {
    var e = document.getElementById("operacao");
    operacao = e.options[e.selectedIndex].value;
    concole.log(operacao);
}


function calcula() {
    switch (operacao) {
        case "+":
            res.value = parseFloat(op1.value) + parseFloat(op2.value);
            //res.value = op1.value + op2.value;
            break;
        case "-":
            res.value = op1.value - op2.value;
            break;
        case "*":
            res.value = op1.value * op2.value;

            break;
        case ":":
            if (op2.value != 0) {
                res.value = (op1.value) / (op2.value);
            }
            else {
                alert("Erro: operação invalida...");
            }
        case "!":
            if (op2.value >= 0) {
                res.value = 1;
                for (var i = 2; i <= op1.value; i++) {
                    resvalue = res.vaue * i;
                }
            }
            else {
                alert("Erro: fatorial só de números positivos");
            }
            


    }
}
   