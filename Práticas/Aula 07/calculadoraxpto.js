var op1 = "";
var operation = "";
var op2 = "";
var res = document.getElementById("res");

function clearResult() {
    op1 = "";
    operation = "";
    op2 = "";
    res.innerText = "0";
}

function addNumber() {
    var number = event.target.value;
    if (operation === "") {
        op1 += number;
    } else {
        op2 += number;
    }
    res.innerText = op1 + operation + op2;
}

function addOperation() {
    var op = event.target.value;
    if (op1 !== "" && op2 === "") {
        operation = op;
        res.innerText = op1 + operation;
    }
}

function calculate() {
    if (op1 !== "" && op2 !== "" && operation !== "") {
        op1 = parseFloat(op1);
        op2 = parseFloat(op2);

        switch (operation) {
            case "+":
                op1 = op1 + op2;
                break;
            case "-":
                op1 = op1 - op2;
                break;
            case "*":
                op1 = op1 * op2;
                break;
            case "/":
                if (op2 !== 0) {
                    op1 = op1 / op2;
                } else {
                    res.innerText = "0" ;
                          alert("Erro: operacao invalida...");
                    return;
                }
                break;
            default:
                break;
        }

        operation = "";
        op2 = "";
        res.innerText = op1;
    }
}