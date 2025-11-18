/** On va aller initialiser les variables dont on a besoin */
/** On va chercher les icones */
const iconLeft = document.getElementById("iconLeft");
const iconRight = document.getElementById("iconRight");

/** On récupère les images */
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");

let tabSlider = [
  "images/background/dora/background_dora2.avif",
  "images/background/patPatrouille/background_patPatrouille.avif",
  "images/background/dinosaures/background_dino.avif",
];

/** On met numero = 1 car image Patpatrouille commence à 1 (dora avant) */
let numero = 1;

if (iconLeft) {
  iconLeft.addEventListener("click", () => refreshCarousel(-1));
}

if (iconRight) {
  iconRight.addEventListener("click", () => refreshCarousel(1));
}

function refreshCarousel(direction) {
  numero += direction;

  /** Si + petit que 0, image + élevée du tableau s'affiche */
  if (numero < 0) numero = tabSlider.length - 1;

  /** Si + grand que le nombre d'image du tableau, image 0 apprait */
  if (numero > tabSlider.length - 1) numero = 0;

  /** Permet de mettre (numero - 1) dans une variable */
  let previousIndex = numero - 1;
  /** Permet de mettre (numero + 1) dans une variable */
  let nextIndex = numero + 1;

  /** Permet que si previousNext + petit que 0, image + élevée du tableau s'affiche  */
  if (previousIndex < 0) previousIndex = tabSlider.length - 1;

  /** Permet que si nextIndex + grand que nombre d'images du tableau, on affiche l'image avec index 0 */
  if (nextIndex > tabSlider.length - 1) nextIndex = 0;

  img1.src = tabSlider[previousIndex];
  img2.src = tabSlider[numero];
  img3.src = tabSlider[nextIndex];
}
