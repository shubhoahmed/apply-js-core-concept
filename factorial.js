//Factorial 9! = 9  * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1
//Difination of factorial :  A factorial is a function that multiplies a number by every number below it till 1.
//Example 1!=1, 2!=2*1

function factorial(number) {
    let mul = 1;
    for (let i = 1; i <= number; i++) {
        mul = mul * i;
    }
    return mul;
}
let inputNum = 9;
const multiplication = factorial(inputNum);
console.log(multiplication);