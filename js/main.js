const group = [
  "The Yellow Mothman",
  "The Second Master",
  "The Lonely Waspman",
  "The Upset Antman",
  "Commander Alien Hammer",
  "Agent Hungry Gladiator",
  "Terrible Marksman",
  "Blue Spectacle",
  "Mas Terr",
  "Crazy Coyote",
  "The Nifty Raven",
  "The Fluffy Sniper",
  "The Accidental Bandit",
  "The Dirty Mastermind",
  "Defiant Comic",
  "Lucky Dragonfly",
  "Unknown Agent",
  "Agent Needy Cricket",
  "Sly",
  "Aquila",
  "The Dazzling Dragonfly",
  "The Scarlet General"
];

// DOM elements
const rand = document.getElementById("btn-random");
const all = document.getElementById("btn-all");
const container = document.getElementById("display");

// listen to click event on get random button
rand.addEventListener("click", () => {
  container.innerHTML = `<p>${
    group[Math.round(Math.random() * group.length)]
  }</p>`;
  container.style.display = "block";
});

// listen to click event on get all button
all.addEventListener("click", () => {
  container.innerHTML = "";
  group.map(element => {
    container.innerHTML += `<p>${element}</p>`;
  });
  container.style.display = "block";
});
