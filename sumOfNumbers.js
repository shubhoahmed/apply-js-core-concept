// //Write a program to calculate 1 to 7.
// let sum = 0;
// for (let i = 0; i <= 7; i++) {
//     sum = sum + i;
//     console.log(i, sum);
// }

function addNumbers(number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum = sum + i;
    }
    return sum;
}

let inputNum = 10;
const addition = addNumbers(inputNum);
console.log('Total Sum: ', addition);