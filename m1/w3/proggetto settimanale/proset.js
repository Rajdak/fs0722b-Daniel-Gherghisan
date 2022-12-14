const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficolt?? puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non ?? stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

var a = 10;
var b = 20;         //dichiaro le variabili che poi andremo a sommare a una variabile chiamata Sum
var sum = a + b;     //dichiariamo la variabile con la somma 
console.log(sum);   //console log per mostrare il risultato


/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

var random = function (){       //dichiaro una funzione per scrivere poi dentro un ciclo
    var random = [];            //dichiaro una variabile random
    let numberRandom = Math.ceil(Math.random() * 20);  //con il metodo Math applicato ad una variabile li applichiamo il .random *20 per generare il numero
    random.push(numberRandom)   //diamo il push della variabile alla function
    return random;      //facciamo il return di random
}
console.log(random())   //consolelog per vedere il risultato



/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti propriet??: name = il tuo nome, surname = il tuo cognome, age = la tua et??.
*/

var me = {              //creo la variabile e li applico le propriet??
    name: "Daniel",
    lastname: "Gherghisan",
    age: "24",
} 
console.log(me)
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la propriet?? "age" dall'oggetto precedentemente creato.
*/

delete me.age;      //applichiamo il metodo delete per elimiare un determinato elemento, in questo caso Age
console.log(me)

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

var skills = [];                //genero un array vuoto skills e poi lo vado a riempire con il valore
me.skills = skills;     //aggiungiamo l'array skills a "me"


/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

skills.push('Gamer');       //usando il metodo push li andiamo a inserire Gamer nel array vuoto creato prima
console.log(me)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

var ultimo = skills.pop();      //usando pop eliminiamo l'ultimo elemento di un array
console.log(skills) 

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice(){            //crramo la function dice e li definiamo un array vuoto che riempiremo
    let casuale = [];
    
        let numberToAdd = Math.ceil(Math.random() * 6)      //dichiariamo un variabile dove aplicheremo un Math.ceil e un Math. random (uno per creare un numero casuale e l'altro per restituire uin numero intero)
        casuale.push(numberToAdd)      //pushamo la variabile numberToadd nell'array
        
 
    return casuale;     //facciamo un return
}
console.log(dice())

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whoIsBigger(a,b){  //applichiamo due parametri alla funzione
    if(a>b){        //con un if else mettiamo come condizione a>b
        return(a)
    }
    else{
        return(b)
    }
}
console.log(whoIsBigger(19,20)) //nel consolelog diamo due valori ai parametri della funzione per poi far si che if else possano dare in output il risultato

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(str){
    
    let split = str.split(' ');     //con la varaibile split indichiamo la parte da cancellare dalla stringa e ridarr?? in output gli elementi tra gli spazi, quindi in questo caso le parole della frase   
    return split;
    }

    console.log(splitMe('I love coding'));


/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano ?? true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne (c, boolean){                //dichiariamo una function con i parametri c e boolean

    if( boolean ){
        return c.slice(1);            //con un if mettiamo la condizione che se il boolean ?? true allora uscir?? un determinato risultato, se la condizione non verr?? rispettata allora si avver?? l'else
       
    }
    else{
        return c.slice(0, -1);     //abbiamo utilizzato il metodo slice       
    }
    
}

console.log(deleteOne('epicode', true))

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters (){

    let onlyLet = 'i have 4 dogs and 3 cats';
    let numeric = onlyLet.replace (/[0-9]/g,'');        //con il metodo replace indichiamo che tra le parentesi andremo a prendere i numeri da 0 a 9 e li cancelleremo dalla stringa
    return numeric;                                     //tornmiamo i valori di numeric
    
}
    console.log(onlyLetters())



/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa ?? un valido indirizzo email.
*/

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt (){

    var day = new Date();       //usiamo il metodo new Date per farci attaccare alla data del browser, cosi usl programma uscir?? la data legata alla time zone
    var thisDay = day.getDay();  //dar?? il giorno contato da 1 a 7 in base alla settimana, oggi venerd?? uscir?? 5
    return thisDay;
}

console.log(whatDayIsIt())
   


/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una propriet?? "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una propriet?? "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays (i, f){

    let data1 = new Date(i);        //dichiariamo 2 variabili
    let data2 = new Date(f);
    let oneDay = 1000*60*60*24;             //calcoliamo in millisecondi
    let diff = data1.getTime() - data2.getTime();
    let diffDays = Math.round(diff / oneDay)    //dividiamo per il oneDay perche cosi il tempo ci uscirebbe in millisecondi, e noi lo mettiamo in giorni
    return diffDays;    
}
console.log(howManyDays("11/11/2022", "11/6/2022"));  // uscir?? un valore di giorni tra il 11 di novembre e il 6 di novembre


/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi ?? il tuo compleanno, falso negli altri casi.
*/



// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi ?? definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la propriet?? chiamata come la stringa passata come secondo parametro.
*/



  function deleteProp(ogj, str) {   //dichiariamo al funzione con i parametri dati
    delete ogj[str]     //diamo il delete al contenuto dell parametro oggetto che ha come contenuto il parametro str  
    return ogj;   //fa il return di obj
  }
  let me11 = {      
    'name': 'Daniel',
    'surname': 'Gherghisan',
    'age': 24
  };

   console.log(deleteProp(me11, 'age'));     //andiamo  cancellare age da me11




/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film pi?? recente nell'array "movies" fornito.
*/


function newestMovie(film) {
  let piuRecente = 0;
  let ind = 0;      //dichiariamo due variabili con valori 0, perch?? ci servitanno nel ciclo for of
  for (let i of film) {   //usiamo il ciclo for of 
    if (i.Year > piuRecente) {    //usiamo un if dove andremo a indicare che per ogni valore di anno (che grazie al ciclo si ripete i volte) se ?? minore della variabile piuRecente (0)
      piuRecente = i.Year;  //andr?? a dire che allora quello ?? il film piu recente 
      ind = film.indexOf(i) //andr?? quindi mettere in ind il primo valore (che in questo caso sar?? il minore) dell'array generato dal ciclo
    }
  }
  return film[ind];
}

console.log(newestMovie(movies))


/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies(arr){
  let cont = 0;       //facciamo una variabl cont per andarla a incrementare 
  for( let i of arr){   //usiamo un for of perch?? vogliamo creare un loop per tutti gli elementi citati (type)
    if( i.Type == "movie"){   //andiamo a richiamare il type dei film
      cont++    //incrementiamo il cont 
    }
  }
  return cont;
}
console.log("Ci sono N: " + countMovies(movies) + " film")

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/


  function onlyTheYears(film) {   //funzione con parametro
    let anniFilm = []   //array vuoto
    for (let i of film) {   //usiamo un ciclo for of per andare a creare dei valori che andremo a mettere nell'array anniFilm
      anniFilm.push(i.Year);  //andiamo a riempire l'array dichiarato prima con tutti gli anni dei film 
    }
    return anniFilm;
  }
  console.log(onlyTheYears(movies))



/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/


function onlyInLastMillennium(film) {   //solita funzione con parametro
  let filmMillennium = [];    //solito array vuoto da riempire con il ciclo for of
  for (let i of film) {
    if (i.Year < 2000) {    //usiamo un if dove andremo a specificare che se i ?? minore degli anni 2000 (indicando il millenio scorso)
      filmMillennium.push(i)    //pusahmo quindi nell'array vuoto i valori di (i) dei film prodotti negli anni 2000 e prima
    }
  }
  return filmMillennium;
}

console.log(onlyInLastMillennium(movies))


/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sommaAnni(arr){
  let sum = 0;    //dichiariamo una variabile sum a 0
  for( let i of arr){   //facciamo un ciclo for of per ogni arr
    sum += Number(i.Year);   //creamo un sum dove prender?? la somma degli anni (year)
  }
  return sum;   //torniamo sum con il valore dato dal ciclo
}
console.log(sommaAnni(movies) + ' ' + 'ore di film')

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

{
  function selecrContainer() {
    let container = document.getElementById('container');   //con il getElementById andiamo a prendere il valore di un elemento che ?? rappresentato dall'id, in questo caso container
    return container;
  }

  console.log(selecrContainer());
}

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

{
  function selecrTd() {
    let td = document.getElementsByTagName('td'); //come il getElementById, questo metodo va a prendere il valore dell'elemento rappresentato da td, che non ' un id ma un tag, e quindi andr?? a prendere tutti gli eleemnti di quel tag
    return td;
  }

  console.log(selecrTd());
}

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

{
  function consolTdText() {
    let td = document.getElementsByTagName('td');   //richiamiamo gli elementi di td 
    for (let i of td) {   //ciclo for per poi andare ad aggiungere per ogni i (apice del ciclo) una stringa che in questo caso ?? 44
      console.log(i.textContent);
    }
  }

  consolTdText();
}

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

{
function eliminaLista() {
  let ul = document.getElementById('myList');
  ul.textContent = ""         //dopo aver richiamato l'elemento li restituiamo una stringa vuota, e andr?? perci?? a svuotare la lista data
}

document.getElementById("elimina-li");
}

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

{
function classTr() {      
  let tr = document.getElementsByTagName("tr");   //andiamo sempre a prenderci i nostri valori di per ogni tr
  for (let i of tr) {   //facciamo un ciclo for og??f
    i.classList.add('test');    //andiamo ad gggioungere grazie a classList.add il valore 'test' ad ogni tr
  }
}

classTr();

}

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito ?? un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */

