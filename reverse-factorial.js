function factorial(number) {
    let fact = 1;
    for (let i = number; i >= 1; i--) {
        fact = fact * i;
    }
    return fact;

}
let giveFact = 3;
const result = factorial(giveFact);
console.log('Factorial of', giveFact, 'is: ', result);