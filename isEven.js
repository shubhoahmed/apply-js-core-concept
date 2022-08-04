//Shortcut way to see reminder
function isEven(number) {
    const reminder = number % 2;
    // console.log(reminder);
    if (reminder == 0) {
        //  console.log('The Number is Even: ');
        return true;
    }
    else {
        // console.log('The number is odd: ');
        return false;
    }
}
const evenNumberChecker = isEven(689);
console.log(evenNumberChecker);