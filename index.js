// Assigne 0 à ma valeur countdown
let countdown = 0;
// On récupère les 3 bouttons
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let audio = document.getElementById("audio");
console.log(audio);

//  ON LANCE LE COUNDOWN AU CLIQUE
start.onclick = function() {

    //Assigne ma fonction setTime à la valeur countdown
    countdown = setTime();

    // notre cercle va avoir une animation qui durera le temps que l'on a rentrer.
    circle.style.animation = countdown + "s anim linear 1 forwards reverse";
    // On créer notre variable de setInterval qui va permettre de répété la fonction timerConvert toute les secondes 
    timer = setInterval(timerConvert, 1000);
    // Style des boutons pour afficher uniquement ceux que je veux
    start.style.display = "none";
    stop.style.display = "block";
    reset.style.display = "block";


}

// Stop le countdown au clique 
stop.onclick = function() {
    // On clear l'interval de notre timer
    clearInterval(timer);
    // On met notre animation en 'pause' en même temps que notre timer
    circle.style.animationPlayState = "paused";
    // Style des boutons pour afficher uniquement ceux que je veux
    start.style.display = "block";
    stop.style.display = "none";
}

// Reset du countdown au clique
reset.onclick = function() {
    // On appelle la fonction clear Timer qui réinitialise le timer
    clearTimer();
    // On re-associe une value vide à chacun des inputs pour pouvoir re-définir un nombre
    document.getElementById("formulaire").elements["hours"].value = "";
    document.getElementById("formulaire").elements["minutes"].value = "";
    document.getElementById("formulaire").elements["seconds"].value = "";
}

// Fonction qui va reinitialiser notre timer
function clearTimer() {
    // On clear l'interval de notre timer
    clearInterval(timer);
    // On remet l'animation à 0
    circle.style.animation = "none";
    // Style des boutons pour afficher uniquement ceux que je veux
    start.style.display = "block";
    stop.style.display = "none";
    reset.style.display = "none";
}

// Fonction qui va convertir le temps en seconde et l'afficher
function timerConvert() {
    // variable countdown en décrémentation
    countdown--;
    // Formule mathématique pour convertir les H, M & S.
    let h = Math.floor((countdown % (1 * 60 * 60 * 24)) / (1 * 60 * 60));
    let m = Math.floor((countdown % (1 * 60 * 60)) / (1 * 60));
    let s = Math.floor((countdown % (1 * 60)) / 1);

    // Si les H, M & S ne sont pas des nombres OU inférieur à 0, alors on les set à 0 automatiquement
    if (isNaN(h) || h < 0) {
        h = 0;
    }
    if (isNaN(m) || m < 0) {
        m = 0;
    }
    if (isNaN(s) || s < 0) {
        s = 0;
    }

    // Affichage des H, M & S dans les inputs correspondant
    document.getElementById("formulaire").elements["hours"].value = h;
    document.getElementById("formulaire").elements["minutes"].value = m;
    document.getElementById("formulaire").elements["seconds"].value = s;

    console.log(h)
        // Si le countdown est inférieur ou égale à 0, alors on clear le timer. 
    if (countdown <= 0) {
        clearTimer();
        audio.play();
    }
}

//  Programme le temps.
function setTime() {
    // On récupere le temps rentré dans les inputs et les stockes dans une variable
    let hours = parseInt(document.forms["setTime"].elements["hours"].value)
    let minutes = parseInt(document.forms["setTime"].elements["minutes"].value)
    let seconds = parseInt(document.forms["setTime"].elements["seconds"].value)

    // Si les H, M & S ne sont pas des nombres OU inférieur à 0, alors on les set à 0 automatiquement
    if (isNaN(hours) || hours < 0) {
        hours = 0;
    }
    if (isNaN(minutes) || minutes < 0) {
        minutes = 0;
    }
    if (isNaN(seconds) || seconds < 0) {
        seconds = 0;
    }


    // On retourne le résultats de l'addition de l'ensemble des variables pour que le tout sois en secondes
    return ((hours * 3600) + (minutes * 60) + (seconds) * 1);
}