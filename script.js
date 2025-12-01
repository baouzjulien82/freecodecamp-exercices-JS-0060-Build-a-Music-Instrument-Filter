// Tableau d'objets représentant des instruments de musique.
// Chaque objet contient : une catégorie, un nom d'instrument et un prix.
const instrumentsArr = [
  { category: "woodwinds", instrument: "Flute", price: 500 },
  { category: "woodwinds", instrument: "Clarinet", price: 200 },
  { category: "woodwinds", instrument: "Oboe", price: 4000 },
  { category: "brass", instrument: "Trumpet", price: 200 },
  { category: "brass", instrument: "Trombone", price: 300 },
  { category: "brass", instrument: "French Horn", price: 4300 },
  { category: "percussion", instrument: "Drum Set", price: 500 },
  { category: "percussion", instrument: "Xylophone", price: 3000 },
  { category: "percussion", instrument: "Cymbals", price: 200 },
  { category: "percussion", instrument: "Marimba", price: 3000 }
];

// Sélection des éléments du DOM :
// - le menu déroulant <select>
// - le conteneur où seront affichés les cartes produits
const selectContainer = document.querySelector("select");
const productsContainer = document.querySelector(".products-container");

// Fonction qui génère les cartes HTML des instruments selon une catégorie choisie
function instrumentCards(instrumentCategory) {
  // Si la catégorie est "all", on prend tout le tableau
  // Sinon, on filtre les instruments par leur catégorie
  const instruments =
    instrumentCategory === "all"
      ? instrumentsArr
      : instrumentsArr.filter(
          ({ category }) => category === instrumentCategory 
          // Ici, ({ category }) est une déstructuration :
          // on extrait directement la propriété "category" de chaque objet
        );

  // On transforme chaque instrument en une carte HTML
  return instruments
    .map(({ instrument, price }) => { 
      // Déstructuration encore une fois : on récupère directement instrument et price
      return `
          <div class="card">
            <h2>${instrument}</h2>
            <p>$${price}</p>
          </div>
        `;
    })
    .join(""); // On joint toutes les cartes en une seule chaîne (sinon on aurait des virgules)
}

// Ajout d'un écouteur d'événement sur le menu déroulant
// À chaque changement de valeur, on régénère les cartes
// et on les insère dans le conteneur .products-container
selectContainer.addEventListener("change", () => {
  productsContainer.innerHTML = instrumentCards(selectContainer.value);
});
