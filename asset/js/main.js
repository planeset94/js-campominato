// // BONUS 
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50



var livello = Number(prompt('Scegli il tuo livello, inserendo un numero da 0 a 2'));
console.log('Il tuo livello è ' + livello);
var limiteMassimo;
var possibilita;
switch (livello) {
    case 0:
        limiteMassimo = 100;

        break;
    case 1:
        limiteMassimo = 80;
        break;

    case 2:
        limiteMassimo = 50;

        break;

}

possibilita = limiteMassimo - 16;





// 1) Il computer deve generare 16 numeri casuali tra 1 e 100.
// 2) I numeri non possono essere duplicati.

// Creo una funzione random 
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var bombe = [];

while (bombe.length < 16) {
    var computer = randomNumber(1, limiteMassimo);
    if (!bombe.includes(computer)) {
        bombe.push(computer);

    }
}
console.log(bombe);

// 3) In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// 4) L’utente non può inserire più volte lo stesso numero.

var punteggio = 0;
var list = [];

do {

    var valore = prompt("Enter a number between 0 to 100. To end the game, digit 'STOP'");
    var userNumber = Number(valore);

    // INTRODUCO UNO STOP PER FAR USCIRE L'UTENDE DAL GIOCO 
    if (valore == "STOP") {
        confirm('Sei sicuro di uscire dal gioco?');
        if (confirm) {
            break
        }
    }


    // 5) Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
    // 6) La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
    if (userNumber < 1 || userNumber > 100 || isNaN(userNumber)) {
        alert('inserisci un valore consentito');
    } else if (bombe.includes(userNumber)) {
        alert('hai beccato una bomba, hai perso. Il tuo punteggio è  ' + punteggio);


    } else if (list.includes(userNumber)) {
        alert('Do not duplicate values');
    } else {
        list.push(userNumber);
        punteggio += +1;
    }

    // i++;
} while (list.length < possibilita && !bombe.includes(userNumber));
console.log(list);
console.log(punteggio);



if (list.length == possibilita) {
    alert('hai vinto!');

}


