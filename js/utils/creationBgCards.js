import { jsonFunction } from "/js/utils/jsonFunction.js";

/*****************************************************/
/********** Création du background des cards *********/
/*****************************************************/
/** Ici c'est pour le recto */
export function creationBgCards(cardsFront, idImage) {

    if(idImage === "img1") {
        /** On s'occupe du 'front' des cards */
        cardsFront.src = "/images/cards/dora/recto.avif";
        cardsFront.alt = "Recto de la carte du thème Dora.";
    }

    if(idImage === "img2") {
        /** On s'occupe du 'front' des cards */
        cardsFront.src = "/images/cards/patPatrouille/recto.png";
        cardsFront.alt = "Recto de la carte du thème Pat patrouille."
    }

    if(idImage === "img3") {
        /** On s'occupe du 'front' des cards */
        cardsFront.src = "/images/cards/dinosaures/recto.png";
        cardsFront.alt= "Recto de la carte du thème Dinosaures.";
    }
}

export async function creationBackCards(idImage) {
    const data = await jsonFunction(); 

    let tab;
    let alt;

    if(idImage === "img1") {
        /** On s'occupe du 'back' des cards */
        tab = data.cards.dora.map(card => card.image);
        alt = data.cards.dora.map(card => card.alt);
    }

    if(idImage === "img2") {
        /** On s'occupe du 'back' des cards */
        tab = data.cards.patPatrouille.map(card => card.image);
        alt = data.cards.patPatrouille.map(card => card.alt);
    }

    if(idImage === "img3") {
        /** On s'occupe du 'back' des cards */
        tab = data.cards.dino.map(card => card.image);
        alt = data.cards.dino.map(card => card.alt);
    }

    /** Obligé de faire ça, quand on veut retourner 2 valeurs en JS */
    return { tab, alt };
}


