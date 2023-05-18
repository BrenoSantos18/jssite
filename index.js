
var greetings = document.getElementById('welcome')
var amount_of_dices = 1

var seeAmount = document.getElementById('numberOfDices')




function math (operator){
    if (operator == 'add'){
        amount_of_dices += 1
    }
    else if (operator == 'sub' && amount_of_dices > 1){
        amount_of_dices -= 1
    }
    seeAmount.innerHTML = `<br>${amount_of_dices}`

}





function seeResult(number){
    var numb = Math.floor(Math.random() * number + 1) * amount_of_dices
    var result = document.querySelector('p#result')
    document.getElementById('diceRolled').innerHTML = `${amount_of_dices}d${number}`
    result.innerHTML = `${numb}!`
}

function setMode(type){
    if (type == 'dark'){
        document.body.style.backgroundColor = '#591902'
        document.body.style.color = 'white'
    }
    else if (type == 'light'){
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
    }

}


function somar(){
    var n1 = document.getElementById('n1')
    var n2 = document.getElementById('n2')
    var resposta = document.getElementById('res')
    var value1 = Number(n1.value)
    var value2 = Number(n2.value)
    var s = value1 + value2

    switch(s){
    case 12:
        resposta.innerText = 'Você encontrou um escondido!'
        break
    case 52:
        resposta.innerText = 'Você encontrou um escondido!'
        break
    case 89:
        resposta.innerText = 'Você encontrou um escondido!'
        break
    case 102:
        resposta.innerText = 'Você encontrou um escondido!'
        break

    default:
        resposta.innerHTML = `Resposta: ${s}`
        break
    }
}

