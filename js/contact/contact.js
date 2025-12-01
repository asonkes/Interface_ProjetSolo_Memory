/*****************************************************/
/***** Permet de contrôler les input required  *******/
/*****************************************************/

function contact() {
  /** Récupérer les variables dont on a besoin */
  const form = document.getElementById("form");
  let input_name = document.getElementById("name");
  let input_lastName = document.getElementById("lastname");
  let input_email = document.getElementById("email");
  let input_password = document.getElementById("password");
  let textarea_message = document.getElementById("message");

  /** On va vider les input d'abord */
  let isValid = true;

  /** Quand */
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!input_name.value === "") {
      let errorName = document.querySelector(".errorName");
      errorName.remove();
    }

    /** Ici on va vérifier si les champs sont vides et ajouter le message d'erreur */
    if (input_name.value === "") {
      isValid === false;

      let errorName = document.querySelector(".errorName");

      if (!errorName) {
        errorName = document.createElement("span");
        errorName.classList.add("error", "errorName");
        errorName.textContent = `Votre nom est manquant !`;
        input_name.insertAdjacentElement("beforebegin", errorName);
      }
    }

    if (input_lastName.value === "") {
      isValid = false;

      let errorLastname = document.querySelector(".errorLastname");

      if (!errorLastname) {
        errorLastname = document.createElement("span");
        errorLastname.classList.add("error", "errorLastname");
        errorLastname.textContent = `Votre prénom est manquant !`;
        input_lastName.insertAdjacentElement("beforebegin", errorLastname);
      }
    }

    if (input_email.value === "") {
      isValid = false;

      let errorEmail = document.querySelector(".errorEmail");
      if (!errorEmail) {
        errorEmail = document.createElement("span");
        errorEmail.classList.add("error", "errorEmail");
        errorEmail.textContent = `E-mail non valide !`;
        input_email.insertAdjacentElement("beforebegin", errorEmail);
      }
    }

    if (input_password.value === "") {
      isValid = false;

      let errorPassword = document.querySelector(".errorPassword");
      if (!errorPassword) {
        errorPassword = document.createElement("span");
        errorPassword.classList.add("error", "errorPassword");
        errorPassword.textContent = `Votre mot de passe est manquant !`;
        input_password.insertAdjacentElement("beforebegin", errorPassword);
      }
    }

    if (textarea_message.value === "") {
      let errorMessage = document.querySelector(".errorMessage");
      if (!errorMessage) {
        isValid = false;

        errorMessage = document.createElement("span");
        errorMessage.classList.add("error", "errorMessage");
        errorMessage.textContent = `Votre message est manquant !`;
        textarea_message.insertAdjacentElement("beforebegin", errorMessage);
      }
    }

    /** Définir la longueur pour le textarea */
    let errorTextarea = document.querySelector(".errorTextarea");
    if (errorTextarea) {
      if (textarea_message.value.length > 255) {
        let errorTextarea = document.querySelector(".errorTextarea");
        if (!errorTextarea) {
          isValid = false;

          errorTextarea = document.createElement("span");
          errorTextarea.classList.add("error", "errorTextarea");
          errorTextarea.textContent = `Votre message ne peut dépasser 255 caractères.`;
          errorTextarea.insertAdjacentElement("beforebegin", errorTextarea);
        }
      }
    }

    /** Si tout est valide, on envoie les données */
    if (isValid) {
      //form.submit();
      console.log(input_name.value);
      console.log(input_lastName.value);
      console.log(input_email.value);
      console.log(input_password.value);
      console.log(textarea_message.value);
    }
  });
}

contact();
