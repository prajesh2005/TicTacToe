let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newBtn = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");

let turnO = true; //player O
let turnX = true; //player X

/*

//1d array
let arr = ["apple", "banana", "orange"]; 

//2d array
let arr2 = [
  ["apple", "litchi"],
  ["potato", "mushroom"],
  ["pants", "shirts"],
];

*/

// array storing all wining patterns
const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box is clicked");
    if (turnO) {
      box.innerText = "O";
      box.style.color = "blue";     //to mark O with blue color
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true; //so that once clicked box value can't be changed

    checkWinner();
  });
});

// function to disable boxes after finding a winner
const disableBox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

// to re-enable the boxes
const enableBox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerHTML = `Congratulations!!\nWinner:${winner}`;
  msgContainer.classList.remove("hide");
  disableBox();
};

const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        //means jevha pos1==pos2==pos3... tinhi position same ahe..tevha we have found our winner
        // console.log("Winner", pos1);
        // alert(`Game Over!! \nPlayer ${pos1} won the game`);
        showWinner(pos1); //bcoz pos1 is gonna be the winner
      }
    }
  }
};

const resetGame = () => {
  enableBox();
  msgContainer.classList.add("hide");
};

newBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
