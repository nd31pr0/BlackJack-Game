let firstCard = Math.floor(Math.random() * 10) + 2;
let secondCard = Math.floor(Math.random() * 10) + 2;
// document.getElementById('first').textContent = firstCard
// document.getElementById('second').textContent = secondCard

let sum = firstCard + secondCard;
let hasBlackJack = false
let isAlive = true
let message = ""


let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum')
let second = document.getElementById('second')
let first = document.getElementById('first')


function renderGame() {
  first.textContent = "First Card: " + firstCard
  second.textContent = "Second Card: " + secondCard
  sumEl.textContent = "Sum: " + sum
  if (sum < 21) {
    message = 'do you want to draw a new card?'

  }
  else if (sum === 21) {
    message = "Ohoo! you got blackJack"
    hasBlackJack = true
  }
  else {
    message = "you're out of the game"
    isAlive = false
  }

  messageEl.textContent = message


}

function newCard() {
  let thirdCard = 5
  sum += thirdCard
  renderGame()

}

function startGame() {
  renderGame()
}


