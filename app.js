function add() {

    let number1 = document.getElementById("number1").value
    let number2 = document.getElementById("number2").value

    number1 = parseInt(number1)
    number2 = parseInt(number2)

    let result = document.getElementById("res");
    result.innerHTML= '=' + (number1 + number2);
}

function sub() {

    let number1 = document.getElementById("number1").value
    let number2 = document.getElementById("number2").value

    number1 = parseInt(number1)
    number2 = parseInt(number2)

    let result = document.getElementById("res");
    result.innerHTML= '=' + (number1 - number2);
}

function mul() {

    let number1 = document.getElementById("number1").value
    let number2 = document.getElementById("number2").value

    number1 = parseInt(number1)
    number2 = parseInt(number2)
    
    let result = document.getElementById("res");
    result.innerHTML= '=' + (number1 * number2);

}


function div() {

    let number1 = document.getElementById("number1").value
    let number2 = document.getElementById("number2").value

    number1 = parseFloat(number1)
    number2 = parseFloat(number2)


    let result = document.getElementById("res");
    result.innerHTML= '=' + (number1 / number2);
}

