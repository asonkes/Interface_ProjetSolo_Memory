import { initBurger } from "./partials/icon_burger.js";

/************************************************************************************/
/** Fonction pour que le header et le footer puisse se répéter sur toutes les pages */
/************************************************************************************/

// Permet de pouvoir faire des import/include de fichiers "html"
function loadHTML(selector, url, callback) {
  // Fait une requête HTTP "GET" vers "url"
  fetch(url)
    // Transform la réponse en texte (ici du html)
    .then((response) => response.text())
    .then((data) => {
      const sections = document.querySelectorAll(selector);

      sections.forEach((section) => {
        section.innerHTML = data;

        // Permet d'appeler une fonction après insertion du HTML
        if (callback) callback();
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  loadHTML("header", "/include/partials/header.html", initBurger);
  loadHTML("footer", "/include/partials/footer.html");
});

/*************************************************************************/
/** Fonction pour pouvoir faire le lien entre les pages et le fichier JSON **************************************************************************/
/** Le bouton */
const button1 = document.getElementById("button");

if(button1) {
  button1.addEventListener("click", () => {
  localStorage.setItem("text", "bonjour");

  /** On va chercher pour les cards  */
  const back = document.querySelectorAll(".cardBack");
  console.log(back);

  let textCard = localStorage.getItem("text");
  console.log(textCard);

  if(back) {
    back.forEach(element => {
      element.textContent = `${textCard}`
    })
  }
 })
}


function rechercheFetch() {
  fetch(`cards.json`)
    .then((response) => {
      console.log(response);
    })

    .catch((error) => {
      console.log(error);
    })
}

