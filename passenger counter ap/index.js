let countEl = document.getElementById("count-el");
console.log(countEl);

let count = 0;
function increment() {
  count += 1;
  countEl.textContent = count;
}
increment();
let saveEl = document.getElementById("save-el");
function save() {
  let variable = count + " - ";
  saveEl.textContent += variable;
  countEl.textContent = 0;
  count = 0;
}
save();
let delEl = document.getElementById("delete-btn");
function Delete() {
  countEl.textContent = 0;
  saveEl.textContent = 0;
}
let errorEl = document.getElementById("error");
function error() {
  let notice = "something went wrong pls try again";
  errorEl.textContent = notice;
}

let num_1 = 8;
let num_2 = 2;
document.getElementById("num-1").textContent = num_1;
document.getElementById("num-2").textContent = num_2;
let sumEl = document.getElementById("sum");
function Addition() {
  let result = num_1 + num_2;
  sumEl.textContent = "sum: " + result;
}
function Subtraction() {
  let result = num_1 - num_2;
  sumEl.textContent = "sum: " + result;
}

function Division() {
  let result = num_1 / num_2;
  sumEl.textContent = "sum: " + result;
}

function multiplication() {
  let result = num_1 * num_2;
  sumEl.textContent = "sum: " + result;
}

let welcomeEl = document.getElementById("welcome-el");
console.log(welcomeEl);
let names = "Mufidat";
let greatings = "hello everyone my name is ";
let message = "you have three new notification";
let plesantry = greatings + ", " + names;
console.log(plesantry);
welcomeEl.innerText = plesantry;

welcomeEl.innerText = welcomeEl.innerText + " ";
let userName = "per";
let messageTouser = message + " " + userName;
console.log(messageTouser);
console.log(message);

let name = "mufidat";
let greating = "hi my name is ";
let mygreatings = greating + " , " + name + "!";
console.log(mygreatings);

let myPoints = 3;
function add3point() {
  myPoints += 3;
}

function remove1point() {
  myPoints -= 1;
}
add3point();
add3point();
add3point();
remove1point();
remove1point();

console.log(myPoints);
let sum = 0;
let messages = "";
let hasblackJack = false;

let isAlive = true;
let messagesEl = document.querySelector("#message-el");
let sumEll = document.getElementById("sumEl");
let cardEl = document.getElementById("card-el");
let newarray = [];
///playing casino game
function startGame() {
  isAlive = true;
  firstCard = getRandomNumber();
  secondCard = getRandomNumber();
  newarray = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}
function renderGame() {
  cardEl.textContent = "Cards:";
  for (let i = 0; i < newarray.length; i++) {
    cardEl.textContent += newarray[i] + " ";
  }
  sumEll.textContent = "Sum: " + sum;
  if (sum <= 20) {
    messages = "DO YOU WANT TO DRAW THE CARD";
  } else if (sum === 21) {
    messages = "you won";

    hasblackJack = true;
  } else {
    messages = "you are out of the game";
    isAlive = false;
  }
  // console.log(messages);
  messagesEl.textContent = messages;
}

renderGame();
function getRandomNumber() {
  let random = Math.floor(Math.random() * 11) + 1;
  if (random > 10) {
    return 10;
  } else if (random === 1) {
    return 11;
  } else {
    return random;
  }
}
let player = {
  name: "mufidat",
  chips: 324,
};
let playerEL = document.querySelector("#player-el");
console.log(playerEL.textContent);

playerEL.textContent = player.name + ": " + player.chips;

function newCard() {
  if (isAlive === true && hasblackJack === false) {
    let newcard = getRandomNumber();
    newarray.push(newcard);
    sum += newcard;
    console.log(newarray);
    renderGame();
  }
}
newCard();

let sentence = ["hello ", "my ", "name ", "is ", "mufidat "];
// let sentence = [1, 2, 3, 4, 5, 6];
let greatingEl = document.getElementById("greating-el");
for (let i = 0; i < sentence.length; i++) {
  greatingEl.textContent += " " + sentence[i];
}

let hands = ["a", "v", "c"];
function getHands() {
  for (let i = 0; i < hands.length; i++) {
    hand = Math.floor(Math.random() * hands.length);
  }
  return hands[hand];
}
console.log(getHands());
