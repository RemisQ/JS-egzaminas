/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
        this.sum = (a, b) => {
            return this.a + this.b;
        };
        this.subtraction = (a, b) => {
            return this.a - this.b;
        };
        this.multiplication = (a, b) => {
            return this.a * this.b;
        };
        this.division = (a, b) => {
            return this.a / this.b;
        };
    };
};

const test = new Calculator(10, 5);

console.log(test.sum());
console.log(test.subtraction());
console.log(test.multiplication());
console.log(test.division());