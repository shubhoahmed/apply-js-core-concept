//Leap year check program
function isLeapYear(year) {
    const reminder = year % 4;
    if (reminder === 0) {
        return true;
    }
    return false;
}
const giveYearInput = 2021;
const checkLeapYear = isLeapYear(giveYearInput);
