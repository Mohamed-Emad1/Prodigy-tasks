let hour = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let s = document.getElementById("r");
// var start = document.querySelector(".start");
// var reset = document.querySelector(".reset");
// var pause = document.querySelector(".pause");

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
}
function countdown()
{
    s.innerHTML -= 1;
}

