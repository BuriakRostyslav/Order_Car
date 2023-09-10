// Конструктор Accumulator
function Accumulator(startingValue) {
    this.value = startingValue;

    this.increment = function() {
        this.value++;
    };

    this.decrement = function() {
        this.value--;
    };
}

// Конструктор CancelableAccumulator, який наслідує від Accumulator
function CancelableAccumulator(startingValue) {
    Accumulator.call(this, startingValue);

    this.clear = function() {
        this.value = startingValue;
    };
}

// Створення екземплярів конструкторів
const accumulator = new Accumulator(5);
const cancelableAccumulator = new CancelableAccumulator(10);

console.log(accumulator.value); // 5
accumulator.increment();
console.log(accumulator.value); // 6
accumulator.decrement();
console.log(accumulator.value); // 5

console.log(cancelableAccumulator.value); // 10
cancelableAccumulator.increment();
console.log(cancelableAccumulator.value); // 11
cancelableAccumulator.clear();
console.log(cancelableAccumulator.value); // 10
