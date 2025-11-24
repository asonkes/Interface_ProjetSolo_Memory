import { jsonFunction } from "/js/utils/jsonFunction.js";

/*****************************************************/
/********** Création du background des cards *********/
/*****************************************************/
/** Ici c'est pour le recto */
export function creationBgCards(cardsFront, idImage) {

    if(idImage === "img1") {
        cardsFront.src = "/images/cards/dora/recto.avif";
        cardsFront.alt = "Recto de la carte du thème Dora.";
    }

    if(idImage === "img2") {
        cardsFront.src = "/images/cards/patPatrouille/recto.png";
        cardsFront.alt = "Recto de la carte du thème Pat patrouille."
    }

    if(idImage === "img3") {
        cardsFront.src = "/images/cards/dinosaures/recto.png";
        cardsFront.alt= "Recto de la carte du thème Dinosaures.";
    }
}

export async function creationBackCards () {
    const data = await jsonFunction();
    
    /** Ici pour le verso */
    const tabImages = data.cards.dora.image;
    console.log(tabImages);
}

creationBackCards();

