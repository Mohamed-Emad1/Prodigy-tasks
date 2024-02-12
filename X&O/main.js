check = true; //true if x and false if circle
end = false;
drawCounter = 8;
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
    console.log("Circle element classes:", div.classList);
}

function drawX(selectedDiv) {
  let div = document.createElement("div");
  div.textContent = "X";
  div.style.fontSize = "60px";
  div.style.fontWeight = "bolder";
  div.style.textAlign = "center";
  div.style.color = "#FBBF00";
  selectedDiv.appendChild(div);
}

function handleClick(number) {
  var numberDiv = document.querySelector(`.${number}`);
  // console.log(number)
  if (numberDiv.childNodes.length === 0 && end === false) {
    if (check) {
        check = false;
        drawX(numberDiv);
        checkWin();
        drawCounter -= 1;
    } else {
        check = true;
        drawCircle(numberDiv);
        checkWin();
        drawCounter -= 1;
    }
  }
}

function checkWin() {
    var one = document.querySelector(".one");
    var two = document.querySelector(".two");
    var three = document.querySelector(".three");
    var four = document.querySelector(".four");
    var five = document.querySelector(".five");
    var six = document.querySelector(".six");
    var seven = document.querySelector(".seven");
    var eight = document.querySelector(".eight");
    var nine = document.querySelector(".nine");
    console.log(drawCounter);
  //check  if x wins
  if (
    (one.textContent === "X" &&
      two.textContent === "X" &&
      three.textContent === "X") ||
    (one.textContent === "X" &&
      four.textContent === "X" &&
      seven.textContent === "X") ||
    (one.textContent === "X" &&
      five.textContent === "X" &&
          nine.textContent === "X"
    ) ||
      (
        four.textContent === "X" &&
        five.textContent === "X" &&
        six.textContent === "X"
      ) ||
          (
        seven.textContent === "X" &&
          eight.textContent === "X" &&
          nine.textContent === "X"
      )||
    (
      two.textContent === "X" &&
        five.textContent === "X" &&
        eight.textContent === "X"
    )||
        (
      three.textContent === "X" &&
        six.textContent === "X" &&
        nine.textContent === "X"
      )
  )
   {
    end = true;
    WinMessage("X");
  } else if (
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
    else if (drawCounter === 0 ) {
        setTimeout(() => {
          alert(`Draw No one wins`);
          location.reload();
        }, 60);
    }
}

function WinMessage(winner) {

  setTimeout(() => {
      alert(`Player ${winner} wins`);
      location.reload();
  }, 100);
    
}
