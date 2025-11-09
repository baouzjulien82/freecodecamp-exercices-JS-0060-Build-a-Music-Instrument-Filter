// Objet principal: équipe de la coupe du monde 1998
let footballTeam = {
  team: "France",
  year: 1998,
  headCoach: "Aimé Jacquet",
  players: [
    {
      name: "Didier Deschamps",
      position: "midfielder",
      isCaptain: true
    },
    {
      name: "Zinedine Zidane",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Fabien Barthez",
      position: "goalkeeper",
      isCaptain: false
    },
    {
      name: "Laurent Blanc",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Marcel Desailly",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Lilian Thuram",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Bixente Lizarazu",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Emmanuel Petit",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Youri Djorkaeff",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Stéphane Guivarc’h",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Thierry Henry",
      position: "forward",
      isCaptain: false
    }
  ]
};

// Définition des variables Team stats
let teamName = document.getElementById('team');
let teamYear = document.getElementById('year');
let headCoach = document.getElementById('head-coach');

// Définition de la variable Filter
let playersFilter = document.getElementById('players');

// Définition des variables player-cards
let playerCards = document.getElementById('player-cards');

// Remplissage des span Team Year et Head coach
teamName.textContent = footballTeam.team;
teamYear.textContent = footballTeam.year;
headCoach.textContent = footballTeam.headCoach;

// Définition du tableau des joueurs
const teamArray = footballTeam.players;

// Fonction de tri des joueur
const playerCardsFct = (playerPosition) => {
  const playersToDisplay = 
  playerPosition === "all"
  ? teamArray
  : teamArray.filter(({position}) => position === playerPosition);
return playersToDisplay.map(({name, position, isCaptain}) => {
  return `<div class="player-card">
  <h2>${isCaptain ? "(Capitaine) " : ""}${name}</h2>
  <p>${position}</p>
</div>`;
}).join("")
};

// Mise en place de l'EventListener sur le select
playersFilter.addEventListener("change", () => {
  playerCards.innerHTML = playerCardsFct(playersFilter.value);
});
