let x = 9
let counter = 0;

function incrementCounter() {
    counter++;
    return counter;
}

console.log(incrementCounter()); // Should print 1
console.log(incrementCounter()); // Should print 2
