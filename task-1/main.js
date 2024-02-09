    
function resetColors() {
  nav.style.backgroundColor = "";
  nav.style.color = "";
  ul.style.backgroundColor = "";
  ul.style.color = "";
}

var nav = document.getElementById("m-nav");
        nav.addEventListener("mouseover", function() {
            nav.style.backgroundColor = "#333";
        });
        nav.addEventListener("mouseout", function() {
            nav.style.backgroundColor = ""; // Reset to the original background color
        });

        nav.addEventListener("mouseover", function () {
          nav.style.color = "#039FE7";
        });

        nav.addEventListener("mouseout", function () {
          nav.style.color = ""; // Reset to the original background color
        });

var ul = document.querySelector(".list2");

ul.addEventListener("mouseover", function () {
  ul.style.backgroundColor = "#333";
  ul.style.color = "#039FE7";
});

ul.addEventListener("mouseout", function () {
  ul.style.backgroundColor = "";
  ul.style.color = "";
});


window.addEventListener("scroll", () => {
  nav.style.backgroundColor = "#333";
  nav.style.color = "#039FE7";

  ul.style.backgroundColor = "#333";
    ul.style.color = "#039FE7";
    
    setTimeout(resetColors, 200);
});






