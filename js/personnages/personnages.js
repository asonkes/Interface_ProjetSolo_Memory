import { jsonFunction } from "/js/utils/jsonFunction.js";

/*****************************************************/
/************** Création des personnages *************/
/*****************************************************/

/** On va initialiser les variables que l'on veut */
const persoContainer = document.querySelector(".persoContainer");

async function createPersonnages() {
    const data = await jsonFunction();

    /** Là j'obtiens les infos sur les 18 personnages => tableau */
    let tabPersonnages = data.cards.patPatrouille;

    tabPersonnages.forEach(element => {
        persoWrapper(element)
    })
}

createPersonnages();

/*************************************************************/
/** Fonction qui permet de globaliser la création d'éléments */
/*************************************************************/

function persoWrapper(element) {
    const perso = document.createElement("div");
    /** On ajoute une classe */
    perso.classList.add("perso");

    /** Ici on faire la div pour l'image */
    const block_image = document.createElement("div");
    /** On ajoute une classe */
    block_image.classList.add("block_image");

    /** Ici on faire la div pour le texte */
    const block_text = document.createElement("div");
    /** On ajoute une classe */
    block_text.classList.add("block_text");

    /** Ici on va créer l'image */
    const img = document.createElement("img");
    img.src = element.image;
    console.log(element);

    block_image.appendChild(img);

    perso.append(block_image, block_text);

    persoContainer.appendChild(perso);
}




