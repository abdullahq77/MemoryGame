document.addEventListener('DOMContentLoaded', () => {

/*Two of each card in the game to choose from...name and the file path to the image*/
  const cardArray = [
    {
      name:'lion',
      img: 'images/lion.jpg'
    },
    {
      name:'lion',
      img: 'images/lion.jpg'
    },
    {
      name: 'kitten',
      img: 'images/kitten1.jpg'
    }, 
    {
      name:'snake',
      img: 'images/snake.jpg'
    },
    {
      name:'snake',
      img: 'images/snake.jpg'
    },
    {
      name:'cheetah',
      img: 'images/cheetah.jpg'
    },
    {
      name:'cheetah',
      img: 'images/cheetah.jpg'
    },
    {
      name:'tiger',
      img: 'images/tiger1.jpg'
    },
    {
      name:'wolf',
      img: 'images/wolf.jpg'
    },
    {
      name:'wolf',
      img: 'images/wolf.jpg'
    },
    {
      name:'tiger',
      img: 'images/tiger1.jpg'
    },
    {
      name:'kitten',
      img: 'images/kitten1.jpg'
    },
  ]

/* This will randomize the cards each time the game is refreshed */
cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid') // Picking out element with class name "grid" from HTML file and call it as "grid" in JavaScript file as well
const resultDisplay = document.querySelector('#result') // grabs the result or score
var cardsChosen = [] // empty array of cards chosen
var cardsChosenId = [] // empty array of cards ID
var cardsWon = [] //empty array called cards won 

/* Gameboard */
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {  // using for loop, loop over the card array...go up by one, i starts at 0 and has to stop after it matches or is less than the arrays length
    var card = document.createElement('img') // creating an img element for each card
    card.setAttribute('src', 'images/white.jpg') // setting each card as a attribute linking it to the white.jpg image
    card.setAttribute('data-id', i) // each card gets a data id that goes from 0 to 11 because there is 12 cards.....index(first number) is 0
    card.addEventListener('click', flipCard) // each time cards are clicked on, add a flipcard function which flips them
    grid.appendChild(card) //putting a class name of grid into the div using appendchild
  }
}

//check for matches function
function checkForMatch () {
  var cards = document.querySelectorAll('img') //picks out all the images we created and calls them cards
  const optionOneId = cardsChosenId[0] // Grabbing first value in the array and assigning it to constant option one ID
  const optionTwoId = cardsChosenId[1] // Grabbing second value in the array and assigning it to constant option two ID
  if (cardsChosen[0] === cardsChosen[1]) { // seeing if first item equals second item in array or seen as a match
    alert('you found a match') // if true that they match then send this pop up message
    cards [optionOneId].setAttribute('src', 'images/sky.jpg')//
    cards [optionTwoId].setAttribute('src', 'images/sky.jpg')// flip both matching cards images to the sky image
    cardsWon.push(cardsChosen) // pushing the cards won into the array

  } else {
    cards [optionOneId].setAttribute('src', 'images/white.jpg')// if the cards dont match then flipping them over again to play again
    cards [optionTwoId].setAttribute('src', 'images/white.jpg')
    alert('Try Again') // if they dont match send this message
  }
  cardsChosen = [] // clearing each array to start flipping again
  cardsChosenId = []
  resultDisplay.textContent = cardsWon.length // one point for every match 
  if (cardsWon.length === cardArray.length/2) {
    resultDisplay.textContent = ' Congratulations! You found all the matches. Refresh your browser to play again.'
  } // message you get after you won
}


// defining the flipcard function which flips the card each time its clicked
function flipCard() {
  var cardId = this.getAttribute('data-id') // getting the data-id attribute
  cardsChosen.push(cardArray[cardId].name) // pushing cards based on their card ID and get its name
  cardsChosenId.push(cardId) // getting the card ID
  this.setAttribute('src', cardArray[cardId].img) // allows to add an image to the card square based on the card ID it has
  if (cardsChosen.length === 2) { /* If chosen array is equal to 2 then invoke function checkForMatch, so if two cards are clicked it will check for a match*/
    setTimeout(checkForMatch, 500) /* Check for match up to 500 milliseconds */
  }
}




createBoard() // Invoking the function 












})