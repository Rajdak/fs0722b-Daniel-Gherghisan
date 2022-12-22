
class Vestiti {
    id:number;
    codiceprodotto:number;
    collezione:string;
    capo:string;
    modello:string;
    quantità:number;
    colore:string;
    prezzoivainclusa:number;
    prezzoivaesclusa:number;
    disponibili:string;
    saldo:number;
    calcoloSaldo(prezzoivainclusa:number, saldo:number):number {
        return parseFloat((prezzoivainclusa -((prezzoivainclusa / 100) * saldo)).toFixed(2));
      }
        constructor(_id:number, _codiceprodotto:number, _collezione:string, _capo:string, _modello:string, _quantità:number, _colore:string, _prezzoivainclusa:number, _prezzoivaesclusa:number, _disponibili:string, _saldo:number ) {
            this.id = _id;
            this.codiceprodotto = _codiceprodotto;
            this.collezione = _collezione;
            this.capo = _capo;
            this.modello = _modello;
            this.quantità = _quantità;
            this.colore = _colore;
            this.prezzoivainclusa = _prezzoivainclusa;
            this.prezzoivaesclusa = _prezzoivaesclusa;
            this.disponibili = _disponibili;
            this.saldo = _saldo;
        }
}

var sorgenteDati = fetch('https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f')

.then((response) => response.json())
.then((data) => {
    var Lista = data;
    var vestiario = new Vestiti(data.id, data.codprod, data.collezione, data.capo, data.modello, data.quantita, data.colore, data.prezzoivaesclusa, data.prezzoivainclusa, data.disponibile, data.saldo );
    for (let i = 0; i < Lista.length; i++) {    
       /* console.log(Lista[i].id, Lista[i].codprod, Lista[i].collezione, Lista[i].capo, Lista[i].modello, Lista[i].quantita, Lista[i].colore, Lista[i].prezzoivaesclusa, Lista[i].prezzoivainclusa, Lista[i].disponibile, Lista[i].saldo); */
        console.log("il seguente prodotto "+ Lista[i].capo + " ha un costo di "+ Lista[i].prezzoivainclusa + " € iva inclusa");
        console.log("al cui è applicato uno sconto del " + Lista[i].saldo + " %, " + "portando il prezzo del prodotto ha " + vestiario.calcoloSaldo(Lista[i].prezzoivainclusa, Lista[i].saldo)+ " € iva inclusa");
    }    
});