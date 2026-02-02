
var greetings = document.getElementById('welcome')
var amount_of_dices = 1
var seeAmount = document.getElementById('numberOfDices')

function setMode(value) {
  const radios = document.querySelectorAll(`input[name="mode"]`);

  radios.forEach(radio => {
    radio.checked = radio.value === value;
  });

  document.body.classList.remove('light', 'dark');
  document.body.classList.add(value);
}
const radios = document.querySelectorAll('input[name="mode"]');

radios.forEach(radio => {
  radio.addEventListener('change', (event) => {
    setMode(event.target.value)
  });
});

setMode('light')

function math (operator){
    if (operator == 'add'){
        amount_of_dices += 1
    }
    else if (operator == 'sub' && amount_of_dices > 1){
        amount_of_dices -= 1
    }
    seeAmount.innerHTML = `${amount_of_dices}`

}

function seeResult(number){
    var total = 0
    for (var i = 0; i < amount_of_dices; i++) {
        total += Math.floor((Math.random() * number) + 1)
    }

    var result = document.querySelector('p#result')
    document.getElementById('diceRolled').innerHTML = `${amount_of_dices}d${number}`
    result.innerHTML = `${total}!`
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

