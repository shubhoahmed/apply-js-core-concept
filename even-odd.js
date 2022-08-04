//Shortcut way to see reminder
function isEven(number) {
    const reminder = number % 2;
    // console.log(reminder);
    if (reminder == 0) {
        console.log('The Number is Even: ');
    }
    else {
        console.log('The number is odd: ');
    }
}
isEven(550);