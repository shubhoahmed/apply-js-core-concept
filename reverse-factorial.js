function factorial(number) {
    let fact = number;
    for (let i = giveFact; i >= 1; i--) {
        fact = fact * number;
    }
    return fact;
}
let giveFact = 3;
const result = factorial(giveFact);
console.log('Factorial of', giveFact, 'is: ', result);