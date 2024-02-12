check = true; //true if x and false if circle
end = false;
drawCounter = 9;
computerTurn = false;
circleFlag = false;
xFlag = false;
randomString = "";
isComputer = false;

var one = document.querySelector(".one");
var two = document.querySelector(".two");
var three = document.querySelector(".three");
var four = document.querySelector(".four");
var five = document.querySelector(".five");
var six = document.querySelector(".six");
var seven = document.querySelector(".seven");
var eight = document.querySelector(".eight");
var nine = document.querySelector(".nine");

function drawCircle(selectedDiv) {
  let div = document.createElement("div");
  div.textContent = "o";
  div.fontSize = "0px";
  div.style.width = "50px";
  div.style.height = "50px";
  div.style.borderRadius = "50%";
  div.style.color = "transparent";
  div.style.borderWidth = "8px";
  div.style.borderStyle = "solid";
  div.style.borderColor = "#FC4946";

  // console.log(selectedDiv.childNodes.length);
  selectedDiv.appendChild(div);
  circleFlag = false;
  xFlag = true;
  drawCounter -= 1;
  check = true;
  // console.log("Circle element classes:", div.classList);
}

function drawX(selectedDiv) {
  let div = document.createElement("div");
  div.textContent = "X";
  div.style.fontSize = "60px";
  div.style.fontWeight = "bolder";
  div.style.textAlign = "center";
  div.style.color = "#FBBF00";
  selectedDiv.appendChild(div);
  xFlag = false;
  circleFlag = true;
  drawCounter -= 1;
  check = false;
}

function handleClick(number) {
  var numberDiv = document.querySelector(`.${number}`);
  // console.log(number)
  if (window.localStorage.getItem("isComputer") == "true")
  {
      console.log("computer")
        if (
          numberDiv.childNodes.length === 0 &&
          end === false &&
          computerTurn !== true
        ) {
          if (check) {
            drawX(numberDiv);
            computerTurn = true;
            computerPlay();
            // checkWin();
          } else {
            drawCircle(numberDiv);
            computerTurn = true;
            computerPlay();
            // checkWin();
          }
        }

  } else {
    console.log("1 v 1");
    if (numberDiv.childNodes.length === 0 && end === false) {
      if (check) {
        drawX(numberDiv);
        checkWin();
      } else {
        drawCircle(numberDiv);
        checkWin();
      }
    }
  }
}

function computerSelected() {
  window.localStorage.setItem("isComputer", true);
  window.location.href = "start.html";
}

function computerPlay() {
  console.log("test get item" + window.localStorage.getItem("isComputer"));
  console.log(computerTurn);
  if (computerTurn) {
    console.log("inside computer");
    //pick random block and draw shape
    do {
      randomNumber = Math.floor(Math.random() * 10);
    } while (!computerTurnCheck(randomNumber) && drawCounter !== 0);

    if (circleFlag) {
      setTimeout(function ()
      {
        drawCircle(randomString);
        checkWin();
      }, 100);
    } else {
      setTimeout(function () {
        drawX(randomString);
        checkWin();
      }, 100);
    }
  }
  computerTurn = false;
}

function computerTurnCheck(randomNumber) {
  if (randomNumber === 1 && one.textContent === "") {
    randomString = document.querySelector(".one");
    return true;
  } else if (randomNumber === 2 && two.textContent === "") {
    randomString = document.querySelector(".two");

    return true;
  } else if (randomNumber === 3 && three.textContent === "") {
    randomString = document.querySelector(".three");
    return true;
  } else if (randomNumber === 4 && four.textContent === "") {
    randomString = document.querySelector(".four");

    return true;
  } else if (randomNumber === 5 && five.textContent === "") {
    randomString = document.querySelector(".five");
    return true;
  } else if (randomNumber === 6 && six.textContent === "") {
    randomString = document.querySelector(".six");

    return true;
  } else if (randomNumber === 7 && seven.textContent === "") {
    randomString = document.querySelector(".seven");

    return true;
  } else if (randomNumber === 8 && eight.textContent === "") {
    randomString = document.querySelector(".eight");

    return true;
  }
  if (randomNumber === 9 && nine.textContent === "") {
    randomString = document.querySelector(".nine");
    return true;
  } else {
    return false;
  }
}

function checkWin() {
  console.log(drawCounter);
  //check  if x wins

  if (
    (one.textContent === "o" &&
      two.textContent === "o" &&
      three.textContent === "o") ||
    (one.textContent === "o" &&
      four.textContent === "o" &&
      seven.textContent === "o") ||
    (one.textContent === "o" &&
      five.textContent === "o" &&
      nine.textContent === "o") ||
    (four.textContent === "o" &&
      five.textContent === "o" &&
      six.textContent === "o") ||
    (seven.textContent === "o" &&
      eight.textContent === "o" &&
      nine.textContent === "o") ||
    (two.textContent === "o" &&
      five.textContent === "o" &&
      eight.textContent === "o") ||
    (three.textContent === "o" &&
      six.textContent === "o" &&
      nine.textContent === "o")
  ) {
    end = true;
    WinMessage("O");
  }
  else if (
    (one.textContent === "X" &&
      two.textContent === "X" &&
      three.textContent === "X") ||
    (one.textContent === "X" &&
      four.textContent === "X" &&
      seven.textContent === "X") ||
    (one.textContent === "X" &&
      five.textContent === "X" &&
      nine.textContent === "X") ||
    (four.textContent === "X" &&
      five.textContent === "X" &&
      six.textContent === "X") ||
    (seven.textContent === "X" &&
      eight.textContent === "X" &&
      nine.textContent === "X") ||
    (two.textContent === "X" &&
      five.textContent === "X" &&
      eight.textContent === "X") ||
    (three.textContent === "X" &&
      six.textContent === "X" &&
      nine.textContent === "X")
  ) {
    end = true;
    WinMessage("X");
  } else if (drawCounter === 0) {
    setTimeout(() => {
      alert(`Draw No one wins`);
      location.reload();
    }, 60);
  }
  // if (!end && window.localStorage.getItem("isComputer") == "true") {
  //   console.log("test test");
  //   computerPlay();
  // }
}

function WinMessage(winner) {
  setTimeout(() => {
    alert(`Player ${winner} wins`);
    location.reload();
    return;
  }, 100);
}
