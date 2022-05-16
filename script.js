console.log('loading...');

const descriptionText = document.querySelector('.adventure-description');
const buttons = document.querySelectorAll('.button');
const textAdventure = [
  {
    description: 'This is the adventure of Juan, who got lost in the forest when looking for a bird to photograph. Juan needs your help to find his way out. Choose one of the options below',
    options: [
      'Head back to where you came from',
      'Look up at the sky and had towards the sun'
    ]
  },
  {
    description: 'great, Juan was able to find his way back, but now he reliazes that its about to rain, what should Juan do now?',
    options: [
      'Look for shelter',
      'Continue heading back, and risk getting lost again'
    ]
  },
  {
    description: 'Juan is safe in the shelter. He will wait until it stops raining. What should Juan do?',
    options: [
      'Leave the cave as soon as it stops raining',
      'Wait until the sun comes out again and continue walking'
    ]
  }
]

let index = 0;

function setGameState() {
  let gameStateText = textAdventure[index];
  descriptionText.textContent = gameStateText.description;
  for (let i=0, ii=buttons.length; i<ii; i++) {
    let button = buttons[i];
    let buttonText = gameStateText.options[i];

    button.textContent = buttonText;
  }
}

function resetGame() {
  index = 0;

  for (let i=0, ii=buttons.length; i<ii; i++) {
    let button = buttons[i];
    button.removeEventListener('click', resetGame);
    button.addEventListener('click', buttonClick);  
  }

  setGameState();
}

function forward() {
  if (index == textAdventure.length - 1) {
    descriptionText.textContent = 'Thank you for playing!';
    for (let i=0, ii=buttons.length; i<ii; i++) {
      let button = buttons[i];
      button.removeEventListener('click', buttonClick);
      button.textContent = 'Play Again';
      button.addEventListener('click', resetGame);
    }
  }
  index++;
  setGameState();
}

function back() {
  if (index == 0) {
    console.log("can't go back any further!")
    return;
  }
  
  index--;
  setGameState();
}

function buttonClick(event) {
  if (event.target.id == 'first_btn') {
    forward();
  } else {
    back();
  }
}

for (let i=0, ii=buttons.length; i<ii; i++) {
  let button = buttons[i];
  button.addEventListener('click', buttonClick);  
}

setGameState();