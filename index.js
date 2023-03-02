let score = 0;

let scoreDisplay = document.getElementById("score");

let holes = document.getElementsByClassName("hole");
//console.log(document.getElementsByClassName("hole"));
setInterval(function () {
  let randomHoleIndex = Math.floor(Math.random() * holes.length);
  holes[randomHoleIndex].classList.toggle("mole");
}, 300);

let gameArea = document.getElementById("whack-a-mole");
gameArea.addEventListener("click", function (clickEvent) {
  if (clickEvent.target.matches(".mole")) {
    clickEvent.target.classList.remove("mole");
    score++;
    scoreDisplay.innerText = score;
    // we hit a mole
  }
});
