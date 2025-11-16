
const board = document.querySelector('.board .grid');
const modal = document.querySelector('.modal');
const startGameModal = document.querySelector('.modal .start-game');
const gameOverModal = document.querySelector('.modal .game-over');
const startBtn = document.querySelector('.btn-start');
const restartBtn = document.querySelector('.btn-restart');
const highscoreElement = document.querySelector('#highscore span')
const scoreElement = document.querySelector('#score span')
const timeElement = document.querySelector('#time span')
 
let highscore = localStorage.getItem('highscore') || 0;
highscoreElement.innerText = highscore;
let score = 0, time = '00:00';
const blockWidth = 30;
const blockHeight = 30;
let intervalId = null;
let timeIntervalId = null;

const rows = Math.floor(board.clientHeight/blockHeight);
const cols = Math.floor(board.clientWidth/blockWidth);

let blocks = [];
let snake = [{x: 1, y: 3}]
let food = {x: Math.floor(Math.random()*rows), y: Math.floor(Math.random()*cols)}
let dir = 'right'; // left/right/up/down
let pause = false;

for(let r = 0; r < rows; r++) {
  for(let c = 0; c < cols; c++) {
    const block = document.createElement('div')
    block.classList.add('block')
    board.appendChild(block)
    // block.innerText = `${r}-${c}`
    blocks[`${r}-${c}`] = block
  }
}

function render() {
  if(pause) return;
  // food rendering
  let foodIdx = `${food.x}-${food.y}`
  blocks[foodIdx].classList.add('food')

  let head = null; // new head
  if(dir === 'left') head = { x: snake[0].x, y: snake[0].y - 1}
  else if(dir === 'right') head = { x: snake[0].x, y: snake[0].y + 1}
  else if(dir === 'up') head = { x: snake[0].x - 1, y: snake[0].y}
  else if(dir === 'down') head = { x: snake[0].x + 1, y: snake[0].y}

  // Game over 1, If snake goes out of the boundary
  if((head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols)){
    modal.style.display = 'flex';
    startGameModal.style.display = 'none';
    gameOverModal.style.display = 'flex';
    clearInterval(intervalId);
    clearInterval(timeIntervalId);
    return;
  }

  // Game over 2, Check if head collides with own body
  for(let segment of snake) {
    if(head.x === segment.x && head.y === segment.y) {
      modal.style.display = 'flex';
      startGameModal.style.display = 'none';
      gameOverModal.style.display = 'flex';
      clearInterval(intervalId);
      clearInterval(timeIntervalId);
      return;
    }
  }

  // food consumes, increase score and length of snake increases
  if(head.x == food.x && head.y == food.y) {
    blocks[`${food.x}-${food.y}`].classList.remove('food')
    food = {x: Math.floor(Math.random()*rows), y: Math.floor(Math.random()*cols)}
    blocks[`${food.x}-${food.y}`].classList.remove('food')
    snake.unshift(head)
    score += 1;
    scoreElement.innerText = score;
    if(score > highscore) {
      highscore = score;
      localStorage.setItem('highscore', highscore.toString())
    }
  }

  snake.forEach((segment) => {
    let blockIdx = `${segment.x}-${segment.y}`
    blocks[blockIdx].classList.remove('fill')
  })

  snake.unshift(head)
  snake.pop()

  snake.forEach((segment) => {
    let blockIdx = `${segment.x}-${segment.y}`
    blocks[blockIdx].classList.add('fill')
  })
}

startBtn.addEventListener('click', () => {
  modal.style.display = 'none'
  intervalId = setInterval(() => {render()}, 200)
  timeIntervalId = setInterval(() => {
    if(pause) return;
    let [min, sec] = time.split(':').map(Number);
    if(sec === 59) { min += 1; sec = 0}
    else sec += 1;
    time = `${min}:${sec}`;
    timeElement.innerText = time;
  }, 1000)
})

restartBtn.addEventListener('click', restartGame);
function restartGame() {
  score = 0;
  scoreElement.innerText = score
  time = '00:00'
  timeElement.innerText = time
  //highscore = localStorage.getItem('highscore') || 0;
  highscoreElement.innerText = highscore

  blocks[`${food.x}-${food.y}`].classList.remove('food')
  snake.forEach((segment) => {
    let blockIdx = `${segment.x}-${segment.y}`
    blocks[blockIdx].classList.remove('fill')
  })
  modal.style.display = 'none'
  snake = [{x: 1, y: 3}]
  food = {x: Math.floor(Math.random()*rows), y: Math.floor(Math.random()*cols)}
  dir = 'right';
  intervalId = setInterval(() => {render()}, 300)
}

addEventListener('keydown', (event) => {
  //console.log(event.key)
  if(event.key === 'ArrowLeft' && dir !== 'right') dir = 'left';
  else if(event.key === 'ArrowRight' && dir !== 'left') dir = 'right';
  else if(event.key === 'ArrowUp' && dir !== 'down') dir = 'up';
  else if(event.key === 'ArrowDown' && dir !== 'up') dir = 'down';
  else if (event.key === ' ') {
    event.preventDefault(); // Prevent default tab behavior
    pause = !pause; // Toggle pause state
    console.log(pause ? 'Game Paused' : 'Game Resumed');
  }
})