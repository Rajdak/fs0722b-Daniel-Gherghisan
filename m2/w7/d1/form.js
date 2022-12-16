const btn = document.querySelector('#add'); //salva i valori quando viene premuto il tasto add
btn.addEventListener('click', function(event) {
    event.preventDefault();     //scrivendo questo, quando non è puntato il bottone allora non succede nulla

const nome = document.querySelector('#nome').value   //prendiamo quello che c'è dentro a nome su html
const cognome = document.querySelector('#cognome').value
const dataNascita = document.querySelector('#data_nascita').value   //cosi fdacendo prendiamo i valori delle 3 variabili da html

//creiamo istanze degli oggetti
let p = new Persona(nome, cognome, dataNascita);
    console.log(p.mostraNomeCompleto());
    p.aggiungiAllaTabella();    //cosi scrivebndo diciamo che i valori che salva li aggiunge alla tabella
});

//definiamo gli oggetti
function Persona(x, y, z){
    this.nome= x;
    this.cognome = y;
    this.dataNascita = z;
    this.mostraNomeCompleto = function (){
        return this.nome + " " + this.cognome;
    };
    this.aggiungiAllaTabella = function (){     //la funzione sopra indicata, e li associamo una funzione
        const eta = this.caclolaEta(); //questa sarà la nuova funzione per calcolare l'età
        let tabella = document.querySelector('.table'); //si attacca alla tabella di html
        let tr = document.createElement('tr');  //creiamo elemento tr
        tr.innerHTML = `<td>${this.nome} ${this.cognome}</td><td>${eta}</td>`;
        tabella.appendChild(tr);    //sarà un nuovo metodo qullo per calcolare l'età, lo scriviamo
        //facciamo l'append
    }
    this.caclolaEta = function() {
        const dataCorrente = new Date(); // ci appoggiamo al costruttore Date
        const annoCorrente = dataCorrente.getFullYear();
        //calcoliamo quello che abbiamo messo noi
        const dataNascita = new Date(this.dataNascita);
        const annoNascita = dataNascita.getFullYear();
        const eta = annoCorrente - annoNascita;
        return eta;
    }
}