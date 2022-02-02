let player = {
    name: "HNQ",
    chips: "138"
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let msg = ''
let messageEl = document.querySelector("#message-el")
let cardsEl = document.querySelector("#card-el")
let sumEl = document.querySelector("#sum-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

//Create random variable function
function getRandomTime(){
    let randomNumber = Math.floor( Math.random() * 13 ) + 1
    if (randomNumber > 10){
        return 10
    } else if (randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }
   
}


function startGame() {
    isAlive = true
    let firstCard = getRandomTime()
    let secondCard = getRandomTime()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    cardsEl.textContent += cards + " "

    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    // Create a for loop that renders out all the cards instead of just two
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomTime()
        sum += card
        cards.push (card)
        renderGame()
    } else {
        alert("Start a new game!")
    }

}