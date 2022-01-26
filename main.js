var generateButtonElement = document.getElementById("generate-button");

const threatLevels = ["low", "medium", "high"];
const behaviours = ["activeley", "passiveley"];
const tasks = ["damage the player", "disrupt the player", "support the other enemies"];
const ranges = ["high", "mid", "low"];

var resultsElement = document.getElementById("result");

generateButtonElement.addEventListener("click", () => {
      let threatLevel = threatLevels[Math.floor(Math.random() * threatLevels.length)];
      let behaviour = behaviours[Math.floor(Math.random() * behaviours.length)];
      let task = tasks[Math.floor(Math.random() * tasks.length)];
      let range = ranges[Math.floor(Math.random() * ranges.length)];
      resultsElement.innerHTML = `A <b>${threatLevel}</b> threat level enemy that <b>${behaviour}</b> tries to <b>${task}</b> at <b>${range}</b> range.`;
});
