/*****************************************************/
/********** Création du background des cards *********/
/*****************************************************/

export function creationBgCards(cardsFront, idImage) {

    cardsFront.classList.remove("doraBg", "patPatrouilleBg", "dinoBg");

    if(idImage === "img1") {
        cardsFront.classList.add("doraBg");
    }

    if(idImage === "img2") {
        cardsFront.classList.add("patPatrouilleBg");
    }

    if(idImage === "img3") {
        cardsFront.classList.add("dinoBg");
    }
}