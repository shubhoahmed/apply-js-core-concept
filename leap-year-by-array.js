function findLeapYear(year) {
    let leapYear = [];
    for (let i = 0; i < year.length; i++) {
        let index = i;
        let element = year[index];
        let reminder = element % 4;
        if (reminder === 0) {
            leapYear.push(element);
        }
    }
    return leapYear;
}
let years = [2023, 2024, 2025, 2028, 2030];
const result = findLeapYear(years);
console.log(result);