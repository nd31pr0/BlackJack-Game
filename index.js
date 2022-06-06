
let cards = [] //array

let sum = 0;
let hasBlackJack = false
let isAlive = false
let message = ""

let player = {
  name: "Ndzi",
  chips: 145
}

let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ": $" + player.chips


let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')


function startGame() {
  if (isAlive === false && hasBlackJack === false) {
    let isAlive = true;
    let firstCard = Math.floor(Math.random() * 10) + 2;
    let secondCard = Math.floor(Math.random() * 10) + 2;
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    // console.log('isAlive evalutes at end of start function to ' + isAlive)
    renderGame()
  }
  else {
  }

}
function renderGame() {
  cardsEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ", "

  }
  sumEl.textContent = "Sum: " + sum
  if (sum < 21) {
    message = 'Oops! not so favourable. Do you want to draw a new card?'
    isAlive = true
  }
  else if (sum === 21) {
    message = "Ohoo! you got blackJack and have won the game. Congrats!!!"
    isAlive = false
    hasBlackJack = true
  }
  else {
    message = "you're out of the game"
    isAlive = false
  }
  // console.log("isAlive evaluates at end of render to " + isAlive)
  messageEl.textContent = message

}

function newCard() {
  // console.log("isalive is " + isAlive)
  // console.log("hasBlackJack is " + hasBlackJack)

  if (isAlive === true && hasBlackJack === false) {
    let thirdCard = Math.floor(Math.random() * 10) + 2;
    sum += thirdCard
    cards.push(thirdCard)
    renderGame()
  }
  else if (isAlive === false || hasBlackJack === true) {
    messageEl.textContent = "sorry this session of the game is ended and you can only start a new game"
  }

}




