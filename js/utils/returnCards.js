/*****************************************************/
/*** Permet de voir si les cartes correspondent ******/
/*****************************************************/
export function returnCards() {
  /** On va initialiser chaque "div" */
  const cardBlock = document.querySelectorAll(".cardBlock"); 
  let firstCard = null;
  console.log(firstCard);
  let secondCard = null;
  console.log(secondCard);

    cardBlock.forEach((element) => {
      element.classList.add("active");

      element.addEventListener("click", () => {
        element.classList.add("returnCard");
        console.log(element.dataset.value);

        if (!firstCard) {
          /** Si aucune carte n'a été cliquée */
          /**On fait un return car 1ere carte seulement */
          /** On peut pas encore comparer */
          firstCard = element;
          return;
        }

        /** Sinon c'ets la 2eme */
        secondCard = element;

        if(firstCard.dataset.value === secondCard.dataset.value) {
          firstCard = null;
          secondCard = null;
        } else {
          /** Si les cartes sont pas les mêmes, on enlève la classe */
          /** Après un délai, ausinon, la 2eme carte ne se retourne pas */
          setTimeout(() => {
              firstCard.classList.remove("returnCard");
              secondCard.classList.remove("returnCard");
              firstCard = null;
              secondCard = null;
          }, 1000);
        }
      })
    });
}