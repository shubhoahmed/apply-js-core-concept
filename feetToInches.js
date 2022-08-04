// Feet to Inches calculation

function feetToInches(feet) {
    const inches = feet * 12;
    return inches;
}

let myHeightInFeet = 5.6;
const myHeightInInches = feetToInches(myHeightInFeet);
console.log(myHeightInInches);

