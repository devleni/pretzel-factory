// Selectors
const counterStock = document.querySelector("#counter-stock");
const counterBalance = document.querySelector("#counter-balance");
const counterWorkers = document.querySelector("#counter-workers");

const valuePretzel = document.querySelector("#value-pretzel");

const buttonSellStock = document.querySelector("#button-sell");
const buttonPretzel = document.querySelector("#button-pretzel");
const buttonUpgradeBakery = document.querySelector("#button-upgrade-bakery");
const buttonSmallBatch = document.querySelector("#button-small-batch");
const buttonHireWorker = document.querySelector("#hire-worker");

const elementBakePretzel = document.querySelector("#element-bake-pretzel");
const elementUpgradeBakery = document.querySelector("#element-upgrade-bakery");
const elementSmallBatch = document.querySelector("#element-small-batch");
const elementHireWorker = document.querySelector("#element-hire-worker");


// Counters
let numPretzels = parseInt(counterStock.innerText);
let numWorkers = parseInt(counterWorkers.innerText);
let numBalance = parseInt(counterBalance.innerText);


// Unlocks
const unlock = () => {
  if (numBalance >= 50 && elementSmallBatch.classList.contains("hide") === true) {
    elementUpgradeBakery.classList.remove("hide");
  }
  if (numBalance >= 300) {
    elementHireWorker.classList.remove("hide");
  }
};

// Achievements
let achievementUpgradeBakery = false ;

// Value per Pretzel
let currentValue = 1.00;
let min = 0.7;
let max = 1.3;

const getPretzelValue = () => {
  setInterval(() => {
    currentValue = Math.random() * (max - min) + min;
    currentValue = currentValue.toFixed(2);
    valuePretzel.innerText = currentValue;
    return currentValue;
  }, 5000);
};

getPretzelValue();


// Sell Stock Function
const sellStock = () => {
  let turnover = numPretzels * currentValue;
  numBalance += turnover;
  counterBalance.innerText = numBalance;
  numPretzels = 0;
  counterStock.innerText = numPretzels;
  unlock();
};

// Sell Stock Event Handler
buttonSellStock.addEventListener("click", sellStock);


// Bakery Functions
const bakePretzel = () => {
  numPretzels += 1;
  counterStock.innerText = numPretzels;
};

const upgradeBakery = () => {
  if (numBalance >= 200) {
    numBalance -= 200;
    counterBalance.innerText = numBalance;
    elementSmallBatch.classList.remove("hide");
    elementUpgradeBakery.classList.add("hide");
    elementBakePretzel.classList.add("hide");
    achievementUpgradeBakery = true;
  } else {
    alert("Not enough Money!");
  }
};

const bakeSmallBatch = () => {
  numPretzels += 5;
  counterStock.innerText = numPretzels;
};

// Bakery Event Handlers
buttonPretzel.addEventListener("click", bakePretzel);
buttonUpgradeBakery.addEventListener("click", upgradeBakery);
buttonSmallBatch.addEventListener("click", bakeSmallBatch);


// Human Ressources Functions
const hireWorker = () => {
  if (numBalance >= 500) {
    numBalance -= 500;
    counterBalance.innerText = numBalance;
    numWorkers += 1;
    counterWorkers.innerText = numWorkers;
    setInterval(() => {bakePretzel()}, 5000);
  } else {
    alert("Not enough Ressources");
  }
}

// Human Ressources Event Handlers
buttonHireWorker.addEventListener("click", hireWorker);