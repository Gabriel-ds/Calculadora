

function insert(num) {
    var numero = document.querySelector('.resultado').innerHTML
    document.querySelector('.resultado').innerHTML = numero + num
}

function clean(){
    document.querySelector('.resultado').innerHTML = ' '
}

function calcular(){
    var resposta = document.querySelector('.resultado').innerHTML
    if(resposta){
        document.querySelector('.resultado').innerHTML = eval(resposta)
    } else {
        document.querySelector('.resultado').innerHTML = 'ERRO'
    }
    
}

function back() {
    var resposta = document.querySelector('.resultado').innerHTML
    var remove = resposta.substring(1)
    document.querySelector('.resultado').innerHTML = remove
}

