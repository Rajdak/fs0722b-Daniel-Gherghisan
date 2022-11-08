/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
function area (l1, l2){
    return l1 * l2;
}

console.log(area(3,4))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
const crazySum = function(n1, n2)
{
    if(n1===n2){
        return (n1+n2)*3;
    }
    else return n1+n2;
}
console.log(crazySum(3,3))



/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
var x = 19;
const crazyDiff = function (a){
   if(a > x){
     return (a - x)*3;
    }
    else
    return (a - x);
}
console.log(crazyDiff(44))


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
const boundary = function (n){
    if( n <= 20 && n >= 100 || n == 100){
        return 'true';
    }   
    else 
    return 'false'
}
console.log(boundary(200))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify  = function (str){
     if( str.startsWith ('EPICODE')){
        return str
        
     }
     else{
     return 'EPICODE' + str
     }
}
console.log (epify('EPICODERS'))



/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

//function check3and7(n){
   
  //  if( (n % 3 == 0 || n % 7 == 0) && n > 0){
    //    console.log("multiplo");
   // }
   // else{
    //    console.log("non è multiplo");
   // }
//}
//check3and7(15);

const check3and7 = function (n){
    if( n >= 0 && (n % 3 === 0 || n % 7 === 0  )){
        return true;
    }
    else{
       return false;
    }
}
console.log(check3and7(21));


   




/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
function reverse (str){
    if (str === "") {
        return "";           //Usato il metodo Ricorsivo
    } 
    else {
        return reverse(str.substr(1)) + str.charAt(0);  // con  substr(1) prendiamo la stringa a partire dalla posizione 1, cioè dam (perchè la p ' alla poszione 1 di epicode) la seconda parte invece prende l'intera stringa dalla posizone 0 (quindi epicode)
                                                        // passiamo dam alla funzione reverse, avendo dam in input. Creiamo una sottostringa di questra stringa usando la funzione substr() creera di nyovo una sottostringa andando cosi fino a quando la stringa sarà vuota, si crea una pila di valori e,d,o,c,i,p,e, una volta la stringa vuota il programam estrarra gli elementi uno ad uno
    }
}
let reverseString = reverse("Epicode")
console.log(reverseString)


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst = function(str){
    upperFirst[0].toUpperCase() + upperFirst.substring(1);
    return frase;
}
stringaz = 'Aria';'Fuoco'; 'Acqua'; 'Terra';
console.log(stringaz)


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/





/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n){
    let array :[]
}
