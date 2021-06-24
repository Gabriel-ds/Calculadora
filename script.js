

function insert(num) {
    var numero = document.querySelector('.resposta').innerHTML
    document.querySelector('.resposta').innerHTML = num + numero
}

function clean(){
    document.querySelector('.resposta').innerHTML = ' '
}

function calcular(){
    var resposta = document.querySelector('.resposta').innerHTML
    if (resposta) {
        document.querySelector('.resposta').innerHTML = eval(resposta)
    }
}