var balanceint = 0;
var SonAccount = /** @class */ (function () {
    function SonAccount() {
    }
    SonAccount.prototype.oneDeposit = function (versamento) {
        return balanceint + versamento;
    };
    SonAccount.prototype.oneWithDraw = function (prelievo) {
        return balanceint - prelievo;
    };
    return SonAccount;
}());
var MotherAccount = /** @class */ (function () {
    function MotherAccount() {
    }
    MotherAccount.prototype.twoDeposit = function (versamento) {
        return balanceint + versamento;
    };
    MotherAccount.prototype.twoWithDraw = function (prelievo) {
        return balanceint - prelievo;
    };
    MotherAccount.prototype.addInterest = function (interessi) {
        return (balanceint / 100) * interessi;
    };
    return MotherAccount;
}());
var conto1 = new SonAccount();
console.log(conto1.oneDeposit(100));
console.log(conto1.oneWithDraw(50));
var conto2 = new MotherAccount();
