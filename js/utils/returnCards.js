/*****************************************************/
/*** Permet de voir si les cartes correspondent ******/
/*****************************************************/
export function returnCards() {
  const cardBlock = document.querySelectorAll(".cardBlock");

  /** Pour la 1ere card */
  let firstCard = null;
  /** Pour la 2eme card */
  let secondCard = null;
  /** Déclaré à false, donc si true fonction flipCard ne se fera pas */
  let lockGame = false;
  /** On met le nombre de partie a 0 par défaut */
  let isWin = 0;
  /**  On déclare si carte trouvé */
  let isCardValid = 0;
  /** On va définir le thème */
  let theme = localStorage.getItem("backgroundId"); 
  console.log(theme);
  /** Récupération du score de Dora */
  let scoreDora = localStorage.getItem("scoreDora") 
  /** Récupération du score de patPatrouille */
  let scorePatPatrouille = localStorage.getItem("scorePatrouille");
  /** Récupération du score de Dino */
  let scoreDino = localStorage.getItem("scoreDino");  

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
      isCardValid++;
      console.log("Nombre de cartes trouvées", isCardValid);

      if(isCardValid === ((cardBlock.length) / 2)) {

        if(theme === "img1") {
          console.log("j'ai cliqué sur dora");

          isWin++;
          console.log("Nombre de parties gagnées :", isWin);

          if(scoreDora) {
            scoreDora = localStorage.getItem("scoreDora") + isWin++;
          }
          
          scoreDora = localStorage.setItem("scoreDora", isWin);
        }

        if(theme === "img2") {
          console.log("j'ai cliqué sur PatPatrouille");

          isWin++;
          console.log("Nombre de parties gagnées :", isWin);

          if(scorePatPatrouille) {
            scorePatPatrouille = localStorage.getItem("scorePatrouille") + isWin++;
          }
          
          scorePatPatrouille = localStorage.setItem("scorePatrouille", isWin);
        }

        if(theme === "img3") {
          console.log("j'ai cliqué sur Dino");

          isWin++;
          console.log("Nombre de parties gagnées :", isWin);

          if(scoreDino) {
            scoreDino = localStorage.getItem("scoreDino") + isWin++;
          }
          
          scoreDino = localStorage.setItem("scoreDino", isWin);
        }

        /** On récupère le bouton pour rejouer pour le faire apparaitre */
        const buttonParent = document.querySelector(".buttonParent");
        buttonParent.classList.add("active");
      }

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

  cardBlock.forEach(card => {
    card.classList.add("active");
    card.addEventListener("click", () => flipCard(card));
  });

  function resetCards() {
    firstCard = null;
    secondCard = null;
    lockGame = false;
  }
}



