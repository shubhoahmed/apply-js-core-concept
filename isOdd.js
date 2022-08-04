//Odd number checker by a function
function isOdd(number) {
    const reminder = number % 2;
    if (reminder === 1) {
        return true;
    }
    else {
        return false;
    }
}
let giveInput = 5847;
const numberIsOdd = isOdd(giveInput);
console.log(numberIsOdd);
