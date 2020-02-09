// Selectors
const counterTotal = document.querySelector("#counter-total");
const counterWorkers = document.querySelector("#counter-workers");
const buttonPretzel = document.querySelector("#button-pretzel");
const buttonSmallBatch = document.querySelector("#button-small-batch");
const buttonBigBatch = document.querySelector("#button-big-batch");
const buttonHireWorker = document.querySelector("#hire-worker");
const elementSmallBatch = document.querySelector("#element-small-batch");
const elementBigBatch = document.querySelector("#element-big-batch");
const elementHireWorker = document.querySelector("#element-hire-worker");


// Counters
let numPretzels = parseInt(counterTotal.innerText);
let numWorkers = parseInt(counterWorkers.innerText);


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
  counterTotal.innerText = numPretzels;
  unlock();
};

const bakeSmallBatch = () => {
  numPretzels += 5;
  counterTotal.innerText = numPretzels;
  unlock();
};

const bakeBigBatch = () => {
  numPretzels += 10;
  counterTotal.innerText = numPretzels;
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
    counterTotal.innerText = numPretzels;
    numWorkers += 1;
    counterWorkers.innerText = numWorkers;
    setInterval(() => {bakePretzel()}, 5000);
  } else {
    alert("Not enough Ressources");
  }
}

// Human Ressources Event Handlers
buttonHireWorker.addEventListener("click", hireWorker);