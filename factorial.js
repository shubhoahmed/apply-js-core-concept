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