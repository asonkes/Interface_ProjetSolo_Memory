/** On va inititialiser les variables du DOM */

/** On va initialiser les 3 boutons différents pour le mode du jeu */
const chooseMode = document.querySelector(".chooseMode");
const buttonEasy = document.getElementById("easy");
const buttonMedium = document.getElementById("medium");
const buttonHard = document.getElementById("hard");

/** On va intiailiser le container */
const container = document.querySelector(".container");

/** On va initialiser le parent de la liste 'ul' */
const ul = document.querySelector("ul");

/** On va initialiser le bouton*/
const button = document.getElementById("button");

/** On va initialiser le type de tableau pour le mode facile */
let tabEasy = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
console.log(tabEasy);

/** On va initialiser le type de tableau pour le mode medium */
let tabMedium = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12];

/** On va initialiser le type de tableau pour le mode difficile */
let tabHard = [
  1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12,
  13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18
];

/** Evenement au click sur le bouton 'EASY' */
buttonEasy.addEventListener("click", () => {
    /** Ajout de classes pour l'affichage des différentes pop-up */
    chooseMode.classList.add("active");
    container.classList.add("active");
    button.classList.add("active");

    /** On va donc mélanger les éléments */
    let arrayEasy = tabEasy;
    mixCards(arrayEasy);
    console.log(arrayEasy);

    /** Pour chaque élément du tableau */
    arrayEasy.forEach((element) => {
        creationList(element);
    });
});

/** Evenement au click sur le bouton 'MEDIUM' */
buttonMedium.addEventListener("click", () => {
    /** Ajout de classes pour l'affichage des différentes pop-up */
    chooseMode.classList.add("active");
    container.classList.add("active");
    button.classList.add("active");

    /** On va donc mélanger les éléments */
    let arrayMedium = tabMedium;
    mixCards(arrayMedium);
    console.log(arrayMedium);

    /** Pour chaque élément du tableau */
    arrayMedium.forEach((element) => {
        creationList(element);
    });
});

/** Evenement au click sur le bouton 'HARD' */
buttonHard.addEventListener("click", () => {
    /** Ajout de classes pour l'affichage des différentes pop-up */
    chooseMode.classList.add("active");
    container.classList.add("active");
    button.classList.add("active");

  /** On va donc mélanger les éléments */
  let arrayHard = tabHard;
  mixCards(arrayHard);
  console.log(arrayHard);

  /** Pour chaque élément du tableau */
  arrayHard.forEach((element) => {
    creationList(element);
  });
});

/** Evenement au click sur le bouton 'GO' */
button.addEventListener("click", () => {
    console.log("j'ai cliqué sur bouton");
    /** Ajout de classes pour l'affichage des différentes pop-up */
    button.classList.remove("active");

    /** On va initialiser chaque "li" */
    const li = document.querySelectorAll(".container ul li");

    li.forEach(element => {
        element.classList.remove("active");
    })
})

/*****************************************************/
/** On va commencer à essayer de créer des fonctions */
/*****************************************************/

/** Fonction pour créer les 'li'  */
function creationList(element) {
  /** On va créer tous les li */
  const li = document.createElement("li");
  /** On va ajouter une classe */
  li.classList.add("active");
  /** On va créer tous les spans */
  const span = document.createElement("span");
  /** On va afficher tous les chiffres */
  span.textContent = `${element}`;
  li.append(span);
  ul.append(li);
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
