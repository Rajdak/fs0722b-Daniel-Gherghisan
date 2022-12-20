
var balanceint:number = 0;

class SonAccount{
    oneDeposit(versamento:number){
        return balanceint+versamento;
    }
    oneWithDraw(prelievo:number): number {
        return balanceint-prelievo
    }
}

class MotherAccount{
    twoDeposit(versamento:number): number {
        return balanceint+versamento;
    }
    twoWithDraw(prelievo:number): number {
        return balanceint-prelievo
    }
    addInterest(interessi:number): number{
        return (balanceint/100)*interessi
    }
}

const conto1 = new SonAccount();
console.log(conto1.oneDeposit(100));
console.log(conto1.oneWithDraw(50));

const conto2 = new MotherAccount();