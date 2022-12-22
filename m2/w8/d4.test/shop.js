var Vestiti = /** @class */ (function () {
    function Vestiti(_id, _codiceprodotto, _collezione, _capo, _modello, _quantità, _colore, _prezzoivainclusa, _prezzoivaesclusa, _disponibili, _saldo) {
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
    Vestiti.prototype.calcoloSaldo = function (prezzoivainclusa, saldo) {
        return parseFloat((prezzoivainclusa - ((prezzoivainclusa / 100) * saldo)).toFixed(2));
    };
    return Vestiti;
}());
var sorgenteDati = fetch('https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f')
    .then(function (response) { return response.json(); })
    .then(function (data) {
    var Lista = data;
    var vestiario = new Vestiti(data.id, data.codprod, data.collezione, data.capo, data.modello, data.quantita, data.colore, data.prezzoivaesclusa, data.prezzoivainclusa, data.disponibile, data.saldo);
    for (var i = 0; i < Lista.length; i++) {
        /* console.log(Lista[i].id, Lista[i].codprod, Lista[i].collezione, Lista[i].capo, Lista[i].modello, Lista[i].quantita, Lista[i].colore, Lista[i].prezzoivaesclusa, Lista[i].prezzoivainclusa, Lista[i].disponibile, Lista[i].saldo); */
        console.log("il seguente prodotto " + Lista[i].capo + " ha un costo di " + Lista[i].prezzoivainclusa + " € iva inclusa");
        console.log("al cui è applicato uno sconto del " + Lista[i].saldo + " %, " + "portando il prezzo del prodotto ha " + vestiario.calcoloSaldo(Lista[i].prezzoivainclusa, Lista[i].saldo) + " € iva inclusa");
    }
});
