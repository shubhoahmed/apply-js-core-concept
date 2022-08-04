//Leap year check program
// function isLeapYear(year) {
//     const reminder = year % 4;
//     if (reminder === 0) {
//         return true;
//     }
//     return false;
// }
// const giveYearInput = 2024;
// const checkLeapYear = isLeapYear(giveYearInput);
// console.log(checkLeapYear);

function isLeapYear(year) {
    const reminder = year % 4;
    if ((reminder === 0) && (reminder != year % 100)(reminder === year % 400)) {
        return true;
    }
    return false;
}
const giveYearInput = 2027;
const checkLeapYear = isLeapYear(giveYearInput);
console.log(checkLeapYear); 