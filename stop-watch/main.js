let hour = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

let records = document.getElementById("record");


let handler;
function start()
{
    handler = setInterval(CountUp, 1000);
}

function pause()
{
    clearInterval(handler);
}

function CountUp()
{
    seconds.innerHTML = parseInt(seconds.innerHTML) + 1;
    if (seconds.innerHTML == "60") {
        seconds.innerHTML = 0;
        minutes.innerHTML =  parseInt(minutes.innerHTML) + 1;
    }
    if (minutes.innerHTML === "60") {
        minutes.innerHTML = 0;
        hour.innerHTML = parseInt(hour.innerHTML) + 1;
    }
}

function reset()
{
    hour.innerHTML = 0;
    minutes.innerHTML = 0;
    seconds.innerHTML = 0;

    records.innerHTML = "";
}


function record()
{
    var div = document.createElement("div");
    div.style.color = "black";
    div.style.fontSize = "25px"
    div.style.textAlign = "center"
    div.textContent =`${hour.innerHTML}:${minutes.innerHTML}:${seconds.innerHTML}`
    records.appendChild(div);
}

