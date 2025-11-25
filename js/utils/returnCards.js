/*****************************************************/
/*** Permet de voir si les cartes correspondent ******/
/*****************************************************/
export function returnCards() {
  const cards = document.querySelectorAll(".cardBlock");

  /** Pour la 1ere card */
  let firstCard = null;
  /** Pour la 2eme card */
  let secondCard = null;
  /** déclaré à false, donc si true fonction flipCard ne se fera pas */
  let lockGame = false;

  function flipCard(element) {
    /** lockBoard return, on sort du jeu */
    if (lockGame) return;

    /** si on reclique sur firstCard, on sort de flipCard */
    if (element === firstCard) return;
    /** On ajoute la classe pour le flip */
    element.classList.add("returnCard");

    /** Si la carte n'est pas la 1ere */
    if (!firstCard) {
      firstCard = element;
      return;
    }

    /** Pour avoir la 2eme card */
    secondCard = element;

    /** On bloque les clics */
    lockGame = true;

    if (firstCard.dataset.value === secondCard.dataset.value) {
      resetCards();
    } else {
      /** timeout permet de pouvoir voir la 2eme carte après le clic,
       * Au sinon classe est remove direct
       */
      setTimeout(() => {
        firstCard.classList.remove("returnCard");
        secondCard.classList.remove("returnCard");

        resetCards();
      }, 1000);
    }
  }

  cards.forEach(card => {
    card.classList.add("active");
    card.addEventListener("click", () => flipCard(card));
  });

  function resetCards() {
    firstCard = null;
    secondCard = null;
    lockGame = false;
  }
}
