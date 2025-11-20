/** On va initialiser les variables */

/** Différentes images du slider */ 
const imagesSlider = document.querySelectorAll(".slider_image");

/** Injection de différentes classes pour afficher thème choisit */
const gameImage = document.querySelector(".game_image");

if(imagesSlider) {
    imagesSlider.forEach(element => {
    element.addEventListener("click", () => {
        if(element.id) {
            localStorage.setItem("imageId", element.id);
        }
        })
    })
}

let idImage = localStorage.getItem("imageId");

if(idImage && gameImage) {
    // Et ici on ajoute l'id
    gameImage.dataset.id = idImage;
    console.log(gameImage.dataset.id);
}

/******************************************** */
/***** Suppression et modifications texte *****/
/******************************************** */
/** On va ici changer le texte au click */

/** On récupère les boutons du choix de mode */
const buttons = document.querySelectorAll(".button_mode");

/** On reprend le h1 */
const title = document.getElementById("title");

/** On change le texte */
buttons.forEach(element => {
    element.addEventListener("click", () => {
        title.textContent = `Appuie sur le bouton pour jouer.`;
    })
})