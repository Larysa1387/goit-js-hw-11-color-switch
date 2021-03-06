const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  btnStart: document.querySelector('[data-action="start"]'),
  btnEnd: document.querySelector('[data-action="stop"]'),
  body: document.body,
}

const DELAY = 1000;
let intervalId = null;

refs.btnStart.addEventListener('click', onColorChange);

function onColorChange(e) {
  e.target.disabled = true;
  intervalId = setInterval(() => {
    const index = randomIntegerFromInterval(0, colors.length - 1);
    refs.body.style.background = colors[index];
  }, DELAY)
}

refs.btnEnd.addEventListener('click', onColorStop);

function onColorStop() {
  refs.btnStart.disabled = false;
  clearInterval(intervalId);
}
