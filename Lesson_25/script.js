
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
const user = {
    name: "John",
    age: 30,
    sayHello: function() {
        return `Привіт, я Ростислав , мені 20 років.`;
    }
};
const calculator = {
    num1: 0,
    num2: 0,
    ask: function() {
        this.num1 = parseFloat(prompt("Введіть перше число:"));
        this.num2 = parseFloat(prompt("Введіть друге число:"));
    },
    sum: function() {
        return this.num1 + this.num2;
    },
    mul: function() {
        return this.num1 * this.num2;
    }
};

console.log(isEmpty(user)); // false
console.log(user.sayHello());
calculator.ask();
console.log(calculator.sum()); 
console.log(calculator.mul()); 
