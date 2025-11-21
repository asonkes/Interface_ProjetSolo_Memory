/*************************************************************************/
/** Fonction pour pouvoir faire le lien entre les pages et le fichier JSON **************************************************************************/

export async function jsonFunction() {
  try {
        const response=await fetch("/cards.json");
        const data=await response.json();
        return data;
    } catch(error) {
        console.log("Erreur survenur en JSON",error);
    }
}