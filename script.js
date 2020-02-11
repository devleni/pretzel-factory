// Selectors
const addUsernameInput = document.querySelector("#add-username-input");
const displayUsername = document.querySelector("#display-username");

const counterStock = document.querySelector("#counter-stock");
const counterBalance = document.querySelector("#counter-balance");
const counterWorkers = document.querySelector("#counter-workers");
const counterWorkerSeconds = document.querySelector("#counter-worker-seconds");
const counterRaises = document.querySelector("#counter-raises");

const valuePretzel = document.querySelector("#value-pretzel");

const buttonSellStock = document.querySelector("#button-sell");
const buttonPretzel = document.querySelector("#button-pretzel");
const buttonUpgradeBakery = document.querySelector("#button-upgrade-bakery");
const buttonSmallBatch = document.querySelector("#button-small-batch");
const buttonHireWorker = document.querySelector("#hire-worker");
const buttonGiveRaise = document.querySelector("#give-raise");

const elementBakePretzel = document.querySelector("#element-bake-pretzel");
const elementUpgradeBakery = document.querySelector("#element-upgrade-bakery");
const elementSmallBatch = document.querySelector("#element-small-batch");
const elementHireWorker = document.querySelector("#element-hire-worker");
const elementRaise = document.querySelector("#element-raise");

const hrUnlockNote = document.querySelector("#hr-unlock-note");


// Counters
let numPretzels = parseInt(counterStock.innerText);
let numBalance = parseInt(counterBalance.innerText);
let numWorkers = parseInt(counterWorkers.innerText);
let numWorkerSeconds = parseInt(counterWorkerSeconds.innerText);
let numRaises = parseInt(counterRaises.innerText);


// Unlocks
const unlock = () => {
  if (numBalance >= 50 && elementSmallBatch.classList.contains("hide") === true) {
    elementUpgradeBakery.classList.remove("hide");
  }
  if (numBalance >= 100) {
    elementHireWorker.classList.remove("hide");
    hrUnlockNote.remove();
  }
  if (numBalance >= 200) {
    elementRaise.classList.remove("hide");
  }
};


// Achievements
let achievementUpgradeBakery = false ;


// Add Username
const addUsername = (e) => {
  if(e.key === "Enter") {
    const username = addUsernameInput.value;
    const usernameElement = document.createElement("p");
    usernameElement.innerText = `${username} (CEO)`;
    displayUsername.appendChild(usernameElement);
    addUsernameInput.remove();
  };
};

// Add Username Event Handler
addUsernameInput.addEventListener("keypress", addUsername);


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
  if (numBalance >= 50) {
    numBalance -= 50;
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
let workerSpeed = 5000;

const hireWorker = () => {
  if (numBalance >= 100) {
    numBalance -= 100;
    counterBalance.innerText = numBalance;
    numWorkers += 1;
    counterWorkers.innerText = numWorkers;
    setInterval(() => {bakePretzel()}, workerSpeed);
  } else {
    alert("Not enough Ressources");
  };
};

const giveRaise = () => {
  if (numBalance >= 200 && workerSpeed > 1000) {
    numBalance -= 200;
    counterBalance.innerText = numBalance;
    numWorkerSeconds -= 1;
    counterWorkerSeconds.innerText = numWorkerSeconds;
    numRaises += 1;
    counterRaises.innerText = numRaises;
    workerSpeed -= 1000;
    setInterval(() => {bakePretzel()}, workerSpeed);
    alert("Workers get 1 second faster");
    return workerSpeed;
  } else {
    alert("Not Available");
  };
};

// Human Ressources Event Handlers
buttonHireWorker.addEventListener("click", hireWorker);
buttonGiveRaise.addEventListener("click", giveRaise);