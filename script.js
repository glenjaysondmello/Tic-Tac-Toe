let button = document.querySelectorAll("button");
let player = "X";
let gameWon = false;

function clicks(e) {
  if (gameWon) {
    return;
  }
  let btn = e.target;
  btn.innerHTML = player;
  btn.disabled = true;
  if (player == "X") {
    btn.classList.add("cbtn1");
    player = "O";
  } else {
    btn.classList.add("cbtn2");
    player = "X";
  }
  checkwin();
  if (!gameWon) {
    checkTie();
  }
}

function checkwin() {
  let list = [];
  for (let i = 0; i < button.length; i++) {
    list.push(button[i].innerHTML);
  }

  let winList = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];

  for (let win of winList) {
    if (
      list[win[0]] &&
      list[win[0]] == list[win[1]] &&
      list[win[1]] == list[win[2]]
    ) {
      setTimeout(() => {
        alert(`Player ${list[win[0]]} Won the Game!!!`);
        reset();
      }, 400);
      button.forEach((btn) => {
        btn.disabled = true;
      });
      win.forEach((ind) => {
        button[ind].style.backgroundColor = "lightgreen";
        button[ind].style.color = "yellow";
      });
      gameWon = true;
      break;
    }
  }
}

function checkTie() {
  let isTie = true;

  for (let i = 0; i < button.length; i++) {
    if (button[i].innerHTML === "") {
      isTie = false;
      break;
    }
  }

  setTimeout(() => {
    if (isTie) {
      alert("Game Tie");
      reset();
    }
  }, 400);
}

function reset() {
  player = "X";
  gameWon = false;
  button.forEach((btn) => {
    btn.innerHTML = "";
    btn.disabled = false;
    btn.style.backgroundColor = "rgb(255, 236, 236)";
    btn.classList.remove("cbtn1");
    btn.classList.remove("cbtn2");
    btn.style.color = "";
  });
}

button.forEach((btn) => btn.addEventListener("click", clicks));
