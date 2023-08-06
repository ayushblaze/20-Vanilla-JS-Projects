const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settingsBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");

// List of words
const words = [
  'sigh',
  'tense',
  'airplane',
  'ball',
  'pies',
  'juice',
  'warlike',
  'bad',
  'north',
  'dependent',
  'steer',
  'silver',
  'highfalutin',
  'superficial',
  'quince',
  'eight',
  'feeble',
  'admit',
  'drag',
  'loving'
];

// initialize word
let randomWord;

// initialize score
let score = 0;

// initialize time
let time = 10;

// focus on text start - give this as HW
text.focus();

// start counting down
const timeInterval = setInterval(updateTime, 1000);

// generate random word
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
};

// add word to the DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
};

// update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

// update time
function updateTime() {
  time--;
  timeEl.innerHTML = time + 's';

  if (time === 0) {
    clearInterval(timeInterval);
    // end game
    gameOver();
  }
};

// game over show end screen
function gameOver() {
  endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
  `;

  endgameEl.style.display = 'flex'; 
};

addWordToDOM();

// event listeners
text.addEventListener('input', e => {
  const insertedText = e.target.value;
  
  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();
    e.target.value = "";

    time+=5;
    updateTime();
  }
});