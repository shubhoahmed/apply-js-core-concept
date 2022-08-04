//Inches to feet calculation

function inchesToFeet(inches) {
    const feet = inches / 12;
    return feet;
}
const myInches = 81;
const myFeet = inchesToFeet(myInches);
console.log('Height of Shubho in Feet:', myFeet.toFixed(2));

const seizureInches = 83;
const seizureFeet = inchesToFeet(seizureInches);
console.log(seizureFeet.toFixed(2));

