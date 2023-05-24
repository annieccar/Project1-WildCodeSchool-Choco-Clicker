//HEADER - Change Bakery Name
const bakery = document.querySelector(".bakery");
const overlay = document.querySelector(".overlay");
const popup = document.querySelector(".popup");
const popupInput = document.querySelector(".popup-input");
const popupSubmit = document.querySelector(".popup-submit");
//Afficher le popup
bakery.addEventListener("click", () => {
  overlay.classList.toggle("hidden");
  popup.classList.toggle("hidden");
});
//Masquer le popup
overlay.addEventListener("click", () => {
  overlay.classList.toggle("hidden");
  popup.classList.toggle("hidden");
});
//TODO Créer une fonction de validation à rappeller avec les deux event listener
//Submit name enter
popupInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const errors = [];
    if (popupInput.value === "" || popupInput.value == null) {
      errors.push(`Name is required`);
    }
    if (popupInput.value.length < 3) {
      errors.push(`Name must be 3 characters long minimum`);
    }
    if (popupInput.value.length > 12) {
      errors.push(`Name must be 12 character long maximum`);
    }
    if (errors.length > 0) {
      e.preventDefault();
      alert(errors.join(","));
      return;
    } else {
      bakery.innerHTML = `${popupInput.value}`;
      overlay.classList.toggle("hidden");
      popup.classList.toggle("hidden");
    }
  }
});
//Submit name Click
popupSubmit.addEventListener("click", (e) => {
  const errors = [];
  if (popupInput.value === "" || popupInput.value == null) {
    errors.push(`Name is required`);
  }
  if (popupInput.value.length < 3) {
    errors.push(`Name must be 3 characters long minimum`);
  }
  if (popupInput.value.length > 12) {
    errors.push(`Name must be 12 character long maximum`);
  }
  if (errors.length > 0) {
    e.preventDefault();
    alert(errors.join(","));
    return;
  } else {
    bakery.innerHTML = `${popupInput.value}`;
    overlay.classList.toggle("hidden");
    popup.classList.toggle("hidden");
  }
});

//WORKER LIST
const workerList = [
  {
    id: "0",
    name: "Wilder",
    qty: "0",
    cps: "10",
    yield: "0",
    price: "2",
  },
  {
    id: "1",
    name: "Instructor",
    qty: "0",
    cps: "50",
    yield: "0",
    price: "4",
  },
  {
    id: "2",
    name: "Tourist",
    qty: "0",
    cps: "250",
    yield: "0",
    price: "5",
  },
  {
    id: "3",
    name: "Anna Stepanoff",
    qty: "0",
    cps: "1250",
    yield: "0",
    price: "10",
  },
];

const itemBox = document.querySelector(".item-box");

function createWorker(id, name, qty, cps, yield, price) {
  const worker = document.createElement("div");
  worker.classList.add(`item`);
  worker.classList.add(`item${id}`);
  // worker.classList.add(`hidden`);
  itemBox.appendChild(worker);

  const workerName = document.createElement("div");
  workerName.classList.add(`item-name`);
  worker.appendChild(workerName);
  workerName.innerHTML = `${name}`;

  const workerQty = document.createElement("div");
  workerQty.classList.add(`item-qty`);
  workerQty.classList.add(`item-qty${id}`);
  worker.appendChild(workerQty);
  workerQty.innerHTML = `Quantity: ${qty}`;

  const workerCps = document.createElement("div");
  workerCps.classList.add(`item-cps`);
  workerCps.classList.add(`item-cps${id}`);
  worker.appendChild(workerCps);
  workerCps.innerHTML = `Cps: ${cps}`;

  const workerYield = document.createElement("div");
  workerYield.classList.add(`item-yield`);
  workerYield.classList.add(`item-yield${id}`);
  worker.appendChild(workerYield);
  workerYield.innerHTML = `Yield: ${yield}`;

  const workerPrice = document.createElement("button");
  workerPrice.classList.add(`item-price`);
  workerPrice.classList.add(`item-price${id}`);
  worker.appendChild(workerPrice);
  workerPrice.innerHTML = `Price: ${price}`;
}
for (let i = 0; i < workerList.length; i++) {
  createWorker(
    workerList[i].id,
    workerList[i].name,
    workerList[i].qty,
    workerList[i].cps,
    workerList[i].yield,
    workerList[i].price
  );
}

// SECTION CHOCO
//importer les élements du DOM
const choco = document.querySelector("#choco");
const scoreMain = document.querySelector("#score span");
const scoreTitle = document.querySelector("title");
const priceButtons = document.querySelectorAll(".item-price");
const buttonsArray = Array.from(priceButtons);

// griser les boutons des items si le score n'est pas suffisant pour acheter
function purchaseControl() {
  for (let i = 0; i < workerList.length; i++) {
    priceValue = workerList[i].price;

    if (chocoCount >= priceValue) {
      buttonsArray[i].disabled = false;
      buttonsArray[i].style.backgroundImage =
        "linear-gradient(var(--primary-color), white)";
    } else {
      buttonsArray[i].disabled = true;
      buttonsArray[i].style.backgroundImage = "linear-gradient(grey, white)";
    }
  }
}
//compteur à zéro (Tagada Jones)
let chocoCount = 0;
updateScore(chocoCount);
//mettre à jour le score
function updateScore(newScore) {
  scoreMain.innerText = newScore;
  scoreTitle.innerHTML = newScore + " - Choco Clicker";
  chocoCount = newScore;
  purchaseControl();
}
//quand choco est cliquée
function chocoClicked() {
  let newScore;
  newScore = chocoCount + 1;
  updateScore(newScore);
}
//écoute si on clique sur choco
choco.addEventListener("click", () => {
  chocoClicked();
});

//J'achète un worker
function buyItem(id) {
  let priceValue = parseInt(workerList[id].price);
  let yieldValue = parseInt(workerList[id].yield);
  let cpsValue = parseInt(workerList[id].cps);
  let qtyValue = parseInt(workerList[id].qty);

  let qtyDisplayed = document.querySelector(`.item-qty${id}`);
  let yieldDisplayed = document.querySelector(`.item-yield${id}`);
  let priceDisplayed = document.querySelector(`.item-price${id}`);

  //Incrémente quantité:
  qtyValue = qtyValue + 1;
  workerList[id].qty = qtyValue;
  yieldValue = qtyValue * cpsValue;
  workerList[id].yield = yieldValue;
  //Décrémente score du prix:
  chocoCount = chocoCount - priceValue;
  //Incrémente prix:
  priceValue = Math.ceil(priceValue * 1.3);
  workerList[id].price = priceValue;
  console.log(workerList[id].price);
  //Update l'affichage
  updateScore(chocoCount);
  qtyDisplayed.innerHTML = `Quantity: ${qtyValue}`;
  yieldDisplayed.innerHTML = `Yield: ${yieldValue}`;
  priceDisplayed.innerHTML = `Price: ${priceValue}`;
}

//Lancer fonction buyItem quand on clique sur bouton =>
for (let j = 0; j < workerList.length; j++) {
  buttonsArray[j].addEventListener("click", function () {
    buyItem(j);
  });
}

// Incrémentation / seconde.
const rendement = setInterval(function () {
  for (let i = 0; i < workerList.length; i++) {
    chocoCount = chocoCount + parseInt(workerList[i].yield);
    updateScore(chocoCount);
  }
}, 1000);
