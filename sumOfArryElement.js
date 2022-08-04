function getSumOfAnArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const index = i;
        const element = array[index];
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;
}
const myNumbers = [12, 14, 54, 84, 16, 64, 85, 77, 99];
let summation = getSumOfAnArray(myNumbers);
console.log(summation);
