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
  <h2>${name}</h2>
  <p>${position}</p>
  ${isCaptain ? "<p>(Captitaine)</p>" : ""}
</div>`;
}).join("");
};

// Mise en place de l'EventListener sur le select
playersFilter.addEventListener("change", () => {
  playerCards.innerHTML = playerCardsFct(playersFilter.value);
});

// Remplissage des cards au complet avant toute selection
playerCards.innerHTML = playerCardsFct("all");

// Version corrigée : 
/* 
// Objet principal
const footballTeam = {
  team: "France",
  year: 1998,
  headCoach: "Aimé Jacquet",
  players: [
    { name: "Didier Deschamps", position: "midfielder", isCaptain: true },
    { name: "Zinedine Zidane", position: "midfielder", isCaptain: false },
    { name: "Fabien Barthez", position: "goalkeeper", isCaptain: false },
    { name: "Laurent Blanc", position: "defender", isCaptain: false },
    { name: "Thierry Henry", position: "forward", isCaptain: false }
  ]
};

// Affichage des infos générales
document.getElementById("team").textContent = footballTeam.team;
document.getElementById("year").textContent = footballTeam.year;
document.getElementById("head-coach").textContent = footballTeam.headCoach;

// Fonction d'affichage des cartes
function displayPlayers(position) {
  const container = document.getElementById("player-cards");
  container.innerHTML = "";

  const filteredPlayers =
    position === "all"
      ? footballTeam.players
      : footballTeam.players.filter(p => p.position === position);

  filteredPlayers.forEach(player => {
    const card = document.createElement("div");
    card.className = "player-card";

    const name = document.createElement("h2");
    name.textContent = player.isCaptain ? `(Captain) ${player.name}` : player.name;

    const pos = document.createElement("p");
    pos.textContent = `Position: ${player.position}`;

    card.appendChild(name);
    card.appendChild(pos);
    container.appendChild(card);
  });
}

// Initialisation
document.getElementById("players").addEventListener("change", e => {
  displayPlayers(e.target.value);
});

displayPlayers("all");
*/
