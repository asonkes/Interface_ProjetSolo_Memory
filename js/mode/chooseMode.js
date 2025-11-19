/** On va initialiser les 3 boutons différents pour le mode du jeu */
/** Tableau facile */
let tabEasy = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
console.log(tabEasy);
/** Tableau medium */
let tabMedium = [
  1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12,
];
/** Tableau difficile */
let tabHard = [
  1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12,
  13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18,
];

/** On sélectionne tous les boutons */
const buttonsMode = document.querySelectorAll(".button_mode");
/** On sélectionne l'élément chooseMode */
const chooseMode = document.querySelector(".chooseMode");
/** On va intiailiser le container */
const cardWrapper = document.querySelector(".card_wrapper");
/** On va initialiser le parent de la liste 'card' */
const card = document.querySelector(".card"); 

/*********************************************/
/*** On rassemble les choses que l'on répète */
/******************************************* */
buttonsMode.forEach(element => {
  element.addEventListener("click", () => {
    /** Ajout de classes pour l'affichage des différentes pop-up */
    chooseMode.classList.add("active");
    cardWrapper.classList.add("active");
    button.classList.add("active");
  })
})

/*********************************************/
/*** Evenements au click sur chaque bouton****/
/*********************************************/

/** Pour le bouton facile */
const buttonEasy = document.getElementById("easy");
/** Pour le bouton moyen */
const buttonMedium = document.getElementById("medium");
/** Pour le bouton difficle */
const buttonHard = document.getElementById("hard");

buttonEasy.addEventListener("click", () => {
  /** On va donc mélanger les éléments */
  let arrayEasy = tabEasy;
  mixCards(arrayEasy);
  console.log(arrayEasy);

  /** Pour chaque élément du tableau */
  arrayEasy.forEach((element) => {
    creationList(element);
  });
}) 

buttonMedium.addEventListener("click", () => {
    /** On va donc mélanger les éléments */
  let arrayMedium = tabMedium;
  mixCards(arrayMedium);
  console.log(arrayMedium);

  /** Pour chaque élément du tableau */
  arrayMedium.forEach((element) => {
    creationList(element);
  });
})

buttonHard.addEventListener("click", () => {
  /** On va donc mélanger les éléments */
  let arrayHard = tabHard;
  mixCards(arrayHard);
  console.log(arrayHard);

  /** Pour chaque élément du tableau */
  arrayHard.forEach((element) => {
    creationList(element);
  });
})

/*********************************/
/** Evenement sur le bouton PLAY */
/*********************************/
/** On récupère le bouton */
const button = document.getElementById("button");

/** Evenement au click sur le bouton 'GO' */
if (button) {
  button.addEventListener("click", () => {
    /** Permet de faire disparaitre le bouton */
    button.classList.remove("active");
    /** On va ajouter le parent */
    const gameCard = document.querySelector(".game_card");
    gameCard.classList.add("active");
    /** On va ajouter une classe sur card */
    card.classList.add("active");

    /** On va initialiser chaque "div" */
    const cardBlock = document.querySelectorAll(".cardBlock");

    /** On va ajouter sur 'cardFront' et 'cardBack', des classes au click */
    const cardFront = document.querySelector(".cardFront");
    const cardBack = document.querySelector(".cardBack");

    cardFront.classList.add("active");
    cardBack.classList.add("active");

    cardBlock.forEach((element) => {
      element.classList.remove("active");
    });
  });
}

/*****************************************************/
/** On va commencer à essayer de créer des fonctions */
/*****************************************************/

/** Fonction pour créer les 'div'  */
function creationList(element) {
  /** On va créer tous les div (le block parent */
  const cardBlock = document.createElement("div");
  /** On ajoute une 1ère classe 'cardFront' */
  cardBlock.classList.add("cardBlock")
  /** On va ajouter une 2eme classe 'active' */
  cardBlock.classList.add("active");

  /** On va créer tous les 'front' des cards */
  const cardFront = document.createElement("div");
  /** On va ajouter une classe au span */
  cardFront.classList.add("cardFront");
  /** On va afficher tous les chiffres */
  cardFront.textContent = `${element}`;

  /** On va créer les 'back' des cards */
  const cardBack = document.createElement("div");
  /** On va lui ajouter une classe */
  cardBack.classList.add("cardBack");

  cardBlock.append(cardFront, cardBack);
  card.append(cardBlock);
}

/** Fonctionnalité pour pouvoir mélanger les éléments du tableau */
function mixCards(array) {
  /** Ici on détermine la longueur du tableau */
  let index = array.length;

  /** Tant qu'on est pas arrivé à l'index '0', on mélange */
  while (index != 0) {
    /** On crée des nombres aléatoires entre 0 et 11 */
    let random = Math.floor(Math.random() * index);
    index--;

    /** On échange les valeurs */
    /** Ex: random[7], index[11], on va chercher valeur dans la 7eme position et la mettre à la 11eme */
    [array[index], array[random]] = [array[random], array[index]];
  }
}
