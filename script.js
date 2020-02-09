// Selectors
const counterStock = document.querySelector("#counter-stock");
const counterBalance = document.querySelector("#counter-balance");
const counterWorkers = document.querySelector("#counter-workers");

const valuePretzel = document.querySelector("#value-pretzel");

const buttonPretzel = document.querySelector("#button-pretzel");
const buttonSmallBatch = document.querySelector("#button-small-batch");
const buttonBigBatch = document.querySelector("#button-big-batch");
const buttonHireWorker = document.querySelector("#hire-worker");

const elementSmallBatch = document.querySelector("#element-small-batch");
const elementBigBatch = document.querySelector("#element-big-batch");
const elementHireWorker = document.querySelector("#element-hire-worker");


// Counters
let numPretzels = parseInt(counterStock.innerText);
let numValue = parseInt(counterBalance.innerText);
let numWorkers = parseInt(counterWorkers.innerText);


// Value per Pretzel
let min = 0.8;
let max = 1.2;

const getPretzelValue = () => {
  setInterval(() => {
    currentValue = Math.random() * (max - min) + min;
    currentValue = currentValue.toFixed(2);
    valuePretzel.innerText = currentValue;
  }, 5000);
};

getPretzelValue();


// Unlocks
const unlock = () => {
  if (numPretzels >= 50) {
    elementSmallBatch.classList.remove("hide");
  }
  if (numPretzels >= 500) {
    elementBigBatch.classList.remove("hide");
  }
  if (numPretzels >= 1000) {
    elementHireWorker.classList.remove("hide");
  }
};


// Bakery Functions
const bakePretzel = () => {
  numPretzels += 1;
  counterStock.innerText = numPretzels;
  unlock();
};

const bakeSmallBatch = () => {
  numPretzels += 5;
  counterStock.innerText = numPretzels;
  unlock();
};

const bakeBigBatch = () => {
  numPretzels += 10;
  counterStock.innerText = numPretzels;
  unlock();
};

// Bakery Event Handlers
buttonPretzel.addEventListener("click", bakePretzel);
buttonSmallBatch.addEventListener("click", bakeSmallBatch);
buttonBigBatch.addEventListener("click", bakeBigBatch);


// Human Ressources Functions
const hireWorker = () => {
  if (numPretzels >= 1000) {
    numPretzels -= 1000;
    counterStock.innerText = numPretzels;
    numWorkers += 1;
    counterWorkers.innerText = numWorkers;
    setInterval(() => {bakePretzel()}, 5000);
  } else {
    alert("Not enough Ressources");
  }
}

// Human Ressources Event Handlers
buttonHireWorker.addEventListener("click", hireWorker);