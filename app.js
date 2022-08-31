document.addEventListener('DOMContentLoaded', () => {

/*Two of each card in the game to choose from*/
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

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  var cardsWon = []

/* Gameboard */

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    var card = document.createElement('img')
    card.setAttribute('src', 'images/white.jpg')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipcard)
    grid.appendChild(card)
  }
}

//check for matches
function checkForMatch () {
  var cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]
  if (cardsChosen[0] === cardsChosen[1]) {
    alert('you found a match')
    cards [optionOneId].setAttribute('src', 'images/sky.jpg')
    cards [optionTwoId].setAttribute('src', 'images/sky.jpg')
    cardsWon.push(cardsChosen)

  } else {
    cards [optionOneId].setAttribute('src', 'images/white.jpg')
    cards [optionTwoId].setAttribute('src', 'images/white.jpg')
    alert('Try Again')
  }
  cardsChosen = []
  cardsChosenId = []
  resultDisplay.textContent = cardsWon.length
  if (cardsWon.length === cardArray.length/2) {
    resultDisplay.textContent = ' Congratulations! You found all the matches. Refresh your browser to play again.'
  }
}


//flip your card
function flipcard() {
  var cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length === 2) { /* If chosen array is equal to 2 then invoke function checkForMatch*/
    setTimeout(checkForMatch, 500) /* Check for match up to 500 milliseconds */
  }
}




createBoard()












})