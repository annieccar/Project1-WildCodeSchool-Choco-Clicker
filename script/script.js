//HEADER - Change Bakery Name
const bakery = document.querySelector(".bakery");
const overlay = document.querySelector(".overlay");
const popup = document.querySelector(".popup");
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
// SECTION CHOCO
//importer les élements du DOM
const choco = document.querySelector("#choco");
const scoreMain = document.querySelector("#score span");
const scoreTitle = document.querySelector("title");
const itemBox = document.querySelector(".item-box");

//mettre à jour le score
function updateScore(newScore) {
  scoreMain.innerText = newScore;
  scoreTitle.innerHTML = newScore + " - Choco Clicker";
}

//compteur à zéro (Tagada Jones)
let chocoCount = 0;
updateScore(chocoCount);

//quand choco est cliquée
function chocoClicked() {
  let scoreValue = parseInt(scoreMain.innerHTML);
  let newScore;
  newScore = scoreValue + 1;
  updateScore(newScore);
}

//écoute si on clique sur choco
choco.addEventListener("click", () => {
  chocoClicked();
});

//WORKER LIST
const workerList = [
  {
    id: "0",
    name: "Wilder",
    qty: "0",
    cps: "10",
    price: "50",
  },
  {
    id: "1",
    name: "Instructor",
    qty: "0",
    cps: "50",
    price: "250",
  },
  {
    id: "2",
    name: "Tourist",
    qty: "0",
    cps: "250",
    price: "1250",
  },
  {
    id: "3",
    name: "Anna Stepanoff",
    qty: "0",
    cps: "1250",
    price: "6250",
  },
];

function createWorker(id, name, qty, cps, price) {
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
  worker.appendChild(workerQty);
  workerQty.innerHTML = `${qty}`;

  const workerCps = document.createElement("div");
  workerCps.classList.add(`item-cps`);
  worker.appendChild(workerCps);
  workerCps.innerHTML = `${cps}`;

  const workerPrice = document.createElement("div");
  workerPrice.classList.add(`item-price`);
  worker.appendChild(workerPrice);
  workerPrice.innerHTML = `${price}`;
}
for (let i = 0; i < workerList.length; i++) {
  createWorker(
    workerList[i].id,
    workerList[i].name,
    workerList[i].qty,
    workerList[i].cps,
    workerList[i].price
  );
}

//j'achète un worker
function buyWorker(id) {}
//Incrémentation quantité et retour prix quand on 'click'sur l'item:
const button1 = document.querySelector("#price1");
const button2 = document.querySelector("#price2");
const button3 = document.querySelector("#price3");

// let qty = 1;

const buyItems = function (quantity, price) {
  // incrémente quantité:
  quantity.innerHTML = "Quantity: " + qty++;

  //Décrémente score du prix:
  const storage = getStorage();
  const score = document.querySelector("#score span");
  const value = storage.chocolatines - price;

  //Update l'affichage
  updateScore(value);
};

button1.addEventListener("click", function () {
  const quantity1 = document.querySelector("#quantity1");
  const price1 = parseInt(button1.dataset.price);
  let qty = 1;
  buyItems(quantity1, price1);
});

button2.addEventListener("click", function () {
  const quantity2 = document.querySelector("#quantity2");
  const price2 = parseInt(button2.dataset.price);
  let qty = 1;
  buyItems(quantity2, price2);
});

button3.addEventListener("click", function () {
  const quantity3 = document.querySelector("#quantity3");
  const price3 = parseInt(button3.dataset.price);
  let qty = 1;
  buyItems(quantity3, price3);
});

//Brouillon de variables. Fortune liée à score pour l'affichage, incrémentée par l'action click sur choco.
// let fortune = 0;
// const score = document.querySelector("#score");

// choco.addEventListener("click", () => {
//   score.textContent = fortune++;
// });

//Variable timer. À définir selon les achats possibles : student, stone student, teacher, clandestine baker etc..
// const rendement = setInterval(function () {
//   count = count++; // ou peut-être - . Genre malus
//   score.textContent = count;
// }, 1000);
