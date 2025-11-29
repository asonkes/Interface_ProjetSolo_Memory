/*****************************************************/
/************** Permet d'intégrer les sons ***********/
/*****************************************************/

export function playSound(file) {
    const audio = new Audio(file);
    audio.volume = 0.8;
    audio.play();
}