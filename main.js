var generateButtonElement = document.getElementById("generate-button");

const threatLevels = ["low", "medium", "high"];
const behaviours = ["activeley", "passiveley"];
const tasks = ["attack the player", "disrupt the player", "support the other enemies"];
const ranges = ["long", "mid", "close"];

var resultsElement = document.getElementById("result");

generateButtonElement.addEventListener("click", generateEnemy);

function generateEnemy() {
      let threatLevel = threatLevels[Math.floor(Math.random() * threatLevels.length)];
      let behaviour = behaviours[Math.floor(Math.random() * behaviours.length)];
      let task = tasks[Math.floor(Math.random() * tasks.length)];
      let range = ranges[Math.floor(Math.random() * ranges.length)];
      resultsElement.innerHTML = `A <b>${threatLevel}</b> threat level enemy that <b>${behaviour}</b> tries to <b>${task}</b> at <b>${range}</b> range.`;
}

generateEnemy();

var index = 0;
var imagesArray = [
      "backgrounds/backgroundColorDesert.png",
      "backgrounds/backgroundColorFall.png",
      "backgrounds/backgroundColorForest.png",
      "backgrounds/backgroundColorGrass.png",
];
var background1 = $("#background1");
var background2 = $("#background2");

//Set the starting background
background2.css("background", "url('" + imagesArray[index] + "')");
changeImage();
setInterval(changeImage, 5000);

function changeImage() {
      index++;
      if (index >= imagesArray.length) {
            index = 0;
      }
      background2.css("background", "url('" + imagesArray[index] + "')");
      background2.fadeIn(1000, () => {
            background1.css("background", "url('" + imagesArray[index] + "')");
            background2.fadeOut(0);
      });
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "flex") {
                  content.style.display = "none";
            } else {
                  content.style.display = "flex";
            }
      });
}
