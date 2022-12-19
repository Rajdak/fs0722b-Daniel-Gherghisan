var num1 = 0;
var num2 = 0;
var randomNum = 0;
var num1 = Math.floor(Math.random() * 100);
var num2 = Math.floor(Math.random() * 100);
var randomNum = Math.floor(Math.random() * 100);
console.log("il giocatore numero 1 ha estratto il numero: " + num1);
console.log("il giocatore numero 2 ha estratto il numero: " + num2);
console.log("il numero estratto di oggi è: " + randomNum);
if (num1 == randomNum) {
    console.log("il giocatore 1 ha indovinato il numero");
}
else if (num2 == randomNum) {
    console.log("il giocatore 2 ha indovinato il numero");
}
else {
    console.log("nessuno dei 2 giocatori hanno indovinato i numeri di oggi");
    var diff1 = Math.abs(randomNum - num1);
    var diff2 = Math.abs(randomNum - num2);
    if (diff1 < diff2) {
        console.log("però il giocatore 1 si è avvicinato di più al numero");
    }
    else {
        console.log("però il giocatore 2 si è avvicinato di più al numero");
    }
}
