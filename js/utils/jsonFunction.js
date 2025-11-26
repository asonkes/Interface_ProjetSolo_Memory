/*************************************************************************/
/** Fonction pour pouvoir faire le lien entre les pages et le fichier JSON **************************************************************************/

export async function jsonFunction() {
  try {
        const response=await fetch('http://localhost:3000/cards');
        const data=await response.json();
        return data;
    } catch(error) {
        console.log("Erreur survenur en JSON",error);
    }
}