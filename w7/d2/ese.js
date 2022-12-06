class person {
    constructor (nome, cognome, eta){
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
    }  
     
}


class persona1 extends person {
    constructor(nome, cognome, eta) {
        super(nome,cognome,eta);
    }
    anni() {
        return `${this.nome} ha un età di ${this.eta}`;
    }
}
class persona2 extends person {
    constructor(nome, cognome, eta) {
        super(nome,cognome,eta);
    }
    anni() {
        return `${this.nome} ha un età di ${this.eta}`;
    }
}
class persona3 extends person {
    constructor(nome, cognome, eta) {
        super(nome,cognome,eta);
    }
    anni() {
        return `${this.nome} ha un età di ${this.eta}`;
    }
}

function display(content){
    console.log(content);
}

var p1 = new persona1("Mario", "Rossi", "30");
var p2 = new persona2("Luigi", "Verde", "25");
var p3 = new persona3("Peach", "Rosa", "24");
display(p1.anni());
display(p2.anni());
display(p3.anni());